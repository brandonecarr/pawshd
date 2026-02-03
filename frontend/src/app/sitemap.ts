import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pawshd.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  // Fetch blog post slugs from WordPress
  let blogPosts: MetadataRoute.Sitemap = [];
  try {
    const apiUrl =
      process.env.WORDPRESS_API_URL || "http://localhost:8080/wp-json/wp/v2";
    const res = await fetch(`${apiUrl}/posts?per_page=100&_fields=slug,modified`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const posts: Array<{ slug: string; modified: string }> = await res.json();
      blogPosts = posts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modified),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }
  } catch {
    // WordPress not available — skip blog posts in sitemap
  }

  return [...staticPages, ...blogPosts];
}
