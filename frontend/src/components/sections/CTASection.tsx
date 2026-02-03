import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-purple-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(103,61,230,0.15)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
          Ready to start?
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready for a Cleaner Yard?
        </h2>
        <p className="mt-4 text-lg text-purple-200/70 max-w-lg mx-auto">
          Get a free, no-obligation quote today. No contracts, no hassle.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={SITE_CONFIG.quoteUrl}
            className="inline-flex items-center gap-3 bg-white text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-all hover:-translate-y-1 shadow-lg"
          >
            Get Your Free Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center gap-2 border-2 border-purple-300 text-purple-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-300 hover:text-purple-900 transition-all"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
