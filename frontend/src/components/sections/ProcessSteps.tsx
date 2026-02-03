import { PROCESS_STEPS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-purple-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
            Simple process
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-purple-200/70 text-lg">
            Three simple steps to a cleaner yard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative z-10">
              <div className="w-24 h-24 bg-purple-900 border-2 border-purple-300 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-300">
                <span className="text-3xl font-extrabold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-purple-200/60 text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={SITE_CONFIG.quoteUrl}
            className="inline-flex items-center gap-3 bg-white text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-all hover:-translate-y-1 shadow-lg"
          >
            Start Planning
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
