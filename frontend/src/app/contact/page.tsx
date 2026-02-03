import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactContent from "./ContactContent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote for pet waste removal in the High Desert. Contact P.A.W.S. HD by phone, email, or request a quote online.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
