"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/content";

/* ── Animation hook for scroll-triggered reveal ──────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/* ── Bespoke artifacts, one per service ─────────────────── */

function ArtifactAgents() {
  const { ref, isVisible } = useScrollReveal();
  const [commandLines, setCommandLines] = useState<string[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    // Show final state without looping animation
    setCommandLines([
      "fetch_invoices(status: overdue)",
      "draft_reminder(tone: firm)",
      "send + log_to_crm()",
    ]);
    setShowCompletion(true);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className={`w-2 h-2 rounded-full bg-teal ${isVisible ? "animate-pulse" : ""}`} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">agent.run — live</span>
      </div>
      <div className="px-4 py-3 font-mono text-[11px] leading-[1.9] text-muted min-h-[100px]" style={{ contain: "layout style paint" }}>
        {commandLines.map((cmd, i) => (
          <p key={i}>
            <span className="text-teal">→</span> {cmd}
          </p>
        ))}
        {!showCompletion && commandLines.length > 0 && commandLines.length < 3 && (
          <div className="flex items-end gap-[2px] h-3 mt-1.5 ml-4" aria-hidden="true">
            {[3, 8, 5, 10, 6, 9, 4, 7].map((h, i) => (
              <span
                key={i}
                className="w-[2px] bg-teal/50"
                style={{
                  height: `${h * 10}%`,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
        )}
        {showCompletion && (
          <p className="text-ink">
            ✓ 14 tasks completed, 0 escalations
          </p>
        )}
      </div>
    </div>
  );
}

function ArtifactEmail() {
  const { ref, isVisible } = useScrollReveal();
  const [displayNum, setDisplayNum] = useState(0);
  const [displayPct, setDisplayPct] = useState(0);
  const [highlightPill, setHighlightPill] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    // Show final values without looping animation
    setDisplayNum(842);
    setDisplayPct(62);
    setHighlightPill(false);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">New message</span>
        <div className="flex items-center gap-2">

          <span className="font-mono text-[10px] text-teal">personalised</span>
        </div>
      </div>
      <div className="px-4 py-3 text-[12px] leading-relaxed min-h-[76px]" style={{ contain: "layout style paint" }}>
        <p className="text-muted">To: <span className="text-ink">sarah@acmefreight.com</span></p>
        <p className="text-ink mt-1.5">
          Hi Sarah — saw{" "}
          <span className={`bg-teal/15 text-teal px-1 transition-all ${highlightPill ? "ring-2 ring-teal/40" : ""}`}>
            Acme opened 3 new depots
          </span>{" "}
          last quarter. Most ops teams that scale that fast hit a dispatch bottleneck…
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
          {displayNum} queued <span className="text-teal">·</span> {displayPct}% reply lift
        </div>
      </div>
    </div>
  );
}

function ArtifactVoice() {
  const { ref, isVisible } = useScrollReveal();
  const bars = [5, 12, 8, 18, 10, 22, 14, 26, 12, 20, 8, 16, 24, 10, 18, 6, 14, 22, 9, 15];
  const [showQuote, setShowQuote] = useState(false);
  const [showOutcome, setShowOutcome] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    // Show final state without looping animation
    setShowQuote(true);
    setShowOutcome(true);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className={`w-2 h-2 rounded-full bg-teal ${isVisible ? "animate-pulse" : ""}`} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Outbound call — 3m 12s</span>
      </div>
      <div className="px-4 py-3 min-h-[92px]" style={{ contain: "layout style paint" }}>
        <div className="flex items-end gap-[3px] h-10" aria-hidden="true">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] bg-teal/70"
              style={{
                height: `${h * 3.5}%`,
              }}
            />
          ))}
        </div>
        {showQuote && (
          <p className="text-[12px] text-ink mt-2.5 leading-relaxed">
            &ldquo;Great — I&apos;ve booked you in for Thursday at 2pm. You&apos;ll get a confirmation shortly.&rdquo;
          </p>
        )}
        {showOutcome && (
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">
            Outcome: booked ✓
          </p>
        )}
      </div>
    </div>
  );
}

function ArtifactWebsite() {
  const { ref, isVisible } = useScrollReveal();
  const [cvrNum, setCvrNum] = useState(0);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    // Show final state without looping animation
    setCvrNum(4.8);
  }, [isVisible]);

  const skeletonVariants = {
    hidden: { opacity: 0.4, width: 0 },
    visible: (i: number) => ({
      opacity: 1,
      width: ["75%", "50%", "100%", "83%"][i],
      transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <div ref={ref} className="artifact-frame">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2">
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="w-2 h-2 rounded-full border border-line" />
        <span className="ml-2 font-mono text-[10px] text-muted truncate">yourbrand.com</span>
      </div>
      <div className="px-4 py-3">
        {isVisible && (
          <div key={playCount}>
            <motion.div
              custom={0}
              variants={skeletonVariants}
              initial="hidden"
              animate="visible"
              className="h-2.5 bg-ink/80 mb-1.5"
            />
            <motion.div
              custom={1}
              variants={skeletonVariants}
              initial="hidden"
              animate="visible"
              className="h-2.5 bg-ink/80 mb-3"
            />
            <motion.div
              custom={2}
              variants={skeletonVariants}
              initial="hidden"
              animate="visible"
              className="h-1.5 bg-line mb-1"
            />
            <motion.div
              custom={3}
              variants={skeletonVariants}
              initial="hidden"
              animate="visible"
              className="h-1.5 bg-line mb-3"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="inline-block bg-teal px-4 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-midnight font-semibold">Book a call</span>
              </div>
              <span className="ml-3 font-mono text-[10px] text-muted">CVR +{cvrNum.toFixed(1)}%</span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}



function ArtifactCRM() {
  const { ref, isVisible } = useScrollReveal();
  const cols = [
    { label: "New", items: 2 },
    { label: "Qualified", items: 3 },
    { label: "Won", items: 1 },
  ];
  const [playCount, setPlayCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    const loopInterval = setInterval(() => setPlayCount(p => p + 1), 4500);
    return () => clearInterval(loopInterval);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex justify-between items-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Pipeline — this week</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-line relative overflow-hidden h-24" style={{ contain: "layout style paint" }}>
        {cols.map((c, colIdx) => (
          <div key={c.label} className="bg-surface px-2.5 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">{c.label}</p>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: c.items }).map((_, i) => (
                <motion.div
                  key={`${playCount}-${i}`}
                  className={`h-4 ${c.label === "Won" ? "bg-coral/80" : "bg-teal/40"}`}
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    delay: colIdx * 0.15 + i * 0.08,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 220,
                    damping: 25,
                  }}
                />
              ))}
            </div>
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
  ArtifactCRM,
];

/* Bento spans: tailored for 5 items to leave no gaps */
const spans = [
  "sm:col-span-1 lg:col-span-2",
  "sm:col-span-1 lg:col-span-2",
  "sm:col-span-1 lg:col-span-2",
  "sm:col-span-1 lg:col-span-1",
  "sm:col-span-2 lg:col-span-1",
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
    <section id="services" className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">02</span>
          <p className="section-label">Services</p>
        </div>

        <div className="reveal mb-12 md:mb-16 max-w-2xl">
          <h2 className="font-display text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            We do not sell a package. We build the exact system that is currently costing your firm money.
          </h2>
          <p className="text-muted mt-5 text-[15px] leading-relaxed text-pretty">
            Some firms lose hours and leads at intake. Others lose partner time on document work that should never reach a lawyer’s desk. Others lose cases because follow-up is slow. We map the real bottleneck and fix only that.
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
