const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Agents", href: "/#agents" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Book a call", href: "/#book" },
      { label: "ROI calculator", href: "/#roi" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/company/regicore", external: true },
      { label: "Instagram", href: "https://www.instagram.com/regicorex/", external: true },
      { label: "hello@regicore.com", href: "mailto:hello@regicore.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper overflow-hidden">
      {/* Top: CTA line + link columns */}
      <div className="max-w-6xl mx-auto px-5 pt-20 md:pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 items-start">
          <div>
            <p className="section-label text-paper/50 mb-6">One last thing</p>
            <p className="font-display text-[28px] sm:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-paper text-balance max-w-lg">
              The best time to automate was last quarter.
              <span className="text-rust"> The second best is now.</span>
            </p>
            <a
              href="/#book"
              className="inline-block mt-8 bg-paper text-ink font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-4 hover:bg-rust hover:text-paper transition-colors duration-300"
            >
              Book a call
            </a>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8" aria-label="Footer">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="section-label text-paper/40 mb-5">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[14px] text-paper/70 hover:text-paper transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal line */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-paper/15 mt-16 pt-6">
          <p className="text-[12px] text-paper/40">
            &copy; 2026 Regicore. Custom AI, engineered for ROI.
          </p>
          <p className="text-[12px] text-paper/40">
            Boutique AI agentic studio
          </p>
        </div>
      </div>

      {/* Giant wordmark, printed below and clipped at the baseline */}
      <div className="relative select-none" aria-hidden="true">
        <p className="footer-wordmark text-center translate-y-[0.14em] opacity-[0.92]">
          Regicore
        </p>
      </div>
    </footer>
  );
}
