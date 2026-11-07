"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    stepLabel: "Step 1",
    num: "01",
    title: "Tell us what you do.",
    illustration: (
      <svg viewBox="0 0 100 80" className="w-24 h-20 text-ink/75 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 45L40 45L65 60L65 20L40 35L25 35Z" />
        <path d="M30 45L30 55C30 58 33 60 36 60L40 60" />
        <path d="M72 32C76 36 76 44 72 48" />
        <path d="M78 26C84 32 84 48 78 54" />
        <path d="M84 20C92 28 92 52 84 60" />
      </svg>
    ),
    body: "Give us your business name and tell us what you do and where you work. If we already have a client in your niche in that city, we’ll tell you up front.",
  },
  {
    stepLabel: "Step 2",
    num: "02",
    title: "We see what your customers see.",
    illustration: (
      <svg viewBox="0 0 100 80" className="w-24 h-20 text-ink/75 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 20L48 10" />
        <path d="M36 24L28 16" />
        <path d="M60 24L68 16" />
        <path d="M50 30L35 65L45 55L55 70L60 67L50 52L62 52Z" />
      </svg>
    ),
    body: "We look up your service across town on Google Maps and ask AI who it would call. Then we check where your calls go after closing. We’ll walk you through what we find on a free call.",
  },
  {
    stepLabel: "Step 3",
    num: "03",
    title: "We set up your phone and calendar.",
    illustration: (
      <svg viewBox="0 0 100 80" className="w-24 h-20 text-ink/75 stroke-current" fill="none" strokeWidth="1.5">
        <ellipse cx="50" cy="40" rx="36" ry="26" />
        <ellipse cx="50" cy="40" rx="24" ry="17" />
        <ellipse cx="50" cy="40" rx="12" ry="8" />
        <circle cx="50" cy="40" r="3" fill="currentColor" />
      </svg>
    ),
    body: "One onboarding call. We spend the week working on your Google Business Profile and setting up your AI receptionist. You get the first month’s content to approve before it goes live.",
  },
  {
    stepLabel: "Step 4",
    num: "04",
    title: "You see what got booked.",
    illustration: (
      <svg viewBox="0 0 100 80" className="w-24 h-20 text-ink/75 stroke-current" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 62C40 62 48 45 58 35C66 26 75 24 85 24" />
        <path d="M76 18L86 24L77 30" />
      </svg>
    ),
    body: "Appointments start going into your calendar in the first few days. Each month you see how many calls got answered and how many became bookings or paying customers.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-paper px-5 pt-8 pb-20 sm:pt-10 sm:pb-28 lg:pt-12 lg:pb-36 border-t border-line-low" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">

        {/* Section eyebrow pill */}
        <div className="reveal flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink/55">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            HOW IT WORKS
          </span>
        </div>

        {/* Headline */}
        <div className="reveal text-center mb-4">
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            From application to <em>answered calls</em>
          </h2>
        </div>

        {/* Intro line */}
        <div className="reveal text-center mb-14 sm:mb-16">
          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Your intake goes live in under two weeks.
          </p>
        </div>

        {/* 4-Column Card Grid (matching the second reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal rounded-3xl border border-line-low bg-surface-elevated p-5 sm:p-6 xl:p-8 flex flex-col shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Step indicator */}
              <div>
                <span className="text-xs font-mono font-medium text-muted/75 uppercase tracking-wider">
                  {step.stepLabel}
                </span>
              </div>

              {/* Center Hand-drawn style illustration */}
              <div className="py-4 sm:py-5 flex items-center justify-center">
                {step.illustration}
              </div>

              {/* Bottom Title & Description */}
              <div className="pt-2">
                <h3 className="font-sans text-base sm:text-lg font-semibold text-ink mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-muted font-body">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
