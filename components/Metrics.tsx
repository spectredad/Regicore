"use client";
import { useEffect, useRef, useState } from "react";
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

function MetricCard({ metric, active }: { metric: (typeof metrics)[0]; active: boolean }) {
  const numericStr = metric.value.replace(/[^0-9.]/g, "");
  const numericVal = parseFloat(numericStr) || 0;
  const prefix = metric.value.startsWith("+") ? "+" : "";
  const count = useCountUp(numericVal, 1200, active);

  const display = numericStr.includes(".")
    ? `${prefix}${count.toFixed(1)}`
    : `${prefix}${count}`;

  return (
    <div className="metric-card p-[28px] text-center">
      {/* Numbers: 42px (2.625rem), weight 500, line-height 1, letter-spacing -0.02em */}
      <div className="font-display text-[32px] md:text-[42px] font-medium text-ink leading-none tracking-[-0.02em] metric-value">
        {display}{metric.suffix}
      </div>
      <p className="text-sm text-muted mt-2">{metric.label}</p>
    </div>
  );
}

export default function Metrics() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setActive(true); e.target.classList.add("in"); } }),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .metric-wrapper").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center reveal">
          <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[#8B8B9B] block mb-2 font-sans">
            by the numbers
          </span>
          <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
            Results that compound
          </h2>
        </div>
        <div className="metric-wrapper grid grid-cols-2 md:grid-cols-4 gap-5">
          {metrics.map((m) => (
            <MetricCard key={m.label} metric={m} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
