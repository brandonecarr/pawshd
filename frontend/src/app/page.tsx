import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import ServiceArea from "@/components/sections/ServiceArea";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <ProcessSteps />
        <ServicesOverview />
        <Testimonials />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
