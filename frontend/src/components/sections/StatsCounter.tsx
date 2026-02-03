"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserCheck, ShieldCheck, Star } from "lucide-react";
import { STATS, IMAGES } from "@/lib/constants";

function Counter({
  value,
  suffix,
  isRating,
}: {
  value: number;
  suffix: string;
  isRating?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = value / 40;
          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(
                isRating
                  ? Math.round(current * 10) / 10
                  : Math.floor(current)
              );
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isRating]);

  return (
    <span ref={ref}>
      {isRating ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 tracking-tight mb-4">
                Why Pet Owners Trust Us.{" "}
                <span className="text-sand-400">
                  Reliable. Thorough. Local.
                </span>
              </h2>
              <p className="text-lg text-sand-500 leading-relaxed">
                Serving the High Desert with professional pet waste removal.
                Over 150 five-star reviews from families who count on us every
                week.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-purple-300">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-purple-900">200+ Clients</h3>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-purple-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-purple-900">Fully Insured</h3>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-purple-300">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-purple-900">5-Star Rated</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl font-extrabold text-purple-900">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      isRating={
                        "isRating" in stat ? (stat.isRating as boolean) : false
                      }
                    />
                  </div>
                  <p className="text-xs text-sand-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={IMAGES.trust}
                alt="Happy dog in a clean yard"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-purple-900">
                    150+ Five-Star
                    <br />
                    Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
