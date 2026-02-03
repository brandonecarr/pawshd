import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogContent from "./BlogContent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, news, and insights about pet care and yard maintenance from the P.A.W.S. HD team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
