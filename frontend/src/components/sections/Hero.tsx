"use client";

import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-purple-900 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            Serving the High Desert
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We clean your yard, so you can focus on what{" "}
            <span className="text-purple-300">really matters.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-purple-200/80">
            Professional pet waste removal for Hesperia, Victorville, Apple
            Valley, and the surrounding High Desert communities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={SITE_CONFIG.quoteUrl} size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="text-purple-200 hover:bg-purple-800 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
