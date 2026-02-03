import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-purple-900 py-16">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-heading text-3xl font-bold text-white">
          Ready for a Cleaner Yard?
        </h2>
        <p className="mt-3 text-purple-200/80">
          Get a free, no-obligation quote today. No contracts, no hassle.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={SITE_CONFIG.quoteUrl}
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-purple-900 transition-colors hover:bg-sand-100"
          >
            Get Your Free Quote
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="rounded-full border border-purple-400/30 px-7 py-3 text-sm font-semibold text-purple-200 transition-colors hover:bg-purple-800"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
