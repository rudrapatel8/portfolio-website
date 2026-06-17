"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Canvas dot-grid that subtly displaces toward the cursor using GSAP quickTo
 * interpolation, giving an interactive "mesh" feel behind the hero.
 */
export default function GridMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Smoothed pointer target.
    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0 };
    const xTo = gsap.quickTo(pointer, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(pointer, "y", { duration: 0.6, ease: "power3" });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      pointer.vx = nx - pointer.x;
      pointer.vy = ny - pointer.y;
      xTo(nx);
      yTo(ny);
    };
    window.addEventListener("pointermove", onMove);

    const gap = 38;
    const radius = 190;

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const speed = Math.min(
        Math.hypot(pointer.vx, pointer.vy) / 28,
        1
      );
      for (let x = gap; x < width; x += gap) {
        for (let y = gap; y < height; y += gap) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          let ox = 0;
          let oy = 0;
          let alpha = 0.16;
          let r = 1;
          if (dist < radius) {
            const force = (1 - dist / radius) ** 2;
            const angle = Math.atan2(dy, dx);
            const push = force * 26 * (0.6 + speed);
            ox = Math.cos(angle) * push;
            oy = Math.sin(angle) * push;
            alpha = 0.16 + force * 0.65;
            r = 1 + force * 1.8;
          }
          ctx.beginPath();
          ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(129,140,248,${alpha})`;
          ctx.fill();
        }
      }
      // decay velocity
      pointer.vx *= 0.9;
      pointer.vy *= 0.9;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
