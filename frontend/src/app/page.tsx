import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ServicesOverview from "@/components/sections/ServicesOverview";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <ServicesOverview />
        <BeforeAfterGallery />
        <ProcessSteps />
        <Testimonials />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
