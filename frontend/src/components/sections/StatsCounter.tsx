"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix, isRating }: { value: number; suffix: string; isRating?: boolean }) {
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
              setCount(isRating ? Math.round(current * 10) / 10 : Math.floor(current));
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
    <section className="border-b border-sand-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-purple-900 sm:text-4xl">
                {"isRating" in stat && stat.isRating ? (
                  <span className="inline-flex items-center gap-1">
                    <Counter value={stat.value} suffix={stat.suffix} isRating />
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  </span>
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-1 text-sm text-sand-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
