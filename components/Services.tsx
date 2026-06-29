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
            <span className="text-[12px] font-semibold tracking-[0.1em] text-[#8B8B9B] uppercase block mb-2">
              explore our model
            </span>
            <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
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
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 items-end reveal">
          
          {/* Decorative graphic left side */}
          <div className="hidden lg:flex min-h-[360px] items-center justify-center group perspective-1000">
            <div className="relative w-[300px] h-[220px] transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-12">
              <div className="absolute left-5 bottom-6 w-[250px] h-[70px] rounded-[50%] bg-white border border-ink/10 shadow-[0_22px_45px_rgba(38,32,58,0.14)] rotate-[-7deg] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(38,32,58,0.2)]"></div>
              <div className="absolute left-[84px] bottom-[70px] w-[140px] h-[140px] rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffffff_0%,#d8c7ff_23%,#a855f7_53%,#581c87_100%)] shadow-[0_28px_70px_rgba(126,34,206,0.32)] transition-transform duration-500 group-hover:-translate-y-4 group-hover:scale-105"></div>
              <div className="absolute left-[104px] bottom-[116px] w-[62px] h-[44px] rounded-full bg-white/40 blur-xl rotate-[-22deg] transition-opacity duration-500 group-hover:opacity-80"></div>
            </div>
          </div>

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
                    <h3 className="font-display text-[24px] md:text-[28px] font-medium leading-tight mb-4 text-ink transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-muted leading-relaxed max-w-[280px]">
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
