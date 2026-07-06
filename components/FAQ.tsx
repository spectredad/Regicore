"use client";
import { useEffect, useRef, useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">07</span>
          <p className="section-label">Questions</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
          <div className="reveal">
            <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              Asked before every engagement
            </h2>
            <p className="text-muted mt-5 text-[16px] leading-relaxed max-w-sm text-pretty">
              If yours isn&apos;t here, bring it to the call. Straight answers, no pitch deck.
            </p>
          </div>

          <div className="reveal border-t border-line">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-line group">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-baseline gap-5 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rust"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`text-[12px] font-semibold shrink-0 transition-colors duration-300 ${
                      openIndex === i ? "text-rust" : "text-line"
                    }`}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-[19px] md:text-[21px] font-medium text-ink group-hover:text-rust transition-colors duration-300 text-pretty">
                    {f.q}
                  </span>
                  <span
                    className={`text-xl text-muted shrink-0 transition-transform duration-[400ms] ${
                      openIndex === i ? "rotate-45 text-rust" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] text-muted leading-relaxed pl-10 pr-10 max-w-xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
