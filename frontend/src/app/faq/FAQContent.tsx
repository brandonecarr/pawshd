import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { FAQS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function FAQContent() {
  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Common questions
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-3xl px-6">
          <FAQAccordion items={FAQS} />

          <div className="mt-16 text-center rounded-3xl bg-white border border-sand-100 p-8">
            <h3 className="text-xl font-extrabold text-purple-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sand-500">
              We&apos;re happy to help. Reach out anytime.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-md text-purple-900 border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-accent transition-all shadow-[0_0_15px_rgba(0,227,107,0.3)]"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-purple-900/50 text-purple-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-900/10 transition-all"
              >
                Call {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
