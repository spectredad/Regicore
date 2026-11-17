import Script from "next/script";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.regicore.com"),
  title: "Marketing & AI Services for Local Businesses | Regicore",
  description:
    "Regicore helps local businesses get found in local search and answer more calls with AI intake. Start with a free market check.",
  keywords: ["AI agents", "AI automation", "custom AI systems", "agentic studio", "AI voice callers", "lead generation AI"],
  authors: [{ name: "Regicore" }],
  openGraph: {
    title: "Marketing & AI Services for Local Businesses | Regicore",
    description: "Regicore helps local businesses get found in local search and answer more calls with AI intake. Start with a free market check.",
    url: "https://www.regicore.com",
    siteName: "Regicore",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Regicore logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Marketing & AI Services for Local Businesses | Regicore",
    description: "Regicore helps local businesses get found in local search and answer more calls with AI intake. Start with a free market check.",
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.regicore.com/#business",
  telephone: "+919739690421",
  address: { "@type": "PostalAddress", streetAddress: "3rd Cross, New Thippasandra", addressLocality: "Bangalore", addressCountry: "IN" },
  name: "Regicore",
  url: "https://www.regicore.com",
  description:
    "Local search and AI intake services for local businesses.",
  sameAs: ["https://www.linkedin.com/company/regicore", "https://instagram.com/regicore2"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "varun.l@regicorehq.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} bg-paper scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        {children}
        <Script src="/webmcp.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
