import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compliance | Regicore",
  description: "Regicore's approach to responsible AI, privacy, and compliance.",
};

export default function CompliancePage() {
  return (
    <main id="main">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="section-label text-teal">Legal</p>
        <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
          Compliance
        </h1>
        <div className="mt-12 flex flex-col gap-10 text-base leading-7 text-muted">
          <section>
            <h2 className="font-display text-2xl text-ink">Responsible AI</h2>
            <p className="mt-3">We design automation with human oversight, clear escalation paths, and practical controls. Each system is scoped to its intended use and reviewed for reliability, safety, and transparency.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Privacy and security</h2>
            <p className="mt-3">We apply data minimization, access controls, and secure handling practices appropriate to each engagement. Client data is used to provide the agreed services and is not sold.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Ongoing review</h2>
            <p className="mt-3">Compliance requirements vary by industry and use case. We collaborate with clients to document requirements and update controls as systems, regulations, and risks evolve.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Contact</h2>
            <p className="mt-3">For compliance questions or documentation requests, contact varun@regicorehq.com.</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
