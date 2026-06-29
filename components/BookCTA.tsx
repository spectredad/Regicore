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
    "premium-input bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-[15px] w-full text-ink transition-all";
  const labelClass = "text-[12px] font-semibold text-muted uppercase tracking-[0.06em]";

  return (
    <section id="book" className="py-20 px-5" ref={sectionRef}>
      <div className="max-w-4xl mx-auto premium-card p-8 sm:p-14 text-center reveal">
        {/* H2: 40px (desktop), 30px mobile */}
        <h2 className="font-display text-[30px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-ink mb-4">
          Let&apos;s build your unfair advantage
        </h2>
        <p className="text-[16px] leading-[1.6] text-muted mb-8 max-w-lg mx-auto">
          Tell us the bottleneck. If there&apos;s a fit, we&apos;ll run a free AI opportunity audit and scope a custom build.
        </p>

        {status === "success" ? (
          <div className="bg-[#FAFAFB] border border-black/[0.04] rounded-2xl p-10 text-center">
            <div className="text-[40px] mb-4 text-[#7C3AED]" aria-hidden="true">✦</div>
            <h3 className="font-display text-[28px] font-medium text-ink mb-2">We&apos;ll be in touch within 24 hours</h3>
            <p className="text-muted text-[15px]">In the meantime, feel free to browse our case studies above.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAFAFB] border border-black/[0.04] rounded-2xl p-6 grid sm:grid-cols-2 gap-4 text-left"
            noValidate
          >
            <div className="flex flex-col gap-1.5">
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

            <div className="flex flex-col gap-1.5">
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

            <div className="flex flex-col gap-1.5 sm:col-span-2">
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

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className={labelClass}>What would you automate first? *</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="e.g. Our SDR team spends 4 hrs/day on manual outreach…"
                suppressHydrationWarning
              />
            </div>

            {status === "error" && (
              <p className="sm:col-span-2 text-red-600 text-sm text-center" role="alert">
                Something went wrong — please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#7C3AED] text-white font-semibold py-3.5 rounded-xl sm:col-span-2 hover:bg-[#6D28D9] hover:shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-all disabled:opacity-60 group text-[15px]"
            >
              {status === "loading" ? "Sending…" : (
                <>Book my call <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span></>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
