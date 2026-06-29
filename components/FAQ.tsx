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
    <section id="faq" className="py-20 px-5 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto">
        {/* "Questions?" -> 40px, centered */}
        <h2 className="font-display text-[40px] font-medium text-ink mb-10 text-center reveal">
          Questions?
        </h2>
        <div className="reveal">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-black/[0.06] group">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                {/* Question: 17px, font-medium */}
                <span className="text-[17px] font-medium text-ink group-hover:text-[#7C3AED] transition-colors duration-300">
                  {f.q}
                </span>
                {/* Rotating icon with spring transition */}
                <span
                  className={`text-xl text-muted shrink-0 transition-transform duration-[400ms] cubic-bezier(0.34, 1.56, 0.64, 1) ${
                    openIndex === i ? "rotate-45 text-[#7C3AED]" : "rotate-0"
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
                  {/* Answer: 15px, line-height 1.6 */}
                  <p className="text-[15px] text-muted leading-[1.6] pr-8">
                    {f.a}
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
