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
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative h-[360px] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block"
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-purple-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <time className="text-xs text-white/60">{date}</time>
        <h3 className="mt-2 text-lg font-bold text-white tracking-tight group-hover:text-accent transition-colors">
          {post.title.rendered}
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm text-white/70 line-clamp-2">{excerpt}...</p>
        )}
      </div>
    </Link>
  );
}
