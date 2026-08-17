import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Regicore",
  description: "The terms that govern use of Regicore's services and website.",
};

export default function TermsPage() {
  return (
    <main id="main">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <p className="section-label text-teal">Legal</p>
        <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-sm text-muted">Last updated August 17, 2026</p>
        <div className="mt-12 flex flex-col gap-10 text-base leading-7 text-muted">
          <section>
            <h2 className="font-display text-2xl text-ink">Using our services</h2>
            <p className="mt-3">Regicore provides custom AI agents, automation systems, and related consulting services. By using our website or engaging our services, you agree to use them lawfully and responsibly.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Projects and deliverables</h2>
            <p className="mt-3">Project scope, fees, timelines, ownership, and support commitments are defined in the applicable proposal or agreement. We will work with you in good faith to deliver the agreed work and communicate material changes.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Acceptable use</h2>
            <p className="mt-3">You may not use our services to violate applicable law, infringe another party&apos;s rights, misuse personal data, or create harmful, deceptive, or abusive content.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-ink">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to varun@regicorehq.com.</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
