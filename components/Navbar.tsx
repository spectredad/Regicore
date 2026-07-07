"use client";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    let hideTimeout: NodeJS.Timeout | null = null;
    let lastHiddenState = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrollDelta = Math.abs(currentY - lastScrollY);
          
          // Use larger threshold on mobile (>15px) to avoid touch jitter and momentum scroll false positives
          const threshold = window.innerWidth < 768 ? 15 : 5;

          // Clear any pending hide timeout
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }

          // Only hide if scrolling down significantly to avoid rapid flickering
          if (currentY > 120 && currentY > lastScrollY && scrollDelta > threshold) {
            if (!lastHiddenState) {
              lastHiddenState = true;
              setHidden(true);
            }
          } else if (currentY < lastScrollY || currentY < 120) {
            if (lastHiddenState) {
              lastHiddenState = false;
              setHidden(false);
            }
          }

          setIsScrolled(currentY > 20);
          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <header
        className={`nav-bar fixed top-0 inset-x-0 z-50 md:transition-transform md:duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a
            href="/"
            className="font-display text-[20px] font-semibold text-ink tracking-[-0.01em] hover:text-rust transition-colors duration-300"
            aria-label="Regicore home"
          >
            Regicore
            <span className="text-rust">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="group/link flex items-baseline gap-1.5 text-[13px] font-medium tracking-[0.02em] text-muted hover:text-ink transition-colors"
              >
                <span className="index-num text-[11px]" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-ink scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
                </span>
              </a>
            ))}
            <a
              href="/#book"
              className="bg-ink text-paper text-[12px] font-semibold tracking-[0.08em] uppercase px-5 py-2.5 hover:bg-rust transition-colors duration-300"
            >
              Work with us
            </a>
          </nav>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center">
            <a
              href="/#book"
              className="bg-ink text-paper text-[12px] font-semibold tracking-[0.08em] uppercase px-4 py-2 hover:bg-rust transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
