import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartHere from "@/components/StartHere";

export const metadata = {
  title: "Request a Free Market Check | Regicore",
  alternates: { canonical: "/start" },
  description:
    "See how your business shows up in local search and AI answers.",
};

export default function StartPage() {
  return (
    <main id="main">
      <Navbar />
      <StartHere />
      <Footer />
    </main>
  );
}
