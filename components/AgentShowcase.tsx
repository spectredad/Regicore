"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agents } from "@/lib/content";

const ROTATE_MS = 3500;

export default function AgentShowcase() {
  const [active, setActive] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const switchAgent = useCallback((i: number) => {
    setCardVisible(false);
    setTimeout(() => {
      setActive(i);
      setCardVisible(true);
    }, 120);
  }, []);

  const startTimer = useCallback(() => {
    if (prefersReduced.current) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % agents.length;
        switchAgent(next);
        return prev; // state updated inside switchAgent
      });
    }, ROTATE_MS);
  }, [switchAgent]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);

  // Reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const agent = agents[active];

  const handleKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); stopTimer(); switchAgent(i); }
    if (e.key === "ArrowDown") { e.preventDefault(); stopTimer(); switchAgent((i + 1) % agents.length); }
    if (e.key === "ArrowUp") { e.preventDefault(); stopTimer(); switchAgent((i - 1 + agents.length) % agents.length); }
  };

  return (
    <section id="agents" className="py-24 md:py-32 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">01</span>
          <p className="section-label">The agents</p>
        </div>

        <div className="mb-12 max-w-3xl reveal">
          <h2 className="font-display text-[36px] sm:text-[52px] font-medium text-ink leading-[1.05] tracking-[-0.02em] text-balance">
            An AI workforce tailored to your business
          </h2>
          <p className="text-muted mt-5 text-[17px] leading-relaxed max-w-xl text-pretty">
            Battle-tested, enterprise-grade agents with built-in safeguards and complete
            workflow control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
          {/* Agent selector */}
          <div
            role="tablist"
            aria-label="AI Agents"
            className="order-2 lg:order-1"
            ref={containerRef}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {agents.map((a, i) => (
              <button
                key={a.name}
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className="agent-btn w-full text-left font-display text-[26px] sm:text-[32px] font-medium py-3.5 cursor-pointer bg-transparent border-0 border-b border-line flex items-baseline gap-4"
                onClick={() => { stopTimer(); switchAgent(i); }}
                onKeyDown={(e) => handleKey(e, i)}
              >
                <span
                  className={`text-[13px] font-body font-semibold transition-colors duration-300 ${
                    i === active ? "text-rust" : "text-line"
                  }`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {a.name}
              </button>
            ))}
            <p className="text-muted text-[15px] mt-6 max-w-md leading-relaxed" aria-live="polite">
              {agent.desc}
            </p>
          </div>

          {/* Live mockup card */}
          <div
            className="order-1 lg:order-2 relative bg-ink min-h-[420px] flex items-center justify-center overflow-hidden p-8"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {/* Hairline grid backdrop */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(#f6f3ec 1px, transparent 1px), linear-gradient(90deg, #f6f3ec 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
              aria-hidden="true"
            />

            {/* Agent card */}
            <motion.div
              className="relative bg-surface border border-line p-6 w-72"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: cardVisible ? 1 : 0.3, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="status"
              aria-live="polite"
              aria-label={`${agent.name} status card`}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="font-semibold text-sm text-ink">{agent.cardTitle}</span>
                <span className="border border-line text-muted text-[11px] uppercase tracking-[0.08em] px-2.5 py-1">
                  {agent.tag}
                </span>
              </div>
              <div className="font-display text-4xl font-medium text-ink mb-5">{agent.big}</div>
              <div className="text-xs space-y-2.5 text-muted border-t border-line pt-4">
                <div className="flex justify-between">
                  <span>{agent.rowKey}</span>
                  <span className="text-ink font-medium">{agent.rowVal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-rust font-semibold">Active</span>
                </div>
              </div>
            </motion.div>

            <p
              className="absolute bottom-5 left-0 right-0 text-center text-[12px] uppercase tracking-[0.12em] text-paper/50"
              aria-live="polite"
            >
              {agent.name} is working
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
