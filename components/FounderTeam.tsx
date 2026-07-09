"use client";
import { useEffect, useRef } from "react";
import { team } from "@/lib/content";

export default function FounderTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const founder = team[0];
  const rest = team.slice(1);

  return (
    <section className="py-20 md:py-28 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">01</span>
          <p className="section-label">The people</p>
        </div>

        <div className="mb-14 max-w-3xl reveal">
          <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
            Senior people, real accountability
          </h2>
        </div>

        {/* Founder card */}
        <div className="bg-ink text-paper p-8 sm:p-12 reveal">
          <div className="flex flex-col gap-5 max-w-2xl">
            <div>
              <h3 className="font-display text-[26px] font-medium text-rust">{founder.name}</h3>
              <p className="text-paper/60 text-sm mt-1">{founder.role}</p>
            </div>
            <p className="text-paper/80 text-[15px] leading-relaxed">{founder.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
