import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Compliance | Regicore",
  description: "Regicore's approach to responsible automation and compliance.",
};

const commitments = [
  ["Responsible automation", "We design automation to be observable, reviewable, and aligned with the goals and controls of the organizations that use it."],
  ["Data handling", "Access to business information is limited to what is needed to provide the agreed service. We work with clients to define retention, access, and deletion expectations."],
  ["Security practices", "We apply reasonable technical and organizational safeguards to protect information, monitor service health, and respond to identified risks."],
  ["Vendor and access review", "Third-party tools and service access are evaluated according to the role they play in delivery. Access is kept purposeful and reviewed as requirements change."],
  ["Transparency", "We communicate material service changes and work with clients to address questions, incidents, or requests relating to compliance and responsible use."],
];

export default function Compliance() {
  return (
    <main id="main">
      <Navbar />
      <article className="max-w-3xl mx-auto px-5 pt-32 pb-24">
        <Link href="/" className="section-label hover:text-ink transition-colors">Back to Regicore</Link>
        <p className="section-label text-teal mt-12 mb-5">Legal</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] text-ink text-balance">Compliance</h1>
        <p className="text-muted mt-6 leading-7">Our principles for secure, transparent, and responsible automation.</p>
        <div className="border-t border-line mt-14 pt-10 space-y-10">
          {commitments.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="font-display text-2xl text-ink mb-3">{heading}</h2>
              <p className="text-muted leading-7">{body}</p>
            </section>
          ))}
        </div>
        <p className="text-muted leading-7 mt-12">For compliance questions or requests, contact <a href="mailto:varun@regicorehq.com" className="text-teal hover:text-ink transition-colors">varun@regicorehq.com</a>.</p>
      </article>
      <Footer />
    </main>
  );
}
