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
    <section className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center reveal">
          <p className="font-script text-2xl text-muted">the team behind it:</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mt-1">
            Senior people, real accountability
          </h2>
        </div>

        {/* Founder card */}
        <div className="bg-ink text-white rounded-[32px] p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center mb-8 reveal">
          <div className="flex flex-col gap-5">
            <div
              className={`w-20 h-20 rounded-2xl ${founder.color} flex items-center justify-center font-display font-semibold text-ink text-2xl`}
              aria-hidden="true"
            >
              {founder.initials}
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">{founder.name}</h3>
              <p className="text-white/60 text-sm mt-1">{founder.role}</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">{founder.bio}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {founder.credentials.map((c) => (
              <span
                key={c}
                className="bg-white/10 text-white/80 text-sm px-4 py-2 rounded-xl font-medium"
              >
                {c}
              </span>
            ))}
            <div className="w-full mt-4">
              <p className="text-white/40 text-xs">
                Every engagement is personally overseen. You'll always have a senior engineer in the room — not a junior handed your project on day 3.
              </p>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {rest.map((member, i) => (
            <div
              key={member.name}
              className="bg-peach rounded-3xl p-6 reveal flex flex-col gap-4"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${member.color} flex items-center justify-center font-display font-semibold text-ink`}
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-ink">{member.name}</h4>
                <p className="text-muted text-xs mt-0.5">{member.role}</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
