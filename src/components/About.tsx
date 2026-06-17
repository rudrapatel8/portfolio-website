"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

const paragraph =
  "Anyone can train a model. The real engineering challenge is what happens next — serving it through low-latency APIs, building fault-tolerant data pipelines, and wrapping it in a seamless experience. I bring that product-first mindset to every system I build, from hybrid Prophet/XGBoost forecasting engines to privacy-first semantic search.";

const facts = [
  { k: "Education", v: "B.A. Computer Science & Data Science — Rutgers" },
  { k: "Graduating", v: "2027" },
  { k: "Based in", v: "New Brunswick, NJ" },
  { k: "Seeking", v: "Summer 2027 ML / Data Science Internship" },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const para = root.current!.querySelector<HTMLElement>("[data-about-para]");
      if (para) {
        const split = new SplitText(para, { type: "words" });
        gsap.set(split.words, { opacity: 0.12 });
        gsap.to(split.words, {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: para,
            start: "top 78%",
            end: "top 30%",
            scrub: true,
          },
        });
      }

      gsap.from("[data-fact]", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        ease: "ease-out-expo",
        duration: 0.9,
        scrollTrigger: { trigger: "[data-facts]", start: "top 80%" },
      });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-44"
    >
      <div className="orb -top-[5%] right-[5%] h-[32vw] w-[32vw] bg-fuchsia-500/12" />
      <div className="orb bottom-[10%] -left-[5%] h-[28vw] w-[28vw] bg-indigo/15" />
      <p className="relative font-display text-sm tracking-[0.4em] text-indigo-soft uppercase">
        About
      </p>
      <p
        data-about-para
        className="mt-10 max-w-4xl text-display text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.15] font-medium text-ink"
      >
        {paragraph}
      </p>

      <div
        data-facts
        className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {facts.map((f) => (
          <div key={f.k} data-fact className="bg-canvas p-7">
            <p className="text-[11px] tracking-[0.25em] text-faint uppercase">
              {f.k}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{f.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
