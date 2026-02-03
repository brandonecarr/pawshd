import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="border-t border-sand-100 bg-sand-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-heading text-3xl font-bold text-bark-900">
          Service Areas
        </h2>
        <p className="mt-2 text-sand-500">
          We proudly serve communities across the High Desert.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {SERVICE_AREAS.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm text-sand-700"
            >
              <MapPin className="h-3 w-3 text-purple-400" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
