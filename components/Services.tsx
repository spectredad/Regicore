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
    const commands = [
      "fetch_invoices(status: overdue)",
      "draft_reminder(tone: firm)",
      "send + log_to_crm()",
    ];
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < commands.length) {
        setCommandLines((prev) => [...prev, commands[index]]);
        index++;
      } else {
        setShowCompletion(true);
        clearInterval(typeInterval);
      }
    }, 500);
    return () => clearInterval(typeInterval);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className={`w-2 h-2 rounded-full bg-rust ${isVisible ? "animate-pulse" : ""}`} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">agent.run — live</span>
      </div>
      <div className="px-4 py-3 font-mono text-[11px] leading-[1.9] text-muted min-h-[100px]">
        {commandLines.map((cmd, i) => (
          <p key={i} style={{ animation: "slideIn 0.3s ease-out forwards" }}>
            <span className="text-rust">→</span> {cmd}
          </p>
        ))}
        {!showCompletion && commandLines.length > 0 && commandLines.length < 3 && (
          <div className="flex items-end gap-[2px] h-3 mt-1.5 ml-4" aria-hidden="true">
            {[3, 8, 5, 10, 6, 9, 4, 7].map((h, i) => (
              <span
                key={i}
                className="w-[2px] bg-rust/50"
                style={{
                  height: `${h * 10}%`,
                  transformOrigin: "bottom",
                  animation: `waveform 0.5s ease-in-out ${i * 0.05}s infinite`,
                }}
              />
            ))}
          </div>
        )}
        {showCompletion && (
          <p
            className="text-ink"
            style={{ animation: "slideIn 0.4s ease-out 0.3s forwards", opacity: 0 }}
          >
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
    setHighlightPill(true);
    const numInterval = setInterval(() => {
      setDisplayNum((prev) => (prev < 842 ? prev + 25 : 842));
    }, 30);
    const pctInterval = setInterval(() => {
      setDisplayPct((prev) => (prev < 62 ? prev + 2 : 62));
    }, 40);
    return () => {
      clearInterval(numInterval);
      clearInterval(pctInterval);
    };
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">New message</span>
        <span className="font-mono text-[10px] text-rust">personalised</span>
      </div>
      <div className="px-4 py-3 text-[12px] leading-relaxed">
        <p className="text-muted">To: <span className="text-ink">sarah@acmefreight.com</span></p>
        <p className="text-ink mt-1.5">
          Hi Sarah — saw{" "}
          <span className={`bg-rust/10 text-rust px-1 transition-all ${highlightPill ? "ring-2 ring-rust/40" : ""}`}>
            Acme opened 3 new depots
          </span>{" "}
          last quarter. Most ops teams that scale that fast hit a dispatch bottleneck…
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
          {displayNum} queued <span className="text-rust">·</span> {displayPct}% reply lift
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
    const quoteTimer = setTimeout(() => setShowQuote(true), 300);
    const outcomeTimer = setTimeout(() => setShowOutcome(true), 1200);
    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(outcomeTimer);
    };
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className={`w-2 h-2 rounded-full bg-rust ${isVisible ? "animate-pulse" : ""}`} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Outbound call — 3m 12s</span>
      </div>
      <div className="px-4 py-3">
        <div className="flex items-end gap-[3px] h-10" aria-hidden="true">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] bg-rust/70"
              style={{
                height: `${h * 3.5}%`,
                animation: isVisible ? `waveform 0.6s ease-in-out ${i * 0.05}s infinite` : "none",
              }}
            />
          ))}
        </div>
        {showQuote && (
          <p
            className="text-[12px] text-ink mt-2.5 leading-relaxed"
            style={{ animation: "slideIn 0.4s ease-out forwards" }}
          >
            &ldquo;Great — I&apos;ve booked you in for Thursday at 2pm. You&apos;ll get a confirmation shortly.&rdquo;
          </p>
        )}
        {showOutcome && (
          <p
            className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2"
            style={{ animation: "popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
          >
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

  useEffect(() => {
    if (!isVisible) return;
    const cvrInterval = setInterval(() => {
      setCvrNum((prev) => (prev < 4.8 ? prev + 0.2 : 4.8));
    }, 50);
    return () => clearInterval(cvrInterval);
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
          <>
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
              <div className="inline-block bg-rust px-4 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper">Book a call</span>
              </div>
              <span className="ml-3 font-mono text-[10px] text-muted">CVR +{cvrNum.toFixed(1)}%</span>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

function ArtifactSoftware() {
  const { ref, isVisible } = useScrollReveal();
  const [codeLines, setCodeLines] = useState<number[]>([]);
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    [0, 1, 2].forEach((i) => {
      setTimeout(
        () => setCodeLines((prev) => [...prev, i]),
        i * 300
      );
    });
    setTimeout(() => setShowComment(true), 1200);
  }, [isVisible]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex justify-between items-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">workflow.ts</span>
        {isVisible && !showComment && (
          <div className="flex items-end gap-[1.5px] h-3" aria-hidden="true">
            {[4, 9, 3, 10, 6, 8, 4].map((h, i) => (
              <span
                key={i}
                className="w-[1.5px] bg-rust/70"
                style={{
                  height: `${h * 10}%`,
                  transformOrigin: "bottom",
                  animation: `waveform 0.5s ease-in-out ${i * 0.06}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <pre className="px-4 py-3 font-mono text-[11px] leading-[1.9] text-muted overflow-hidden min-h-[100px]">
        <code>
          {codeLines.includes(0) && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="text-rust">const</span> quote = <span className="text-rust">await</span> pricing
            </motion.div>
          )}
          {codeLines.includes(1) && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {"  "}.fromSpec(upload)
            </motion.div>
          )}
          {codeLines.includes(2) && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {"  "}.applyRules(client.tier)
            </motion.div>
          )}
          {showComment && (
            <>
              <div>{"\n"}</div>
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span className="text-ink">// 4 days of quoting → 40 sec</span>
              </motion.div>
            </>
          )}
        </code>
      </pre>
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

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Pipeline — this week</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-line">
        {cols.map((c, colIdx) => (
          <div key={c.label} className="bg-surface px-2.5 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-2">{c.label}</p>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: c.items }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-4 ${c.label === "Won" ? "bg-rust/70" : "bg-line"}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
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

function ArtifactMarketing() {
  const { ref, isVisible } = useScrollReveal();
  const steps = ["Signup", "Day 2 email", "Opened?", "Nudge → Demo"];
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!isVisible) return;
    steps.forEach((_, i) => {
      setTimeout(() => {
        setActiveSteps((prev) => [...prev, i]);
      }, i * 100);
    });
  }, [isVisible, steps]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Lifecycle flow</span>
      </div>
      <div className="px-4 py-3 flex flex-col gap-0">
        {steps.map((s, i) => {
          const isActive = activeSteps.includes(i);
          const isLast = i === steps.length - 1;
          return (
            <div
              key={s}
              className="flex items-center gap-3"
              style={{
                animation: isActive ? "slideIn 0.3s ease-out forwards" : "none",
                opacity: isActive ? 1 : 0,
              }}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isLast && isActive ? "bg-rust" : "border border-ink/40 bg-surface"
                  }`}
                  style={{
                    animation: isLast && isActive ? "pulse 1.5s ease-in-out infinite" : "none",
                  }}
                />
                {i < steps.length - 1 && <span className="w-px h-4 bg-line" />}
              </div>
              <span className={`text-[12px] ${isLast ? "text-rust" : "text-ink"} leading-none pb-4 last:pb-0`}>
                {s}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ArtifactLeadGen() {
  const { ref, isVisible } = useScrollReveal();
  const leads = [
    { name: "Acme Freight", score: 92 },
    { name: "Northline Co.", score: 87 },
    { name: "Bolt Supply", score: 74 },
  ];
  const [scores, setScores] = useState(leads.map(() => 0));
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    leads.forEach((l, i) => {
      setTimeout(() => {
        const scoreInterval = setInterval(() => {
          setScores((prev) => {
            const next = [...prev];
            next[i] = Math.min(next[i] + 2, l.score);
            return next;
          });
        }, 30);
        return () => clearInterval(scoreInterval);
      }, i * 80);
    });

    const leadInterval = setInterval(() => {
      setTotalLeads((prev) => (prev < 31 ? prev + 1 : 31));
    }, 30);

    return () => clearInterval(leadInterval);
  }, [isVisible, leads]);

  return (
    <div ref={ref} className="artifact-frame">
      <div className="border-b border-line px-4 py-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Leads sourced today</span>
        <span className="font-mono text-[10px] text-rust">+{totalLeads}</span>
      </div>
      <div>
        {leads.map((l, idx) => (
          <motion.div
            key={l.name}
            className="flex items-center justify-between px-4 py-2 border-b border-line last:border-b-0"
            initial={{ opacity: 0, x: -12 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              delay: idx * 0.12,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 22,
            }}
          >
            <span className="text-[12px] text-ink">{l.name}</span>
            <span className="font-mono text-[10px] text-muted">
              score <span className="text-rust">{scores[idx]}</span>
            </span>
          </motion.div>
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
