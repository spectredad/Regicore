"use client";

/* ─────────────────────────────────────────────
   Regicore Hero — Midnight Editorial (Legal Systems)
   Above-the-fold layout: navbar + copy + illustration
───────────────────────────────────────────── */

function RegicoreIllustration() {
  return (
    <svg
      viewBox="0 0 1100 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B9A91" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#5B9A91" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5B9A91" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* ── PATHWAY ── */}
      <path
        d="M 195 310 C 260 310, 290 280, 340 270 L 540 255 C 600 250, 640 265, 690 275 L 840 290 C 890 298, 920 305, 960 300"
        fill="none" stroke="url(#pathGrad)" strokeWidth="22" strokeLinecap="round" opacity="0.55"
      />
      <path
        d="M 195 322 C 260 322, 290 292, 340 282 L 540 267 C 600 262, 640 277, 690 287 L 840 302 C 890 310, 920 317, 960 312"
        fill="none" stroke="#D47763" strokeWidth="4" strokeLinecap="round" opacity="0.45"
      />

      {/* ── LEFT — INPUT GATEWAY (INTAKE & CONTRACTS) ── */}
      <polygon points="120,330 210,330 210,340 120,340" fill="#1a3347" stroke="#2d4f68" strokeWidth="1" />
      <rect x="128" y="200" width="18" height="130" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" rx="1" />
      <rect x="196" y="200" width="18" height="130" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" rx="1" />
      <rect x="120" y="190" width="102" height="16" fill="#254b68" stroke="#3a6682" strokeWidth="1" />
      <polygon points="120,190 171,158 222,190" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      <path d="M 148 330 L 148 240 Q 171 220 194 240 L 194 330 Z" fill="#0C1724" />
      <rect x="125" y="196" width="24" height="6" fill="#2d5a7a" rx="1" />
      <rect x="193" y="196" width="24" height="6" fill="#2d5a7a" rx="1" />
      <rect x="145" y="330" width="52" height="6" fill="#1a3347" stroke="#2d4f68" strokeWidth="0.5" />
      <rect x="149" y="324" width="44" height="6" fill="#1e3c56" stroke="#2d4f68" strokeWidth="0.5" />
      <rect x="153" y="318" width="36" height="6" fill="#254b68" stroke="#2d5570" strokeWidth="0.5" />

      {/* Input symbols (Legal Intake & Documents) */}
      <g transform="translate(38, 222)">
        <rect x="0" y="0" width="36" height="26" rx="2" fill="#122334" stroke="#5B9A91" strokeWidth="1.2" />
        <polyline points="0,0 18,14 36,0" fill="none" stroke="#5B9A91" strokeWidth="1.2" />
      </g>
      <g transform="translate(30, 270)">
        <rect x="0" y="0" width="44" height="24" rx="3" fill="#122334" stroke="#7098B8" strokeWidth="1" />
        <polyline points="6,12 12,6 16,16 20,4 24,18 28,8 32,14 38,12" fill="none" stroke="#7098B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(40, 308)">
        <rect x="0" y="0" width="32" height="40" rx="2" fill="#122334" stroke="#B9C4C9" strokeWidth="1" />
        <line x1="6" y1="10" x2="26" y2="10" stroke="#7098B8" strokeWidth="1.5" />
        <line x1="6" y1="17" x2="22" y2="17" stroke="#D47763" strokeWidth="1.5" />
        <line x1="6" y1="24" x2="26" y2="24" stroke="#7098B8" strokeWidth="1.5" />
        <circle cx="8" cy="33" r="4" fill="none" stroke="#5B9A91" strokeWidth="1" />
      </g>
      <g transform="translate(82, 250)">
        <rect x="0" y="0" width="34" height="28" rx="2" fill="#122334" stroke="#5B9A91" strokeWidth="1" />
        <rect x="5" y="7" width="6" height="6" rx="1" fill="#5B9A91" opacity="0.6" />
        <line x1="15" y1="10" x2="29" y2="10" stroke="#B9C4C9" strokeWidth="1" />
        <rect x="5" y="17" width="6" height="6" rx="1" fill="none" stroke="#5B9A91" strokeWidth="0.8" opacity="0.6" />
        <line x1="15" y1="20" x2="24" y2="20" stroke="#B9C4C9" strokeWidth="1" />
      </g>

      {/* ── CENTRE — PAVILION ── */}
      <ellipse cx="545" cy="330" rx="130" ry="28" fill="#122334" stroke="#2d5570" strokeWidth="1.2" />
      <ellipse cx="545" cy="318" rx="115" ry="22" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      <ellipse cx="545" cy="308" rx="95" ry="18" fill="#0f2236" stroke="#5B9A91" strokeWidth="1" opacity="0.8" />

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

      <ellipse cx="545" cy="228" rx="72" ry="18" fill="#1e3c56" stroke="#5B9A91" strokeWidth="1.2" />
      <path d="M 473 228 Q 473 170, 545 155 Q 617 170, 617 228 Z" fill="#1a3347" stroke="#2d5570" strokeWidth="1" />
      {[-40,-20,0,20,40].map(x => (
        <path key={x} d={`M ${545+x} 228 Q ${545+x*0.4} 180, 545 155`} fill="none" stroke="#2d5570" strokeWidth="0.7" opacity="0.7" />
      ))}
      <ellipse cx="545" cy="155" rx="16" ry="6" fill="#254b68" stroke="#5B9A91" strokeWidth="1" />
      <rect x="538" y="130" width="14" height="25" fill="#1e3c56" stroke="#7098B8" strokeWidth="0.8" rx="1" />
      <ellipse cx="545" cy="130" rx="10" ry="4" fill="#254b68" stroke="#5B9A91" strokeWidth="1" />
      <ellipse cx="545" cy="118" rx="52" ry="11" fill="none" stroke="#5B9A91" strokeWidth="2.5" opacity="0.75" />
      <ellipse cx="545" cy="118" rx="58" ry="13" fill="none" stroke="#5B9A91" strokeWidth="0.8" opacity="0.3" />

      {[-1, 0, 1].map(i => (
        <path key={i} d={`M ${545 + i*38 - 14} 308 L ${545 + i*38 - 14} 250 Q ${545 + i*38} 234, ${545 + i*38 + 14} 250 L ${545 + i*38 + 14} 308 Z`} fill="#0C1724" opacity="0.7" />
      ))}

      {/* ── RIGHT — OUTCOME PLATFORM ── */}
      <polygon points="860,315 960,295 1040,315 940,335" fill="#122334" stroke="#2d5570" strokeWidth="1" />
      <polygon points="860,305 960,285 1040,305 940,325" fill="#1a3347" stroke="#2d5a7a" strokeWidth="1" />
      <polygon points="860,305 860,315 940,335 940,325" fill="#0f2236" stroke="#2d4f68" strokeWidth="0.8" />

      <g transform="translate(870, 240)">
        <rect x="0" y="0" width="50" height="55" rx="3" fill="#1e3c56" stroke="#2d5570" strokeWidth="1" />
        <rect x="0" y="0" width="50" height="14" rx="3" fill="#254b68" stroke="#3a6682" strokeWidth="1" />
        <line x1="15" y1="-4" x2="15" y2="6" stroke="#7098B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="-4" x2="35" y2="6" stroke="#7098B8" strokeWidth="2" strokeLinecap="round" />
        <text x="25" y="42" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#F4F6F5">31</text>
      </g>

      <g transform="translate(942, 255)">
        <rect x="8" y="12" width="56" height="38" rx="2" fill="#122334" stroke="#7098B8" strokeWidth="1" opacity="0.7" />
        <rect x="4" y="6" width="56" height="38" rx="2" fill="#1a3347" stroke="#7098B8" strokeWidth="1" opacity="0.85" />
        <rect x="0" y="0" width="56" height="38" rx="2" fill="#1e3c56" stroke="#7098B8" strokeWidth="1" />
        <line x1="8" y1="12" x2="48" y2="12" stroke="#7098B8" strokeWidth="0.8" opacity="0.7" />
        <line x1="8" y1="20" x2="42" y2="20" stroke="#7098B8" strokeWidth="0.8" opacity="0.5" />
        <line x1="8" y1="28" x2="38" y2="28" stroke="#7098B8" strokeWidth="0.8" opacity="0.5" />
      </g>

      <g opacity="0.9">
        <path d="M 1012 290 L 1012 200 L 1038 220 M 1012 200 L 986 220" fill="none" stroke="#D47763" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="1012" cy="200" r="5" fill="#D47763" opacity="0.8" />
      </g>

      {/* ── DECORATIVE MARKS (8) ── */}
      <path d="M 310 190 L 313 198 L 321 201 L 313 204 L 310 212 L 307 204 L 299 201 L 307 198 Z" fill="#F4F6F5" opacity="0.25" />
      <path d="M 750 165 L 752 170 L 757 172 L 752 174 L 750 179 L 748 174 L 743 172 L 748 170 Z" fill="#F4F6F5" opacity="0.2" />
      <path d="M 1060 240 L 1063 248 L 1071 251 L 1063 254 L 1060 262 L 1057 254 L 1049 251 L 1057 248 Z" fill="#7098B8" opacity="0.4" />
      <circle cx="400" cy="300" r="4" fill="#5B9A91" opacity="0.35" />
      <circle cx="785" cy="340" r="3" fill="#F4F6F5" opacity="0.2" />
      <circle cx="80" cy="355" r="3" fill="#D47763" opacity="0.4" />
      <path d="M 660 195 L 661.5 199 L 666 200.5 L 661.5 202 L 660 206 L 658.5 202 L 654 200.5 L 658.5 199 Z" fill="#5B9A91" opacity="0.4" />
      <path d="M 440 380 L 441 382 L 443 383 L 441 384 L 440 386 L 439 384 L 437 383 L 439 382 Z" fill="#F4F6F5" opacity="0.3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="bg-midnight flex flex-col"
      style={{
        minHeight: "100svh",
      }}
    >
      {/* Copy block — ~38% of hero */}
      <div
        className="flex flex-col items-center justify-end px-5 text-center"
        style={{ flex: "0 0 auto", paddingTop: "clamp(100px, 13vh, 148px)", paddingBottom: "clamp(12px, 2vh, 20px)" }}
      >
        {/* Eyebrow badge */}
        <span
          className="text-muted border border-line px-4 py-1.5 font-semibold uppercase"
          style={{ fontSize: "clamp(9px, 0.7vw, 11px)", letterSpacing: "0.2em", marginBottom: "clamp(14px, 1.8vh, 20px)" }}
        >
          CUSTOM AI SYSTEMS FOR BUSINESS OPERATIONS
        </span>

        {/* Headline */}
        <h1
          className="font-display font-medium text-ink text-balance leading-[1.02] tracking-[-0.025em] mx-auto"
          style={{
            fontSize: "clamp(38px, 4vw, 72px)",
            maxWidth: "840px",
            marginBottom: "clamp(10px, 1.4vh, 16px)",
          }}
        >
          Give your lawyers their{" "}
          <em className="not-italic italic text-teal">time back.</em>
        </h1>

        {/* Supporting copy */}
        <p
          className="text-muted text-pretty mx-auto"
          style={{
            fontSize: "clamp(14px, 1.1vw, 17px)",
            lineHeight: "1.45",
            maxWidth: "680px",
            marginBottom: "clamp(14px, 2vh, 20px)",
          }}
        >
          Regicore builds private, custom AI systems that automate intake, document review, research, and admin so your firm scales without hiring more associates.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <a
            href="#book"
            className="bg-soft-white text-midnight font-semibold uppercase tracking-[0.08em] shadow-md hover:bg-sand transition-colors duration-300"
            style={{ fontSize: "clamp(11px, 0.85vw, 13px)", padding: "14px 28px" }}
          >
            Book a free firm audit
          </a>
          <a
            href="#services"
            className="border border-soft-white/80 text-soft-white font-medium uppercase tracking-[0.08em] hover:bg-teal/10 hover:border-teal transition-colors duration-300"
            style={{ fontSize: "clamp(11px, 0.85vw, 13px)", padding: "14px 28px" }}
          >
            See legal use cases
          </a>
        </div>

        {/* Trust line */}
        <p className="text-muted/70 text-[11px] sm:text-[12px] mt-3.5 tracking-wide text-center">
          Private deployments &middot; Client data stays in your environment &middot; First systems live in weeks.
        </p>
      </div>

      {/* Illustration block — clean 50px+ gap below trust line */}
      <div
        className="flex items-end justify-center w-full"
        style={{
          flex: "1 1 auto",
          minHeight: 0,
          marginTop: "clamp(40px, 5vh, 60px)",
          paddingLeft: "clamp(8px, 3vw, 40px)",
          paddingRight: "clamp(8px, 3vw, 40px)",
          paddingBottom: "clamp(12px, 2vh, 28px)",
        }}
      >
        <div
          style={{
            width: "min(1180px, 92vw)",
            maxHeight: "clamp(260px, 38vh, 380px)",
            display: "flex",
            alignItems: "flex-end",
            transform: "translateY(clamp(30px, 4vh, 60px))",
          }}
        >
          <RegicoreIllustration />
        </div>
      </div>
    </section>
  );
}
