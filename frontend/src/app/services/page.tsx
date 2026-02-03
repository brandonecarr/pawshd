import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesContent from "./ServicesContent";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pet waste removal, wind-debris cleanup, and deodorizing services in the High Desert. Flexible scheduling for Hesperia, Victorville, and Apple Valley.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
