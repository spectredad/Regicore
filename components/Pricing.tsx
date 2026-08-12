"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { plans } from "@/lib/content";

/* ── Custom Halftone / Tech Blueprint Illustrations matching the reference ── */

function StarterIllustration() {
  return (
    <div className="w-full h-56 sm:h-64 md:h-72 bg-[#e5e4dc] border border-black/10 rounded-xs flex items-center justify-center relative overflow-hidden my-5 group-hover:border-[#1d635e]/40 transition-colors">
      <svg className="w-full h-full p-6 text-[#1d635e]" viewBox="0 0 240 180" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-starter" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-starter)" />

        {/* Central Core & Nodes */}
        <circle cx="120" cy="90" r="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="120" cy="90" r="24" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="8" fill="currentColor" />

        {/* Connections */}
        <path d="M 30 90 L 96 90 M 144 90 L 210 90 M 120 20 L 120 66 M 120 114 L 120 160" stroke="currentColor" strokeWidth="1.5" />
        
        <circle cx="30" cy="90" r="5" fill="currentColor" />
        <circle cx="210" cy="90" r="5" fill="currentColor" />
        <circle cx="120" cy="20" r="5" fill="currentColor" />
        <circle cx="120" cy="160" r="5" fill="currentColor" />

        {/* Framing Corners */}
        <path d="M 15 25 L 15 15 L 25 15 M 225 25 L 225 15 L 215 15 M 15 155 L 15 165 L 25 165 M 225 155 L 225 165 L 215 165" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function GrowthIllustration() {
  return (
    <div className="w-full h-56 sm:h-64 md:h-72 bg-white/12 border border-white/25 rounded-xs flex items-center justify-center relative overflow-hidden my-5">
      <svg className="w-full h-full p-6 text-white" viewBox="0 0 240 180" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-growth" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-growth)" />

        {/* Multi-Agent Swarm Constellation */}
        <polygon points="120,25 190,65 165,145 75,145 50,65" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 3" />
        
        <line x1="120" y1="25" x2="165" y2="145" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="190" y1="65" x2="75" y2="145" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="50" y1="65" x2="165" y2="145" stroke="white" strokeWidth="1.2" strokeOpacity="0.6" />

        <circle cx="120" cy="90" r="20" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.5" />
        <circle cx="120" cy="90" r="7" fill="white" />

        {/* Swarm Nodes */}
        <circle cx="120" cy="25" r="6" fill="white" />
        <circle cx="190" cy="65" r="6" fill="white" />
        <circle cx="165" cy="145" r="6" fill="white" />
        <circle cx="75" cy="145" r="6" fill="white" />
        <circle cx="50" cy="65" r="6" fill="white" />
      </svg>
    </div>
  );
}

function EnterpriseIllustration() {
  return (
    <div className="w-full h-56 sm:h-64 md:h-72 bg-[#e5e4dc] border border-black/10 rounded-xs flex items-center justify-center relative overflow-hidden my-5 group-hover:border-[#0f172a]/40 transition-colors">
      <svg className="w-full h-full p-6 text-[#0f172a]" viewBox="0 0 240 180" fill="none">
        {/* Grid Pattern */}
        <pattern id="grid-enterprise" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-enterprise)" />

        {/* Isometric Enterprise Platform */}
        <polygon points="120,25 195,65 120,105 45,65" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="120,55 195,95 120,135 45,95" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Structural Pillars */}
        <line x1="45" y1="65" x2="45" y2="95" stroke="currentColor" strokeWidth="1.5" />
        <line x1="195" y1="65" x2="195" y2="95" stroke="currentColor" strokeWidth="1.5" />
        <line x1="120" y1="105" x2="120" y2="135" stroke="currentColor" strokeWidth="1.5" />

        <circle cx="120" cy="65" r="8" fill="currentColor" />
        <path d="M 15 25 L 15 15 L 25 15 M 225 25 L 225 15 L 215 15 M 15 155 L 15 165 L 25 165 M 225 155 L 225 165 L 215 165" stroke="currentColor" strokeWidth="1.5" />
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
        <span className={`font-display text-[46px] sm:text-[54px] font-semibold leading-none tracking-tight ${isPopular ? "text-white" : "text-[#0f172a]"}`}>
          {value}
        </span>
      </div>
    );
  }
  return (
    <div className={`font-display text-[46px] sm:text-[54px] font-semibold leading-none tracking-tight ${isPopular ? "text-white" : "text-[#0f172a]"}`}>
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
    <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 border-t border-line" ref={sectionRef}>
      <div className="max-w-[1380px] mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">06</span>
          <p className="section-label uppercase tracking-widest font-mono text-xs">ENGAGEMENTS</p>
        </div>

        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display text-[30px] sm:text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Choose the level of help that matches the size of the problem.
          </h2>
          <p className="text-muted mt-5 text-[15px] leading-relaxed text-pretty">
            Every engagement starts live in week 2. No six-month builds. No waiting until next quarter.
          </p>
        </div>

        {/* Pricing Cards — Expansive Wide Layout matching Reference Screenshot */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const isPopular = plan.featured;
            const IllustrationComp = illustrations[i];
            
            return (
              <motion.div
                key={plan.name}
                className={`reveal group relative flex flex-col justify-between p-6 sm:p-8 border transition-all duration-300 ${
                  isPopular
                    ? "bg-[#1d635e] border-[#1d635e] text-white shadow-2xl lg:scale-[1.02] z-10"
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
                  <div className="mt-4 mb-2">
                    <PriceDisplay price={plan.price} isPopular={isPopular} />
                    <p
                      className={`font-mono text-[11px] uppercase tracking-wider mt-2 ${
                        isPopular ? "text-white/80" : "text-slate-600"
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>

                  {/* Large Prominent Tech / Halftone Illustration Block */}
                  <IllustrationComp />

                  {/* Plan Description */}
                  <p
                    className={`text-[14px] leading-relaxed mb-6 font-body ${
                      isPopular ? "text-white/90" : "text-slate-700"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-3 border-t border-current/15 pt-6 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-[13.5px] leading-relaxed font-body ${
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
                  href="https://regicore.com/start"
                  className={`block w-full text-center font-mono text-[13px] font-semibold uppercase tracking-widest py-4 px-4 transition-all duration-300 border ${
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
        <p className="text-center text-muted text-[13px] mt-12 reveal leading-relaxed max-w-2xl mx-auto">
          Ownership and licensing terms are defined in the service agreement. Client data remains client-owned; proprietary systems and internal frameworks are licensed during the engagement.
        </p>
      </div>
    </section>
  );
}
