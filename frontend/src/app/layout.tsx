import type { Metadata } from "next";
import { Nunito_Sans, Fredoka } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "P.A.W.S. HD | High Desert Pooper Scooper",
    template: "%s | P.A.W.S. HD",
  },
  description:
    "Professional pet waste removal service in the High Desert. Serving Hesperia, Victorville, Apple Valley, and surrounding areas.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pawshd.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "P.A.W.S. HD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
