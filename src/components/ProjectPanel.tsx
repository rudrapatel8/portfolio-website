"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
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
    if (!innerRef.current) return;
    gsap.to(innerRef.current, { scale: 1.06, duration: 0.6, ease: "ease-out-expo" });
  };

  const onLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
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
    gsap.to(inner, { x: relX * 34, y: relY * 34, duration: 0.6, ease: "power3" });
  };

  return (
    <article
      data-panel
      className="relative flex h-[100svh] w-screen shrink-0 items-center overflow-hidden px-6 md:px-16"
    >
      {/* Editorial ghost index */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-2 text-display text-[42vw] leading-none font-bold text-white/[0.025] select-none md:text-[34vw]"
      >
        {project.index}
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-14">
        {/* Text column */}
        <div className="order-2 md:order-1 md:col-span-5">
          <div className="flex items-center gap-4">
            <div className="mask">
              <span
                data-reveal
                className="font-display text-5xl font-bold md:text-6xl"
                style={{ color: project.accent }}
              >
                {project.index}
              </span>
            </div>
            <div className="mask">
              <span
                data-reveal
                className="block text-[11px] tracking-[0.3em] text-faint uppercase"
              >
                {project.year} · {project.role}
              </span>
            </div>
          </div>

          <h2 className="mt-6 text-display text-[clamp(2.2rem,5vw,4rem)] font-semibold text-ink">
            <span className="mask">
              <span data-reveal className="block">
                {project.title}
              </span>
            </span>
          </h2>

          <div className="mask mt-5 max-w-md">
            <p data-reveal className="block text-base leading-relaxed text-muted">
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
            onClick={() => mediaRef.current && onSelect(project, mediaRef.current)}
            className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-ink"
          >
            <span className="relative">
              Explore more
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
        <div className="order-1 md:order-2 md:col-span-7">
          <div
            ref={mediaRef}
            data-cursor="view"
            data-cursor-label="EXPLORE"
            data-flip-id={`media-${project.id}`}
            onClick={() => mediaRef.current && onSelect(project, mediaRef.current)}
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            onPointerMove={onMove}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10"
            style={{ boxShadow: `0 40px 120px -40px ${project.accent}40` }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-20 opacity-70"
              style={{
                background: `radial-gradient(130% 90% at 50% 120%, ${project.accent}26, transparent 55%)`,
              }}
            />
            {/* corner role tag */}
            <span className="absolute top-4 left-4 z-20 rounded-full bg-canvas/60 px-3 py-1 text-[10px] tracking-[0.2em] text-ink/80 uppercase backdrop-blur">
              {project.media.type === "video" ? "Walkthrough" : "Preview"}
            </span>
            <div ref={innerRef} className="absolute inset-0 will-change-transform">
              <MediaCanvas project={project} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function MediaCanvas({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (project.media.type === "video") {
    return (
      <div className="relative h-full w-full">
        {/* Always-present cinematic placeholder behind the video */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, #07070c 70%)`,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: `${project.accent}26`, color: project.accent }}
          >
            <Play size={22} className="ml-1" />
          </span>
          <span className="text-xs tracking-[0.3em] text-ink/70 uppercase">
            Video walkthrough
          </span>
        </div>
        {!failed && (
          <video
            className="absolute inset-0 h-full w-full bg-transparent object-cover"
            src={project.media.src}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    );
  }

  return (
    <Image
      src={project.media.src}
      alt={project.title}
      fill
      sizes="(max-width: 768px) 100vw, 60vw"
      className="object-cover"
    />
  );
}
