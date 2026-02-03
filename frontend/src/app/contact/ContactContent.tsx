"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
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

  const inputClasses =
    "mt-1 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-bark-900 placeholder:text-sand-400 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors";

  return (
    <>
      <section className="bg-purple-900 pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
            Get in touch
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-sand-500">
                Ready for a cleaner yard? Reach out through any of these
                channels or fill out the form.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-4 rounded-2xl bg-white border border-sand-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-900 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-purple-300" />
                  </div>
                  <span className="text-sm font-medium text-purple-900">
                    {SITE_CONFIG.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white border border-sand-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-900 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-purple-300" />
                  </div>
                  <span className="text-sm font-medium text-purple-900">
                    {SITE_CONFIG.email}
                  </span>
                </a>
                <a
                  href={`https://wa.me/1${SITE_CONFIG.phone.replace(/-/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white border border-sand-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-purple-900">
                    WhatsApp
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-white border border-sand-100 p-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-900 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-purple-300" />
                  </div>
                  <span className="text-sm text-sand-600">
                    {SERVICE_AREAS.slice(0, 4).join(", ")} & more
                  </span>
                </div>
              </div>

              <Link
                href={SITE_CONFIG.quoteUrl}
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-600 hover:shadow-lg transition-all shadow-[0_0_15px_rgba(103,61,230,0.3)]"
              >
                Quote via SweepAndGo
              </Link>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-3xl bg-white border border-sand-100 shadow-lg py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-purple-900">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-sand-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-3xl bg-white border border-sand-100 shadow-lg p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-purple-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-purple-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-purple-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClasses}
                      placeholder="(760) 555-0123"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="dogs"
                        className="block text-sm font-bold text-purple-900"
                      >
                        Number of Dogs
                      </label>
                      <select id="dogs" name="dogs" className={inputClasses}>
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
                        className="block text-sm font-bold text-purple-900"
                      >
                        Preferred Frequency
                      </label>
                      <select
                        id="frequency"
                        name="frequency"
                        className={inputClasses}
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
                      className="block text-sm font-bold text-purple-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputClasses}
                      placeholder="Tell us about your yard..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-accent text-white px-6 py-4 font-bold text-lg transition-all hover:bg-purple-600 hover:shadow-lg shadow-[0_0_20px_rgba(103,61,230,0.3)] disabled:opacity-50"
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
