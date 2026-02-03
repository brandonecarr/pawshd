"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { FAQS } from "@/lib/constants";

export default function FAQContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl font-bold text-white"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-purple-200"
          >
            Got questions? We&apos;ve got answers.
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-sand-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={FAQS} />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
