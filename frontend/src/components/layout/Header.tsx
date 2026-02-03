"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-purple-900/90 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight">
          <span className={isScrolled ? "text-purple-900" : "text-white"}>
            P.A.W.S.
          </span>{" "}
          <span className={isScrolled ? "text-purple-500" : "text-purple-300"}>
            HD
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-sand-600 hover:text-purple-500"
                  : "text-purple-100 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium",
              isScrolled ? "text-sand-700" : "text-purple-200"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE_CONFIG.phone}
          </a>
          <Link
            href={SITE_CONFIG.quoteUrl}
            className="rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
          >
            Free Quote
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn("p-2 md:hidden", isScrolled ? "text-sand-900" : "text-white")}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="border-t border-sand-100 bg-white px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-sand-700 hover:bg-sand-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-sand-100 pt-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-3 text-sm text-sand-600"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href={SITE_CONFIG.quoteUrl}
              className="rounded-full bg-purple-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
