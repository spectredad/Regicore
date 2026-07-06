"use client";
import { useEffect, useRef } from "react";
import { cases } from "@/lib/content";

export default function CaseStudies() {
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
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="premium-card p-[28px] reveal flex flex-col gap-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[24px] font-semibold text-ink leading-tight">
                  {c.client}
                </span>
                <span className="text-[11px] uppercase tracking-[0.08em] bg-[rgba(124,58,237,0.06)] text-[#7C3AED] px-3 py-1 rounded-full font-semibold border border-[rgba(124,58,237,0.1)]">
                  {c.tag}
                </span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-[11px] tracking-[0.1em] font-semibold text-[#7C3AED] uppercase mb-1">
                    Problem
                  </p>
                  <p className="text-[15px] text-[#4B5563] leading-[1.6]">
                    {c.problem}
                  </p>
                </div>
                <div className="bg-[rgba(124,58,237,0.03)] border border-[rgba(124,58,237,0.06)] rounded-xl p-3">
                  <p className="text-[11px] tracking-[0.1em] font-semibold text-[#7C3AED] uppercase mb-1">
                    Built
                  </p>
                  <p className="text-[15px] text-[#4B5563] leading-[1.6]">
                    {c.built}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.1em] font-semibold text-[#7C3AED] uppercase mb-1">
                    Result
                  </p>
                  <p className="text-[15px] font-semibold text-ink leading-[1.6]">
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
