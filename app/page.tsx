import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import AgentShowcase from "@/components/AgentShowcase";
import Services from "@/components/Services";
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
      <AgentShowcase />
      <Services />
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
