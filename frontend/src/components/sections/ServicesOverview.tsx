import { Trash2, Wind, SprayCan, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const iconMap = {
  "trash-2": Trash2,
  wind: Wind,
  "spray-can": SprayCan,
} as const;

export default function ServicesOverview() {
  return (
    <section className="border-t border-sand-100 bg-sand-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-heading text-3xl font-bold text-bark-900">
          Our Services
        </h2>
        <p className="mt-2 text-sand-500">
          Everything you need for a clean, fresh yard.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group rounded-lg border border-sand-200 bg-white p-6 transition-colors hover:border-purple-200"
              >
                <Icon className="h-6 w-6 text-purple-500" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-bark-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-500 hover:text-purple-600"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
