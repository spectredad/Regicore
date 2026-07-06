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
        <div className="bg-ink text-paper p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center mb-px reveal">
          <div className="flex flex-col gap-5">
            <div
              className="w-20 h-20 border border-paper/25 flex items-center justify-center font-display font-medium text-paper text-2xl"
              aria-hidden="true"
            >
              {founder.initials}
            </div>
            <div>
              <h3 className="font-display text-[26px] font-medium text-paper">{founder.name}</h3>
              <p className="text-paper/60 text-sm mt-1">{founder.role}</p>
            </div>
            <p className="text-paper/80 text-[15px] leading-relaxed">{founder.bio}</p>
          </div>
          <div className="flex flex-wrap gap-3 content-start">
            {founder.credentials.map((c) => (
              <span
                key={c}
                className="border border-paper/25 text-paper/80 text-[13px] px-4 py-2 font-medium"
              >
                {c}
              </span>
            ))}
            <div className="w-full mt-4 border-t border-paper/15 pt-4">
              <p className="text-paper/50 text-xs leading-relaxed">
                Every engagement is personally overseen. You&apos;ll always have a senior
                engineer in the room, not a junior handed your project on day 3.
              </p>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
          {rest.map((member, i) => (
            <div
              key={member.name}
              className="bg-surface p-8 reveal flex flex-col gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 border border-line flex items-center justify-center font-display font-medium text-ink"
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <div>
                <h4 className="font-display text-[20px] font-medium text-ink">{member.name}</h4>
                <p className="text-rust text-[11px] uppercase tracking-[0.12em] font-semibold mt-1">
                  {member.role}
                </p>
              </div>
              <p className="text-[15px] text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
