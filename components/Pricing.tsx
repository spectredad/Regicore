"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { plans } from "@/lib/content";

function PriceDisplay({ price }: { price: string }) {
  if (price.startsWith("From ")) {
    const value = price.replace("From ", "");
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-[13px] font-normal text-[#94a3b8]">From</span>
        <span className="font-display text-[36px] sm:text-[42px] font-medium text-white leading-none tracking-[-0.02em]">
          {value}
        </span>
      </div>
    );
  }
  return (
    <div className="font-display text-[36px] sm:text-[42px] font-medium text-white leading-none tracking-[-0.02em]">
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
    <section id="pricing" className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">06</span>
          <p className="section-label">Engagements</p>
        </div>

        <div className="max-w-2xl mb-14 reveal">
          <h2 className="font-display text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Pick The Level Of Help You Actually Need.
          </h2>
          <p className="text-muted mt-5 text-[15px] leading-relaxed text-pretty">
            Every engagement starts live in week 2. No 6-month build cycles, no &apos;we&apos;ll get to it next quarter.&apos;
          </p>
        </div>

        {/* Pricing cards — dark card style */}
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => {
            const isPopular = plan.featured;
            return (
              <motion.div
                key={plan.name}
                className={`reveal relative rounded-2xl flex flex-col overflow-hidden ${
                  isPopular
                    ? "bg-[#0f172a] ring-2 ring-teal/40"
                    : "bg-[#1e293b]"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-teal text-white text-[10px] uppercase tracking-[0.1em] font-semibold px-3 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex flex-col gap-6 flex-1">
                  {/* Plan name */}
                  <h3 className="font-display text-[22px] sm:text-[24px] font-medium text-white/90 italic">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div>
                    <PriceDisplay price={plan.price} />
                    <p className="text-[12px] mt-2 uppercase tracking-[0.08em] text-[#94a3b8]">
                      {plan.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed text-[#94a3b8] border-t border-white/10 pt-5">
                    {plan.desc}
                  </p>

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[13px] leading-relaxed text-[#cbd5e1]"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 shrink-0 text-teal"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#book"
                    className={`block w-full text-center font-semibold py-3.5 rounded-lg transition-all duration-300 text-[13px] uppercase tracking-[0.06em] ${
                      isPopular
                        ? "bg-teal text-white hover:bg-teal/90 shadow-lg shadow-teal/20"
                        : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-muted text-[13px] mt-8 reveal leading-relaxed max-w-2xl mx-auto">
          Ownership and licensing terms are defined in the service agreement. Client data remains client-owned; proprietary systems and internal frameworks are licensed during the engagement.
        </p>
      </div>
    </section>
  );
}
