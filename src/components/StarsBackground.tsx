"use client";

import * as React from "react";

export function StarsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,color-mix(in_oklab,var(--glow)_45%,transparent),transparent_60%),radial-gradient(900px_520px_at_85%_10%,color-mix(in_oklab,var(--glow)_30%,transparent),transparent_62%)]" />

      {/* Stars layer 1 */}
      <div className="stars stars-1 absolute inset-0 opacity-90" />

      {/* Stars layer 2 */}
      <div className="stars stars-2 absolute inset-0 opacity-70" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_0%,transparent_55%,color-mix(in_oklab,var(--bg)_55%,black)_100%)] opacity-60" />
    </div>
  );
}


