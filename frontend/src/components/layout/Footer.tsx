import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-sand-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <span className="font-heading text-lg font-bold text-purple-900 tracking-tight">
            P.A.W.S. HD
          </span>

          <div className="flex gap-8">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-sand-400 hover:text-purple-900 hover:scale-110 transition-all"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-sand-400 hover:text-purple-900 hover:scale-110 transition-all"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-sand-500 font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-purple-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.clientPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 transition-colors"
            >
              Client Portal
            </a>
          </div>

          <div className="text-xs text-sand-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
