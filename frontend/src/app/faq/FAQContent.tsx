"use client";

import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { FAQS } from "@/lib/constants";

export default function FAQContent() {
  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            Common questions
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white">
            FAQs
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-5">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
