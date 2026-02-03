export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
  };
  acf?: Record<string, unknown>;
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf?: Record<string, unknown>;
}

export interface WPTestimonial {
  id: number;
  title: { rendered: string };
  acf: {
    location: string;
    rating: number;
    review_text: string;
    pet_names?: string;
  };
}

export interface WPService {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    short_description: string;
    icon: string;
    order: number;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WPFAQ {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    order: number;
  };
}

export interface WPGalleryItem {
  id: number;
  title: { rendered: string };
  acf: {
    before_image: string;
    after_image: string;
    description: string;
    order: number;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPPostsResponse {
  posts: WPPost[];
  totalPages: number;
  total: number;
}
