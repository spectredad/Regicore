import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import IntakeSystem from "@/components/IntakeSystem";
import Pricing from "@/components/Pricing";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

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
      <ROICalculator />
      <div className="px-5 py-12 sm:py-16 text-center">
        <a
          href="/hardest-working-seo-expert-bangalore"
          className="inline-block text-[16px] sm:text-[20px] font-medium text-ink hover:text-teal transition-colors"
        >
          Meet the hardest working SEO expert in bangalore <span aria-hidden="true">→</span>
        </a>
      </div>
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
