"use client";

import Image from "next/image";
import { Trash2, Wind, SprayCan, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";

const iconMap = {
  "trash-2": Trash2,
  wind: Wind,
  "spray-can": SprayCan,
} as const;

const serviceFeatures = [
  [
    "One, two, or three visits per week",
    "Complete yard coverage — no spot missed",
    "All waste bagged and removed",
    "Service rain or shine",
    "No contracts required",
  ],
  [
    "Free for qualifying regular clients",
    "Removal of wind-blown trash and debris",
    "Keeps your yard tidy between visits",
    "Part of our commitment to a clean yard",
  ],
  [
    "Safe, enzyme-based formula",
    "Perfect for patios and kennels",
    "Great for artificial turf",
    "Eliminates odors at the source",
    "Available as an add-on to any plan",
  ],
];

export default function ServicesContent() {
  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            What we do
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-24">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const features = serviceFeatures[idx];
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                <div
                  className={`relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl ${isReversed ? "md:order-2" : ""}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={isReversed ? "md:order-1" : ""}>
                  <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-accent mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-purple-900 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sand-500 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-sand-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={SITE_CONFIG.quoteUrl} variant="accent">
                      Get a Free Quote
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
