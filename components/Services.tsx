"use client";
import { useEffect, useRef } from "react";
import { services } from "@/lib/content";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        const isAtStart = scroller.scrollLeft === 0 && e.deltaY < 0;
        const isAtEnd = Math.ceil(scroller.scrollLeft + scroller.clientWidth) >= scroller.scrollWidth && e.deltaY > 0;

        if (!isAtStart && !isAtEnd) {
          e.preventDefault();
          scroller.scrollLeft += e.deltaY;
        }
      }
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 px-5 overflow-hidden border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">02</span>
          <p className="section-label">Services</p>
        </div>

        {/* Header grid */}
        <div className="grid lg:grid-cols-[1fr_200px] gap-8 items-end mb-12 reveal">
          <div>
            <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              One studio,
              <br />
              your whole AI stack
            </h2>
            <p className="text-muted mt-5 text-[17px] leading-relaxed max-w-xl text-pretty">
              Eight disciplines under one roof, so nothing gets lost between vendors.
            </p>
          </div>

          <div className="hidden lg:flex justify-end gap-px border border-line">
            <button
              onClick={() => scrollBy(-380)}
              className="w-14 h-14 flex items-center justify-center text-xl text-ink bg-surface hover:bg-ink hover:text-paper transition-colors duration-300 border-r border-line"
              aria-label="Previous services"
            >
              &#8592;
            </button>
            <button
              onClick={() => scrollBy(380)}
              className="w-14 h-14 flex items-center justify-center text-xl text-ink bg-surface hover:bg-ink hover:text-paper transition-colors duration-300"
              aria-label="Next services"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-px overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing bg-line"
        >
          {services.map((s, i) => (
            <article
              key={s.title}
              className="shrink-0 w-[300px] sm:w-[350px] min-h-[360px] snap-start bg-surface p-8 flex flex-col justify-between group hover:bg-ink transition-colors duration-500 reveal"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="index-num text-[44px] leading-none font-light group-hover:text-paper/30 transition-colors duration-500">
                {s.icon}
              </span>
              <div>
                <h3 className="font-display text-[24px] md:text-[26px] font-medium leading-tight mb-3 text-ink group-hover:text-paper transition-colors duration-500 text-balance">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted leading-relaxed max-w-[280px] group-hover:text-paper/60 transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="section-label mt-6 lg:hidden reveal">Swipe to explore</p>
      </div>
    </section>
  );
}
