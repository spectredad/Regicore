"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-12 md:py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center"
          style={{ background: "#1d635e" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* ── Halftone dot grid pattern (SVG data URI) ── */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
              maskImage:
                "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
            }}
          />

          {/* ── Corner dot clusters (dense) ── */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)`,
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, black 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 100% 100%, black 0%, transparent 55%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 0% 0%, black 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 100% 100%, black 0%, transparent 55%)",
            }}
          />

          {/* ── Subtle inner glow ── */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-white mb-4"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Your city is either open or it is taken.
            </motion.h2>

            <motion.p
              className="text-[15px] sm:text-[16px] leading-relaxed mb-8"
              style={{ color: "rgba(248,250,252,0.85)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Apply with your firm name, practice area, and city. Within 24 hours you get your ranking coverage across the city, what AI says when someone asks who to hire in your practice area, and how many calls slipped past you last week. Free, and yours to keep either way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="https://regicore.com/start"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider hover:bg-[#f0efe9] transition-colors duration-200 shadow-lg shadow-black/20"
              >
                APPLY NOW
              </Link>
              <p className="mt-4 text-xs sm:text-sm text-white/75 font-body">
                One firm per practice area in each city. No setup fee. Thirty day opt out.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
