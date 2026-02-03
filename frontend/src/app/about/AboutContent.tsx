"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Shield, Tag } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every yard and every pet is different. We tailor our service to meet your specific needs.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "We don't cut corners. Every visit includes a thorough, complete cleanup of your entire yard.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Rain or shine, we show up. You can count on us to be there on your scheduled day, every time.",
  },
  {
    icon: Tag,
    title: "Exclusive Deals",
    description:
      "Regular clients enjoy exclusive pricing, free wind-debris cleanup, and seasonal promotions.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl font-bold text-white"
          >
            About P.A.W.S. HD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-purple-200"
          >
            Poop And Waste Solutions for the High Desert
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-bark-900">
              Our Story
            </h2>
            <div className="mt-8 space-y-4 text-lg text-sand-600">
              <p>
                P.A.W.S. HD — Poop And Waste Solutions, High Desert — was born
                from a simple idea: pet owners in the High Desert deserve a
                reliable, professional yard cleaning service so they can spend
                more time enjoying their outdoor spaces with their furry family
                members.
              </p>
              <p>
                We understand the unique challenges of living in the High Desert
                — from the wind-blown debris to the heat that can make yard
                cleanup unpleasant. That&apos;s why we do the dirty work for
                you, thoroughly and consistently.
              </p>
              <p>
                With over 85 happy customers and more than 150 five-star reviews,
                we&apos;re proud to be the trusted choice for pet waste removal
                in Hesperia, Victorville, Apple Valley, and the surrounding
                communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-heading text-3xl font-bold text-bark-900"
          >
            What Sets Us Apart
          </motion.h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white p-8 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <Icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-bark-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-sand-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
