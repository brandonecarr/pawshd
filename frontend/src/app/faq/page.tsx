import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQContent from "./FAQContent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about P.A.W.S. HD pet waste removal services. Pricing, scheduling, and service details.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
