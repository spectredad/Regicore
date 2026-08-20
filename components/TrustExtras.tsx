"use client";

import { useEffect, useRef } from "react";

const leakCards = [
  {
    number: "01",
    title: "They cannot find you.",
    body: "Google puts three firms above everything else on a local search. Almost nobody scrolls past them. Fourth place means the people ready to hire today never see your name.",
  },
  {
    number: "02",
    title: "They cannot reach you.",
    body: "More than a third of calls to law firms go unanswered. Most callers who reach voicemail hang up without leaving a message and dial the next firm on the list. You already paid to make that phone ring.",
  },
  {
    number: "03",
    title: "They never hear your name.",
    body: "Clients ask AI which lawyer to hire, and AI returns one or two names rather than ten links. Firms outside that answer are not considered.",
  },
];

export default function TrustExtras() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")),
      { threshold: 0.1 },
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy text-ink px-5 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center reveal">
          <p className="section-label text-ink/55">The cost of being overlooked</p>
          <h2 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            You are paying for clients you never speak to.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">
            Three things stand between a person needing a lawyer and your firm getting paid. Most firms lose at all three.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-midnight/10 bg-navy-elevated reveal sm:mt-20">
          <div className="grid md:grid-cols-3">
            {leakCards.map((card, index) => (
              <article key={card.number} className={`flex min-h-[360px] flex-col justify-between p-7 sm:p-9 lg:min-h-[410px] lg:p-10 ${index > 0 ? "border-t border-midnight/10 md:border-l md:border-t-0" : ""}`}>
                <div>
                  <p className="font-display text-5xl font-medium tracking-[-0.05em] text-ink sm:text-6xl">{card.number}</p>
                  <h3 className="mt-10 max-w-[15rem] font-display text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl">{card.title}</h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ink/65 sm:text-[15px]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl border-y border-midnight/15 py-6 text-center font-display text-lg leading-relaxed tracking-[-0.01em] sm:text-xl reveal">
          Every one of these leaks sends a client to the firm one position above you.
        </p>
      </div>
    </section>
  );
}
