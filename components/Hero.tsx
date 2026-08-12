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
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1d635e" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#1d635e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1d635e" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* ── PATHWAY ── */}
      <path
        d="M 195 310 C 260 310, 290 280, 340 270 L 540 255 C 600 250, 640 265, 690 275 L 840 290 C 890 298, 920 305, 960 300"
        fill="none" stroke="url(#pathGrad)" strokeWidth="22" strokeLinecap="round" opacity="0.55"
      />
      <path
        d="M 195 322 C 260 322, 290 292, 340 282 L 540 267 C 600 262, 640 277, 690 287 L 840 302 C 890 310, 920 317, 960 312"
        fill="none" stroke="#c05621" strokeWidth="4" strokeLinecap="round" opacity="0.45"
      />

      {/* ── LEFT — INPUT GATEWAY (INTAKE & CONTRACTS) ── */}
      <polygon points="120,330 210,330 210,340 120,340" fill="#e4e2da" stroke="#a39f8f" strokeWidth="1" />
      <rect x="128" y="200" width="18" height="130" fill="#d5d2c6" stroke="#a39f8f" strokeWidth="1" rx="1" />
      <rect x="196" y="200" width="18" height="130" fill="#d5d2c6" stroke="#a39f8f" strokeWidth="1" rx="1" />
      <rect x="120" y="190" width="102" height="16" fill="#c4c0b1" stroke="#a39f8f" strokeWidth="1" />
      <polygon points="120,190 171,158 222,190" fill="#e4e2da" stroke="#a39f8f" strokeWidth="1" />
      <path d="M 148 330 L 148 240 Q 171 220 194 240 L 194 330 Z" fill="#f9f8f5" />
      <rect x="125" y="196" width="24" height="6" fill="#a39f8f" rx="1" />
      <rect x="193" y="196" width="24" height="6" fill="#a39f8f" rx="1" />
      <rect x="145" y="330" width="52" height="6" fill="#e4e2da" stroke="#a39f8f" strokeWidth="0.5" />
      <rect x="149" y="324" width="44" height="6" fill="#d5d2c6" stroke="#a39f8f" strokeWidth="0.5" />
      <rect x="153" y="318" width="36" height="6" fill="#c4c0b1" stroke="#a39f8f" strokeWidth="0.5" />

      {/* Input symbols (Legal Intake & Documents) */}
      <g transform="translate(38, 222)">
        <rect x="0" y="0" width="36" height="26" rx="2" fill="#f0efe9" stroke="#1d635e" strokeWidth="1.2" />
        <polyline points="0,0 18,14 36,0" fill="none" stroke="#1d635e" strokeWidth="1.2" />
      </g>
      <g transform="translate(30, 270)">
        <rect x="0" y="0" width="44" height="24" rx="3" fill="#f0efe9" stroke="#334155" strokeWidth="1" />
        <polyline points="6,12 12,6 16,16 20,4 24,18 28,8 32,14 38,12" fill="none" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(40, 308)">
        <rect x="0" y="0" width="32" height="40" rx="2" fill="#f0efe9" stroke="#475569" strokeWidth="1" />
        <line x1="6" y1="10" x2="26" y2="10" stroke="#334155" strokeWidth="1.5" />
        <line x1="6" y1="17" x2="22" y2="17" stroke="#c05621" strokeWidth="1.5" />
        <line x1="6" y1="24" x2="26" y2="24" stroke="#334155" strokeWidth="1.5" />
        <circle cx="8" cy="33" r="4" fill="none" stroke="#1d635e" strokeWidth="1" />
      </g>
      <g transform="translate(82, 250)">
        <rect x="0" y="0" width="34" height="28" rx="2" fill="#f0efe9" stroke="#1d635e" strokeWidth="1" />
        <rect x="5" y="7" width="6" height="6" rx="1" fill="#1d635e" opacity="0.6" />
        <line x1="15" y1="10" x2="29" y2="10" stroke="#475569" strokeWidth="1" />
        <rect x="5" y="17" width="6" height="6" rx="1" fill="none" stroke="#1d635e" strokeWidth="0.8" opacity="0.6" />
        <line x1="15" y1="20" x2="24" y2="20" stroke="#475569" strokeWidth="1" />
      </g>

      {/* ── CENTRE — PAVILION ── */}
      <ellipse cx="545" cy="330" rx="130" ry="28" fill="#f0efe9" stroke="#a39f8f" strokeWidth="1.2" />
      <ellipse cx="545" cy="318" rx="115" ry="22" fill="#e4e2da" stroke="#a39f8f" strokeWidth="1" />
      <ellipse cx="545" cy="308" rx="95" ry="18" fill="#e9e7df" stroke="#1d635e" strokeWidth="1" opacity="0.8" />

      {[0,1,2,3,4,5,6,7,8,9].map(i => {
        const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
        const cx = 545 + Math.cos(angle) * 85;
        const cy = 308 + Math.sin(angle) * 16;
        const h = 82 + Math.sin(angle) * 8;
        return (
          <g key={i}>
            <rect x={cx - 5} y={cy - h} width={10} height={h} fill="#d5d2c6" stroke="#a39f8f" strokeWidth="0.8" rx="1" />
            <ellipse cx={cx} cy={cy - h} rx="7" ry="3" fill="#c4c0b1" stroke="#a39f8f" strokeWidth="0.8" />
          </g>
        );
      })}

      <ellipse cx="545" cy="228" rx="72" ry="18" fill="#d5d2c6" stroke="#1d635e" strokeWidth="1.2" />
      <path d="M 473 228 Q 473 170, 545 155 Q 617 170, 617 228 Z" fill="#e4e2da" stroke="#a39f8f" strokeWidth="1" />
      {[-40,-20,0,20,40].map(x => (
        <path key={x} d={`M ${545+x} 228 Q ${545+x*0.4} 180, 545 155`} fill="none" stroke="#a39f8f" strokeWidth="0.7" opacity="0.7" />
      ))}
      <ellipse cx="545" cy="155" rx="16" ry="6" fill="#c4c0b1" stroke="#1d635e" strokeWidth="1" />
      <rect x="538" y="130" width="14" height="25" fill="#d5d2c6" stroke="#334155" strokeWidth="0.8" rx="1" />
      <ellipse cx="545" cy="130" rx="10" ry="4" fill="#c4c0b1" stroke="#1d635e" strokeWidth="1" />
      <ellipse cx="545" cy="118" rx="52" ry="11" fill="none" stroke="#1d635e" strokeWidth="2.5" opacity="0.75" />
      <ellipse cx="545" cy="118" rx="58" ry="13" fill="none" stroke="#1d635e" strokeWidth="0.8" opacity="0.3" />

      {[-1, 0, 1].map(i => (
        <path key={i} d={`M ${545 + i*38 - 14} 308 L ${545 + i*38 - 14} 250 Q ${545 + i*38} 234, ${545 + i*38 + 14} 250 L ${545 + i*38 + 14} 308 Z`} fill="#f9f8f5" opacity="0.7" />
      ))}

      {/* ── RIGHT — OUTCOME PLATFORM ── */}
      <polygon points="860,315 960,295 1040,315 940,335" fill="#f0efe9" stroke="#a39f8f" strokeWidth="1" />
      <polygon points="860,305 960,285 1040,305 940,325" fill="#e4e2da" stroke="#a39f8f" strokeWidth="1" />
      <polygon points="860,305 860,315 940,335 940,325" fill="#e9e7df" stroke="#a39f8f" strokeWidth="0.8" />

      <g transform="translate(870, 240)">
        <rect x="0" y="0" width="50" height="55" rx="3" fill="#d5d2c6" stroke="#a39f8f" strokeWidth="1" />
        <rect x="0" y="0" width="50" height="14" rx="3" fill="#c4c0b1" stroke="#a39f8f" strokeWidth="1" />
        <line x1="15" y1="-4" x2="15" y2="6" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <line x1="35" y1="-4" x2="35" y2="6" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
        <text x="25" y="42" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#0f172a">31</text>
      </g>

      <g transform="translate(942, 255)">
        <rect x="8" y="12" width="56" height="38" rx="2" fill="#f0efe9" stroke="#334155" strokeWidth="1" opacity="0.7" />
        <rect x="4" y="6" width="56" height="38" rx="2" fill="#e4e2da" stroke="#334155" strokeWidth="1" opacity="0.85" />
        <rect x="0" y="0" width="56" height="38" rx="2" fill="#d5d2c6" stroke="#334155" strokeWidth="1" />
        <line x1="8" y1="12" x2="48" y2="12" stroke="#334155" strokeWidth="0.8" opacity="0.7" />
        <line x1="8" y1="20" x2="42" y2="20" stroke="#334155" strokeWidth="0.8" opacity="0.5" />
        <line x1="8" y1="28" x2="38" y2="28" stroke="#334155" strokeWidth="0.8" opacity="0.5" />
      </g>

      <g opacity="0.9">
        <path d="M 1012 290 L 1012 200 L 1038 220 M 1012 200 L 986 220" fill="none" stroke="#c05621" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="1012" cy="200" r="5" fill="#c05621" opacity="0.8" />
      </g>

      {/* ── DECORATIVE MARKS (8) ── */}
      <path d="M 310 190 L 313 198 L 321 201 L 313 204 L 310 212 L 307 204 L 299 201 L 307 198 Z" fill="#0f172a" opacity="0.25" />
      <path d="M 750 165 L 752 170 L 757 172 L 752 174 L 750 179 L 748 174 L 743 172 L 748 170 Z" fill="#0f172a" opacity="0.2" />
      <path d="M 1060 240 L 1063 248 L 1071 251 L 1063 254 L 1060 262 L 1057 254 L 1049 251 L 1057 248 Z" fill="#334155" opacity="0.4" />
      <circle cx="400" cy="300" r="4" fill="#1d635e" opacity="0.35" />
      <circle cx="785" cy="340" r="3" fill="#0f172a" opacity="0.2" />
      <circle cx="80" cy="355" r="3" fill="#c05621" opacity="0.4" />
      <path d="M 660 195 L 661.5 199 L 666 200.5 L 661.5 202 L 660 206 L 658.5 202 L 654 200.5 L 658.5 199 Z" fill="#1d635e" opacity="0.4" />
      <path d="M 440 380 L 441 382 L 443 383 L 441 384 L 440 386 L 439 384 L 437 383 L 439 382 Z" fill="#0f172a" opacity="0.3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="bg-midnight flex flex-col justify-between min-h-screen pt-28 sm:pt-36 pb-6 md:pb-10"
    >
      {/* Copy block — refined spacing for top header clearance & mobile responsiveness */}
      <div className="flex flex-col items-center px-5 text-center max-w-4xl mx-auto w-full">
        {/* Headline */}
        <h1
          className="font-display font-medium text-ink text-balance leading-[1.06] sm:leading-[1.02] tracking-[-0.025em] mx-auto text-[32px] sm:text-[44px] md:text-[54px] mb-4 sm:mb-5"
        >
          Your firm can take on more matters without hiring another associate.
        </h1>

        {/* Supporting copy */}
        <p
          className="text-muted text-pretty mx-auto text-[14px] sm:text-[15.5px] leading-relaxed max-w-xl mb-6 sm:mb-7"
        >
          Regicore builds private AI systems that handle intake, document review, research, and admin work. Your lawyers stay on high-value work. Your firm grows without the payroll and risk that usually come with growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center items-stretch sm:items-center mb-5">
          <a
            href="https://regicore.com/start"
            className="bg-soft-white text-midnight font-semibold uppercase tracking-[0.08em] shadow-md hover:bg-sand transition-colors duration-300 text-[12px] sm:text-[13px] px-7 py-3.5 sm:py-4 text-center"
          >
            Book a free firm audit
          </a>
        </div>

        {/* Trust line */}
        <p className="text-muted/75 text-[11px] sm:text-[12.5px] tracking-wide text-center leading-normal max-w-lg">
          Private deployments &middot; Client data never leaves your environment &middot; First systems live in two weeks.
        </p>
      </div>

      {/* Illustration block — prominent & larger on mobile */}
      <div className="flex items-end justify-center w-full mt-6 sm:mt-10 px-2 sm:px-6">
        <div className="w-full max-w-[1180px] h-[220px] sm:h-[280px] md:h-[340px] flex items-end justify-center transform translate-y-3 sm:translate-y-6">
          <RegicoreIllustration />
        </div>
      </div>
    </section>
  );
}
