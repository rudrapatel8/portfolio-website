"use client";

import { useCallback, useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ProjectDetail from "@/components/ProjectDetail";
import type { Project } from "@/data/projects";

interface ActiveProject {
  project: Project;
  rect: DOMRect;
}

export default function Home() {
  const [active, setActive] = useState<ActiveProject | null>(null);

  const handleSelect = useCallback((project: Project, mediaEl: HTMLElement) => {
    setActive({ project, rect: mediaEl.getBoundingClientRect() });
  }, []);

  const handleClose = useCallback(() => setActive(null), []);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Nav />

      <main id="top">
        <Hero />
        <div id="work">
          <ProjectShowcase onSelect={handleSelect} />
        </div>
        <About />
        <Experience />
        <Contact />
      </main>

      <div className="grain" aria-hidden />

      {active && (
        <ProjectDetail
          project={active.project}
          sourceRect={active.rect}
          onClose={handleClose}
        />
      )}
    </SmoothScrollProvider>
  );
}
