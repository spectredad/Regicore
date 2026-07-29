"use client";

/* ─────────────────────────────────────────────
   Regicore Hero — Midnight Editorial
   Inline SVG isometric illustration (no animation)
───────────────────────────────────────────── */

function RegicoreIllustration() {
  return (
    <svg
      viewBox="0 0 1100 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-5xl mx-auto"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Subtle grain texture */}
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        {/* Teal pathway gradient */}
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B9A91" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#5B9A91" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5B9A91" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* ── PATHWAY (drawn first, behind buildings) ── */}
      {/* Main teal ribbon */}
      <path
        d="M 195 310 C 260 310, 290 280, 340 270 L 540 255 C 600 250, 640 265, 690 275 L 840 290 C 890 298, 920 305, 960 300"
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Soft coral parallel accent */}
      <path
        d="M 195 322 C 260 322, 290 292, 340 282 L 540 267 C 600 262, 640 277, 690 287 L 840 302 C 890 310, 920 317, 960 312"
        fill="none"
        stroke="#D47763"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* ══════════════════════════════════
          LEFT — INPUT GATEWAY
      ══════════════════════════════════ */}

      {/* Gate base/plinth */}
      <polygon points="120,330 210,330 210,340 120,340" fill="#1a3347" stroke="#2d4f68" strokeWidth="1" />
      {/* Gate left column */}
      <rect x="128" y="200" width="18" height="130" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" rx="1" />
      {/* Gate right column */}
      <rect x="196" y="200" width="18" height="130" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" rx="1" />
      {/* Gate top beam */}
      <rect x="120" y="190" width="102" height="16" fill="#254b68" stroke="#3a6682" strokeWidth="1" />
      {/* Gate pediment */}
      <polygon points="120,190 171,158 222,190" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      {/* Gate arch opening */}
      <path d="M 148 330 L 148 240 Q 171 220 194 240 L 194 330 Z" fill="#0C1724" />
      {/* Gate column cap details */}
      <rect x="125" y="196" width="24" height="6" fill="#2d5a7a" rx="1" />
      <rect x="193" y="196" width="24" height="6" fill="#2d5a7a" rx="1" />
      {/* Small staircase */}
      <rect x="145" y="330" width="52" height="6" fill="#1a3347" stroke="#2d4f68" strokeWidth="0.5" />
      <rect x="149" y="324" width="44" height="6" fill="#1e3c56" stroke="#2d4f68" strokeWidth="0.5" />
      <rect x="153" y="318" width="36" height="6" fill="#254b68" stroke="#2d5570" strokeWidth="0.5" />

      {/* INPUT SYMBOLS — minimal, symbolic */}
      {/* Envelope */}
      <g transform="translate(38, 222)">
        <rect x="0" y="0" width="36" height="26" rx="2" fill="#122334" stroke="#5B9A91" strokeWidth="1.2" />
        <polyline points="0,0 18,14 36,0" fill="none" stroke="#5B9A91" strokeWidth="1.2" />
      </g>
      {/* Waveform */}
      <g transform="translate(30, 270)">
        <rect x="0" y="0" width="44" height="24" rx="3" fill="#122334" stroke="#7098B8" strokeWidth="1" />
        <polyline points="6,12 12,6 16,16 20,4 24,18 28,8 32,14 38,12" fill="none" stroke="#7098B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Document */}
      <g transform="translate(40, 308)">
        <rect x="0" y="0" width="32" height="40" rx="2" fill="#122334" stroke="#B9C4C9" strokeWidth="1" />
        <line x1="6" y1="10" x2="26" y2="10" stroke="#7098B8" strokeWidth="1" />
        <line x1="6" y1="17" x2="26" y2="17" stroke="#7098B8" strokeWidth="1" />
        <line x1="6" y1="24" x2="18" y2="24" stroke="#7098B8" strokeWidth="1" />
        <circle cx="8" cy="34" r="5" fill="none" stroke="#B9C4C9" strokeWidth="1" />
        <path d="M5,37 Q8,40 11,37" fill="none" stroke="#B9C4C9" strokeWidth="0.8" />
      </g>
      {/* Task card */}
      <g transform="translate(82, 250)">
        <rect x="0" y="0" width="34" height="28" rx="2" fill="#122334" stroke="#5B9A91" strokeWidth="1" />
        <rect x="5" y="7" width="6" height="6" rx="1" fill="#5B9A91" opacity="0.6" />
        <line x1="15" y1="10" x2="29" y2="10" stroke="#B9C4C9" strokeWidth="1" />
        <rect x="5" y="17" width="6" height="6" rx="1" fill="none" stroke="#5B9A91" strokeWidth="0.8" opacity="0.6" />
        <line x1="15" y1="20" x2="24" y2="20" stroke="#B9C4C9" strokeWidth="1" />
      </g>

      {/* ══════════════════════════════════
          CENTRE — REGICORE PAVILION
      ══════════════════════════════════ */}

      {/* Outer base ring */}
      <ellipse cx="545" cy="330" rx="130" ry="28" fill="#122334" stroke="#2d5570" strokeWidth="1.2" />
      {/* Base platform step */}
      <ellipse cx="545" cy="318" rx="115" ry="22" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      {/* Inner floor */}
      <ellipse cx="545" cy="308" rx="95" ry="18" fill="#0f2236" stroke="#5B9A91" strokeWidth="1" opacity="0.8" />

      {/* Colonnade — 10 columns around ellipse */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => {
        const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
        const cx = 545 + Math.cos(angle) * 85;
        const cy = 308 + Math.sin(angle) * 16;
        const h = 82 + Math.sin(angle) * 8;
        return (
          <g key={i}>
            <rect x={cx - 5} y={cy - h} width={10} height={h} fill="#1e3c56" stroke="#2d5570" strokeWidth="0.8" rx="1" />
            <ellipse cx={cx} cy={cy - h} rx="7" ry="3" fill="#254b68" stroke="#3a6682" strokeWidth="0.8" />
          </g>
        );
      })}

      {/* Dome base ring */}
      <ellipse cx="545" cy="228" rx="72" ry="18" fill="#1e3c56" stroke="#5B9A91" strokeWidth="1.2" />
      {/* Dome body */}
      <path d="M 473 228 Q 473 170, 545 155 Q 617 170, 617 228 Z" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      {/* Dome highlight ribs */}
      {[-40,-20,0,20,40].map(x => (
        <path key={x} d={`M ${545+x} 228 Q ${545+x*0.4} 180, 545 155`} fill="none" stroke="#2d5570" strokeWidth="0.7" opacity="0.7" />
      ))}
      {/* Dome lantern */}
      <ellipse cx="545" cy="155" rx="16" ry="6" fill="#254b68" stroke="#5B9A91" strokeWidth="1" />
      <rect x="538" y="130" width="14" height="25" fill="#1e3c56" stroke="#7098B8" strokeWidth="0.8" rx="1" />
      <ellipse cx="545" cy="130" rx="10" ry="4" fill="#254b68" stroke="#5B9A91" strokeWidth="1" />

      {/* Halo ring above dome */}
      <ellipse cx="545" cy="118" rx="52" ry="11" fill="none" stroke="#5B9A91" strokeWidth="2.5" opacity="0.75" />
      <ellipse cx="545" cy="118" rx="58" ry="13" fill="none" stroke="#5B9A91" strokeWidth="0.8" opacity="0.3" />

      {/* Pavilion caption */}
      <text x="545" y="368" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#7098B8" letterSpacing="2" opacity="0.85">AI ORCHESTRATION</text>

      {/* Arch openings on pavilion */}
      {[-1, 0, 1].map(i => (
        <path key={i} d={`M ${545 + i*38 - 14} 308 L ${545 + i*38 - 14} 250 Q ${545 + i*38} 234, ${545 + i*38 + 14} 250 L ${545 + i*38 + 14} 308 Z`} fill="#0C1724" opacity="0.7" />
      ))}

      {/* ══════════════════════════════════
          RIGHT — OUTCOME PLATFORM
      ══════════════════════════════════ */}

      {/* Elevated platform base */}
      <polygon points="860,315 960,295 1040,315 940,335" fill="#122334" stroke="#2d5570" strokeWidth="1" />
      {/* Platform top face */}
      <polygon points="860,305 960,285 1040,305 940,325" fill="#1a3347" stroke="#2d5a7a" strokeWidth="1" />
      {/* Platform side face */}
      <polygon points="860,305 860,315 940,335 940,325" fill="#0f2236" stroke="#2d4f68" strokeWidth="0.8" />

      {/* Calendar block */}
      <g transform="translate(870, 240)">
        {/* Block body */}
        <rect x="0" y="0" width="50" height="55" rx="3" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" />
        {/* Calendar top bar */}
        <rect x="0" y="0" width="50" height="14" rx="3" fill="#254b68" stroke="#3a6682" strokeWidth="1" />
        {/* Rings */}
        <line x1="15" y1="-4" x2="15" y2="6" stroke="#7098B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="-4" x2="35" y2="6" stroke="#7098B8" strokeWidth="2" strokeLinecap="round" />
        {/* Date */}
        <text x="25" y="42" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#F4F6F5">31</text>
      </g>

      {/* Record card stack */}
      <g transform="translate(942, 255)">
        <rect x="8" y="12" width="56" height="38" rx="2" fill="#122334" stroke="#7098B8" strokeWidth="1" opacity="0.7" />
        <rect x="4" y="6" width="56" height="38" rx="2" fill="#1a3347" stroke="#7098B8" strokeWidth="1" opacity="0.85" />
        <rect x="0" y="0" width="56" height="38" rx="2" fill="#1e3c56" stroke="#7098B8" strokeWidth="1" />
        <line x1="8" y1="12" x2="48" y2="12" stroke="#7098B8" strokeWidth="0.8" opacity="0.7" />
        <line x1="8" y1="20" x2="42" y2="20" stroke="#7098B8" strokeWidth="0.8" opacity="0.5" />
        <line x1="8" y1="28" x2="38" y2="28" stroke="#7098B8" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Upward coral arrow */}
      <g opacity="0.9">
        <path
          d="M 1012 290 L 1012 200 L 1038 220 M 1012 200 L 986 220"
          fill="none"
          stroke="#D47763"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Coral status dot */}
        <circle cx="1012" cy="200" r="5" fill="#D47763" opacity="0.8" />
      </g>

      {/* ── DECORATIVE MARKS (max 8) ── */}
      {/* Stars / sparkles */}
      {/* 1 */}
      <path d="M 310 190 L 313 198 L 321 201 L 313 204 L 310 212 L 307 204 L 299 201 L 307 198 Z" fill="#F4F6F5" opacity="0.25" />
      {/* 2 */}
      <path d="M 750 165 L 752 170 L 757 172 L 752 174 L 750 179 L 748 174 L 743 172 L 748 170 Z" fill="#F4F6F5" opacity="0.2" />
      {/* 3 */}
      <path d="M 1060 240 L 1063 248 L 1071 251 L 1063 254 L 1060 262 L 1057 254 L 1049 251 L 1057 248 Z" fill="#7098B8" opacity="0.4" />
      {/* 4 small dot */}
      <circle cx="400" cy="300" r="4" fill="#5B9A91" opacity="0.35" />
      {/* 5 small dot */}
      <circle cx="785" cy="340" r="3" fill="#F4F6F5" opacity="0.2" />
      {/* 6 small dot */}
      <circle cx="80" cy="355" r="3" fill="#D47763" opacity="0.4" />
      {/* 7 sparkle */}
      <path d="M 660 195 L 661.5 199 L 666 200.5 L 661.5 202 L 660 206 L 658.5 202 L 654 200.5 L 658.5 199 Z" fill="#5B9A91" opacity="0.4" />
      {/* 8 sparkle */}
      <path d="M 440 380 L 441 382 L 443 383 L 441 384 L 440 386 L 439 384 L 437 383 L 439 382 Z" fill="#F4F6F5" opacity="0.3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-midnight pt-36 md:pt-44 pb-0 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted border border-line px-4 py-2">
            CUSTOM AI SYSTEMS FOR BUSINESS OPERATIONS
          </span>
        </div>

        {/* Headline — centred */}
        <h1 className="font-display text-center font-medium text-ink text-balance leading-[1.04] tracking-[-0.025em] text-[40px] sm:text-[58px] md:text-[76px] max-w-4xl mx-auto">
          Make complex operations feel{" "}
          <em className="not-italic italic text-teal">simple.</em>
        </h1>

        {/* Supporting copy */}
        <p className="text-center text-[16px] sm:text-[18px] leading-relaxed text-muted max-w-2xl mx-auto mt-6 text-pretty">
          Regicore builds custom AI systems that handle repetitive business tasks, increase capacity and make growth easier to manage.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center mt-8 mb-14">
          <a
            href="#book"
            className="bg-soft-white text-midnight font-semibold text-[13px] uppercase tracking-[0.08em] px-8 py-4 hover:bg-sand transition-colors duration-300"
          >
            Talk to an Expert
          </a>
          <a
            href="#services"
            className="border border-soft-white text-soft-white font-semibold text-[13px] uppercase tracking-[0.08em] px-8 py-4 hover:bg-teal/10 hover:border-teal transition-colors duration-300"
          >
            See Our Systems
          </a>
        </div>

        {/* Illustration */}
        <div className="w-full">
          <RegicoreIllustration />
        </div>
      </div>
    </section>
  );
}
