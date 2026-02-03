import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";
import Link from "next/link";

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2.5rem] bg-purple-900 p-10 md:p-14 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Coverage
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Serving the High Desert
              </h2>
              <p className="mt-4 text-purple-200/70 text-lg leading-relaxed">
                We proudly serve communities across the High Desert region.
                Don&apos;t see your area? Give us a call — we may still be able
                to help.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-accent/80 backdrop-blur-md text-purple-900 border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-accent transition-all shadow-[0_0_15px_rgba(0,227,107,0.3)]"
              >
                Check Your Area
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 hover:bg-white/20 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm font-semibold text-white">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
