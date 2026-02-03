"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 280 + 16; // card width + gap
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Real reviews
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-purple-900 tracking-tight">
            What Our Customers Say
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-sand-200 flex items-center justify-center text-purple-900 hover:bg-sand-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-sand-200 flex items-center justify-center text-purple-900 hover:bg-sand-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 pb-8 snap-x snap-mandatory"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[280px] h-[480px] rounded-[2rem] overflow-hidden relative group"
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
