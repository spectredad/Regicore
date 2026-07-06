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
    <section className="py-24 md:py-32 px-5 bg-ink" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline justify-between gap-4 border-b border-paper/15 pb-4 mb-14">
          <div className="flex items-baseline gap-4">
            <span className="index-num text-[15px]">03</span>
            <p className="section-label text-paper/60">By the numbers</p>
          </div>
          <p className="section-label text-paper/60 hidden sm:block">Measured, not promised</p>
        </div>

        <motion.div className="metric-wrapper grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`py-8 pr-6 ${i > 0 ? "lg:border-l lg:border-paper/15 lg:pl-8" : ""} ${
                i % 2 === 1 ? "border-l border-paper/15 pl-6 lg:pl-8" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="font-display text-[44px] md:text-[56px] font-medium text-paper leading-none tracking-[-0.02em] metric-value">
                <MetricValue value={m.value} active={active} />
                <span className="text-rust text-[0.55em] align-baseline">{m.suffix}</span>
              </div>
              <p className="text-[14px] text-paper/50 mt-3 leading-relaxed">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
