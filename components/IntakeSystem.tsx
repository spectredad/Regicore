"use client";

import { useEffect, useRef, useState } from "react";

interface StepData {
  id: number;
  label: string;
  name: string;
  desc: string;
}

const steps: StepData[] = [
  {
    id: 1,
    label: "01",
    name: "Answers",
    desc: "Every call picked up in under 60 seconds, day or night. It introduces itself as your firm's intake line and tells the caller they are speaking with an automated assistant.",
  },
  {
    id: 2,
    label: "02",
    name: "Qualifies",
    desc: "It asks the intake questions you approve. Matter type, when it happened, whether another firm is involved, and anything else you want on the sheet before you spend time on a call.",
  },
  {
    id: 3,
    label: "03",
    name: "Books",
    desc: "Qualified callers go straight into your calendar with a confirmation sent. Anyone who does not book gets followed up by text and email until they book or decline.",
  },
  {
    id: 4,
    label: "04",
    name: "Hands off",
    desc: "Anything urgent, unusual, or outside your practice areas routes to a human on your rules. Existing clients calling about live matters are transferred to your team.",
  },
];

function ParticleStream({ activeIndex }: { activeIndex: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2;
      height = canvas.height = canvas.offsetHeight * 2;
    };

    window.addEventListener("resize", handleResize);

    // Particle grid stream setup matching the screenshot aesthetic
    const cols = 72;
    const rows = 26;
    const particles: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      colorType: "light" | "blue" | "accent" | "warm";
      phase: number;
      speed: number;
      stage: number;
    }[] = [];

    for (let c = 0; c < cols; c++) {
      const colNorm = c / cols;
      // Determine pipeline stage for this column
      let stage = 0;
      if (colNorm < 0.25) stage = 0;
      else if (colNorm < 0.5) stage = 1;
      else if (colNorm < 0.75) stage = 2;
      else stage = 3;

      for (let r = 0; r < rows; r++) {
        // Curve envelope to create the flowing funnel / wave in the image
        const rowNorm = (r - rows / 2) / (rows / 2);
        const funnelSpread =
          colNorm < 0.28
            ? 1.1 - colNorm * 1.5
            : colNorm < 0.55
            ? 0.45 + Math.sin((colNorm - 0.28) * Math.PI * 4) * 0.2
            : colNorm < 0.8
            ? 0.35 + Math.sin(colNorm * Math.PI * 3) * 0.3
            : 0.65 + Math.sin(colNorm * Math.PI * 2) * 0.4;

        if (Math.abs(rowNorm) > funnelSpread + (Math.random() * 0.2 - 0.1)) {
          continue; // outside the flow envelope
        }

        // Density variation across stages
        if (stage === 0 && Math.random() > 0.45) continue;
        if (stage === 1 && Math.random() > 0.8) continue;
        if (stage === 2 && Math.random() > 0.6) continue;
        if (stage === 3 && Math.random() > 0.5) continue;

        let colorType: "light" | "blue" | "accent" | "warm" = "light";
        if (colNorm > 0.22 && colNorm < 0.5) {
          const rand = Math.random();
          if (rand > 0.65) colorType = "blue";
          else if (rand > 0.45) colorType = "accent";
          else colorType = "light";
        } else if (colNorm >= 0.5 && colNorm < 0.75) {
          colorType = Math.random() > 0.7 ? "warm" : "light";
        } else if (colNorm >= 0.75) {
          colorType = Math.random() > 0.65 ? "warm" : "light";
        }

        particles.push({
          x: 0,
          y: 0,
          baseX: (c / cols) * width,
          baseY: (height / 2) + rowNorm * (height * 0.38) * funnelSpread,
          size: Math.random() > 0.7 ? 5.5 : 4,
          colorType,
          phase: Math.random() * Math.PI * 2,
          speed: 0.015 + Math.random() * 0.02,
          stage,
        });
      }
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        const isCurrentStage = p.stage === activeIndex;
        const wave = Math.sin(time * 2 + p.phase + p.baseX * 0.005) * 6;
        p.x = p.baseX;
        p.y = p.baseY + wave;

        // Color selection based on type & active state
        let fill = "rgba(203, 213, 225, 0.45)"; // default soft gray
        if (p.colorType === "blue") {
          fill = isCurrentStage ? "rgba(30, 64, 175, 0.95)" : "rgba(30, 64, 175, 0.65)";
        } else if (p.colorType === "accent") {
          fill = isCurrentStage ? "rgba(217, 119, 6, 0.95)" : "rgba(217, 119, 6, 0.65)";
        } else if (p.colorType === "warm") {
          fill = isCurrentStage ? "rgba(212, 163, 115, 0.85)" : "rgba(212, 163, 115, 0.4)";
        } else {
          fill = isCurrentStage ? "rgba(148, 163, 184, 0.75)" : "rgba(203, 213, 225, 0.35)";
        }

        ctx.fillStyle = fill;
        const s = isCurrentStage ? p.size * 1.15 : p.size;
        ctx.fillRect(p.x, p.y, s, s);
      });

      // Flow pipeline connection lines
      ctx.strokeStyle = "rgba(15, 23, 42, 0.04)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.5);
      ctx.bezierCurveTo(width * 0.3, height * 0.45, width * 0.45, height * 0.52, width, height * 0.5);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[220px] sm:h-[290px] md:h-[340px] my-6 sm:my-8 overflow-hidden rounded-2xl bg-surface/50 border border-line-low flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}

export default function IntakeSystem() {
  const [activeStep, setActiveStep] = useState(1); // Default to 02 Qualifies (index 1) like image
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-paper px-5 py-20 sm:py-28 lg:py-36 text-ink border-t border-line-low" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">

        {/* Section Header — Left-aligned matching reference image */}
        <div className="reveal max-w-3xl">
          <p className="section-label text-ink/55 mb-3">05 The Intake System</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-ink leading-[1.08]">
            How the intake system works.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            It answers your phone, books your consultations, and stays inside the script you approve.
          </p>
        </div>

        {/* Particle Stream Flow Visualization */}
        <div className="reveal">
          <ParticleStream activeIndex={activeStep} />
        </div>

        {/* 4 Interactive Steps / Columns matching the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`reveal cursor-pointer select-none transition-all duration-200 group flex flex-col justify-between`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-mono font-bold transition-colors ${
                        isActive
                          ? "bg-ink text-paper"
                          : "bg-surface text-muted group-hover:bg-ink/10 group-hover:text-ink"
                      }`}
                    >
                      {step.label}
                    </span>
                    <h3
                      className={`font-sans text-[15px] font-semibold transition-colors ${
                        isActive ? "text-ink" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {step.name}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-[13.5px] leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>

                {/* Pixel Matrix / Segmented progress bar underneath active item */}
                <div className="mt-5 pt-1">
                  <div className="flex gap-1 items-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-[1px] transition-all duration-200 ${
                          isActive
                            ? i >= 7
                              ? "w-2.5 bg-ink"
                              : "w-1.5 bg-ink/30"
                            : "w-1.5 bg-line"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
