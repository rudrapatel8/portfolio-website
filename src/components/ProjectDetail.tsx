"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";
import { MediaCanvas } from "./ProjectPanel";

interface ProjectDetailProps {
  project: Project;
  sourceRect: DOMRect;
  onClose: () => void;
}

export default function ProjectDetail({
  project,
  sourceRect,
  onClose,
}: ProjectDetailProps) {
  const root = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const closing = useRef(false);

  const handleClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;

    const mediaEl = media.current!;
    const backdrop = root.current!.querySelector("[data-backdrop]");
    const content = root.current!.querySelector("[data-content]");

    const natural = mediaEl.getBoundingClientRect();
    const dx = sourceRect.left - natural.left;
    const dy = sourceRect.top - natural.top;
    const sx = sourceRect.width / natural.width;
    const sy = sourceRect.height / natural.height;

    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(content, { opacity: 0, duration: 0.3, ease: "power2" }, 0);
    tl.to(
      mediaEl,
      {
        transformOrigin: "top left",
        x: dx,
        y: dy,
        scaleX: sx,
        scaleY: sy,
        duration: 0.7,
        ease: "ease-in-out-quint",
      },
      0
    );
    tl.to(backdrop, { opacity: 0, duration: 0.5, ease: "power2" }, 0.2);
  }, [onClose, sourceRect]);

  useLayoutEffect(() => {
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const mediaEl = media.current!;
      const backdrop = root.current!.querySelector("[data-backdrop]");
      const cards = root.current!.querySelectorAll("[data-bento]");
      const reveals = root.current!.querySelectorAll<HTMLElement>("[data-meta]");

      // Custom FLIP: displace the (visible) media element to the clicked
      // card's rect, then animate it home, clearing transforms when done so it
      // fills its cell cleanly.
      const natural = mediaEl.getBoundingClientRect();
      const dx = sourceRect.left - natural.left;
      const dy = sourceRect.top - natural.top;
      const sx = sourceRect.width / natural.width;
      const sy = sourceRect.height / natural.height;

      gsap.set(mediaEl, {
        transformOrigin: "top left",
        x: dx,
        y: dy,
        scaleX: sx,
        scaleY: sy,
      });
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 24 });
      gsap.set(reveals, { yPercent: 120 });

      const tl = gsap.timeline();
      tl.to(backdrop, { opacity: 1, duration: 0.5, ease: "power2" }, 0);
      tl.to(
        mediaEl,
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.85,
          ease: "ease-in-out-quint",
          clearProps: "transform",
        },
        0
      );
      tl.to(
        cards,
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power2" },
        0.3
      );
      tl.to(
        reveals,
        { yPercent: 0, duration: 0.8, stagger: 0.05, ease: "ease-out-expo" },
        0.4
      );
    }, root);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      ctx.revert();
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClose]);

  return (
    <div ref={root} className="fixed inset-0 z-[90]">
      <div
        data-backdrop
        onClick={handleClose}
        className="absolute inset-0 bg-canvas/80 backdrop-blur-2xl"
      />
      {/* colorful ambient glows behind the sheet */}
      <div
        data-backdrop
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(60% 50% at 15% 10%, ${project.accent}26, transparent 60%), radial-gradient(50% 50% at 90% 90%, ${project.accent}1f, transparent 60%)`,
        }}
      />

      <div
        data-lenis-prevent
        className="relative h-full w-full overflow-y-auto px-4 py-6 md:px-10 md:py-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Top bar */}
          <div data-bento className="mb-5 flex items-center justify-between">
            <span
              className="font-display text-sm tracking-[0.4em]"
              style={{ color: project.accent }}
            >
              {project.index} / 06 — {project.year}
            </span>
            <button
              data-cursor="link"
              onClick={handleClose}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Bento grid */}
          <div
            data-content
            className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12"
          >
            {/* Hero media — kept visible (not part of the staggered cards) */}
            <div className="overflow-hidden rounded-3xl border border-white/10 md:col-span-7">
              <div
                ref={media}
                data-flip-id={`media-${project.id}`}
                className="relative aspect-[16/10] h-full w-full overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-30 opacity-50"
                  style={{
                    background: `radial-gradient(120% 90% at 50% 130%, ${project.accent}26, transparent 55%)`,
                  }}
                />
                <MediaCanvas project={project} />
              </div>
            </div>

            {/* Title + role + links */}
            <div
              data-bento
              className="glass-strong flex flex-col justify-between rounded-3xl p-7 md:col-span-5"
              style={{ borderColor: `${project.accent}33` }}
            >
              <div>
                <div className="mask">
                  <h2
                    data-meta
                    className="text-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-ink"
                  >
                    {project.title}
                  </h2>
                </div>
                <div className="mask mt-3">
                  <p data-meta className="text-sm text-muted">
                    {project.role}
                  </p>
                </div>
                <div className="mask mt-5">
                  <p data-meta className="max-w-sm text-sm leading-relaxed text-ink/70">
                    {project.tagline}
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor="link"
                    className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5"
                    style={{ background: project.accent }}
                  >
                    {link.label}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="glass rounded-3xl p-7 md:col-span-7" data-bento>
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Overview
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {project.summary}
              </p>
            </div>

            {/* Metrics or accent panel */}
            {project.metrics && project.metrics.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:col-span-5" data-bento>
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass flex items-center justify-between rounded-3xl p-5"
                    style={{ borderColor: `${project.accent}33` }}
                  >
                    <span className="text-xs tracking-wide text-muted uppercase">
                      {m.label}
                    </span>
                    <span
                      className="text-display text-3xl font-semibold"
                      style={{ color: project.accent }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex flex-col justify-center rounded-3xl p-7 md:col-span-5"
                data-bento
                style={{
                  background: `linear-gradient(140deg, ${project.accent}26, transparent 75%)`,
                  border: `1px solid ${project.accent}33`,
                }}
              >
                <span className="font-display text-sm tracking-[0.3em] text-ink/80 uppercase">
                  {project.role}
                </span>
                <span className="mt-2 text-sm text-ink/60">{project.year}</span>
              </div>
            )}

            {/* Engineering highlights */}
            <div className="glass rounded-3xl p-7 md:col-span-7 md:p-8" data-bento>
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Engineering Highlights
              </p>
              <ul className="mt-5 space-y-4">
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-0.5 font-display text-sm font-semibold"
                      style={{ color: project.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="glass rounded-3xl p-7 md:col-span-5" data-bento>
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1.5 text-xs text-ink/80"
                    style={{ borderColor: `${project.accent}40` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
