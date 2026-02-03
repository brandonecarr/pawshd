import Link from "next/link";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-sand-900 text-sand-400">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <span className="font-heading text-lg font-bold text-white">
              P.A.W.S. <span className="text-purple-400">HD</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Professional pet waste removal serving the High Desert.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
              Navigation
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
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
                  className="text-sm transition-colors hover:text-white"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sand-500">
              Contact
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-sand-500 transition-colors hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sand-500 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-800 pt-6 text-center text-xs text-sand-600">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
