"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[65] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#top"
          data-cursor="link"
          data-magnetic="0.3"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Rudra Patel<span className="text-indigo-soft">.</span>
        </a>

        <nav
          className={`glass hidden items-center gap-1 rounded-full px-2 py-2 text-sm text-muted transition-opacity md:flex ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="link"
              className="rounded-full px-4 py-1.5 transition-colors hover:bg-white/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          data-cursor="link"
          data-magnetic="0.3"
          className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-white/5"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
