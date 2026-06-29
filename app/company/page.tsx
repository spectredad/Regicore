import Navbar from "@/components/Navbar";
import FounderTeam from "@/components/FounderTeam";
import Footer from "@/components/Footer";

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
