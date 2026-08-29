"use client";

import { useEffect } from "react";

const OFFSET = 90; // altura da navbar sticky
const DURATION = 650;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function SmoothScroll() {
  useEffect(() => {
    const animateTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 2) return;
      let startTime: number | null = null;

      const step = (now: number) => {
        if (startTime === null) startTime = now;
        const progress = Math.min(1, (now - startTime) / DURATION);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      event.preventDefault();
      const targetY = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - OFFSET
      );
      const reduceMotion =
        document.documentElement.hasAttribute("data-a11y-reduce-motion") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        window.scrollTo(0, targetY);
      } else {
        animateTo(targetY);
      }
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
