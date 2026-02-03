"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Silently fail — user can use phone/email as backup
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-purple-200"
          >
            Get your free quote or reach out with any questions.
          </motion.p>
        </div>
      </section>

      <section className="bg-sand-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-bark-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-sand-600">
                Ready for a cleaner yard? We&apos;d love to hear from you. Reach
                out through any of these channels or fill out the form.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Phone className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-sand-500">Phone</p>
                    <p className="font-semibold text-bark-900">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-sand-500">Email</p>
                    <p className="font-semibold text-bark-900">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/1${SITE_CONFIG.phone.replace(/-/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-sand-500">WhatsApp</p>
                    <p className="font-semibold text-bark-900">
                      Chat with us
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <MapPin className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-sand-500">Service Area</p>
                    <p className="font-semibold text-bark-900">
                      {SERVICE_AREAS.slice(0, 4).join(", ")} & more
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button href={SITE_CONFIG.quoteUrl} size="lg">
                  Get a Quote on SweepAndGo
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h3 className="mt-6 font-heading text-2xl font-bold text-bark-900">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-sand-600">
                    Thanks for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white p-8 shadow-sm"
                >
                  <h3 className="font-heading text-2xl font-bold text-bark-900">
                    Send Us a Message
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-sand-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-sand-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-sand-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                        placeholder="(760) 555-0123"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="dogs"
                          className="block text-sm font-medium text-sand-700"
                        >
                          Number of Dogs
                        </label>
                        <select
                          id="dogs"
                          name="dogs"
                          className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4+">4+</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="frequency"
                          className="block text-sm font-medium text-sand-700"
                        >
                          Preferred Frequency
                        </label>
                        <select
                          id="frequency"
                          name="frequency"
                          className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="1x">Once a week</option>
                          <option value="2x">Twice a week</option>
                          <option value="3x">Three times a week</option>
                          <option value="one-time">One-time cleanup</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-sand-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 w-full rounded-lg border border-sand-200 px-4 py-3 text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none"
                        placeholder="Tell us about your yard..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={submitting}
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
