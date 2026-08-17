const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "LinkedIn", href: "https://linkedin.com/company/regicore", external: true },
      { label: "Instagram", href: "https://www.instagram.com/regicorex/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-ink border-t border-line overflow-hidden">
      {/* Top: CTA line + link columns */}
      <div className="max-w-6xl mx-auto px-5 pt-16 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 items-start">
          <div>
            <p className="font-display text-[24px] sm:text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-ink text-balance max-w-lg">
              The best time to automate was last quarter.
              <span className="text-teal"> The second best is now.</span>
            </p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8" aria-label="Footer">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="section-label text-muted mb-5">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[14px] text-muted hover:text-ink transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {col.heading === "Company" && (
                  <address className="not-italic text-[14px] text-muted leading-6 mt-6">
                    <span className="block">Regicore</span>
                    <span className="block">3rd cross, New thippsandra,</span>
                    <span className="block">Bangalore, India.</span>
                    <a className="block mt-2 hover:text-ink transition-colors duration-300" href="tel:+919739690421">
                      91 9739690421
                    </a>
                  </address>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Legal line */}
        <div className="border-t border-line mt-16 pt-6">
          <p className="text-[12px] text-muted">
            &copy; 2026 Regicore. All rights reserved by Regicore. Legal information upon request at varun@regicorehq.com.
          </p>
        </div>
      </div>

      {/* Giant wordmark, printed below and clipped at the baseline */}
      <div className="relative select-none" aria-hidden="true">
        <p className="footer-wordmark text-center translate-y-[0.14em] opacity-100">
          Regicore
        </p>
      </div>
    </footer>
  );
}
