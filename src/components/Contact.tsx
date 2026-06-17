"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

const socials = [
  { label: "Email", href: "mailto:patelrudrab8@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rudrapatel8" },
  { label: "GitHub", href: "https://github.com/rudrapatel8" },
  { label: "Résumé", href: "/resume/Resume.pdf" },
];

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heading = root.current!.querySelector<HTMLElement>("[data-cta]");
      if (heading) {
        const split = new SplitText(heading, {
          type: "lines,chars",
          linesClass: "mask",
        });
        gsap.set(split.chars, { yPercent: 120 });
        gsap.to(split.chars, {
          yPercent: 0,
          stagger: 0.02,
          duration: 1,
          ease: "ease-out-expo",
          scrollTrigger: { trigger: heading, start: "top 80%" },
        });
      }
      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48"
    >
      <p className="font-display text-sm tracking-[0.4em] text-indigo-soft uppercase">
        Contact
      </p>

      <h2
        data-cta
        className="mt-8 text-display text-[clamp(2.5rem,9vw,8rem)] font-semibold text-ink"
      >
        Let&rsquo;s build something.
      </h2>

      <p className="mt-8 max-w-md text-muted">
        Currently looking for a Summer 2027 Machine Learning or Data Science
        internship — tackling massive, messy datasets and AI infrastructure that
        scales.
      </p>

      <a
        href="mailto:patelrudrab8@gmail.com"
        data-cursor="link"
        className="group mt-10 inline-block text-display text-[clamp(1.4rem,4vw,2.6rem)] font-medium text-ink"
      >
        <span className="relative">
          patelrudrab8@gmail.com
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-indigo-soft transition-transform duration-500 group-hover:scale-x-100" />
        </span>
      </a>

      <div className="mt-12 flex flex-wrap gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            data-cursor="link"
            data-magnetic="0.25"
            className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/10"
          >
            {s.label}
            <ArrowUpRight
              size={16}
              className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
            />
          </a>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-faint sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Rudra Patel</span>
        <span>Built with Next.js · GSAP · Lenis</span>
      </div>
    </section>
  );
}
