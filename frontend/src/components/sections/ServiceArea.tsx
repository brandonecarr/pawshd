"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="bg-sand-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-bark-900">
              Serving the High Desert
            </h2>
            <p className="mt-4 text-lg text-sand-600">
              We proudly serve communities across the High Desert region of
              Southern California.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-bark-900 shadow-sm"
                >
                  <MapPin className="h-3.5 w-3.5 text-purple-500" />
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button href={SITE_CONFIG.quoteUrl}>
                Check Availability in Your Area
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-2xl bg-purple-100 p-12"
          >
            <div className="text-center">
              <MapPin className="mx-auto h-16 w-16 text-purple-400" />
              <p className="mt-4 font-heading text-2xl font-bold text-purple-700">
                High Desert, CA
              </p>
              <p className="mt-2 text-purple-500">
                San Bernardino County
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
