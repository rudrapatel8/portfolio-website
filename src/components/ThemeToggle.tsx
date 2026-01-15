"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] px-4 text-sm font-medium text-[color:var(--fg)] backdrop-blur-xl shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:bg-[color:var(--surface-strong)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
        <span className="text-base leading-none">{isDark ? "☾" : "◐"}</span>
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}


