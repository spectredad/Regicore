"use client";
import { useEffect, useRef, useState } from "react";

export default function BookCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "editorial-input px-4 py-3.5 text-[15px] w-full text-ink";
  const labelClass = "text-[11px] font-semibold text-muted uppercase tracking-[0.12em]";

  return (
    <section id="book" className="py-24 md:py-32 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">08</span>
          <p className="section-label">Start here</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="reveal">
            <h2 className="font-display text-[36px] sm:text-[52px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance mb-5">
              Let&apos;s build your unfair advantage
            </h2>
            <p className="text-[17px] leading-relaxed text-muted max-w-md text-pretty">
              Tell us the bottleneck. If there&apos;s a fit, we&apos;ll run a free AI
              opportunity audit and scope a custom build.
            </p>

            <div className="mt-10 border-t border-line">
              {[
                ["Response time", "Within 24 hours"],
                ["First call", "30 minutes, no pitch"],
                ["Audit", "Free, yours to keep"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline py-4 border-b border-line text-[14px]">
                  <span className="text-muted">{k}</span>
                  <span className="text-ink font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            {status === "success" ? (
              <div className="editorial-card p-10 md:p-14 text-center">
                <p className="index-num text-[32px] mb-4" aria-hidden="true">&#10003;</p>
                <h3 className="font-display text-[28px] font-medium text-ink mb-3 text-balance">
                  We&apos;ll be in touch within 24 hours
                </h3>
                <p className="text-muted text-[15px] leading-relaxed">
                  In the meantime, feel free to explore the agents and services above.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="editorial-card p-6 sm:p-8 grid sm:grid-cols-2 gap-5 text-left"
                noValidate
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>Full name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane Smith"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClass}>Work email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@company.com"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="company" className={labelClass}>Company / website</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Corp / acme.com"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>What would you automate first? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="e.g. Our SDR team spends 4 hrs/day on manual outreach"
                    suppressHydrationWarning
                  />
                </div>

                {status === "error" && (
                  <p className="sm:col-span-2 text-rust text-sm" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-ink text-paper font-semibold py-4 sm:col-span-2 hover:bg-rust transition-colors duration-300 disabled:opacity-60 text-[13px] uppercase tracking-[0.08em]"
                >
                  {status === "loading" ? "Sending..." : "Book my call"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
