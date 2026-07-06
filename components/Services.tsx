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
    <section id="services" className="py-20 px-5 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header grid */}
        <div className="grid lg:grid-cols-[1fr_1.35fr_220px] gap-8 items-start mb-14 reveal">
          <div>
            <span className="inline-flex items-center rounded-full border border-ink/40 px-6 py-2 text-xs uppercase tracking-[0.18em] text-ink/80 hover:bg-ink/5 transition-colors cursor-default">
              Explore
            </span>
          </div>

          <div>
            {/* Delicate overline in 12px uppercase sans-serif */}
            <span className="text-[11px] font-semibold tracking-[0.1em] text-[#8B8B9B] uppercase block mb-2">
              explore our model
            </span>
            <h2 className="font-display text-[24px] md:text-[36px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
              One studio, your whole AI stack
            </h2>
          </div>

          <div className="hidden lg:flex justify-end gap-3 pt-8">
            <button
              onClick={() => scrollBy(-420)}
              className="w-12 h-12 rounded-full border border-ink/40 flex items-center justify-center text-2xl hover:bg-ink hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Previous services"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy(420)}
              className="w-12 h-12 rounded-full border border-ink/40 flex items-center justify-center text-2xl hover:bg-ink hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Next services"
            >
              ›
            </button>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr] gap-12 items-end reveal">

          {/* Horizontal Scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
          >
            {services.map((s, i) => (
              <article
                key={s.title}
                className="shrink-0 w-[330px] sm:w-[390px] min-h-[390px] snap-start premium-card p-[28px]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="h-full rounded-[18px] bg-[#fbfbfb] p-8 flex flex-col justify-between hover:bg-white transition-colors duration-300 border border-transparent hover:border-ink/5">
                  <div>
                    <div className="w-12 h-12 rounded-2xl border border-ink/35 bg-white flex items-center justify-center text-xs text-[#7C3AED] mb-20 font-semibold transition-all duration-300">
                      {s.icon}
                    </div>
                    {/* H3 for service titles: 28px (1.75rem), weight 500 */}
                    <h3 className="font-display text-[20px] md:text-[24px] font-medium leading-tight mb-4 text-ink transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-[13px] md:text-[15px] text-muted leading-relaxed max-w-[280px]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
