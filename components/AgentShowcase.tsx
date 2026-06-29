"use client";
import { useEffect, useRef, useState, useCallback } from "react";
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
    <section id="results" className="py-24 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-2xl reveal">
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-[1.05]">
            AI workforce tailored to your business
          </h2>
          <p className="text-muted mt-5 text-lg">
            Battle-tested, enterprise-grade agents with built-in safeguards and complete workflow control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center reveal">
          {/* Live mockup card */}
          <div
            className="relative bg-peach rounded-[28px] p-8 min-h-[420px] flex items-center justify-center overflow-hidden"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {/* Background rings */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="w-64 h-64 rounded-full border border-lav/60" />
              <div className="absolute w-44 h-44 rounded-full border border-lav/60" />
            </div>

            {/* Agent card */}
            <div
              className="relative bg-white rounded-2xl shadow-lg p-5 w-72"
              style={{ opacity: cardVisible ? 1 : 0, transition: "opacity 0.15s ease" }}
              role="status"
              aria-live="polite"
              aria-label={`${agent.name} status card`}
            >
              <div className="flex justify-between items-center mb-5">
                <span className="font-semibold text-sm flex items-center gap-2">{agent.cardTitle}</span>
                <span className="bg-lav/60 text-ink text-xs px-3 py-1 rounded-full">{agent.tag}</span>
              </div>
              <div className="font-display text-4xl font-semibold mb-5">{agent.big}</div>
              <div className="text-xs space-y-2 text-muted">
                <div className="flex justify-between">
                  <span>{agent.rowKey}</span>
                  <span className="text-ink">{agent.rowVal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-purple-600 font-semibold">Active ✓</span>
                </div>
              </div>
            </div>

            <p className="absolute bottom-5 left-0 right-0 text-center text-sm text-muted" aria-live="polite">
              {agent.name} is thinking…
            </p>
          </div>

          {/* Agent selector */}
          <div
            role="tablist"
            aria-label="AI Agents"
            className="space-y-1"
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
                className="agent-btn w-full text-left font-display text-2xl sm:text-3xl font-semibold py-2 transition-colors cursor-pointer bg-transparent border-none"
                onClick={() => { stopTimer(); switchAgent(i); }}
                onKeyDown={(e) => handleKey(e, i)}
              >
                {a.name}
              </button>
            ))}
            <p className="text-muted text-sm mt-4 max-w-md leading-relaxed" aria-live="polite">
              {agent.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
