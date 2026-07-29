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

  return (
    <section className="py-20 md:py-28 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">01</span>
          <p className="section-label">The people</p>
        </div>

        {/* Founder card */}
        <div className="bg-navy-elevated border border-line p-8 sm:p-12 reveal">
          <div className="flex flex-col gap-5 max-w-2xl">
            <div>
              <h3 className="font-display text-[26px] font-medium text-ink">{founder.name}</h3>
              <p className="text-teal text-xs uppercase tracking-[0.12em] font-semibold mt-1">{founder.role}</p>
            </div>
            {founder.bio && <p className="text-muted text-[15px] leading-relaxed">{founder.bio}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
