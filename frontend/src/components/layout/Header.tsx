"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-sand-200/50"
          : "bg-bg/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-20">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "font-heading text-lg font-bold tracking-tight transition-colors",
              "text-purple-900"
            )}
          >
            P.A.W.S. HD
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                "text-sand-600 hover:text-purple-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={SITE_CONFIG.quoteUrl}
          className="hidden sm:flex bg-accent text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-purple-600 transition-all items-center gap-2 shadow-[0_0_15px_rgba(103,61,230,0.3)]"
        >
          Book Now
        </Link>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "p-2 md:hidden transition-colors",
            "text-purple-900"
          )}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="bg-white border-t border-sand-100 px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-sand-700 hover:bg-sand-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-sand-100 pt-4">
            <Link
              href={SITE_CONFIG.quoteUrl}
              onClick={() => setIsMobileOpen(false)}
              className="block rounded-full bg-accent text-white px-6 py-3 text-center text-sm font-bold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
