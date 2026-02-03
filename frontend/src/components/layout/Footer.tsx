import Link from "next/link";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-sand-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-white">
              P.A.W.S. HD
            </span>
            <p className="mt-3 text-sm text-sand-400">
              Professional pet waste removal serving the High Desert. We clean
              your yard so you can focus on things that really matter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.clientPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand-400 transition-colors hover:text-white"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-sand-800 p-2 text-sand-300 transition-colors hover:bg-purple-500 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-sand-800 p-2 text-sand-300 transition-colors hover:bg-purple-500 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-800 pt-8 text-center text-sm text-sand-500">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
