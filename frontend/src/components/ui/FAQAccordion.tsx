import { ChevronDown } from "lucide-react";

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export default function FAQAccordion({
  items,
}: {
  items: readonly FAQItem[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-3xl bg-white border border-sand-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-sand-50 transition-colors">
            <h4 className="pr-4 font-bold text-purple-900 text-lg">
              {item.question}
            </h4>
            <span className="text-accent transition-transform duration-200 group-open:rotate-180">
              <ChevronDown className="h-6 w-6" />
            </span>
          </summary>
          <div className="px-6 pb-6 text-sand-500 leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
