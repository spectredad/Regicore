"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  {
    q: "What is the difference between this and Google Ads?",
    a: "Ads stop the moment you stop paying, and personal injury clicks run past $150 each in major markets. Rankings and AI mentions keep working after the month ends. The answering system converts both, so firms already running ads see those leads convert better too.",
  },
  {
    q: "Which firms do you work with?",
    a: "Small to mid sized firms that serve a city or metro area. Family, estate planning, immigration, bankruptcy, criminal defense, and personal injury. One firm per practice area in each city, so we cannot take you and your competitor.",
  },
  {
    q: "How much time will I need to invest?",
    a: "One onboarding call in week one, then a few minutes to approve content before it publishes. We take access, build the system, and run it. Nothing goes out under your name without your approval.",
  },
  {
    q: "How fast will I see results?",
    a: "Two timelines. The answering system starts booking consultations within days of going live. Map rankings move over 60 to 90 days, and AI mentions follow over 60 to 120. Your first report shows calls answered and consultations booked while the ranking work builds.",
  },
  {
    q: "Is the AI compliant with my bar rules?",
    a: "The assistant identifies itself as automated on every call, and the script forbids legal advice, fee quotes, and predictions about outcomes. You approve every script and every published word. You receive an AI use policy and client disclosure templates written against your bar's advertising and confidentiality rules.",
  },
  {
    q: "Where does my client data go?",
    a: "Deployments are private. Call recordings and transcripts stay in your environment, on infrastructure held to healthcare grade security standards, and nothing feeds public model training. You can listen to any call, any time.",
  },
  {
    q: "What if I already have a receptionist?",
    a: "The system covers overflow, lunch hours, evenings, and weekends. Your receptionist keeps the calls they can take, and the system catches the rest. More than a third of calls to law firms go unanswered during hours firms consider covered.",
  },
  {
    q: "What are the contract terms?",
    a: "From $3,500 a month with no setup fee. Thirty day opt out on your first term, and you keep everything we built if you leave. Every call answered in under 60 seconds or that month is free. You own the website, the content, the reviews, and the data.",
  },
  {
    q: "Do I need a new website?",
    a: "Only if yours blocks results, and the market check tells us either way. A conversion upgrade is included in your first month. If a full rebuild is needed, the fee is waived on a twelve month term.",
  },
  {
    q: "How do we get started?",
    a: "Apply with your firm name, practice area, and city. We check whether your market is open and send your market check within 24 hours: your ranking coverage, what AI says about your practice area, and how your calls are handled after hours.",
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
              Questions <br className="hidden sm:block" />
              and answers
            </h2>
            <div className="text-sm text-muted">
              <p className="mb-1">Can't find the answer here?</p>
              <a
                href="https://regicore.com/start"
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
