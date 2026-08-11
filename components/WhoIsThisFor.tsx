"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const goodFit = [
  "Mid-to-large sized estate planning or trust administration firm",
  "Handles a high volume of document generation, probate cases, and client intake",
  "Has a dedicated budget set aside for operational upgrades and AI automation",
  "Values a streamlined user experience (UX) for their clients and internal team",
  "Looking to scale caseload capacity without proportionately increasing headcount",
  "Wants to start implementing systems within the next 14 to 30 days",
];

const badFit = [
  "Solo practitioner or early-stage boutique firm",
  "Low volume of cases that require purely bespoke, non-standardized drafting",
  "No budget set aside for software or technological improvements",
  "Content with current manual administrative overhead and legacy systems",
  "Not actively looking to grow the firm's capacity or client base",
  "Not looking to onboard new systems for another few months",
];

export default function WhoIsThisFor() {
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
    <section className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef} id="who">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">04</span>
          <p className="section-label">Who is this for?</p>
        </div>

        {/* Two-column comparison block */}
        <motion.div
          className="reveal grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-black/8 shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* LEFT — Good fit (light panel) */}
          <div className="bg-[#f0efe9] p-8 sm:p-10 md:p-12">
            {/* Panel label */}
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70 mb-5">
              GOOD FIT
            </p>

            {/* Panel title */}
            <h3 className="font-display text-[36px] sm:text-[44px] font-medium text-ink leading-[1.05] tracking-[-0.02em] mb-10">
              Good fit
            </h3>

            {/* List */}
            <ul className="space-y-0 divide-y divide-black/8">
              {goodFit.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 py-5"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Teal check accent */}
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] text-ink/90 leading-relaxed font-body">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Bad fit (strong teal/ink panel) */}
          <div className="bg-[#0f172a] p-8 sm:p-10 md:p-12 relative overflow-hidden">
            {/* Subtle texture lines in background */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 24px)",
              }}
              aria-hidden="true"
            />

            {/* Panel label */}
            <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.18em] !text-[#f8fafc] mb-5" style={{ color: '#f8fafc' }}>
              BAD FIT
            </p>

            {/* Panel title */}
            <h3 className="relative z-10 font-display text-[36px] sm:text-[44px] font-medium !text-[#f8fafc] leading-[1.05] tracking-[-0.02em] mb-10" style={{ color: '#f8fafc' }}>
              Bad fit
            </h3>

            {/* List */}
            <ul className="relative z-10 space-y-0 divide-y divide-[#ffffff]/30">
              {badFit.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 py-5"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Bright orange cross accent for contrast */}
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#ff7a59]/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#ff7a59]" viewBox="0 0 12 12" fill="none">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] text-[#ffffff] leading-relaxed font-body">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
