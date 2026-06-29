"use client";
import { useEffect, useRef } from "react";
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
    <section className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          {/* Overline: 12px uppercase, letter-spacing 0.12em */}
          <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[#8B8B9B] block mb-2 italic font-sans">
            why us
          </span>
          {/* H2: 40px */}
          <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink mt-1 mb-8">
            A boutique partner, enterprise output
          </h2>
          <div className="space-y-5">
            {whyPoints.map((w) => (
              <div key={w.title} className="flex gap-3 items-start group cursor-default">
                <span
                  className="text-[#7C3AED] mt-1 shrink-0 transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <div>
                  {/* H4-equivalent: 20px labels */}
                  <p className="text-[16px] font-semibold text-ink group-hover:text-[#7C3AED] transition-colors duration-300">
                    {w.title}
                  </p>
                  {/* Body: 15px, line-height 1.6 */}
                  <p className="text-[15px] leading-[1.6] text-muted mt-0.5">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison card — now premium-card style */}
        <div className="premium-card p-8 reveal">
          <h3 className="font-display text-[22px] font-medium text-ink mb-6">Regicore vs. the rest</h3>
          <div className="space-y-3 text-[15px]">
            {[
              ["Off-the-shelf SaaS", "You adapt to it"],
              ["Giant consultancy", "Slow & junior teams"],
              ["Generic dev shop", "No agentic depth"],
            ].map(([name, note]) => (
              <div
                key={name}
                className="flex justify-between bg-[#FAFAFB] border border-black/[0.04] rounded-xl px-4 py-3"
              >
                <span className="text-ink">{name}</span>
                <span className="text-muted">{note}</span>
              </div>
            ))}
            <div className="flex justify-between bg-[#7C3AED] text-white rounded-xl px-4 py-3 font-semibold shadow-[0_4px_15px_rgba(124,58,237,0.2)]">
              <span>Regicore</span>
              <span>Custom · fast · ROI-owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
