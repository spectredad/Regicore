import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import AgentShowcase from "@/components/AgentShowcase";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Metrics from "@/components/Metrics";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import WhyRegicore from "@/components/WhyRegicore";
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
      <CaseStudies />
      <Metrics />
      <ROICalculator />
      <Pricing />
      <WhyRegicore />
      <FAQ />
      <BookCTA />
      <Footer />
    </main>
  );
}
