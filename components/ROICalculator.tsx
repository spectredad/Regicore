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
    <section className="py-20 px-5 bg-[#FAFAFB]" ref={sectionRef} id="roi">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          {/* Overline */}
          <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[#8B8B9B] block mb-2 font-sans">
            estimate your upside
          </span>
          {/* H2: 40px */}
          <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            ROI Calculator
          </h2>
          <p className="text-[16px] leading-[1.6] text-muted mt-3 max-w-lg mx-auto">
            Drag the sliders to estimate what automating manual work could save your team per year.
          </p>
        </div>

        <div className="premium-card p-8 sm:p-10 reveal">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[15px] font-semibold text-ink" htmlFor="slider-team">
                    Team members affected
                  </label>
                  <span className="font-display text-[20px] font-semibold text-[#7C3AED]">{team}</span>
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
                <div className="flex justify-between text-xs text-muted mt-1"><span>1</span><span>{MAX_TEAM}</span></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[15px] font-semibold text-ink" htmlFor="slider-hours">
                    Hours saved per person / week
                  </label>
                  <span className="font-display text-[20px] font-semibold text-[#7C3AED]">{hours}h</span>
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
                <div className="flex justify-between text-xs text-muted mt-1"><span>1h</span><span>{MAX_HOURS}h</span></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[15px] font-semibold text-ink" htmlFor="slider-rate">
                    Average fully-loaded hourly rate
                  </label>
                  <span className="font-display text-[20px] font-semibold text-[#7C3AED]">${rate}</span>
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
                <div className="flex justify-between text-xs text-muted mt-1"><span>$15</span><span>${MAX_RATE}</span></div>
              </div>
            </div>

            {/* Result panel */}
            <div className="flex flex-col items-center justify-center bg-[#111827] rounded-[24px] p-8 text-center gap-4">
              <p className="text-white/60 text-[12px] uppercase tracking-[0.08em] font-semibold">
                Estimated annual savings
              </p>
              {/* Stats Numbers: 42px (2.625rem), weight 500, letter-spacing -0.02em */}
              <div
                className="font-display text-[42px] font-medium text-white leading-none tracking-[-0.02em] transition-all duration-300"
                aria-live="polite"
                aria-label={`Estimated annual savings: ${formatMoney(savings)}${isCapped ? " or more" : ""}`}
              >
                {formatMoney(savings)}
                {isCapped && <span className="text-lav text-[24px]">+</span>}
              </div>
              <p className="text-white/40 text-xs max-w-[180px]">
                {isCapped
                  ? "Capped display — actual savings may be higher"
                  : "Estimated. Based on hours × rate × 52 weeks"}
              </p>

              <div className="relative tooltip-trigger">
                <button
                  className="text-white/50 hover:text-white/80 text-xs underline underline-offset-2 transition-colors"
                  tabIndex={0}
                  aria-label="How we calculate this estimate"
                >
                  How we calculate this ?
                </button>
                <div className="tooltip-box" role="tooltip">
                  <strong className="block mb-1">Formula</strong>
                  Team × Hours/week × Hourly rate × 52 weeks = Annual labour cost freed.
                  Assumes 100% of freed time is redeployable. Your actual ROI may include revenue impact and quality gains not captured here.
                </div>
              </div>

              <a
                href="#book"
                className="mt-2 w-full bg-[#7C3AED] text-white font-semibold py-3 rounded-xl hover:bg-[#6D28D9] hover:shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all text-sm group"
              >
                Get a precise audit <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
