import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        cream: "#ffffff",
        peach: "#f3efff",
        ink: "#26203a",
        pink: "#efe6ff",
        mint: "#e4d8ff",
        lav: "#d8c7ff",
        sky: "#ece4ff",
        muted: "#5b5470",
        dark: "#211c33",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      animation: {
        "fade-in": "fadeIn 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "count-up": "countUp 1.2s cubic-bezier(0.16,1,0.3,1) both",
        "scroll-left": "scrollLeft 28s linear infinite",
        "pulse-node": "pulseNode 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "none" } },
        scrollLeft: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pulseNode: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(168,139,250,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(168,139,250,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
