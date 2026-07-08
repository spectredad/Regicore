"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { plans } from "@/lib/content";

function PriceDisplay({ price, dark }: { price: string; dark?: boolean }) {
  const inkClass = dark ? "text-white" : "text-ink";
  if (price.startsWith("From ")) {
    const value = price.replace("From ", "");
    return (
      <div className="flex items-baseline gap-2">
        <span className={`text-[15px] font-normal ${dark ? "text-paper/50" : "text-muted"}`}>From</span>
        <span className={`font-display text-[40px] font-medium ${inkClass} leading-none tracking-[-0.02em]`}>{value}</span>
      </div>
    );
  }
  return (
    <div className={`font-display text-[40px] font-medium ${inkClass} leading-none tracking-[-0.02em]`}>
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

  return (
    <section id="pricing" className="py-24 md:py-32 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">06</span>
          <p className="section-label">Engagements</p>
        </div>

        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Choose how we work together
          </h2>
          <p className="text-muted mt-5 text-[17px] leading-relaxed text-pretty">
            Retainer-based engagements with first deployment in week 2 and measurable results within 30 days.
          </p>
        </div>

        <motion.div className="grid md:grid-cols-3 gap-px bg-line border border-line items-stretch">
          {plans.map((plan, i) => {
            const dark = plan.featured;
            return (
              <motion.div
                key={plan.name}
                className={`p-8 md:p-10 reveal flex flex-col gap-8 relative ${
                  dark ? "bg-ink" : "bg-surface"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`index-num text-[13px] ${dark ? "text-rust" : ""}`} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {plan.badge && (
                    <span className="bg-rust text-paper text-[10px] uppercase tracking-[0.12em] font-semibold px-3 py-1.5">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`font-display text-[28px] font-medium tracking-tight ${dark ? "text-rust" : "text-ink"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mt-3 leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div>
                  <PriceDisplay price={plan.price} dark={dark} />
                  <div className={`text-xs mt-2 uppercase tracking-[0.1em] ${dark ? "text-paper/40" : "text-muted"}`}>
                    {plan.period}
                  </div>
                </div>

                <ul className={`flex-1 border-t ${dark ? "border-paper/15" : "border-line"}`}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-baseline gap-3 text-[14.5px] leading-relaxed py-2.5 border-b ${
                        dark ? "text-paper/80 border-paper/15" : "text-ink/80 border-line"
                      }`}
                    >
                      <span className="text-rust shrink-0 text-[11px]" aria-hidden="true">&#9632;</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`block text-center font-semibold py-4 transition-colors duration-300 text-[13px] uppercase tracking-[0.08em] ${
                    dark
                      ? "bg-paper text-ink hover:bg-rust hover:text-paper"
                      : "border border-ink text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-muted text-sm mt-8 reveal">
          Ownership and licensing terms are defined in the service agreement. Client data remains client-owned; proprietary systems and internal frameworks are licensed during the engagement.
        </p>
      </div>
    </section>
  );
}
