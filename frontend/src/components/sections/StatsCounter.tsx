"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { STATS } from "@/lib/constants";

function AnimatedCounter({
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
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isRating ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, isRating]);

  return (
    <span ref={ref}>
      {isRating ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-purple-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl font-bold text-white sm:text-5xl">
                {"isRating" in stat && stat.isRating ? (
                  <div className="flex items-center justify-center gap-1">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isRating
                    />
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  </div>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="mt-2 text-sm text-purple-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
