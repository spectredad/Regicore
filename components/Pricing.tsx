"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
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
    <section id="pricing" className="bg-paper px-5 py-20 sm:py-28 lg:py-36 text-ink border-t border-line-low" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">

        {/* Section Eyebrow & Header */}
        <div className="reveal max-w-3xl mb-12 sm:mb-16">
          <p className="section-label text-ink/55 mb-3">06 Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-ink leading-[1.08]">
            One system. One price.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            Both halves of the problem, built and run by the same team.
          </p>
        </div>

        {/* Main Grid: Left Elevated Card + Right Features & Guarantee Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Elevated Pricing Card (styled after the reference image) */}
          <div className="lg:col-span-5 reveal">
            <div className="rounded-3xl border border-line-low bg-surface-elevated p-7 sm:p-9 shadow-[0_20px_60px_rgba(15,23,42,0.07)] flex flex-col justify-between">
              <div>
                {/* Brand / Tier Header */}
                <div className="flex items-center justify-between pb-6 border-b border-line-low">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink uppercase">
                    REGICORE
                  </h3>
                  <span className="rounded-full bg-teal/10 text-teal font-mono text-[11px] font-semibold uppercase px-3 py-1 tracking-wider">
                    Full System
                  </span>
                </div>

                {/* Price Display Rows matching the reference card */}
                <div className="py-6 border-b border-line-low space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">Price</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
                          $3,500
                        </span>
                        <span className="text-xs font-mono text-muted uppercase">/ mo</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted/80">Monthly Retainer</span>
                  </div>

                  <div className="flex items-baseline justify-between pt-2 border-t border-line-low/60">
                    <span className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                      $0
                    </span>
                    <span className="text-xs font-medium text-muted/80">No Setup Fee</span>
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="py-6 space-y-3.5 text-[13.5px] leading-relaxed text-ink/85">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal font-bold shrink-0 mt-0.5">✓</span>
                    <span>Complete Google & AI Search Presence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal font-bold shrink-0 mt-0.5">✓</span>
                    <span>24/7 Intake & Instant Consultation Booking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal font-bold shrink-0 mt-0.5">✓</span>
                    <span>Automated Review Requests & Response Engine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal font-bold shrink-0 mt-0.5">✓</span>
                    <span>Unified Monthly Performance Report</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal font-bold shrink-0 mt-0.5">✓</span>
                    <span>You own the website, content, reviews & data</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="https://regicore.com/start"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-ink text-paper font-sans text-sm font-semibold uppercase tracking-wider py-4 px-6 shadow-md hover:bg-teal transition-colors duration-200 text-center"
                >
                  <span>APPLY NOW</span>
                  <span aria-hidden="true">→</span>
                </a>
                <p className="text-center text-[11.5px] text-muted mt-3">
                  One firm per practice area in each city.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Breakdown, One Report & Guarantee */}
          <div className="lg:col-span-7 space-y-6">

            {/* Feature 01: Get found */}
            <div className="reveal rounded-2xl border border-line-low bg-surface-elevated p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex size-7 items-center justify-center rounded-lg bg-teal/10 text-teal text-xs font-mono font-bold">
                  01
                </div>
                <h3 className="font-sans text-base font-semibold text-ink">Get found</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Google Business Profile optimized and posted to every week. Citations built across the directories that feed Google and AI, including Avvo, Justia, and your state bar. A review engine that requests a review after every closed matter and handles the responses. Schema markup and content structured so AI engines can quote you. One or two practice area pages a month, written for your city, approved by you before publishing. Ranking coverage across your city tracked and reported monthly.
              </p>
            </div>

            {/* Feature 02: Never miss */}
            <div className="reveal rounded-2xl border border-line-low bg-surface-elevated p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex size-7 items-center justify-center rounded-lg bg-teal/10 text-teal text-xs font-mono font-bold">
                  02
                </div>
                <h3 className="font-sans text-base font-semibold text-ink">Never miss</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Every call answered in under 60 seconds, day or night. The system qualifies the caller, books the consultation, and logs the matter type. Missed call text back fires within seconds on any dropped call. Automated follow up on every inquiry that does not book on first contact. Review requests sent after every closed matter.
              </p>
            </div>

            {/* Feature 03: One report */}
            <div className="reveal rounded-2xl border border-line-low bg-surface-elevated p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex size-7 items-center justify-center rounded-lg bg-teal/10 text-teal text-xs font-mono font-bold">
                  03
                </div>
                <h3 className="font-sans text-base font-semibold text-ink">One report</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Calls answered. Consultations booked. Cases signed. Rankings and AI mentions on the same page.
              </p>
            </div>

            {/* Guarantee Box */}
            <div className="reveal rounded-2xl border-2 border-coral-accent/30 bg-coral-accent/5 p-6 sm:p-7">
              <div className="flex items-start gap-3.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-coral-accent text-paper mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-base font-semibold text-ink mb-1">
                    Every call answered in under 60 seconds, day or night, or that month is free.
                  </h4>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    An SEO agency cannot make this promise, because they never touch your phones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust, Opt-Out & Exclusivity Footnotes */}
        <div className="reveal mt-12 sm:mt-16 pt-8 border-t border-line-low grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5 justify-center md:justify-start text-xs sm:text-sm text-muted">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface text-ink text-[11px] font-bold">✓</span>
            <span><strong>Thirty day opt out</strong> on your first term. Cancel and keep everything we built.</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start text-xs sm:text-sm text-muted">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface text-ink text-[11px] font-bold">✓</span>
            <span><strong>Exclusivity:</strong> One firm per practice area in each city. Once your city is taken, it stays taken.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
