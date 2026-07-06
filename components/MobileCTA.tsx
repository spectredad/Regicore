"use client";
import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const bookSection = document.getElementById("book");
    if (!bookSection) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(bookSection);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <div
      className="mobile-cta md:hidden"
      role="complementary"
      aria-label="Book a call"
    >
      <p className="text-ink text-sm font-medium flex-1 truncate">
        Ready to automate? Book a free call.
      </p>
      <a
        href="#book"
        className="bg-ink text-paper text-[12px] font-semibold uppercase tracking-[0.08em] px-5 py-3 hover:bg-rust transition-colors shrink-0"
      >
        Book a call
      </a>
    </div>
  );
}
