import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Happy Customer",
    location: "Hesperia, CA",
    rating: 5,
    text: "Amazing service! My yard has never been cleaner. The team is reliable, thorough, and always on time. I highly recommend P.A.W.S. HD to anyone with pets!",
  },
  {
    name: "Satisfied Client",
    location: "Victorville, CA",
    rating: 5,
    text: "I was so tired of cleaning up after my three dogs. P.A.W.S. HD has been a lifesaver. They come twice a week and do a fantastic job every time.",
  },
  {
    name: "Loyal Customer",
    location: "Apple Valley, CA",
    rating: 5,
    text: "Professional, dependable, and affordable. The deodorizing service is a great add-on too. Our patio smells fresh again!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-heading text-3xl font-bold text-bark-900">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-sand-500">
          Over 150 five-star reviews from happy pet owners.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg border border-sand-200 bg-white p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sand-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-bark-900">{t.name}</p>
                <p className="text-xs text-sand-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
