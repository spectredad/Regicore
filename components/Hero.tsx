"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    revealRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-40 pb-8 text-center px-5 relative overflow-hidden" ref={revealRef}>
      {/* Levitating Hero Orb */}
      <div 
        className="hero-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto reveal relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.08em] mb-6 bg-[rgba(107,70,193,0.06)] border border-[rgba(107,70,193,0.12)] text-[#7C3AED]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" aria-hidden="true" />
          Boutique AI Agentic Studio
        </div>

        {/* H1 Title */}
        <h1 
          className="font-display text-[36px] md:text-[52px] font-medium text-ink mb-6 leading-[1.05] tracking-[-0.02em]"
          style={{ textShadow: "0 2px 40px rgba(107, 70, 193, 0.08)" }}
        >
          AI is hard to win
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] leading-relaxed text-[#6B6B7B] max-w-[520px] mx-auto mb-8 font-normal">
          Regicore delivers an unfair advantage with custom AI systems — combining a proven build method with autonomous agents and senior engineers.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#services"
            className="bg-[#2A3234] text-[#EBECE7] font-semibold text-[13px] uppercase tracking-[0.04em] px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-[#1A2224] transition-all hover:shadow-[0_4px_15px_rgba(42,50,52,0.2)]"
          >
            Explore Full-Service <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#book"
            className="bg-[rgba(107,70,193,0.08)] text-[#7C3AED] border border-[rgba(107,70,193,0.15)] font-semibold text-[13px] uppercase tracking-[0.04em] px-6 py-3.5 rounded-xl hover:bg-[rgba(107,70,193,0.15)] transition-all"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Hand-drawn SVG flow */}
      <div className="max-w-5xl mx-auto mt-14 reveal relative z-10">
        <svg viewBox="0 0 900 200" className="w-full" aria-label="Discover → Build → Deploy → Optimise workflow" role="img">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#7C3AED" opacity="0.6" />
            </marker>
          </defs>
          <g className="doodle">
            {/* Input box */}
            <rect x="30" y="60" width="120" height="80" rx="14" />
            <circle cx="60" cy="90" r="5" />
            <circle cx="80" cy="90" r="5" />
            <circle cx="100" cy="90" r="5" />
            <line x1="50" y1="115" x2="130" y2="115" />
            {/* Arrow 1 */}
            <path d="M170 100 H228" markerEnd="url(#arrow)" />
            {/* Data chart box */}
            <rect x="240" y="50" width="120" height="100" rx="14" fill="#e4d8ff" stroke="#7C3AED" />
            <path d="M260 130 L290 95 L315 115 L340 80" />
            {/* Arrow 2 */}
            <path d="M380 100 H438" markerEnd="url(#arrow)" />
            {/* Agent circle */}
            <circle cx="500" cy="100" r="44" fill="#d8c7ff" stroke="#7C3AED" />
            <text x="500" y="106" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill="#26203a">AGENT</text>
            {/* Arrow 3 */}
            <path d="M560 100 H618" markerEnd="url(#arrow)" />
            {/* Output box */}
            <rect x="630" y="55" width="120" height="90" rx="14" fill="#efe6ff" stroke="#7C3AED" />
            <line x1="650" y1="80" x2="730" y2="80" />
            <line x1="650" y1="100" x2="730" y2="100" />
            <line x1="650" y1="120" x2="700" y2="120" />
            {/* Arrow 4 */}
            <path d="M780 100 H840" markerEnd="url(#arrow)" />
            {/* Done circle */}
            <circle cx="868" cy="100" r="24" fill="#ece4ff" stroke="#7C3AED" />
            <path d="M858 100 l8 8 l14 -16" />
          </g>
        </svg>
        <p className="font-script text-2xl text-[#6B6B7B] mt-2 animate-pulse" aria-hidden="true">
          discover → build → deploy → optimise
        </p>
      </div>
    </section>
  );
}
