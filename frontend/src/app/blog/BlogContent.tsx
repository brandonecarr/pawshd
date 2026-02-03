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
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            News & tips
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white">
            Blog
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          {loading && (
            <div className="flex justify-center py-16">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-sand-200 border-t-purple-500" />
            </div>
          )}

          {error && (
            <p className="text-center text-sand-500">
              Blog posts will appear here once WordPress is connected.
            </p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-center text-sand-500">
              No blog posts yet. Check back soon.
            </p>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
