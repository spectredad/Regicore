import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import IntakeSystem from "@/components/IntakeSystem";
import Pricing from "@/components/Pricing";
import WhatWeDo from "@/components/WhatWeDo";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const title = "Local SEO & AI Receptionist for Local Businesses | Regicore";
const description =
  "Get found on Google Maps and in AI answers. Regicore’s AI receptionist answers calls and books appointments day and night. Start with a free market check.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Regicore",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Regicore logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary", title, description, images: ["/icon-512.png"] },
};

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <TrustExtras />
      <Difference />
      <HowItWorks />
      <IntakeSystem />
      <Pricing />
      <WhatWeDo />
      <ROICalculator />
      <div className="px-5 py-12 sm:py-16 text-center">
        <a
          href="/hardest-working-seo-expert-bangalore"
          className="inline-block text-[16px] sm:text-[20px] font-medium text-ink hover:text-teal transition-colors"
        >
          Meet the SEO behind Regicore <span aria-hidden="true">→</span>
        </a>
      </div>
      <FAQ />
      <CTABanner />
      <Footer tagline="Give them a time" taglineAccent="while you’ve got them on the phone." />
    </main>
  );
}
