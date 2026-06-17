"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { experiences } from "@/data/experience";

export default function Experience() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the timeline line as you scroll through the section.
      const line = root.current!.querySelector<HTMLElement>("[data-line]");
      const track = root.current!.querySelector<HTMLElement>("[data-track]");
      if (line && track) {
        gsap.set(line, { scaleY: 0, transformOrigin: "top" });
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 60%",
            end: "bottom 75%",
            scrub: true,
          },
        });
      }

      gsap.utils
        .toArray<HTMLElement>("[data-xp]")
        .forEach((item) => {
          const reveals = item.querySelectorAll<HTMLElement>("[data-xp-reveal]");
          const node = item.querySelector<HTMLElement>("[data-node]");
          const fades = item.querySelectorAll<HTMLElement>("[data-xp-fade]");

          gsap.set(reveals, { yPercent: 120 });
          gsap.set(fades, { opacity: 0, y: 20 });

          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 78%" },
            defaults: { ease: "ease-out-expo" },
          });
          if (node) {
            tl.fromTo(
              node,
              { scale: 0 },
              { scale: 1, duration: 0.5, ease: "back.out(2)" },
              0
            );
          }
          tl.to(reveals, { yPercent: 0, duration: 0.9, stagger: 0.06 }, 0.05)
            .to(fades, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05 }, 0.25);
        });

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-44"
    >
      <div className="orb top-[5%] right-[8%] h-[30vw] w-[30vw] bg-cyan-400/12" />
      <div className="orb bottom-[10%] left-[2%] h-[28vw] w-[28vw] bg-fuchsia-500/12" />

      <p className="relative font-display text-sm tracking-[0.4em] text-indigo-soft uppercase">
        Experience
      </p>
      <h2 className="relative mt-6 max-w-3xl text-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold text-ink">
        Where I&rsquo;ve <span className="text-gradient">built</span>.
      </h2>

      <div data-track className="relative mt-16 md:mt-24">
        {/* Timeline rail */}
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:left-[9px]" />
        <div
          data-line
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-indigo-soft via-cyan-400 to-fuchsia-400 md:left-[9px]"
        />

        <div className="space-y-16 md:space-y-24">
          {experiences.map((xp, i) => (
            <article
              key={`${xp.company}-${i}`}
              data-xp
              className="relative pl-10 md:pl-20"
            >
              {/* Node */}
              <span
                data-node
                className="absolute top-1.5 left-0 flex h-[18px] w-[18px] items-center justify-center rounded-full md:left-0.5"
                style={{
                  background: xp.accent,
                  boxShadow: `0 0 0 4px ${xp.accent}26, 0 0 24px ${xp.accent}80`,
                }}
              >
                {xp.current && (
                  <span className="absolute h-full w-full animate-ping rounded-full opacity-60" style={{ background: xp.accent }} />
                )}
              </span>

              <div className="mask">
                <span
                  data-xp-reveal
                  className="block font-display text-sm tracking-[0.25em] uppercase"
                  style={{ color: xp.accent }}
                >
                  {xp.period}
                  {xp.current && (
                    <span className="ml-3 rounded-full border border-current px-2 py-0.5 text-[10px]">
                      Current
                    </span>
                  )}
                </span>
              </div>

              <div className="mask mt-3">
                <h3
                  data-xp-reveal
                  className="block text-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold text-ink"
                >
                  {xp.role}
                </h3>
              </div>

              <div className="mask mt-1">
                <p data-xp-reveal className="block text-base text-muted">
                  {xp.company}
                  {xp.org ? ` · ${xp.org}` : ""} — {xp.location}
                </p>
              </div>

              {/* Metrics */}
              <div data-xp-fade className="mt-6 flex flex-wrap gap-3">
                {xp.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass flex items-baseline gap-2 rounded-2xl px-4 py-2.5"
                    style={{ borderColor: `${xp.accent}40` }}
                  >
                    <span
                      className="text-display text-xl font-semibold"
                      style={{ color: xp.accent }}
                    >
                      {m.value}
                    </span>
                    <span className="text-[11px] tracking-wide text-muted uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul data-xp-fade className="mt-6 max-w-2xl space-y-3">
                {xp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ background: xp.accent }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div data-xp-fade className="mt-6 flex flex-wrap gap-2">
                {xp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
