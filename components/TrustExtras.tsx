"use client";

import { useEffect, useRef, useState } from "react";

const leakCards = [
  {
    number: "01",
    title: "They cannot find you.",
    body: "Google puts three firms above everything else on a local search. Almost nobody scrolls past them. Fourth place means the people ready to hire today never see your name.",
    // Dark pastel slate-blue smoke
    gradientStyle: {
      backgroundColor: "#3a5175",
      backgroundImage: `
        radial-gradient(ellipse 90% 70% at 85% 20%, rgba(205, 225, 250, 0.78) 0%, transparent 50%),
        radial-gradient(circle 190px at 15% 85%, rgba(24, 36, 56, 0.92) 0%, transparent 60%),
        radial-gradient(ellipse 80% 50% at 45% 60%, rgba(140, 180, 230, 0.55) 0%, transparent 60%),
        radial-gradient(circle 130px at 70% 80%, rgba(195, 220, 248, 0.45) 0%, transparent 50%),
        linear-gradient(135deg, #3d557a 0%, #4e6c96 45%, #2b3e5a 100%)
      `,
    },
  },
  {
    number: "02",
    title: "They cannot reach you.",
    body: "More than a third of calls to law firms go unanswered. Most callers who reach voicemail hang up without leaving a message and dial the next firm on the list. You already paid to make that phone ring.",
    // Dark pastel rose-terracotta smoke
    gradientStyle: {
      backgroundColor: "#783847",
      backgroundImage: `
        radial-gradient(ellipse 90% 70% at 85% 20%, rgba(255, 210, 220, 0.78) 0%, transparent 50%),
        radial-gradient(circle 190px at 15% 85%, rgba(65, 20, 30, 0.92) 0%, transparent 60%),
        radial-gradient(ellipse 80% 50% at 45% 60%, rgba(220, 130, 150, 0.55) 0%, transparent 60%),
        radial-gradient(circle 130px at 70% 80%, rgba(250, 195, 210, 0.45) 0%, transparent 50%),
        linear-gradient(135deg, #7c3a4a 0%, #984c60 45%, #592431 100%)
      `,
    },
  },
  {
    number: "03",
    title: "They never hear your name.",
    body: "Clients ask AI which lawyer to hire, and AI returns one or two names rather than ten links. Firms outside that answer are not considered.",
    // Dark pastel olive-sage smoke
    gradientStyle: {
      backgroundColor: "#4c633c",
      backgroundImage: `
        radial-gradient(ellipse 90% 70% at 85% 20%, rgba(225, 245, 200, 0.78) 0%, transparent 50%),
        radial-gradient(circle 190px at 15% 85%, rgba(32, 48, 22, 0.92) 0%, transparent 60%),
        radial-gradient(ellipse 80% 50% at 45% 60%, rgba(150, 185, 125, 0.55) 0%, transparent 60%),
        radial-gradient(circle 130px at 70% 80%, rgba(215, 240, 185, 0.45) 0%, transparent 50%),
        linear-gradient(135deg, #4f683f 0%, #638250 45%, #35472a 100%)
      `,
    },
  },
];

export default function TrustExtras() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")),
      { threshold: 0.1 },
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for mobile scroll activation
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setMobileActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) cardObserver.observe(el);
    });

    return () => cardObserver.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy text-ink px-5 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
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

        <div className="mt-14 overflow-hidden rounded-3xl border border-midnight/10 bg-navy-elevated reveal sm:mt-18 shadow-[0_4px_30px_rgba(15,23,42,0.04)]">
          <div className="grid md:grid-cols-3">
            {leakCards.map((card, index) => {
              const isActive =
                hoverIndex === index ||
                (hoverIndex === null && mobileActiveIndex === index);

              return (
                <article
                  key={card.number}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-index={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => setMobileActiveIndex(index)}
                  className={`relative overflow-hidden flex min-h-[340px] flex-col justify-between p-7 sm:p-9 lg:min-h-[390px] lg:p-10 cursor-pointer transition-colors duration-500 ${
                    index > 0 ? "border-t border-midnight/10 md:border-l md:border-t-0" : ""
                  }`}
                >
                  {/* Dark Pastel Smoky Aura Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-600 ease-out pointer-events-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={card.gradientStyle}
                    aria-hidden="true"
                  />

                  {/* Top Content: Number and Title */}
                  <div className="relative z-10">
                    <p
                      className={`font-display text-5xl font-medium tracking-[-0.05em] sm:text-6xl transition-colors duration-500 ${
                        isActive ? "text-white" : "text-ink"
                      }`}
                    >
                      {card.number}
                    </p>
                    <h3
                      className={`mt-8 max-w-[15rem] font-display text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl transition-colors duration-500 ${
                        isActive ? "text-white" : "text-ink"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Content: Body */}
                  <p
                    className={`relative z-10 max-w-sm text-sm leading-relaxed sm:text-[15px] transition-colors duration-500 ${
                      isActive ? "text-white/90" : "text-ink/65"
                    }`}
                  >
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
