"use client";
import { useEffect, useRef } from "react";

export default function TrustExtras() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Client reference strip */}
      <section className="py-12 border-y border-line mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 reveal">
          <p className="section-label">In production with</p>
          <span className="font-display text-2xl text-ink">Kynthellos</span>
          <p className="section-label hidden sm:block">and teams shipping quietly</p>
        </div>
      </section>
    </div>
  );
}
