import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
    };
  } catch {
    return { title: "Blog Post" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    const { slug } = await params;
    post = await getPostBySlug(slug);
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const author = post._embedded?.author?.[0]?.name || "P.A.W.S. HD";

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-purple-900 to-purple-700 pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-purple-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <h1
              className="font-heading text-4xl font-bold text-white"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="mt-4 flex items-center justify-center gap-3 text-purple-200">
              <span>{author}</span>
              <span className="text-purple-400">&bull;</span>
              <time>{date}</time>
            </div>
          </div>
        </section>

        <article className="bg-cream py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {featuredImage && (
              <div className="relative -mt-24 mb-12 aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || post.title.rendered}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div
              className="prose prose-lg mx-auto max-w-none prose-headings:font-heading prose-headings:text-bark-900 prose-p:text-sand-700 prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
