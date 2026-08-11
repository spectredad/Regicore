import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartHere from "@/components/StartHere";

export const metadata = {
  title: "Start Here — Regicore",
  description:
    "Tell us the bottleneck. We'll run a free AI opportunity audit and scope exactly what to build — no obligation to move forward.",
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
