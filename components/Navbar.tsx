"use client";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      
      // Hide on scroll down after 120px, show on scroll up
      if (currentY > 120 && currentY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setIsScrolled(currentY > 20);
      setLastScrollY(currentY);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      <header
        className={`fixed top-4 inset-x-0 z-50 transition-transform duration-300 ${
          hidden ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <div className="max-w-[95%] mx-auto h-[72px] flex items-center justify-between group">
          <a href="/" className="font-display text-[22px] font-semibold text-ink hover:scale-105 hover:opacity-80 transition-all duration-300 ml-4 tracking-[-0.01em]" aria-label="Regicore home">
            Regicore
          </a>

          {/* Desktop nav floating pill with glassmorphism */}
          <div 
            className={`hidden md:flex items-center rounded-xl p-1.5 mr-4 font-body glass-nav-pill ${
              isScrolled ? "scrolled" : ""
            }`}
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-7 px-6 py-2 text-[14px] font-medium tracking-[0.02em] text-[#4A4F50] uppercase">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="relative hover:text-black transition-colors overflow-hidden group/link">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              ))}
            </div>
            <a
              href="/#book"
              className="bg-[#2A3234] text-[#EBECE7] text-[13px] font-semibold tracking-[0.04em] uppercase rounded-lg px-5 py-2.5 hover:bg-[#1A2224] hover:shadow-[0_0_15px_rgba(42,50,52,0.4)] hover:-translate-y-0.5 transition-all duration-300 ml-2 shadow-sm"
            >
              Work with us
            </a>
          </div>
          
          {/* Mobile hamburger (placeholder for the mobile view which wasn't fully styled in the new HTML, keeping it simple) */}
          <div className="md:hidden flex items-center mr-4">
             <a
              href="/#book"
              className="bg-[#2A3234] text-[#EBECE7] text-[13px] font-semibold tracking-[0.04em] uppercase rounded-lg px-4 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
