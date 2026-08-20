"use client";

import { useState } from "react";

const beforeMetrics = [
  ["Average Rank", "86"],
  ["Market Coverage", "1%"],
  ["Calls Per Month", "5"],
  ["Missed Calls", "35%"],
  ["Signed Cases Per Month", "1–2"],
];

const afterMetrics = [
  ["Average Rank", "3"],
  ["Market Coverage", "34%"],
  ["Calls Per Month", "42"],
  ["Missed Calls", "0%"],
  ["Signed Cases Per Month", "4–6"],
];

const beforeCaption = "One green pin outside your own front door. Everywhere else in the city, a competitor takes the call. A third of the few calls you do get go to voicemail.";
const afterCaption = "Top three across the neighborhoods that actually send you work. Coverage thins at the city edge because Google ranks partly on distance, and no single office wins every pin. Every call answered in under 60 seconds, including nights and weekends.";

export default function Difference() {
  const [isAfter, setIsAfter] = useState(false);
  const metrics = isAfter ? afterMetrics : beforeMetrics;
  const caption = isAfter ? afterCaption : beforeCaption;
  const markerCount = isAfter ? 84 : 62;

  return (
    <section className="bg-paper px-5 py-20 text-ink sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label text-ink/55">Before / After</p>
          <h2 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            The <em>Difference</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">
            The difference between fourth place and top three.
          </p>
        </div>

        <div className="mt-12 rounded-[1.25rem] border border-line-low bg-surface-elevated p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:mt-16 sm:p-7 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="flex flex-col">
              <div className="inline-flex w-fit rounded-xl bg-surface p-1.5" role="group" aria-label="Compare results">
                <button type="button" onClick={() => setIsAfter(false)} aria-pressed={!isAfter} className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${!isAfter ? "bg-surface-elevated text-ink shadow-sm" : "text-muted hover:text-ink"}`}>
                  Before Regicore
                </button>
                <button type="button" onClick={() => setIsAfter(true)} aria-pressed={isAfter} className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${isAfter ? "bg-surface-elevated text-ink shadow-sm ring-1 ring-ink" : "text-muted hover:text-ink"}`}>
                  After Regicore
                </button>
              </div>

              <div className="mt-8 rounded-2xl bg-surface p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-lg text-paper" aria-hidden="true">R</div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-ink">Your Firm</h3>
                    <p className="text-sm text-muted">Your City</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {metrics.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-xl bg-surface px-5 py-3.5">
                    <span className="text-sm font-medium text-ink sm:text-base">{label}</span>
                    <strong className={`rounded-md px-3 py-1 text-sm font-semibold ${isAfter ? "bg-teal text-paper" : "bg-coral-accent text-paper"}`}>{value}</strong>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm leading-relaxed text-muted">{caption}</p>
            </div>

            <div className="rounded-2xl bg-surface p-3 sm:p-4">
              <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-line-low bg-paper px-5 py-6 sm:px-8" aria-label="Illustrative city ranking grid">
                <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: "linear-gradient(32deg, transparent 47%, var(--line-low) 48%, transparent 49%), linear-gradient(118deg, transparent 47%, var(--line-low) 48%, transparent 49%)", backgroundSize: "90px 76px" }} />
                <div className="relative grid min-h-[330px] grid-cols-8 content-center justify-items-center gap-x-2 gap-y-3 sm:grid-cols-10 sm:gap-x-3 sm:gap-y-4">
                  {Array.from({ length: markerCount }).map((_, index) => (
                    <span key={index} className={`flex size-7 items-center justify-center rounded-full border border-ink/80 text-[10px] font-bold shadow-sm sm:size-8 sm:text-xs ${isAfter ? "bg-teal text-paper" : index === 0 ? "bg-teal text-paper" : "bg-coral-accent text-paper"}`}>
                      {isAfter ? "1" : index === 0 ? "3" : "20"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-display text-xl leading-relaxed tracking-[-0.02em] sm:text-2xl">
          Rankings make the phone ring. The system answers it. Ninety days from now this is your grid, not an illustration.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Illustrative figures for a single location firm. Your market check reports your actual grid, your actual AI visibility, and your actual missed call rate.
        </p>
      </div>
    </section>
  );
}
