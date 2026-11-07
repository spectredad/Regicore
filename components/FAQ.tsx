"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  {
    q: "How is this different from Google Ads?",
    a: "Stop paying for ads and they come down. Maps and AI answers give people another way to find you. If you already buy ads, the AI picks up those calls too.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Local service businesses that take calls and book appointments. Think of the plumber with both hands under a sink or the salon owner halfway through a cut. We take one business per niche in each city.",
  },
  {
    q: "How much of my time does this take?",
    a: "One onboarding call in week one. After that, set aside a few minutes to approve content before it goes live. We handle setup and run the system.",
  },
  {
    q: "How soon will I see results?",
    a: "The AI starts booking within days of going live. With Maps Rank, we have 90 days to get you into the top 3 for the search and location we agreed on. Allow 60 to 120 days for AI mentions.",
  },
  {
    q: "What does the AI say to callers?",
    a: "It tells them it’s an AI assistant answering for your business. You approve what it says, what it asks and when it hands the call to a person.",
  },
  {
    q: "What happens to my call recordings?",
    a: "Your data agreement spells out how we handle recordings and transcripts. You get access to recordings when you enable them. Your intake data stays out of public AI model training.",
  },
  {
    q: "What if I already have a receptionist?",
    a: "Great. They take the calls they have time for. The AI picks up when they’re already on the phone, out to lunch or home for the night.",
  },
  {
    q: "What are the contract terms?",
    a: "The Full System starts at $3,500 a month with no setup fee and a 30-day opt-out on your first term. Calls are answered in under 60 seconds or that month is free. If you leave, you keep the website and content, along with the reviews and data.",
  },
  {
    q: "Do I need a new website?",
    a: "We check the one you have first. Month one includes fixes that make it easier for people to get in touch. If you need a full rebuild, we waive the fee on a 12-month term.",
  },
  {
    q: "How do I get started?",
    a: "Send us your business name, service and city. If your market is open, we send your free check within 24 hours.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like screenshot

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-paper px-5 py-20 sm:py-28 lg:py-36 text-ink border-t border-line-low" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        
        {/* Section Eyebrow */}
        <div className="reveal mb-6">
          <p className="section-label text-ink/55">08 FREQUENTLY ASKED QUESTIONS</p>
        </div>

        {/* 2-Column Layout matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Title & Support link) */}
          <div className="lg:col-span-4 reveal lg:sticky lg:top-24">
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink leading-[1.08] mb-6">
              A few things <br className="hidden sm:block" />
              you’ll want to know
            </h2>
            <div className="text-sm text-muted">
              <p className="mb-1">Still have a question?</p>
              <a
                href="/start"
                className="font-medium text-ink underline underline-offset-4 hover:text-teal transition-colors"
              >
                Get your free market check
              </a>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-8 reveal border-t border-line-low divide-y divide-line-low">
            {faqList.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-sans text-base sm:text-lg font-semibold text-ink group-hover:text-teal transition-colors duration-200 pr-2">
                      {item.q}
                    </span>
                    <div
                      className={`flex size-7 shrink-0 items-center justify-center rounded-lg border border-line-low bg-surface transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-surface-elevated text-teal" : "text-muted"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-[15px] leading-relaxed text-muted font-body">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
