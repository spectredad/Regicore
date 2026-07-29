"use client";
import { useEffect, useRef } from "react";
import { steps } from "@/lib/content";

export default function HowItWorks() {
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
    <section className="py-24 px-5 bg-midnight text-ink relative border-t border-line" ref={sectionRef}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244, 246, 245, 0.16) 1px,transparent 1px),linear-gradient(90deg,rgba(244, 246, 245, 0.16) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block border border-line text-teal text-xs tracking-[0.2em] font-semibold px-4 py-2 uppercase">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-ink mt-6">
            Built to deliver ROI, fast
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="editorial-card p-6 reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Architectural node visual */}
              <div className="rounded-lg bg-navy-elevated border border-line h-44 mb-5 relative overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(244, 246, 245, 0.16) 1px,transparent 1px),linear-gradient(90deg,rgba(244, 246, 245, 0.16) 1px,transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative w-16 h-16 rounded border border-line bg-surface flex items-center justify-center shadow-lg">
                  <span className="font-display font-medium text-teal text-xl">{s.step.replace("STEP ", "")}</span>
                </div>
              </div>

              <p className="text-teal text-xs tracking-widest font-semibold mb-2">{s.step}</p>
              <h3 className="font-display text-xl font-medium text-ink mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
