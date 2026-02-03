"use client";

import Image from "next/image";
import { Heart, Eye, Shield, Tag } from "lucide-react";
import { IMAGES } from "@/lib/constants";
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
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Our story
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About P.A.W.S. HD
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 leading-relaxed text-sand-600">
              <h2 className="text-3xl font-extrabold text-purple-900 tracking-tight mb-2">
                Built for the High Desert.{" "}
                <span className="text-sand-400">Powered by care.</span>
              </h2>
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
                With over 85 happy customers and more than 150 five-star
                reviews, we&apos;re proud to be the trusted choice for pet waste
                removal in Hesperia, Victorville, Apple Valley, and the
                surrounding communities.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={IMAGES.about}
                  alt="About PAWS HD"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Our values
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-purple-900 tracking-tight">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-6 shadow-sm border border-sand-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-purple-900">
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
