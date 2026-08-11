"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-12 md:py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl px-8 py-16 md:py-20 flex flex-col items-center justify-center text-center"
          style={{ background: "#0f172a" }}
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
              backgroundImage: `radial-gradient(circle, rgba(29,99,94,0.55) 1px, transparent 1px)`,
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
              backgroundImage: `radial-gradient(circle, rgba(29,99,94,0.7) 1px, transparent 1px)`,
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
                "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(29,99,94,0.12) 0%, transparent 70%)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 max-w-xl mx-auto">
            <motion.h2
              className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-medium leading-[1.08] tracking-[-0.025em] text-white mb-4"
              style={{ color: "#ffffff" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Get paid for your taste
            </motion.h2>

            <motion.p
              className="text-[15px] sm:text-[16px] leading-relaxed mb-8"
              style={{ color: "rgba(248,250,252,0.80)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Your feedback fuels the future. Stay current, speak your mind, and shape smarter tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/start"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0f172a] text-[14px] font-semibold tracking-[0.02em] hover:bg-[#f0efe9] transition-colors duration-250 shadow-lg shadow-black/20"
              >
                Join the network
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
