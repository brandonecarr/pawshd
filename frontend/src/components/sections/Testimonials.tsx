"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl font-bold text-bark-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-sand-600">
            Don&apos;t just take our word for it — hear from our happy clients.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-purple-100" />
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sand-700">{testimonial.text}</p>
              <div className="mt-6 border-t border-sand-100 pt-4">
                <p className="font-semibold text-bark-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-sand-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
