import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FounderTeam from "@/components/FounderTeam";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: "About Regicore | Local SEO and AI Receptionists",
  description: "Meet Regicore, a Bangalore-based team helping local service businesses get found on Google Maps and in AI answers, and book more of the calls they receive.",
};

export default function Company() {
  return (
    <main id="main">
      <Navbar />
      <div className="pt-24">
        <FounderTeam />
      </div>
      <Footer />
    </main>
  );
}
