"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

if (typeof window !== "undefined" && !registered) {
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase);

  // Signature fluid easing curves used across the site.
  CustomEase.create("fluid", "0.65, 0.01, 0.05, 0.99");
  CustomEase.create("ease-out-expo", "0.16, 1, 0.3, 1");
  CustomEase.create("ease-in-out-quint", "0.83, 0, 0.17, 1");

  registered = true;
}

export { gsap, ScrollTrigger, Flip, SplitText, CustomEase };
