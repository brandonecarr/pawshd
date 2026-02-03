"use client";

import { motion } from "framer-motion";
import { Trash2, Wind, SprayCan } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

const iconMap = {
  "trash-2": Trash2,
  wind: Wind,
  "spray-can": SprayCan,
} as const;

export default function ServicesOverview() {
  return (
    <section className="bg-sand-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-bark-900">
            Our Services
          </h2>
          <p className="mt-3 text-lg text-sand-600">
            Comprehensive yard cleanup so you and your pets can enjoy the
            outdoors.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 transition-colors group-hover:bg-purple-600">
                  <Icon className="h-7 w-7 text-purple-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-bark-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sand-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
