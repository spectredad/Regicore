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

const comparisonImages = {
  before: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BEfore-BSIvpPlit17qgpO9EQJm6SeDzwj1pj.avif",
  after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/After.-TrmIyJhPws7LglZl0T5eGdquB2aSOI.avif",
};

export default function Difference() {
  const [isAfter, setIsAfter] = useState(false);
  const metrics = isAfter ? afterMetrics : beforeMetrics;

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
            </div>

            <div className="rounded-2xl bg-surface p-3 sm:p-4">
              <div className="overflow-hidden rounded-xl border border-line-low bg-paper" aria-label={`${isAfter ? "After" : "Before"} Regicore comparison result`}>
                <img
                  src={isAfter ? comparisonImages.after : comparisonImages.before}
                  alt={`${isAfter ? "After" : "Before"} Regicore map ranking comparison`}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
