"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { whyPoints } from "@/lib/content";

export default function WhyRegicore() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">04</span>
          <p className="section-label">The studio</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance mb-10">
              A boutique partner, enterprise output
            </h2>
            <ol className="border-t border-line">
              {whyPoints.map((w, i) => (
                <motion.li
                  key={w.title}
                  className="flex gap-5 items-baseline py-5 border-b border-line group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <span className="index-num text-[13px] shrink-0" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[17px] font-medium text-ink group-hover:text-rust transition-colors duration-300">
                      {w.title}
                    </p>
                    <p className="text-[15px] leading-relaxed text-muted mt-1">{w.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Comparison ledger */}
          <div className="editorial-card p-8 md:p-10 reveal">
            <p className="section-label mb-2">The alternative</p>
            <h3 className="font-display text-[26px] font-medium text-ink mb-8">Regicore vs. the rest</h3>
            <div className="text-[15px]">
              {[
                ["Off-the-shelf SaaS", "You adapt to it"],
                ["Giant consultancy", "Slow, junior teams"],
                ["Generic dev shop", "No agentic depth"],
              ].map(([name, note]) => (
                <div key={name} className="flex justify-between items-baseline py-4 border-b border-line">
                  <span className="text-ink">{name}</span>
                  <span className="text-muted text-[14px]">{note}</span>
                </div>
              ))}
              <div className="flex justify-between items-baseline py-5 bg-ink text-paper px-5 mt-5 font-medium">
                <span className="font-display text-[18px]">Regicore</span>
                <span className="text-[13px] uppercase tracking-[0.08em] text-paper/80">
                  Custom &middot; fast &middot; ROI-owned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
