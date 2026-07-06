"use client";
import { useEffect, useRef } from "react";
import { services } from "@/lib/content";

/* ── Bespoke artifacts, one per service ─────────────────── */

function ArtifactAgents() {
  return (
    <div className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">agent.run — live</span>
      </div>
      <div className="px-4 py-3 font-mono text-[11px] leading-[1.9] text-muted">
        <p><span className="text-rust">→</span> fetch_invoices(status: overdue)</p>
        <p><span className="text-rust">→</span> draft_reminder(tone: firm)</p>
        <p><span className="text-rust">→</span> send + log_to_crm()</p>
        <p className="text-ink">✓ 14 tasks completed, 0 escalations</p>
      </div>
    </div>
  );
}

function ArtifactEmail() {
  return (
    <div className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">New message</span>
        <span className="font-mono text-[10px] text-rust">personalised</span>
      </div>
      <div className="px-4 py-3 text-[12px] leading-relaxed">
        <p className="text-muted">To: <span className="text-ink">sarah@acmefreight.com</span></p>
        <p className="text-ink mt-1.5">
          Hi Sarah — saw <span className="bg-rust/10 text-rust px-1">Acme opened 3 new depots</span> last
          quarter. Most ops teams that scale that fast hit a dispatch bottleneck…
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
          842 queued <span className="text-rust">·</span> 62% reply lift
        </div>
      </div>
    </div>
  );
}

function ArtifactVoice() {
  const bars = [5, 12, 8, 18, 10, 22, 14, 26, 12, 20, 8, 16, 24, 10, 18, 6, 14, 22, 9, 15];
  return (
    <div className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className="w-2 h-2 rounded-full bg-rust animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Outbound call — 3m 12s</span>
      </div>
      <div className="px-4 py-3">
        <div className="flex items-end gap-[3px] h-10" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} className="w-[3px] bg-rust/70" style={{ height: `${h * 3.5}%` }} />
          ))}
        </div>
        <p className="text-[12px] text-ink mt-2.5 leading-relaxed">
          &ldquo;Great — I&apos;ve booked you in for Thursday at 2pm. You&apos;ll get a confirmation shortly.&rdquo;
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">Outcome: booked ✓</p>
      </div>
    </div>
  );
}

function ArtifactWebsite() {
  return (
    <div className="artifact-frame">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2">
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="ml-2 font-mono text-[10px] text-muted truncate">yourbrand.com</span>
      </div>
      <div className="px-4 py-3">
        <div className="h-2.5 w-3/4 bg-ink/80 mb-1.5" />
        <div className="h-2.5 w-1/2 bg-ink/80 mb-3" />
        <div className="h-1.5 w-full bg-line mb-1" />
        <div className="h-1.5 w-5/6 bg-line mb-3" />
        <div className="inline-block bg-rust px-4 py-1.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-paper">Book a call</span>
        </div>
        <span className="ml-3 font-mono text-[10px] text-muted">CVR +4.8%</span>
      </div>
    </div>
  );
}

function ArtifactSoftware() {
  return (
    <div className="artifact-frame">
      <div className="border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">workflow.ts</span>
      </div>
      <pre className="px-4 py-3 font-mono text-[11px] leading-[1.9] text-muted overflow-hidden">
        <code>
          <span className="text-rust">const</span> quote = <span className="text-rust">await</span> pricing
          {"\n"}  .fromSpec(upload)
          {"\n"}  .applyRules(client.tier)
          {"\n"}
          {"\n"}<span className="text-ink">// 4 days of quoting → 40 sec</span>
        </code>
      </pre>
    </div>
  );
}

function ArtifactCRM() {
  const cols = [
    { label: "New", items: 2 },
    { label: "Qualified", items: 3 },
    { label: "Won", items: 1 },
  ];
  return (
    <div className="artifact-frame">
      <div className="border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Pipeline — this week</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-line">
        {cols.map((c) => (
          <div key={c.label} className="bg-surface px-2.5 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">{c.label}</p>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: c.items }).map((_, i) => (
                <div key={i} className={`h-4 ${c.label === "Won" ? "bg-rust/70" : "bg-line"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtifactMarketing() {
  const steps = ["Signup", "Day 2 email", "Opened?", "Nudge → Demo"];
  return (
    <div className="artifact-frame">
      <div className="border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Lifecycle flow</span>
      </div>
      <div className="px-4 py-3 flex flex-col gap-0">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className={`w-2 h-2 rounded-full ${i === steps.length - 1 ? "bg-rust" : "border border-ink/40 bg-surface"}`} />
              {i < steps.length - 1 && <span className="w-px h-4 bg-line" />}
            </div>
            <span className={`text-[12px] ${i === steps.length - 1 ? "text-rust" : "text-ink"} leading-none pb-4 last:pb-0`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtifactLeadGen() {
  const leads = [
    { name: "Acme Freight", score: 92 },
    { name: "Northline Co.", score: 87 },
    { name: "Bolt Supply", score: 74 },
  ];
  return (
    <div className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Leads sourced today</span>
        <span className="font-mono text-[10px] text-rust">+31</span>
      </div>
      <div>
        {leads.map((l) => (
          <div key={l.name} className="flex items-center justify-between px-4 py-2 border-b border-line last:border-b-0">
            <span className="text-[12px] text-ink">{l.name}</span>
            <span className="font-mono text-[10px] text-muted">
              score <span className="text-rust">{l.score}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const artifacts = [
  ArtifactAgents,
  ArtifactEmail,
  ArtifactVoice,
  ArtifactWebsite,
  ArtifactSoftware,
  ArtifactCRM,
  ArtifactMarketing,
  ArtifactLeadGen,
];

/* Bento spans: 2 featured, 4 standard, 2 featured — balanced editorial grid */
const spans = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">02</span>
          <p className="section-label">Services</p>
        </div>

        <div className="reveal mb-12 md:mb-16 max-w-2xl">
          <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            One studio,
            <br />
            your whole AI stack
          </h2>
          <p className="text-muted mt-5 text-[17px] leading-relaxed text-pretty">
            Eight disciplines under one roof, so nothing gets lost between vendors. Every card below is a
            live pattern from systems we build.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {services.map((s, i) => {
            const Artifact = artifacts[i];
            return (
              <article
                key={s.title}
                className={`bg-surface p-6 md:p-7 flex flex-col gap-6 reveal ${spans[i]}`}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <Artifact />
                <div className="flex items-start gap-4 mt-auto">
                  <span className="index-num text-[13px] pt-1">{s.icon}</span>
                  <div>
                    <h3 className="font-display text-[21px] md:text-[23px] font-medium leading-tight text-ink text-balance">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-muted leading-relaxed mt-1.5">{s.desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
