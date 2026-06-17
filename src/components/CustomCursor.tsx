"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Global magnetic cursor.
 *
 * Hook any element into it with data attributes:
 *   data-cursor="link"   → ring expands, dot hides
 *   data-cursor="view"   → large filled ring with a label
 *   data-cursor-label="VIEW" → custom label text
 *   data-magnetic        → element is pulled toward the cursor
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    document.body.classList.add("has-custom-cursor");
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });

    let visible = false;
    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    // Delegated hover detection so dynamically rendered nodes work too.
    const magnetics = new Map<Element, (e: PointerEvent) => void>();

    const setState = (mode: "default" | "link" | "view", text = "") => {
      if (mode === "view") {
        gsap.to(ring, {
          width: 88,
          height: 88,
          backgroundColor: "rgba(244,244,251,0.95)",
          borderColor: "rgba(244,244,251,0)",
          duration: 0.4,
          ease: "ease-out-expo",
        });
        gsap.to(dot, { opacity: 0, duration: 0.2 });
        label.textContent = text || "VIEW";
        gsap.to(label, { opacity: 1, duration: 0.3 });
      } else if (mode === "link") {
        gsap.to(ring, {
          width: 56,
          height: 56,
          backgroundColor: "rgba(129,140,248,0.12)",
          borderColor: "rgba(129,140,248,0.6)",
          duration: 0.4,
          ease: "ease-out-expo",
        });
        gsap.to(dot, { scale: 0, duration: 0.2 });
        gsap.to(label, { opacity: 0, duration: 0.2 });
      } else {
        gsap.to(ring, {
          width: 34,
          height: 34,
          backgroundColor: "rgba(244,244,251,0)",
          borderColor: "rgba(244,244,251,0.4)",
          duration: 0.4,
          ease: "ease-out-expo",
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
        gsap.to(label, { opacity: 0, duration: 0.2 });
      }
    };

    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element)?.closest?.(
        "[data-cursor], a, button, [data-magnetic]"
      ) as HTMLElement | null;
      if (!target) {
        setState("default");
        return;
      }
      const mode = target.getAttribute("data-cursor");
      if (mode === "view") {
        setState("view", target.getAttribute("data-cursor-label") || "VIEW");
      } else if (
        mode === "link" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setState("link");
      } else {
        setState("default");
      }
    };

    // Magnetic pull for tagged elements.
    const attachMagnets = () => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        if (magnetics.has(el)) return;
        const strength = parseFloat(el.dataset.magnetic || "0.4") || 0.4;
        const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
        const move = (ev: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const relX = ev.clientX - (r.left + r.width / 2);
          const relY = ev.clientY - (r.top + r.height / 2);
          xTo(relX * strength);
          yTo(relY * strength);
        };
        const reset = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        magnetics.set(el, move);
      });
    };
    attachMagnets();
    const reAttach = setInterval(attachMagnets, 1500);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      clearInterval(reAttach);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/40"
        style={{ mixBlendMode: "difference" }}
      >
        <span
          ref={labelRef}
          className="text-[10px] font-semibold tracking-[0.2em] text-canvas opacity-0"
        />
      </div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
      />
    </div>
  );
}
