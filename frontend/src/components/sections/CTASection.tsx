"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl font-bold text-white">
            Ready for a Cleaner Yard?
          </h2>
          <p className="mt-4 text-lg text-purple-100">
            Get a free, no-obligation quote today. No contracts, no hassle —
            just a clean yard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={SITE_CONFIG.quoteUrl} variant="white" size="lg">
              Get Your Free Quote
            </Button>
            <Button
              href={`tel:${SITE_CONFIG.phone}`}
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-900"
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
