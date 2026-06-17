"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";

interface ProjectPanelProps {
  project: Project;
  onSelect: (project: Project, mediaEl: HTMLElement) => void;
}

export default function ProjectPanel({ project, onSelect }: ProjectPanelProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    const inner = innerRef.current;
    if (!inner) return;
    gsap.to(inner, { scale: 1.06, duration: 0.6, ease: "ease-out-expo" });
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (!inner) return;
    gsap.to(inner, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "ease-out-expo",
    });
  };

  const onMove = (e: React.PointerEvent) => {
    const el = mediaRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const r = el.getBoundingClientRect();
    const relX = (e.clientX - (r.left + r.width / 2)) / r.width;
    const relY = (e.clientY - (r.top + r.height / 2)) / r.height;
    gsap.to(inner, {
      x: relX * 32,
      y: relY * 32,
      duration: 0.6,
      ease: "power3",
    });
  };

  return (
    <article
      data-panel
      className="relative flex h-[100svh] w-screen shrink-0 items-center px-6 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
        {/* Text column */}
        <div className="order-2 md:order-1 md:col-span-4">
          <div className="mask">
            <span
              data-reveal
              className="font-display text-sm tracking-[0.4em] text-faint"
              style={{ color: project.accent }}
            >
              {project.index} / 06
            </span>
          </div>
          <h2 className="mt-4 text-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold text-ink">
            <span className="mask">
              <span data-reveal className="block">
                {project.title}
              </span>
            </span>
          </h2>
          <div className="mask mt-5 max-w-sm">
            <p data-reveal className="block text-sm leading-relaxed text-muted">
              {project.tagline}
            </p>
          </div>
          <div data-reveal-fade className="mt-7 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="glass rounded-full px-3 py-1 text-[11px] tracking-wide text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <button
            data-reveal-fade
            data-cursor="link"
            onClick={() =>
              mediaRef.current && onSelect(project, mediaRef.current)
            }
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-ink"
          >
            <span className="relative">
              Explore case study
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-transform duration-500 group-hover:translate-x-1"
              style={{ borderColor: `${project.accent}55` }}
            >
              →
            </span>
          </button>
        </div>

        {/* Media column */}
        <div className="order-1 md:order-2 md:col-span-8">
          <div
            ref={mediaRef}
            data-cursor="view"
            data-cursor-label="OPEN"
            data-flip-id={`media-${project.id}`}
            onClick={() =>
              mediaRef.current && onSelect(project, mediaRef.current)
            }
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            onPointerMove={onMove}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10"
          >
            <div
              className="pointer-events-none absolute inset-0 z-10 opacity-60"
              style={{
                background: `radial-gradient(120% 80% at 50% 120%, ${project.accent}22, transparent 60%)`,
              }}
            />
            <div ref={innerRef} className="absolute inset-0 will-change-transform">
              <ProjectMedia project={project} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === "video") {
    return (
      <video
        className="h-full w-full object-cover"
        src={project.media.src}
        poster={project.media.poster}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
      />
    );
  }
  return (
    <Image
      src={project.media.src}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 66vw"
      className="object-cover"
    />
  );
}
