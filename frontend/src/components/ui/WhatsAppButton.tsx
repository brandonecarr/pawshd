"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showBadge, setShowBadge] = useState(false);
  const phone = SITE_CONFIG.phone.replace(/-/g, "");
  const message = encodeURIComponent(
    "Hi! I'm interested in your pet waste removal services."
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showBadge && (
        <div className="hidden sm:block bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold text-purple-900 animate-[fadeInRight_0.5s_ease_forwards]">
          Need a Quote?
        </div>
      )}
      <a
        href={`https://wa.me/1${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] border-4 border-white hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="h-8 w-8 fill-current" />
      </a>
    </div>
  );
}
