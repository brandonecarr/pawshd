"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Wind,
  SprayCan,
  CheckCircle2,
  ShieldCheck,
  Search,
  Calendar,
  Monitor,
  Star,
  FileX,
  ChevronRight,
} from "lucide-react";
import {
  SITE_CONFIG,
  SERVICES,
  SERVICE_FEATURES,
  IMAGES,
} from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";

const serviceIconMap = {
  "trash-2": Trash2,
  wind: Wind,
  "spray-can": SprayCan,
} as const;

const featureIconMap = {
  "shield-check": ShieldCheck,
  search: Search,
  calendar: Calendar,
  monitor: Monitor,
  star: Star,
  "file-x": FileX,
} as const;

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-purple-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={IMAGES.servicesBanner}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            What we do
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Pet Waste Removal
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Specializing in reliable pet waste removal for a cleaner, healthier
            yard for you, your family, and your pets.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SITE_CONFIG.quoteUrl}
              className="inline-flex items-center gap-3 bg-accent/80 backdrop-blur-md text-purple-900 border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all hover:-translate-y-1 shadow-[0_0_25px_rgba(0,227,107,0.3)]"
            >
              Free Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_FEATURES.map((feature) => {
              const Icon = featureIconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl bg-white border border-sand-100 p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-900 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-extrabold text-purple-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-sand-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Additional services
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-purple-900 tracking-tight">
              More Than Just Scooping
            </h2>
          </div>

          <div className="space-y-24">
            {SERVICES.filter((s) => s.id !== "waste-removal").map(
              (service, idx) => {
                const Icon = serviceIconMap[service.icon];
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
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                            <span className="text-sm text-sand-600">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          href={SITE_CONFIG.quoteUrl}
                          className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-md text-purple-900 border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-accent transition-all shadow-[0_0_15px_rgba(0,227,107,0.3)]"
                        >
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Gallery Promo */}
      <section className="py-16 bg-bg">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sand-500 leading-relaxed">
            Here are just a few photos of the work we&apos;ve done so far. We
            pride ourselves on being very thorough and tidy when it comes to our
            service.
          </p>
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-purple-900/50 text-purple-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-900/10 transition-all"
          >
            See ALL our work on Instagram
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
