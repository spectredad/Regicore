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
        className="bg-ink text-white text-sm font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shrink-0"
      >
        Book a call →
      </a>
    </div>
  );
}
