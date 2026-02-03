"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl font-bold text-white"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-purple-200"
          >
            Tips, news, and stories from the P.A.W.S. HD team.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-sand-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
            </div>
          )}

          {error && (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <p className="text-lg text-sand-600">
                Blog posts will appear here once WordPress is connected. Start
                adding posts in your WordPress admin!
              </p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <p className="text-lg text-sand-600">
                No blog posts yet. Check back soon!
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
