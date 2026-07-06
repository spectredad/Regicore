import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import AgentShowcase from "@/components/AgentShowcase";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import WhyRegicore from "@/components/WhyRegicore";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookCTA from "@/components/BookCTA";
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
      <WhyRegicore />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <BookCTA />
      <Footer />
    </main>
  );
}
