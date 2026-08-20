"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "You apply",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    body: "You send your firm name, practice area, and city. We check whether your market is open. If another firm in your practice area already holds your city, we tell you and stop there.",
  },
  {
    num: "02",
    title: "We run your market check",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    body: "We map your rankings across your city, ask AI who to hire in your practice area, and review how your calls are handled after hours. You get all three findings on one call, free, before anything is signed.",
  },
  {
    num: "03",
    title: "We build it",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    body: "One week. We take access, set up your Google presence, install the answering system, and prepare the first month of content for your approval. Your total involvement is one onboarding call and a review of anything published under your name.",
  },
  {
    num: "04",
    title: "It compounds",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    body: "The answering system starts booking consultations in the first days. Map rankings move over 60 to 90 days. AI mentions follow over 60 to 120. One monthly report shows calls answered, consultations booked, and cases signed.",
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
    <section className="bg-paper px-5 py-20 sm:py-28 lg:py-36" ref={sectionRef}>
      <div className="mx-auto max-w-3xl">

        {/* Section eyebrow pill */}
        <div className="reveal flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink/55">
            <svg className="w-3.5 h-3.5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            How Does It Work?
          </span>
        </div>

        {/* Headline */}
        <div className="reveal text-center mb-4">
          <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl">
            Four steps.{" "}
            <em>One of them is yours.</em>
          </h2>
        </div>

        {/* Intro line */}
        <div className="reveal text-center mb-12">
          <p className="text-base text-muted leading-relaxed">
            From application to answered calls in under two weeks.
          </p>
        </div>

        {/* Step cards */}
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal rounded-2xl border border-line-low bg-surface-elevated px-6 py-5 shadow-[0_2px_12px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_4px_22px_rgba(15,23,42,0.09)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon badge */}
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface text-ink/60">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-1.5">
                    <span className="font-mono text-[11px] font-bold text-teal tracking-widest">{step.num}.</span>
                    <h3 className="font-sans text-[15px] font-semibold text-ink leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
