"use client";

import { motion } from "framer-motion";
import { Trash2, Wind, SprayCan, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: Trash2,
    title: "Pet Waste Removal",
    description:
      "Our core service. We thoroughly clean your entire yard of all pet waste on a regular schedule that works for you.",
    features: [
      "One, two, or three visits per week",
      "Complete yard coverage — no spot missed",
      "All waste bagged and removed",
      "Service rain or shine",
      "No contracts required",
    ],
  },
  {
    icon: Wind,
    title: "Wind-Debris Clean Up",
    description:
      "The High Desert winds can scatter debris across your yard. We clean up wind-blown trash and debris as part of our visit.",
    features: [
      "Free for qualifying regular clients",
      "Removal of wind-blown trash and debris",
      "Keeps your yard tidy between visits",
      "Part of our commitment to a clean yard",
    ],
  },
  {
    icon: SprayCan,
    title: "Deodorizing",
    description:
      "Enzyme-based deodorizing treatment that neutralizes pet odors in smaller areas like patios, kennels, and artificial turf.",
    features: [
      "Safe, enzyme-based formula",
      "Perfect for patios and kennels",
      "Great for artificial turf",
      "Eliminates odors at the source",
      "Available as an add-on to any plan",
    ],
  },
];

export default function ServicesContent() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-purple-200"
          >
            Everything you need for a clean, fresh yard — all in one place.
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isReversed = i % 2 === 1;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center gap-12 md:flex-row ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h2 className="mt-6 font-heading text-3xl font-bold text-bark-900">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-sand-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-500" />
                          <span className="text-sand-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href={SITE_CONFIG.quoteUrl}>
                        Get a Free Quote
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-2xl bg-purple-50 p-16">
                    <Icon className="h-32 w-32 text-purple-200" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
