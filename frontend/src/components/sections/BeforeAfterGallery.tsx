"use client";

import Image from "next/image";
import { BEFORE_AFTER_GALLERY } from "@/lib/constants";

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Real results
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-purple-900 tracking-tight">
            Before &amp; After
          </h2>
          <p className="mt-3 text-sand-500 text-lg">
            See the difference we make — real yards, real transformations.
          </p>
        </div>

        <div className="space-y-8">
          {BEFORE_AFTER_GALLERY.map((item, i) => (
            <div key={i} className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-sand-400 text-center">
                {item.label}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-lg">
                  <Image
                    src={item.before}
                    alt={`${item.label} - Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Before
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-lg">
                  <Image
                    src={item.after}
                    alt={`${item.label} - After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-purple-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
