"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 mb-10">
        <p className="text-xs font-bold uppercase tracking-wider text-accent">
          Real reviews
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-purple-900 tracking-tight">
          What Our Customers Say
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-8 mx-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:max-w-6xl">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[280px] lg:w-auto h-[480px] rounded-[2rem] overflow-hidden relative group"
          >
            <Image
              src={t.image}
              alt={`Review from ${t.name}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm font-medium leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-white/60">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
