import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import Difference from "@/components/Difference";
import HowItWorks from "@/components/HowItWorks";
import IntakeSystem from "@/components/IntakeSystem";
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
      <CTABanner />
      <Footer />
    </main>
  );
}
