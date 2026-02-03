"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calendar, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap = {
  "clipboard-list": ClipboardList,
  calendar: Calendar,
  sparkles: Sparkles,
} as const;

export default function ProcessSteps() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-bark-900">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-sand-600">
            Getting started is easy. Three simple steps to a cleaner yard.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-sand-100">
                  {step.number}
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-bark-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sand-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
