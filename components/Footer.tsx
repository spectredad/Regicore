export default function Footer() {
  return (
    <footer className="py-10 px-5 border-t border-black/[0.06] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col gap-1">
          {/* Logo: 18px */}
          <span className="font-display text-[18px] font-semibold text-ink tracking-[-0.01em]">Regicore</span>
          {/* Copyright: 13px, #9CA3AF */}
          <span className="text-[13px] text-[#9CA3AF]">© 2026 Regicore. Custom AI, engineered for ROI.</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          {[
            { label: "Services", href: "/#services" },
            { label: "Pricing", href: "/#pricing" },
            { label: "FAQ", href: "/#faq" },
            { label: "Contact", href: "/#book" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#9CA3AF] hover:text-ink transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-5 items-center">
          <a
            href="https://linkedin.com/company/regicore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9CA3AF] hover:text-ink transition-colors duration-300"
            aria-label="Regicore on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/regicore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#9CA3AF] hover:text-ink transition-colors duration-300"
            aria-label="Regicore on X (formerly Twitter)"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
