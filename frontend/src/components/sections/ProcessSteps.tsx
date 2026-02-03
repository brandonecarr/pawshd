import { ClipboardList, Calendar, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap = {
  "clipboard-list": ClipboardList,
  calendar: Calendar,
  sparkles: Sparkles,
} as const;

export default function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-bark-900">
            How It Works
          </h2>
          <p className="mt-2 text-sand-500">
            Three simple steps to a cleaner yard.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 text-purple-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-bark-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
