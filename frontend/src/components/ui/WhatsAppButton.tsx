"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const phone = SITE_CONFIG.phone.replace(/-/g, "");
  const message = encodeURIComponent(
    "Hi! I'm interested in your pet waste removal services."
  );

  return (
    <a
      href={`https://wa.me/1${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
