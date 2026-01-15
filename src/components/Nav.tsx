"use client";

import * as React from "react";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { id: string; label: string; color: string };

const NAV: NavItem[] = [
  { id: "about", label: "About", color: "from-blue-500/90 to-indigo-500/90 hover:from-blue-600 hover:to-indigo-600 border-blue-300/50 shadow-blue-500/30 dark:border-blue-400/50 dark:from-blue-600/90 dark:to-indigo-600/90 dark:hover:from-blue-500 dark:hover:to-indigo-500" },
  { id: "experience", label: "Experience", color: "from-indigo-500/90 to-purple-500/90 hover:from-indigo-600 hover:to-purple-600 border-indigo-300/50 shadow-indigo-500/30 dark:border-indigo-400/50 dark:from-indigo-600/90 dark:to-purple-600/90 dark:hover:from-indigo-500 dark:hover:to-purple-500" },
  { id: "skills", label: "Skills", color: "from-purple-500/90 to-violet-500/90 hover:from-purple-600 hover:to-violet-600 border-purple-300/50 shadow-purple-500/30 dark:border-purple-400/50 dark:from-purple-600/90 dark:to-violet-600/90 dark:hover:from-purple-500 dark:hover:to-violet-500" },
  { id: "projects", label: "Projects", color: "from-violet-500/90 to-purple-500/90 hover:from-violet-600 hover:to-purple-600 border-violet-300/50 shadow-violet-500/30 dark:border-violet-400/50 dark:from-violet-600/90 dark:to-purple-600/90 dark:hover:from-violet-500 dark:hover:to-purple-500" },
  { id: "outside", label: "Outside", color: "from-indigo-500/90 to-blue-500/90 hover:from-indigo-600 hover:to-blue-600 border-indigo-300/50 shadow-indigo-500/30 dark:border-indigo-400/50 dark:from-indigo-600/90 dark:to-blue-600/90 dark:hover:from-indigo-500 dark:hover:to-blue-500" },
  { id: "contact", label: "Contact", color: "from-blue-500/90 to-indigo-500/90 hover:from-blue-600 hover:to-indigo-600 border-blue-300/50 shadow-blue-500/30 dark:border-blue-400/50 dark:from-blue-600/90 dark:to-indigo-600/90 dark:hover:from-blue-500 dark:hover:to-indigo-500" },
];

export function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] px-3 py-2 backdrop-blur-2xl shadow-[0_12px_34px_-22px_rgba(0,0,0,0.55)]">
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={`group relative inline-flex h-9 items-center justify-center rounded-full border bg-gradient-to-r px-4 text-xs font-medium text-white backdrop-blur-xl shadow-lg transition hover:scale-105 active:scale-95 ${item.color}`}
          >
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
        
        <div className="mx-2 h-6 w-px bg-[color:var(--hairline)]" />
        
        <a
          href="/resume/Resume.pdf"
          className="inline-flex h-9 items-center justify-center rounded-full border border-indigo-300/50 bg-gradient-to-r from-indigo-500/90 to-blue-500/90 px-4 text-xs font-medium text-white backdrop-blur-xl shadow-lg shadow-indigo-500/30 transition hover:from-indigo-600 hover:to-blue-600 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 dark:border-indigo-400/50 dark:from-indigo-600/90 dark:to-blue-600/90 dark:hover:from-indigo-500 dark:hover:to-blue-500"
        >
          Resume
        </a>
        
        <div className="mx-2 h-6 w-px bg-[color:var(--hairline)]" />
        
        <ThemeToggle />
      </div>
    </div>
  );
}
