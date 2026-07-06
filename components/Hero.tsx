"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const process = [
  { num: "01", label: "Discover", desc: "Map your workflows and find the highest-ROI automation." },
  { num: "02", label: "Build", desc: "Senior engineers ship a custom system in focused sprints." },
  { num: "03", label: "Deploy", desc: "Live in your stack in weeks, with guardrails built in." },
  { num: "04", label: "Optimise", desc: "Agents learn from outcomes and sharpen ROI over time." },
];

export default function Hero() {
  const revealRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    revealRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section style={{ y }} className="pt-36 md:pt-44 pb-0 px-5" ref={revealRef}>
      <div className="max-w-6xl mx-auto">
        {/* Masthead */}
        <div className="reveal">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10 md:mb-14">
            <p className="section-label">Boutique AI Agentic Studio</p>
            <p className="section-label hidden sm:block">Est. results, not experiments</p>
          </div>

          <h1 className="font-display font-medium text-ink text-balance leading-[1.02] tracking-[-0.025em] text-[44px] sm:text-[64px] md:text-[84px] max-w-5xl">
            AI agents that do{" "}
            <br className="hidden sm:block" />
            <span className="italic font-light">real work</span>, built by{" "}
            <br className="hidden sm:block" />a studio that{" "}
            <span className="text-rust">owns the outcome</span>.
          </h1>
        </div>

        {/* Sub + CTAs */}
        <div className="reveal grid md:grid-cols-2 gap-8 items-end mt-10 md:mt-14">
          <p className="text-[17px] leading-relaxed text-muted max-w-[480px] text-pretty">
            Regicore designs, ships and optimises custom AI systems: voice callers, outreach
            engines and agentic workflows. Senior engineers only, success metrics agreed
            before a line of code is written.
          </p>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#book"
              className="bg-ink text-paper font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-4 hover:bg-rust transition-colors duration-300"
            >
              Book a call
            </a>
            <a
              href="#services"
              className="border border-ink text-ink font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-4 hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* Numbered process strip */}
        <div className="reveal mt-16 md:mt-24 border-t border-line">
          <ol className="grid grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li
                key={p.num}
                className={`py-8 pr-6 ${i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""} ${
                  i % 2 === 1 ? "border-l border-line pl-6 lg:pl-6" : ""
                }`}
              >
                <span className="index-num text-[15px] block mb-3">{p.num}</span>
                <h2 className="font-display text-[20px] font-medium text-ink mb-1.5">{p.label}</h2>
                <p className="text-[13.5px] leading-relaxed text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
