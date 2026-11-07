"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

const emptyForm = { name: "", email: "", company: "", practiceArea: "", city: "" };

export default function StartHere() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState(emptyForm);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      if (!supabase) {
        throw new Error("Supabase client is not initialized (missing NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY)");
      }
      
      const { error } = await supabase
        .from("leads")
        .insert([
          {
            full_name: form.name.trim(),
            work_email: form.email.trim(),
            firm_or_website: form.company.trim(),
            automation_goal: `Market check\nPractice area: ${form.practiceArea.trim()}\nCity: ${form.city.trim()}`,
          },
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        throw error;
      }

      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  const inputClass = "editorial-input px-4 py-3.5 text-[15px] w-full text-ink";
  const labelClass = "text-[11px] font-semibold text-muted uppercase tracking-[0.12em]";

  return (
    <section id="start" className="py-16 md:py-32 px-5 border-t border-line" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal flex items-baseline gap-4 border-b border-line pb-4 mb-12 md:mb-16">
          <span className="index-num text-[15px]">01</span>
          <p className="section-label">Start here</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="reveal">
            <h1 className="font-display text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance mb-5">
              Request your free market check
            </h1>
            <p className="text-[15px] leading-relaxed text-muted max-w-md text-pretty">
              Tell us where your firm works and what you practice. We&apos;ll check your market availability, your visibility on Google Maps and in AI answers, and how your firm handles calls after hours.
            </p>


          </div>

          <div className="reveal">
            {status === "success" ? (
              <div className="editorial-card p-10 md:p-14 text-center" role="status">
                <p className="index-num text-[32px] mb-4" aria-hidden="true">&#10003;</p>
                <h2 className="font-display text-[28px] font-medium text-ink mb-3 text-balance">
                  We received your request
                </h2>
                <p className="text-muted text-[15px] leading-relaxed">
                  We&apos;ll be in touch within 24 hours about your market check.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="editorial-card p-6 sm:p-8 grid sm:grid-cols-2 gap-5 text-left"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>Full name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    pattern={".*\\S.*"}
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
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@company.com"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="company" className={labelClass}>Firm name *</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    pattern={".*\\S.*"}
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Smith &amp; Associates"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="practiceArea" className={labelClass}>Practice area *</label>
                  <input
                    id="practiceArea"
                    name="practiceArea"
                    required
                    pattern={".*\\S.*"}
                    value={form.practiceArea}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Estate planning"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className={labelClass}>Target city and region *</label>
                  <input
                    id="city"
                    name="city"
                    required
                    pattern={".*\\S.*"}
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Austin, Texas"
                  />
                </div>

                {status === "error" && (
                  <p className="sm:col-span-2 text-coral text-sm" role="alert">
                    We couldn&apos;t send your request. Try again or use the email link below.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-soft-white text-midnight font-semibold py-4 sm:col-span-2 hover:bg-sand transition-colors duration-300 disabled:opacity-60 text-[13px] uppercase tracking-[0.08em]"
                >
                  {status === "loading" ? "Sending..." : "Request my market check"}
                </button>
                <a className="sm:col-span-2 text-center text-sm text-teal underline" href="mailto:varun.l@regicorehq.com?subject=Regicore%20market%20check">
                  Email us instead
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
