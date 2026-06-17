"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects, type Project } from "@/data/projects";
import ProjectPanel from "./ProjectPanel";

interface ProjectShowcaseProps {
  onSelect: (project: Project, mediaEl: HTMLElement) => void;
}

export default function ProjectShowcase({ onSelect }: ProjectShowcaseProps) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const trackEl = track.current!;
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", trackEl);
      // include the intro panel width in the scroll distance.
      const getScrollAmount = () => trackEl.scrollWidth - window.innerWidth;

      const horizontal = gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Per-panel reveal driven by the horizontal container animation.
      panels.forEach((panel) => {
        const lines = panel.querySelectorAll<HTMLElement>("[data-reveal]");
        const fades = panel.querySelectorAll<HTMLElement>("[data-reveal-fade]");

        gsap.set(lines, { yPercent: 120 });
        gsap.set(fades, { opacity: 0, y: 24 });

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "ease-out-expo" },
        });
        tl.to(lines, { yPercent: 0, duration: 0.9, stagger: 0.08 }).to(
          fades,
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.06 },
          0.25
        );

        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: horizontal,
          start: "left center",
          onEnter: () => tl.play(),
          onLeaveBack: () => tl.reverse(),
        });
      });

      // Progress bar tied to the horizontal scroll.
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [onSelect]);

  return (
    <section ref={root} className="relative overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-px bg-white/5">
        <div
          data-progress
          className="h-full w-full origin-left scale-x-0 bg-indigo-soft"
        />
      </div>

      <div ref={track} className="flex h-[100svh] flex-nowrap">
        {/* Intro panel */}
        <div className="relative flex h-[100svh] w-screen shrink-0 flex-col justify-center px-6 md:px-16">
          <div className="orb top-1/4 left-[10%] h-[30vw] w-[30vw] bg-indigo/20" />
          <div className="orb bottom-[10%] right-[15%] h-[28vw] w-[28vw] bg-cyan-400/12" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="font-display text-sm tracking-[0.4em] text-indigo-soft uppercase">
              Selected Work
            </p>
            <h2 className="mt-6 max-w-4xl text-display text-[clamp(2.5rem,8vw,7rem)] font-semibold text-ink">
              Six projects.{" "}
              <span className="text-gradient">One throughline.</span>
            </h2>
            <p className="mt-8 max-w-md text-muted">
              From hybrid forecasting engines to on-device semantic search — keep
              scrolling to move through the work horizontally.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.3em] text-faint uppercase">
              <span className="h-px w-12 bg-faint" />
              Scroll to traverse
            </div>
          </div>
        </div>

        {projects.map((project) => (
          <ProjectPanel
            key={project.id}
            project={project}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
