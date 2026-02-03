import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-purple-900 tracking-tight">
            Service Areas
          </h2>
          <p className="mt-3 text-sand-500 text-lg">
            We proudly serve communities across the High Desert.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 shadow-sm border border-sand-100 text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-900 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-bold text-purple-900">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
