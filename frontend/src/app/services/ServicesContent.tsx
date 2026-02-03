"use client";

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
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            What we do
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white">
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="space-y-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="grid items-start gap-10 md:grid-cols-2"
                >
                  <div>
                    <Icon className="h-6 w-6 text-purple-500" />
                    <h2 className="mt-4 font-heading text-2xl font-bold text-bark-900">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-sand-500">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Button href={SITE_CONFIG.quoteUrl}>
                        Get a Free Quote
                      </Button>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                        <span className="text-sm text-sand-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
