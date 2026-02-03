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
      className="group rounded-lg border border-sand-200 bg-white transition-colors hover:border-purple-200"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <time className="text-xs text-sand-400">{date}</time>
        <h3 className="mt-1.5 text-sm font-semibold text-bark-900 group-hover:text-purple-500">
          {post.title.rendered}
        </h3>
        {excerpt && (
          <p className="mt-2 text-xs leading-relaxed text-sand-500">
            {excerpt}...
          </p>
        )}
      </div>
    </Link>
  );
}
