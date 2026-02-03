"use client";

import { motion } from "framer-motion";
import { Dog, Heart, SprayCan } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const badges = [
  { icon: Dog, label: "Pet Waste Removal" },
  { icon: Heart, label: "Pet Lovers" },
  { icon: SprayCan, label: "Deodorizing" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-sm">
            Serving the High Desert
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-heading text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
        >
          High Desert
          <br />
          <span className="text-purple-300">Pooper Scooper</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-purple-100 sm:text-xl"
        >
          We clean your yard, so you can focus on things that{" "}
          <span className="font-bold">REALLY</span> matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={SITE_CONFIG.quoteUrl} size="lg" variant="white">
            Get a Free Quote
          </Button>
          <Button href="/services" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-purple-500">
            Our Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-purple-300" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
