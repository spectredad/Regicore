"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { plans } from "@/lib/content";

/* ── Custom Halftone / Tech Blueprint Illustrations matching the reference ── */

function StarterIllustration() {
  return (
    <div className="w-full h-40 sm:h-44 bg-[#e5e4dc] border border-black/10 rounded-xs flex items-center justify-center relative overflow-hidden my-4 group-hover:border-[#1d635e]/40 transition-colors">
      <svg className="w-full h-full p-4 text-[#1d635e]" viewBox="0 0 240 140" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-starter" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.18" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-starter)" />

        {/* Central Core & Nodes */}
        <circle cx="120" cy="70" r="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="120" cy="70" r="18" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="120" cy="70" r="6" fill="currentColor" />

        {/* Connections */}
        <path d="M 40 70 L 102 70 M 138 70 L 200 70 M 120 20 L 120 52 M 120 88 L 120 120" stroke="currentColor" strokeWidth="1.2" />
        
        <circle cx="40" cy="70" r="4" fill="currentColor" />
        <circle cx="200" cy="70" r="4" fill="currentColor" />
        <circle cx="120" cy="20" r="4" fill="currentColor" />
        <circle cx="120" cy="120" r="4" fill="currentColor" />

        {/* Framing Corners */}
        <path d="M 15 25 L 15 15 L 25 15 M 225 25 L 225 15 L 215 15 M 15 115 L 15 125 L 25 125 M 225 115 L 225 125 L 215 125" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function GrowthIllustration() {
  return (
    <div className="w-full h-40 sm:h-44 bg-white/12 border border-white/25 rounded-xs flex items-center justify-center relative overflow-hidden my-4">
      <svg className="w-full h-full p-4 text-white" viewBox="0 0 240 140" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-growth" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-growth)" />

        {/* Multi-Agent Swarm Constellation */}
        <polygon points="120,25 180,60 160,115 80,115 60,60" fill="none" stroke="white" strokeWidth="1.2" strokeDasharray="3 3" />
        
        <line x1="120" y1="25" x2="160" y2="115" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="180" y1="60" x2="80" y2="115" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="60" y1="60" x2="160" y2="115" stroke="white" strokeWidth="1" strokeOpacity="0.6" />

        <circle cx="120" cy="70" r="16" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.5" />
        <circle cx="120" cy="70" r="6" fill="white" />

        {/* Swarm Nodes */}
        <circle cx="120" cy="25" r="5" fill="white" />
        <circle cx="180" cy="60" r="5" fill="white" />
        <circle cx="160" cy="115" r="5" fill="white" />
        <circle cx="80" cy="115" r="5" fill="white" />
        <circle cx="60" cy="60" r="5" fill="white" />
      </svg>
    </div>
  );
}

function EnterpriseIllustration() {
  return (
    <div className="w-full h-40 sm:h-44 bg-[#e5e4dc] border border-black/10 rounded-xs flex items-center justify-center relative overflow-hidden my-4 group-hover:border-[#0f172a]/40 transition-colors">
      <svg className="w-full h-full p-4 text-[#0f172a]" viewBox="0 0 240 140" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-enterprise" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.18" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-enterprise)" />

        {/* Isometric Enterprise Platform */}
        <polygon points="120,20 190,55 120,90 50,55" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="120,40 190,75 120,110 50,75" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Structural Pillars */}
        <line x1="50" y1="55" x2="50" y2="75" stroke="currentColor" strokeWidth="1.5" />
        <line x1="190" y1="55" x2="190" y2="75" stroke="currentColor" strokeWidth="1.5" />
        <line x1="120" y1="90" x2="120" y2="110" stroke="currentColor" strokeWidth="1.5" />

        <circle cx="120" cy="55" r="7" fill="currentColor" />
        <path d="M 15 25 L 15 15 L 25 15 M 225 25 L 225 15 L 215 15 M 15 115 L 15 125 L 25 125 M 225 115 L 225 125 L 215 125" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function PriceDisplay({ price, isPopular }: { price: string; isPopular?: boolean }) {
  if (price.startsWith("From ")) {
    const value = price.replace("From ", "");
    return (
      <div className="flex items-baseline gap-2">
        <span className={`text-[13px] font-mono ${isPopular ? "text-white/80" : "text-slate-600"}`}>From</span>
        <span className={`font-display text-[44px] sm:text-[50px] font-semibold leading-none tracking-tight ${isPopular ? "text-white" : "text-[#0f172a]"}`}>
          {value}
        </span>
      </div>
    );
  }
  return (
    <div className={`font-display text-[44px] sm:text-[50px] font-semibold leading-none tracking-tight ${isPopular ? "text-white" : "text-[#0f172a]"}`}>
      {price}
    </div>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const illustrations = [StarterIllustration, GrowthIllustration, EnterpriseIllustration];

  return (
    <section id="pricing" className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">06</span>
          <p className="section-label uppercase tracking-widest font-mono text-xs">ENGAGEMENTS</p>
        </div>

        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Pick The Level Of Help You Actually Need.
          </h2>
          <p className="text-muted mt-5 text-[15px] leading-relaxed text-pretty">
            Every engagement starts live in week 2. No 6-month build cycles, no &apos;we&apos;ll get to it next quarter.&apos;
          </p>
        </div>

        {/* Pricing Cards — Clean Light Horizontal Grid matching Reference Image */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const isPopular = plan.featured;
            const IllustrationComp = illustrations[i];
            
            return (
              <motion.div
                key={plan.name}
                className={`reveal group relative flex flex-col justify-between p-6 sm:p-7 border transition-all duration-300 ${
                  isPopular
                    ? "bg-[#1d635e] border-[#1d635e] text-white shadow-xl scale-[1.02] z-10"
                    : "bg-[#f0efe9] border-black/10 hover:border-black/25 text-[#0f172a] shadow-xs"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 font-semibold ${
                        isPopular
                          ? "bg-white text-[#1d635e]"
                          : "bg-[#0f172a] text-white"
                      }`}
                    >
                      {plan.name}
                    </span>

                    {plan.badge && (
                      <span className="border border-white/60 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 text-white font-semibold">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-4 mb-1">
                    <PriceDisplay price={plan.price} isPopular={isPopular} />
                    <p
                      className={`font-mono text-[11px] uppercase tracking-wider mt-2 ${
                        isPopular ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>

                  {/* Top Distinctive Tech / Halftone Illustration Area */}
                  <IllustrationComp />

                  {/* Plan Description */}
                  <p
                    className={`text-[13px] leading-relaxed mb-6 font-body ${
                      isPopular ? "text-white/90" : "text-slate-700"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5 border-t border-current/15 pt-5 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-[13px] leading-relaxed font-body ${
                          isPopular ? "text-white" : "text-slate-800"
                        }`}
                      >
                        <span
                          className={`shrink-0 text-[10px] mt-1 font-mono ${
                            isPopular ? "text-white" : "text-[#1d635e]"
                          }`}
                          aria-hidden="true"
                        >
                          ▪
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <a
                  href="#book"
                  className={`block w-full text-center font-mono text-[12px] font-semibold uppercase tracking-widest py-3.5 px-4 transition-all duration-300 border ${
                    isPopular
                      ? "bg-white text-[#1d635e] border-white hover:bg-white/90 shadow-md"
                      : "bg-[#0f172a] text-white border-[#0f172a] hover:bg-[#1d635e] hover:border-[#1d635e] shadow-xs"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-center text-muted text-[13px] mt-10 reveal leading-relaxed max-w-2xl mx-auto">
          Ownership and licensing terms are defined in the service agreement. Client data remains client-owned; proprietary systems and internal frameworks are licensed during the engagement.
        </p>
      </div>
    </section>
  );
}
