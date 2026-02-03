"use client";

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
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            Our story
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white">
            About P.A.W.S. HD
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-5">
          <div className="space-y-5 leading-relaxed text-sand-600">
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
        </div>
      </section>

      <section className="border-t border-sand-100 bg-sand-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-heading text-2xl font-bold text-bark-900">
            What Sets Us Apart
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title}>
                  <Icon className="h-5 w-5 text-purple-500" />
                  <h3 className="mt-3 font-heading text-base font-semibold text-bark-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-500">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
