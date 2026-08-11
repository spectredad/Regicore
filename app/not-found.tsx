"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  // Grid layout for 404 block digit representation
  // 11 columns total: 3 for '4', 1 gap, 3 for '0', 1 gap, 3 for '4'
  const columnsData: { [key: number]: number[] } = {
    0: [0, 1, 2, 3, 4],
    1: [4],
    2: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    // 3 is gap
    4: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    5: [0, 8],
    6: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    // 7 is gap
    8: [0, 1, 2, 3, 4],
    9: [4],
    10: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  const totalCols = 11;
  const totalRows = 9;

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#1d635e] via-[#244542] to-[#0f172a] text-white selection:bg-teal selection:text-white">
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(29, 99, 94, 0.6) 0%, rgba(15, 23, 42, 0) 70%)"
        }}
        aria-hidden="true"
      />

      {/* Top Header/Brand */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-6 pt-8 flex justify-between items-center">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-white hover:text-[#d4a373] transition-colors"
        >
          Regicore<span className="text-[#c05621]">.</span>
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-white/50">
          Error 404
        </span>
      </header>

      {/* Center 404 Equalizer Block Grid */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-6 pb-12">
        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Grid Container with bottom fade mask */}
          <div className="w-full relative py-6 flex justify-center items-center">
            <div 
              className="grid grid-cols-11 gap-1.5 sm:gap-2.5 w-full max-w-xl px-2"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.15) 88%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.15) 88%, rgba(0,0,0,0) 100%)"
              }}
            >
              {Array.from({ length: totalCols }).map((_, colIndex) => {
                const activeRows = columnsData[colIndex] || [];
                return (
                  <div key={colIndex} className="flex flex-col gap-1.5 sm:gap-2.5">
                    {Array.from({ length: totalRows }).map((_, rowIndex) => {
                      const isActive = activeRows.includes(rowIndex);
                      return (
                        <motion.div
                          key={rowIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0, 
                            scale: isActive ? 1 : 0.8 
                          }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (colIndex * 0.04) + (rowIndex * 0.02),
                            ease: "easeOut" 
                          }}
                          className={`h-4 sm:h-7 rounded-sm transition-colors duration-300 ${
                            isActive
                              ? "bg-white/30 backdrop-blur-xs border border-white/20 shadow-[0_2px_10px_rgba(255,255,255,0.08)]"
                              : "bg-transparent border border-transparent"
                          }`}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-8 text-center max-w-lg px-4 space-y-3">
            <h1 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Oops! Page not found!
            </h1>
            <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed max-w-md mx-auto">
              Every journey has a few misfires. Let&apos;s head back and keep going.
            </p>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-block bg-white text-[#0f172a] hover:bg-[#f0efe9] font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-none transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Go Back Home
              </Link>
              <Link
                href="/#book"
                className="w-full sm:w-auto inline-block bg-transparent border border-white/30 hover:border-white text-white font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-none transition-all duration-300 text-center"
              >
                Book a Call
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="relative z-10 text-center py-6 text-xs text-white/40 border-t border-white/10">
        &copy; {new Date().getFullYear()} Regicore. Custom AI, engineered for ROI.
      </footer>
    </div>
  );
}
