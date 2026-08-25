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

        {/* Minimal Anthropic-style top sprout icon */}
        <div className="reveal flex justify-center mb-6">
          <svg className="w-9 h-9 text-ink/75" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 27V13M16 13C16 8.5 11 6.5 6.5 9.5C6.5 14.5 11.5 16.5 16 13ZM16 13C16 8.5 21 6.5 25.5 9.5C25.5 14.5 20.5 16.5 16 13Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 27H21" />
          </svg>
        </div>

        {/* Section Headline */}
        <div className="reveal text-center mb-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-ink leading-[1.08]">
            Two offers. One team.
          </h2>
        </div>

        {/* Intro line */}
        <div className="reveal text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Rank on Google Maps, or run the full practice system, built and operated by the same people.
          </p>
        </div>

        {/* Top Centered Action Button */}
        <div className="reveal flex items-center justify-center gap-3 mb-12 sm:mb-16">
          <a
            href="https://regicore.com/start"
            className="rounded-xl bg-ink text-paper font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider py-3 px-6 shadow hover:bg-teal transition-colors duration-200"
          >
            APPLY NOW
          </a>
        </div>

        {/* Two Side-by-Side Pricing Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT CARD — Maps Rank */}
          <div className="rounded-3xl border border-line-low bg-surface-elevated p-8 sm:p-9 shadow-[0_4px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full">
            <div>
              {/* Header & Price */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                    Maps Rank
                  </h3>
                  <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                    $900 <span className="text-xs font-mono text-muted uppercase font-normal">/ MONTH</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Top 3 in Google Maps within 90 days.<br />If not, we will work with you for free until we get you there.
                </p>
              </div>

              {/* Spec Table Rows */}
              <div className="border-t border-line-low divide-y divide-line-low text-sm">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Price</span>
                  <span className="font-medium text-ink">$900 per month</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Guarantee</span>
                  <span className="font-medium text-ink text-right">Top 3 in 90 days or we work free</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Focus</span>
                  <span className="font-medium text-ink">Google Maps / local pack</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Exclusivity</span>
                  <span className="font-medium text-ink">One firm per practice area</span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-2">
              <a
                href="https://regicore.com/start"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-ink text-paper font-sans text-sm font-semibold uppercase tracking-wider py-4 px-6 shadow hover:bg-teal transition-colors duration-200 text-center"
              >
                <span>APPLY NOW</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT CARD — Full System */}
          <div className="rounded-3xl border border-line-low bg-surface-elevated p-8 sm:p-9 shadow-[0_4px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between h-full">
            <div>
              {/* Header & Price */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink">
                    Full System
                  </h3>
                  <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                    $3,500 <span className="text-xs font-mono text-muted uppercase font-normal">/ MONTH</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  From $3,500 per month. No setup fee. You own the website, the content, the reviews, and the data.
                </p>
              </div>

              {/* Spec Table Rows */}
              <div className="border-t border-line-low divide-y divide-line-low text-sm">
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Price</span>
                  <span className="font-medium text-ink">From $3,500 per month</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Focus</span>
                  <span className="font-medium text-ink text-right">Lead intake system + local SEO</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Asset ownership</span>
                  <span className="font-medium text-ink text-right">You own website, content, reviews, and data</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Response speed</span>
                  <span className="font-medium text-ink">Under 60 seconds (24/7)</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-muted">Exclusivity</span>
                  <span className="font-medium text-ink">One firm per practice area</span>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-2">
              <a
                href="https://regicore.com/start"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-ink text-paper font-sans text-sm font-semibold uppercase tracking-wider py-4 px-6 shadow hover:bg-teal transition-colors duration-200 text-center"
              >
                <span>APPLY NOW</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
