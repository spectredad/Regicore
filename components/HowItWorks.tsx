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
    <section className="py-24 px-5 bg-dark text-white relative" ref={sectionRef}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-lav/20 text-lav text-xs tracking-[0.2em] font-semibold px-4 py-2 rounded">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mt-6">
            Built to deliver ROI, fast
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="rounded-xl p-5 border border-dashed border-white/20 bg-white/[0.03] reveal group hover:bg-white/[0.06] transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Perspective grid visual */}
              <div className="rounded-lg bg-[#2c2547] h-44 mb-5 relative overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-30 perspective-grid group-hover:opacity-50 transition-opacity"
                  aria-hidden="true"
                />
                <div className="relative w-20 h-20 rounded bg-lav/80 shadow-lg flex items-center justify-center pulse-node">
                  <div className="w-12 h-12 rounded-full border-2 border-white/70" />
                </div>
              </div>

              <p className="text-lav text-xs tracking-widest font-semibold mb-2">{s.step}</p>
              <h3 className="font-display text-xl font-semibold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
