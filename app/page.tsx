import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import Metrics from "@/components/Metrics";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <TrustExtras />
      <Metrics />
      <WhoIsThisFor />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
