"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { agents } from "@/lib/content";

const ROTATE_MS = 4000;

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
        return prev;
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

  const handlePrev = () => {
    stopTimer();
    switchAgent((active - 1 + agents.length) % agents.length);
  };

  const handleNext = () => {
    stopTimer();
    switchAgent((active + 1) % agents.length);
  };

  return (
    <section id="agents" className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Eyebrow */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-10">
          <span className="index-num text-[15px]">01</span>
          <p className="section-label">THE AGENTS</p>
        </div>

        {/* Section Header: Two-column layout matching ElevenLabs */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-14 reveal items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-[30px] sm:text-[42px] font-medium text-ink leading-[1.08] tracking-[-0.02em] text-balance">
              AI agents that cut cost and risk inside law firms
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-1.5">
            <p className="text-muted text-[15px] sm:text-[16px] leading-relaxed text-pretty">
              These systems take repetitive work off your lawyers so the firm spends less, bills
              more, and carries less risk.
            </p>
          </div>
        </div>

        {/* Main Interface: Left quiet navigation list + Right soft demo card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch reveal">
          
          {/* Left Navigation Stack (5 Agents) */}
          <div
            role="tablist"
            aria-label="AI Agents"
            className="lg:col-span-5 flex flex-col justify-between"
            ref={containerRef}
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            <div className="space-y-2 sm:space-y-3">
              {agents.map((a, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={a.name}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`group w-full text-left flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-[#f0efe9]/80 border-slate-300/60 shadow-xs"
                        : "bg-transparent border-transparent hover:bg-[#f0efe9]/40"
                    }`}
                    onClick={() => { stopTimer(); switchAgent(i); }}
                    onKeyDown={(e) => handleKey(e, i)}
                  >
                    {/* Icon / Number badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-mono font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#0f172a] text-white shadow-xs"
                          : "bg-black/5 text-slate-400 group-hover:text-slate-700 group-hover:bg-black/10"
                      }`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Agent Name */}
                    <span
                      className={`text-[17px] sm:text-[19px] font-medium tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-[#0f172a] font-semibold"
                          : "text-slate-400 group-hover:text-slate-700"
                      }`}
                    >
                      {a.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Arrow Navigation Controls (< >) */}
            <div className="pt-6 flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous agent"
                className="w-9 h-9 rounded-full border border-slate-300/70 bg-white/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next agent"
                className="w-9 h-9 rounded-full border border-slate-300/70 bg-white/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-white transition-all shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right ElevenLabs-Style Soft Card Container */}
          <div
            className="lg:col-span-7 bg-[#f3f2ec] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-black/5 shadow-xs relative overflow-hidden"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
          >
            {/* Top Right Action Icon (↗) */}
            <div className="flex justify-end mb-4">
              <button 
                className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-600 shadow-2xs hover:scale-105 transition-transform"
                aria-label="Agent options"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>

            {/* Inner White Soft Demo Box */}
            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: cardVisible ? 1 : 0.4, y: cardVisible ? 0 : 4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="status"
              aria-live="polite"
              aria-label={`${agent.name} status card`}
            >
              {/* Top Pill Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-1.5 bg-[#f4f3ef] border border-slate-200/60 px-3.5 py-1.5 rounded-xl text-xs text-slate-800 font-medium">
                  <span>{agent.cardTitle}</span>
                  <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="bg-[#f4f3ef] border border-slate-200/60 text-slate-500 text-[11px] uppercase tracking-[0.1em] font-semibold px-3 py-1.5 rounded-xl">
                  {agent.tag}
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="font-display text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight my-4">
                {agent.big}
              </div>

              {/* Details & Status Row */}
              <div className="text-xs space-y-3 text-slate-500 border-t border-slate-100 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-500">{agent.rowKey}</span>
                  <span className="text-slate-900 font-semibold">{agent.rowVal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-500">Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="text-teal font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Info Section (Description & Live Working State) */}
            <div className="pt-2">
              <h3 className="font-semibold text-slate-900 text-lg sm:text-xl mb-1.5 tracking-tight">
                {agent.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md text-pretty mb-4">
                {agent.desc}
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
                <span>{agent.name} is working</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
