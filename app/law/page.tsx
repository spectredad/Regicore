import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import TrustExtras from "./_components/TrustExtras";
import Difference from "./_components/Difference";
import HowItWorks from "./_components/HowItWorks";
import IntakeSystem from "./_components/IntakeSystem";
import Pricing from "./_components/Pricing";
import ROICalculator from "./_components/ROICalculator";
import FAQ from "./_components/FAQ";
import CTABanner from "./_components/CTABanner";
import Footer from "./_components/Footer";

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

