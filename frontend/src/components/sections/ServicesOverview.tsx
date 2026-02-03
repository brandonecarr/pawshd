import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-accent">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-purple-900 tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-sand-500 text-lg">
            Everything you need for a clean, fresh yard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-5 py-3 rounded-xl font-bold text-sm group-hover:bg-accent group-hover:text-purple-900 group-hover:border-accent transition-all w-full justify-center">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
