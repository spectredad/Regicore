"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { metrics } from "@/lib/content";

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const raf = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

const COUNTABLE = /^\+?\d+(\.\d+)?$/;

function MetricValue({ value, active }: { value: string; active: boolean }) {
  const countable = COUNTABLE.test(value);
  const numericVal = countable ? parseFloat(value.replace("+", "")) : 0;
  const prefix = value.startsWith("+") ? "+" : "";
  const count = useCountUp(numericVal, 1200, active && countable);

  if (!countable) return <>{value}</>;

  const display = value.includes(".") ? `${prefix}${count.toFixed(1)}` : `${prefix}${count}`;
  return <>{display}</>;
}

// Distinct hover themes for each of the 4 cards:
// Card 1: Soft cool blue abstract blur
// Card 2: Soft warm pink/magenta abstract blur
// Card 3: Soft muted green/teal abstract blur
// Card 4: Soft neutral / light lavender abstract blur
const cardHoverStyles = [
  {
    // Card 1: Cool Blue
    gradientBg: "bg-gradient-to-br from-blue-500/20 via-sky-400/15 to-indigo-500/10",
    glowBorder: "group-hover:border-blue-400/40 group-hover:shadow-[0_12px_36px_rgba(59,130,246,0.14)]",
    suffixColor: "text-blue-600",
    blobColor: "bg-blue-400/35",
  },
  {
    // Card 2: Warm Pink / Magenta
    gradientBg: "bg-gradient-to-br from-pink-500/20 via-rose-400/15 to-fuchsia-400/10",
    glowBorder: "group-hover:border-pink-400/40 group-hover:shadow-[0_12px_36px_rgba(236,72,153,0.14)]",
    suffixColor: "text-pink-600",
    blobColor: "bg-pink-400/35",
  },
  {
    // Card 3: Muted Green / Teal
    gradientBg: "bg-gradient-to-br from-teal-500/20 via-emerald-400/15 to-cyan-400/10",
    glowBorder: "group-hover:border-teal-400/40 group-hover:shadow-[0_12px_36px_rgba(20,184,166,0.14)]",
    suffixColor: "text-teal-600",
    blobColor: "bg-teal-400/35",
  },
  {
    // Card 4: Light Lavender / Purple
    gradientBg: "bg-gradient-to-br from-purple-500/20 via-violet-400/15 to-indigo-300/10",
    glowBorder: "group-hover:border-purple-400/40 group-hover:shadow-[0_12px_36px_rgba(168,85,247,0.14)]",
    suffixColor: "text-purple-600",
    blobColor: "bg-purple-400/35",
  },
];

export default function Metrics() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            e.target.classList.add("in");
          }
        }),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .metric-wrapper").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline justify-between gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <div className="flex items-baseline gap-4">
            <span className="index-num text-[15px]">03</span>
            <p className="section-label uppercase tracking-widest font-mono text-xs">HOW WE OPERATE</p>
          </div>
          <p className="section-label uppercase tracking-widest font-mono text-xs hidden sm:block text-muted/70">
            NOTHING HERE IS A PROJECTION
          </p>
        </div>

        {/* Soft rounded container matching the multi-card reference UI */}
        <div className="reveal bg-[#ebe9e3] p-3 sm:p-4 rounded-[28px] sm:rounded-[36px] border border-black/5 shadow-xs">
          <motion.div className="metric-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {metrics.map((m, i) => {
              const hoverStyle = cardHoverStyles[i % cardHoverStyles.length];
              return (
                <motion.div
                  key={m.label}
                  className={`group relative overflow-hidden bg-white/95 rounded-2xl p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] border border-black/5 transition-all duration-500 ease-out hover:-translate-y-1 ${hoverStyle.glowBorder}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Distinct abstract background blur mesh on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none ${hoverStyle.gradientBg}`}
                  />
                  
                  {/* Ambient blur orb inside card */}
                  <div
                    className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700 ease-out pointer-events-none ${hoverStyle.blobColor}`}
                  />

                  {/* Stat Number */}
                  <div className="relative z-10 font-sans text-[48px] sm:text-[56px] font-semibold text-ink leading-none tracking-tight">
                    <MetricValue value={m.value} active={active} />
                    {m.suffix && (
                      <span className={`text-[0.55em] font-normal tracking-normal ml-1 transition-colors duration-300 ${hoverStyle.suffixColor}`}>
                        {m.suffix}
                      </span>
                    )}
                  </div>

                  {/* Descriptive Label */}
                  <p className="relative z-10 text-[14px] sm:text-[15px] text-muted group-hover:text-ink leading-relaxed font-body transition-colors duration-300">
                    {m.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
