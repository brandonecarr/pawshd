import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutContent from "./AboutContent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about P.A.W.S. HD — the High Desert's trusted pet waste removal service. Personalized care, attention to detail, and reliability.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
