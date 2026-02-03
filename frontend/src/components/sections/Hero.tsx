"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, IMAGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 px-4 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-[2.5rem] overflow-hidden h-[600px] md:h-[700px] group w-full shadow-2xl shadow-black/5">
          <Image
            src={IMAGES.hero}
            alt="Happy dogs in a clean yard"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-center md:text-left">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                <ShieldCheck className="h-3.5 w-3.5 text-purple-300" />
                Trusted Local Pet Care
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                A Cleaner Yard.
                <br />
                A Happier Home.
              </h1>

              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                Professional pet waste removal for the High Desert. Skip the
                mess — we handle it all.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                <Button href={SITE_CONFIG.quoteUrl} variant="accent" size="lg">
                  Get a Free Quote
                </Button>
                <Button
                  href={`tel:${SITE_CONFIG.phone}`}
                  variant="white"
                  size="lg"
                >
                  Call {SITE_CONFIG.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
