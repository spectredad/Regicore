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
      {/* ── Client logo strip ── */}
      <section className="py-10 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60 reveal text-xl font-display text-ink">
          <span>Kynthellos</span>
        </div>
      </section>
    </div>
  );
}
