import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartHere from "@/components/StartHere";

export const metadata = {
  title: "Request a Free Law Firm Market Check | Regicore",
  alternates: { canonical: "/start" },
  description:
    "See how your law firm shows up in local search and AI answers, and review how your calls are handled after hours.",
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
