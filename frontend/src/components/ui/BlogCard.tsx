import Link from "next/link";
import Image from "next/image";
import type { WPPost } from "@/lib/types";

function getFeaturedImage(post: WPPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return media
    ? { src: media.source_url, alt: media.alt_text || post.title.rendered }
    : null;
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function BlogCard({ post }: { post: WPPost }) {
  const image = getFeaturedImage(post);
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <time className="text-sm text-sand-500">{date}</time>
        <h3 className="mt-2 font-heading text-lg font-semibold text-bark-900 transition-colors group-hover:text-purple-500">
          {post.title.rendered}
        </h3>
        {excerpt && <p className="mt-2 text-sm text-sand-600">{excerpt}...</p>}
      </div>
    </Link>
  );
}
