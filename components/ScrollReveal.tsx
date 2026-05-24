"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));

    sections.forEach((section) => {
      section.classList.add("reveal-section");

      const heading = section.querySelector<HTMLElement>("h2");
      heading?.classList.add("reveal-heading");

      const cards = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".glass, .glass-strong, .light-glass, .light-tool-pill"
        )
      );

      cards.slice(0, 12).forEach((card, index) => {
        card.classList.add("reveal-card");
        card.style.setProperty("--reveal-delay", `${Math.min(index * 90, 540)}ms`);
      });
    });

    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
