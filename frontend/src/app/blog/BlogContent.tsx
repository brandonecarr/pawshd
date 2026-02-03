"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import type { WPPost } from "@/lib/types";

export default function BlogContent() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiUrl =
      process.env.NEXT_PUBLIC_WORDPRESS_URL || "http://localhost:8080";

    fetch(`${apiUrl}/wp-json/wp/v2/posts?_embed&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
            News & tips
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Blog
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-6xl px-6">
          {loading && (
            <div className="flex justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-3 border-sand-200 border-t-accent" />
            </div>
          )}

          {error && (
            <div className="text-center rounded-3xl bg-white border border-sand-100 p-12">
              <p className="text-sand-500">
                Blog posts will appear here once WordPress is connected.
              </p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center rounded-3xl bg-white border border-sand-100 p-12">
              <p className="text-sand-500">
                No blog posts yet. Check back soon.
              </p>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
