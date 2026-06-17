"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { gsap, Flip } from "@/lib/gsap";
import type { Project } from "@/data/projects";

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

    // Recompute the destination card rect for a clean reverse morph.
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
      const grid = root.current!.querySelectorAll("[data-bento]");
      const reveals = root.current!.querySelectorAll<HTMLElement>("[data-meta]");

      // FLIP: capture the media's natural (bento) state, displace it to match
      // the clicked card, then animate back via the Flip plugin.
      const state = Flip.getState(mediaEl);
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
      gsap.set(grid, { opacity: 0 });
      gsap.set(reveals, { yPercent: 120 });

      const tl = gsap.timeline();
      tl.to(backdrop, { opacity: 1, duration: 0.5, ease: "power2" }, 0);
      tl.add(
        Flip.from(state, {
          duration: 0.9,
          ease: "ease-in-out-quint",
          absolute: false,
        }),
        0
      );
      tl.to(
        grid,
        { opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2" },
        0.35
      );
      tl.to(
        reveals,
        { yPercent: 0, duration: 0.8, stagger: 0.05, ease: "ease-out-expo" },
        0.45
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
    <div ref={root} className="fixed inset-0 z-[80]">
      <div
        data-backdrop
        onClick={handleClose}
        className="absolute inset-0 bg-canvas/85 backdrop-blur-xl"
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
            className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[minmax(0,auto)]"
          >
            {/* Hero media */}
            <div
              data-bento
              className="md:col-span-8 md:row-span-2 overflow-hidden rounded-3xl border border-white/10"
            >
              <div
                ref={media}
                data-flip-id={`media-${project.id}`}
                className="relative aspect-[16/10] w-full overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-60"
                  style={{
                    background: `radial-gradient(120% 80% at 50% 120%, ${project.accent}22, transparent 60%)`,
                  }}
                />
                {project.media.type === "video" ? (
                  <video
                    className="h-full w-full object-cover"
                    src={project.media.src}
                    poster={project.media.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.media.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>

            {/* Title + role */}
            <div
              data-bento
              className="glass-strong md:col-span-4 flex flex-col justify-between rounded-3xl p-6"
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
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
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
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div
              data-bento
              className="glass md:col-span-4 rounded-3xl p-6"
            >
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Overview
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div
                data-bento
                className="md:col-span-4 grid grid-cols-1 gap-4"
              >
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass flex flex-col justify-center rounded-3xl p-5"
                  >
                    <span
                      className="text-display text-3xl font-semibold"
                      style={{ color: project.accent }}
                    >
                      {m.value}
                    </span>
                    <span className="mt-1 text-xs tracking-wide text-muted uppercase">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Technical bullets */}
            <div
              data-bento
              className="glass md:col-span-8 rounded-3xl p-6 md:p-8"
            >
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Engineering Highlights
              </p>
              <ul className="mt-5 space-y-4">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-1 font-display text-xs"
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
            <div
              data-bento
              className="glass md:col-span-4 rounded-3xl p-6"
            >
              <p className="text-[11px] tracking-[0.3em] text-faint uppercase">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-ink/80"
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
