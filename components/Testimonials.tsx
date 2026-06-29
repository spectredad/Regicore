"use client";
import { useEffect, useRef } from "react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
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
    <section className="py-20 px-5 bg-dark text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-lav/20 text-lav text-xs tracking-[0.2em] font-semibold px-4 py-2 rounded">
            SOCIAL PROOF
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mt-6">
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="bg-white/[0.06] border border-white/10 rounded-3xl p-7 reveal flex flex-col gap-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-lav text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              <blockquote className="text-white/80 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-display font-semibold text-ink text-sm shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
