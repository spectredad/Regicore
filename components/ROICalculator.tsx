"use client";
import { useState, useEffect, useRef } from "react";

const MAX_TEAM = 200;
const MAX_HOURS = 40;
const MAX_RATE = 500;
const MAX_DISPLAY = 10_000_000;

function formatMoney(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}k`;
  return `$${n}`;
}

export default function ROICalculator() {
  const [team, setTeam] = useState(10);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(75);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const rawSavings = team * hours * rate * 52;
  const savings = Math.min(rawSavings, MAX_DISPLAY);
  const isCapped = rawSavings > MAX_DISPLAY;

  return (
    <section className="py-24 md:py-32 px-5 border-t border-line" ref={sectionRef} id="roi">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">05</span>
          <p className="section-label">Estimate your upside</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 items-start">
          <div className="reveal">
            <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance mb-5">
              What is manual work costing you?
            </h2>
            <p className="text-[17px] leading-relaxed text-muted max-w-md text-pretty mb-12">
              Drag the sliders to estimate what automating manual work could save your team
              per year. Then let us pressure-test the number.
            </p>

            {/* Sliders */}
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-ink" htmlFor="slider-team">
                    Team members affected
                  </label>
                  <span className="font-display text-[24px] font-medium text-rust">{team}</span>
                </div>
                <input
                  id="slider-team"
                  type="range"
                  min={1}
                  max={MAX_TEAM}
                  value={team}
                  onChange={(e) => setTeam(Number(e.target.value))}
                  aria-valuemin={1}
                  aria-valuemax={MAX_TEAM}
                  aria-valuenow={team}
                />
                <div className="flex justify-between text-xs text-muted mt-2"><span>1</span><span>{MAX_TEAM}</span></div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-ink" htmlFor="slider-hours">
                    Hours saved per person / week
                  </label>
                  <span className="font-display text-[24px] font-medium text-rust">{hours}h</span>
                </div>
                <input
                  id="slider-hours"
                  type="range"
                  min={1}
                  max={MAX_HOURS}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  aria-valuemin={1}
                  aria-valuemax={MAX_HOURS}
                  aria-valuenow={hours}
                />
                <div className="flex justify-between text-xs text-muted mt-2"><span>1h</span><span>{MAX_HOURS}h</span></div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-[15px] font-medium text-ink" htmlFor="slider-rate">
                    Average fully-loaded hourly rate
                  </label>
                  <span className="font-display text-[24px] font-medium text-rust">${rate}</span>
                </div>
                <input
                  id="slider-rate"
                  type="range"
                  min={15}
                  max={MAX_RATE}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  aria-valuemin={15}
                  aria-valuemax={MAX_RATE}
                  aria-valuenow={rate}
                />
                <div className="flex justify-between text-xs text-muted mt-2"><span>$15</span><span>${MAX_RATE}</span></div>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="reveal bg-ink p-10 md:p-14 flex flex-col justify-between min-h-[480px] lg:sticky lg:top-24">
            <div>
              <p className="section-label text-paper/60 mb-8">Estimated annual savings</p>
              <div
                className="font-display text-[64px] md:text-[88px] font-medium text-paper leading-none tracking-[-0.03em] transition-all duration-300"
                aria-live="polite"
                aria-label={`Estimated annual savings: ${formatMoney(savings)}${isCapped ? " or more" : ""}`}
              >
                {formatMoney(savings)}
                {isCapped && <span className="text-rust">+</span>}
              </div>
              <p className="text-paper/40 text-[13px] mt-6 max-w-[260px] leading-relaxed">
                {isCapped
                  ? "Capped display. Actual savings may be higher."
                  : "Estimated, based on hours saved multiplied by rate over 52 weeks."}
              </p>
            </div>

            <div className="mt-10">
              <div className="relative tooltip-trigger inline-block mb-6">
                <button
                  className="text-paper/50 hover:text-paper/80 text-xs underline underline-offset-4 transition-colors"
                  tabIndex={0}
                  aria-label="How we calculate this estimate"
                >
                  How we calculate this
                </button>
                <div className="tooltip-box" role="tooltip">
                  <strong className="block mb-1">Formula</strong>
                  Team x Hours/week x Hourly rate x 52 weeks = Annual labour cost freed.
                  Assumes 100% of freed time is redeployable. Your actual ROI may include revenue
                  impact and quality gains not captured here.
                </div>
              </div>

              <a
                href="#book"
                className="block w-full text-center bg-paper text-ink font-semibold text-[13px] uppercase tracking-[0.08em] py-4 hover:bg-rust hover:text-paper transition-colors duration-300"
              >
                Get a precise audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
