"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";
import Link from "next/link";

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
      if (res.ok) setSubmitted(true);
    } catch {
      // fallback to phone/email
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-medium uppercase tracking-widest text-purple-300">
            Get in touch
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="leading-relaxed text-sand-500">
                Ready for a cleaner yard? Reach out through any of these
                channels or fill out the form.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm text-sand-600 hover:text-purple-500"
                >
                  <Phone className="h-4 w-4 text-purple-400" />
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-sand-600 hover:text-purple-500"
                >
                  <Mail className="h-4 w-4 text-purple-400" />
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={`https://wa.me/1${SITE_CONFIG.phone.replace(/-/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-sand-600 hover:text-purple-500"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  WhatsApp
                </a>
                <div className="flex items-center gap-3 text-sm text-sand-600">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  {SERVICE_AREAS.slice(0, 4).join(", ")} & more
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={SITE_CONFIG.quoteUrl}
                  className="inline-block rounded-full bg-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
                >
                  Quote via SweepAndGo
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-sand-200 py-16 text-center">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-bark-900">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-sand-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 rounded-lg border border-sand-200 p-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sand-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sand-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sand-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
                      placeholder="(760) 555-0123"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dogs" className="block text-sm font-medium text-sand-700">
                        Number of Dogs
                      </label>
                      <select
                        id="dogs"
                        name="dogs"
                        className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="frequency" className="block text-sm font-medium text-sand-700">
                        Preferred Frequency
                      </label>
                      <select
                        id="frequency"
                        name="frequency"
                        className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
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
                    <label htmlFor="message" className="block text-sm font-medium text-sand-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm text-bark-900 placeholder:text-sand-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 focus:outline-none"
                      placeholder="Tell us about your yard..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-600 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
