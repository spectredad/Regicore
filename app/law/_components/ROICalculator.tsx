"use client";

import { useState, useEffect, useRef } from "react";

function formatCurrency(n: number) {
  if (n >= 1_000_000) {
    const formatted = (n / 1_000_000).toFixed(1);
    return `$${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}M`;
  }
  if (n >= 1_000) {
    return `$${Math.round(n / 1_000)}k`;
  }
  return `$${Math.round(n).toLocaleString()}`;
}

export default function ROICalculator() {
  const [calls, setCalls] = useState(60);
  const [missedPercent, setMissedPercent] = useState(35);
  const [signPercent, setSignPercent] = useState(20);
  const [fee, setFee] = useState(6000);
  const [showTooltip, setShowTooltip] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Formula: calls * (missed% / 100) * (sign% / 100) * fee * 12
  const annualLoss = calls * (missedPercent / 100) * (signPercent / 100) * fee * 12;

  return (
    <section id="estimate" className="bg-paper px-5 py-20 sm:py-28 lg:py-36 text-ink border-t border-line-low" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        
        {/* Section Eyebrow */}
        <div className="reveal mb-6">
          <p className="section-label text-ink/55">07 ESTIMATE WHAT YOU ARE LOSING</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headline, Intro, Sliders */}
          <div className="lg:col-span-7 reveal">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.12] tracking-[-0.03em] text-ink mb-4">
              What are the calls you missed last month actually worth?
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-xl mb-10">
              Move the sliders. This is the fee revenue that went to the firm one position above you, based on your own numbers.
            </p>

            {/* Sliders Container */}
            <div className="space-y-7 sm:space-y-8">
              
              {/* Slider 1: Calls */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-calls" className="text-sm font-medium text-ink">
                    Calls to your firm per month
                  </label>
                  <span className="font-display text-lg font-semibold text-teal">
                    {calls}
                  </span>
                </div>
                <input
                  id="slider-calls"
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={calls}
                  onChange={(e) => setCalls(Number(e.target.value))}
                  aria-label="Calls to your firm per month"
                />
                <div className="flex justify-between text-xs text-muted/70 mt-1.5">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Slider 2: Percent Unanswered */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-missed" className="text-sm font-medium text-ink">
                    Percent of calls that go unanswered
                  </label>
                  <span className="font-display text-lg font-semibold text-teal">
                    {missedPercent}%
                  </span>
                </div>
                <input
                  id="slider-missed"
                  type="range"
                  min={0}
                  max={60}
                  step={1}
                  value={missedPercent}
                  onChange={(e) => setMissedPercent(Number(e.target.value))}
                  aria-label="Percent of calls that go unanswered"
                />
                <div className="flex justify-between text-xs text-muted/70 mt-1.5">
                  <span>0%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Slider 3: Percent Sign */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-sign" className="text-sm font-medium text-ink">
                    Percent of answered calls that sign
                  </label>
                  <span className="font-display text-lg font-semibold text-teal">
                    {signPercent}%
                  </span>
                </div>
                <input
                  id="slider-sign"
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={signPercent}
                  onChange={(e) => setSignPercent(Number(e.target.value))}
                  aria-label="Percent of answered calls that sign"
                />
                <div className="flex justify-between text-xs text-muted/70 mt-1.5">
                  <span>1%</span>
                  <span>40%</span>
                </div>
              </div>

              {/* Slider 4: Average Fee */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor="slider-fee" className="text-sm font-medium text-ink">
                    Average fee per signed case
                  </label>
                  <span className="font-display text-lg font-semibold text-teal">
                    ${fee.toLocaleString()}
                  </span>
                </div>
                <input
                  id="slider-fee"
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={fee}
                  onChange={(e) => setFee(Number(e.target.value))}
                  aria-label="Average fee per signed case"
                />
                <div className="flex justify-between text-xs text-muted/70 mt-1.5">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Result Card */}
          <div className="lg:col-span-5 reveal lg:sticky lg:top-24">
            <div className="rounded-3xl border border-line-low bg-surface-elevated p-7 sm:p-9 shadow-[0_4px_30px_rgba(15,23,42,0.05)]">
              
              <p className="text-[11px] font-mono font-bold text-muted uppercase tracking-widest mb-4">
                ESTIMATED ANNUAL REVENUE LOST TO UNANSWERED CALLS
              </p>

              <div
                className="font-display text-5xl sm:text-6xl font-semibold text-ink tracking-tight leading-none mb-4"
                aria-live="polite"
              >
                {formatCurrency(annualLoss)}
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-body">
                That is revenue you already paid to generate. The free market check replaces this estimate with your actual missed call rate, pulled from your own phone lines.
              </p>

              {/* How we calculate this tooltip */}
              <div className="relative inline-block mb-6">
                <button
                  type="button"
                  onClick={() => setShowTooltip(!showTooltip)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="text-xs text-muted hover:text-ink underline underline-offset-4 transition-colors font-body cursor-pointer"
                  aria-expanded={showTooltip}
                >
                  How we calculate this
                </button>
                {showTooltip && (
                  <div className="absolute bottom-full left-0 mb-2 w-72 rounded-xl bg-ink text-paper p-3.5 text-xs leading-relaxed shadow-xl z-30">
                    <strong className="block mb-1 text-teal-300 font-semibold">Calculation Formula</strong>
                    Calls per month × Missed call percent × Sign percent × Average fee × 12 months. Your free market check replaces these estimates with exact figures from your actual phone lines.
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="https://regicore.com/start"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-ink text-paper font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider py-4 px-6 shadow hover:bg-teal transition-colors duration-200 text-center"
                >
                  <span>APPLY NOW</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
