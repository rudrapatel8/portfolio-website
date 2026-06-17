"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";
import GridMesh from "./GridMesh";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splits: SplitText[] = [];

      // Headline: split into chars, mask per line, rise from y:100%.
      const headline = root.current!.querySelector<HTMLElement>(
        "[data-split='headline']"
      );
      if (headline) {
        const split = new SplitText(headline, {
          type: "lines,chars",
          linesClass: "mask",
        });
        splits.push(split);
        gsap.set(split.chars, { yPercent: 120 });
      }

      const tl = gsap.timeline({
        defaults: { ease: "fluid" },
        delay: 0.2,
      });

      tl.from("[data-hero='eyebrow']", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
      });

      if (headline) {
        tl.to(
          splits[0].chars,
          {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.018,
            ease: "ease-out-expo",
          },
          0.15
        );
      }

      tl.from(
        "[data-hero='sub'] > *",
        { yPercent: 110, opacity: 0, duration: 1, stagger: 0.08 },
        0.5
      )
        .from(
          "[data-hero='meta'] > *",
          { y: 24, opacity: 0, duration: 0.8, stagger: 0.06 },
          0.7
        )
        .from(
          "[data-hero='scroll']",
          { opacity: 0, y: 20, duration: 0.8 },
          0.9
        );

      // Parallax drift of the headline as you scroll away.
      gsap.to("[data-hero='inner']", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <GridMesh />
      </div>
      <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-indigo/20 blur-[140px]" />

      <div data-hero="inner" className="relative mx-auto w-full max-w-6xl">
        <div className="mask mb-6">
          <p
            data-hero="eyebrow"
            className="font-display text-sm tracking-[0.35em] text-indigo-soft uppercase"
          >
            Computer Science &amp; Data Science · Rutgers &rsquo;27
          </p>
        </div>

        <h1
          data-split="headline"
          className="text-display text-[clamp(3.5rem,17vw,15rem)] font-semibold text-ink"
        >
          Rudra Patel
        </h1>

        <div
          data-hero="sub"
          className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          <p className="mask">
            <span className="block font-display text-lg tracking-tight text-ink md:text-2xl">
              Machine Learning &amp; Data Science Engineer
            </span>
          </p>
          <p className="mask mt-3">
            <span className="block">
              I build systems that make complex data actionable — the layer
              between rigorous machine learning and elegant software.
            </span>
          </p>
        </div>

        <div
          data-hero="meta"
          className="mt-10 flex flex-wrap items-center gap-3 text-xs tracking-wide text-muted uppercase"
        >
          <span className="glass rounded-full px-4 py-2">New Brunswick, NJ</span>
          <span className="glass rounded-full px-4 py-2">US Citizen</span>
          <span className="glass rounded-full px-4 py-2">
            Open to Summer 2027 ML / DS
          </span>
        </div>
      </div>

      <div
        data-hero="scroll"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.3em] text-faint uppercase"
      >
        Scroll
        <span className="h-12 w-px overflow-hidden bg-white/10">
          <span className="block h-1/2 w-full animate-pulse bg-indigo-soft" />
        </span>
      </div>
    </section>
  );
}
