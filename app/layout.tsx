import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regicore.com"),
  title: "Regicore — Your unfair advantage in AI",
  description:
    "Regicore is a boutique AI agentic studio. Custom AI agents, voice callers and growth automation, built fast with transparent ROI.",
  keywords: ["AI agents", "AI automation", "custom AI systems", "agentic studio", "AI voice callers", "lead generation AI"],
  authors: [{ name: "Regicore" }],
  openGraph: {
    title: "Regicore — Your unfair advantage in AI",
    description: "Custom AI agents, voice callers and growth automation, built fast with transparent ROI.",
    url: "https://regicore.com",
    siteName: "Regicore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regicore — Boutique AI Agentic Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regicore — Your unfair advantage in AI",
    description: "Custom AI agents, voice callers and growth automation, built fast with transparent ROI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Regicore",
  url: "https://regicore.com",
  description:
    "Boutique AI agentic studio delivering custom AI agents, voice callers and growth automation.",
  sameAs: ["https://www.linkedin.com/company/regicore", "https://twitter.com/regicore"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@regicore.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${caveat.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
