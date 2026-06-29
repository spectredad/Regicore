"use client";
import { useEffect, useRef } from "react";
import { plans } from "@/lib/content";

function PriceDisplay({ price }: { price: string }) {
  if (price.startsWith("From ")) {
    const value = price.replace("From ", "");
    return (
      <div className="flex items-baseline gap-1.5">
        <span className="text-[16px] font-normal text-muted">From</span>
        <span className="font-display text-[36px] font-medium text-ink leading-[1.1] tracking-[-0.01em]">{value}</span>
      </div>
    );
  }
  return (
    <div className="font-display text-[36px] font-medium text-ink leading-[1.1] tracking-[-0.01em]">
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
    <section id="pricing" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[#8B8B9B] block mb-2 font-sans">
            engagement models
          </span>
          <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            Choose how we work together
          </h2>
          <p className="text-muted mt-3 max-w-lg mx-auto text-[16px] leading-[1.6]">
            Project-based or ongoing — no lock-in, success metrics agreed up front.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`premium-card p-[28px] reveal flex flex-col gap-6 relative ${
                plan.featured ? "pricing-featured" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#7C3AED] text-white text-[11px] uppercase tracking-[0.08em] font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Card titles: 28px (1.75rem), weight 500 */}
                <h3 className="font-display text-[28px] font-medium text-ink">{plan.name}</h3>
                <p className="text-muted text-sm mt-2">{plan.desc}</p>
              </div>

              <div>
                <PriceDisplay price={plan.price} />
                <div className="text-muted text-xs mt-1 uppercase tracking-wider">{plan.period}</div>
              </div>

              {/* Feature list: 15px, line-height 1.7. Tighten bullet spacing. */}
              <ul className="space-y-1.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] leading-[1.7] text-ink/80">
                    <span className="text-[#7C3AED] mt-1 shrink-0" aria-hidden="true">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center font-semibold py-3.5 rounded-xl transition-all text-sm ${
                  plan.featured
                    ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-[0_4px_15px_rgba(124,58,237,0.2)]"
                    : "bg-ink/5 text-ink hover:bg-ink/10"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8 reveal">
          All plans include full code ownership · no vendor lock-in · you keep everything
        </p>
      </div>
    </section>
  );
}
