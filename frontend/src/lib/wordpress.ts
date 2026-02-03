import type {
  WPPost,
  WPPage,
  WPTestimonial,
  WPService,
  WPFAQ,
  WPGalleryItem,
  WPCategory,
  WPPostsResponse,
} from "./types";

const API_URL =
  process.env.WORDPRESS_API_URL || "http://localhost:8080/wp-json/wp/v2";

async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string>,
  revalidate = 3600
): Promise<{ data: T; headers: Headers }> {
  const url = new URL(`${API_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.set(key, value)
    );
  }

  const res = await fetch(url.toString(), {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as T;
  return { data, headers: res.headers };
}

// --- Posts ---

export async function getPosts(
  params: { page?: number; perPage?: number; category?: number } = {}
): Promise<WPPostsResponse> {
  const queryParams: Record<string, string> = {
    _embed: "true",
    per_page: String(params.perPage || 12),
    page: String(params.page || 1),
  };
  if (params.category) {
    queryParams.categories = String(params.category);
  }

  const { data, headers } = await fetchAPI<WPPost[]>("/posts", queryParams);
  return {
    posts: data,
    totalPages: Number(headers.get("X-WP-TotalPages") || 1),
    total: Number(headers.get("X-WP-Total") || 0),
  };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const { data } = await fetchAPI<WPPost[]>("/posts", {
    slug,
    _embed: "true",
  });
  return data[0] || null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data, headers } = await fetchAPI<WPPost[]>("/posts", {
      per_page: "100",
      page: String(page),
      _fields: "slug",
    });
    slugs.push(...data.map((p) => p.slug));
    hasMore = page < Number(headers.get("X-WP-TotalPages") || 1);
    page++;
  }

  return slugs;
}

// --- Pages ---

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const { data } = await fetchAPI<WPPage[]>("/pages", {
    slug,
    _embed: "true",
  });
  return data[0] || null;
}

// --- Custom Post Types ---

export async function getTestimonials(): Promise<WPTestimonial[]> {
  const { data } = await fetchAPI<WPTestimonial[]>("/testimonials", {
    _embed: "true",
    per_page: "100",
  });
  return data;
}

export async function getServices(): Promise<WPService[]> {
  const { data } = await fetchAPI<WPService[]>("/services", {
    _embed: "true",
    per_page: "100",
  });
  return data;
}

export async function getFAQs(): Promise<WPFAQ[]> {
  const { data } = await fetchAPI<WPFAQ[]>("/faqs", {
    _embed: "true",
    per_page: "100",
  });
  return data;
}

export async function getGalleryItems(): Promise<WPGalleryItem[]> {
  const { data } = await fetchAPI<WPGalleryItem[]>("/gallery", {
    _embed: "true",
    per_page: "100",
  });
  return data;
}

// --- Categories ---

export async function getCategories(): Promise<WPCategory[]> {
  const { data } = await fetchAPI<WPCategory[]>("/categories");
  return data;
}

// --- Media ---

export async function getMediaById(
  id: number
): Promise<{ source_url: string; alt_text: string }> {
  const { data } = await fetchAPI<{ source_url: string; alt_text: string }>(
    `/media/${id}`
  );
  return data;
}
