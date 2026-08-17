import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Regicore",
  description: "The terms that govern use of Regicore services.",
};

const sections = [
  ["Use of services", "Regicore provides automation and related services for businesses. You agree to use our services lawfully, responsibly, and in accordance with any applicable agreement or statement of work."],
  ["Accounts and information", "You are responsible for providing accurate information and for maintaining the confidentiality of any account credentials. Please notify us promptly if you believe your account has been used without authorization."],
  ["Intellectual property", "Regicore and its licensors retain all rights in our software, materials, branding, and services. You retain ownership of information and materials you provide to us, subject to the rights needed to deliver the services."],
  ["Fees and termination", "Fees, payment terms, and renewal conditions are set out in the applicable order or service agreement. Either party may end a service relationship as permitted by that agreement or applicable law."],
  ["Disclaimers and liability", "Services are provided using commercially reasonable care. To the extent permitted by law, Regicore is not responsible for indirect, incidental, special, or consequential losses arising from use of the services."],
  ["Changes and contact", "We may update these terms when our services or legal obligations change. Questions about these terms can be sent to varun@regicorehq.com."],
];

export default function TermsOfService() {
  return (
    <main id="main">
      <Navbar />
      <article className="max-w-3xl mx-auto px-5 pt-32 pb-24">
        <Link href="/" className="section-label hover:text-ink transition-colors">Back to Regicore</Link>
        <p className="section-label text-teal mt-12 mb-5">Legal</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] text-ink text-balance">Terms of service</h1>
        <p className="text-muted mt-6 leading-7">Last updated August 17, 2026</p>
        <div className="border-t border-line mt-14 pt-10 space-y-10">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="font-display text-2xl text-ink mb-3">{heading}</h2>
              <p className="text-muted leading-7">{body}</p>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
