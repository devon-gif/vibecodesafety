"use client";

import { useEffect, useRef, useState } from "react";

type ReviewCard = {
  t: string;
  b: string;
};

type Phase = "idle" | "scanning" | "complete";

type Props = {
  cards: ReviewCard[];
};

export function ReviewWorkflowCards({ cards }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasRunRef = useRef(false);
  const [phases, setPhases] = useState<Phase[]>(
    () => cards.map(() => "idle"),
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const timers: number[] = [];

    function setCardPhase(index: number, phase: Phase) {
      setPhases((current) =>
        current.map((value, currentIndex) =>
          currentIndex === index ? phase : value,
        ),
      );
    }

    function runAnimation() {
      if (hasRunRef.current) return;
      hasRunRef.current = true;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setPhases(cards.map(() => "complete"));
        return;
      }

      cards.forEach((_, index) => {
        const startDelay = index * 200;
        timers.push(
          window.setTimeout(() => setCardPhase(index, "scanning"), startDelay),
          window.setTimeout(
            () => setCardPhase(index, "complete"),
            startDelay + 780,
          ),
        );
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [cards]);

  return (
    <div
      ref={rootRef}
      className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
    >
      {cards.map((card, index) => {
        const phase = phases[index] ?? "idle";
        const complete = phase === "complete";
        const scanning = phase === "scanning";

        return (
          <div
            key={card.t}
            className={`inside-review-card glass flex flex-col rounded-2xl p-6 ${
              scanning ? "is-scanning" : ""
            } ${complete ? "is-complete" : ""}`}
            style={{ transitionDelay: `${Math.min(index * 30, 120)}ms` }}
          >
            <div
              className={`inside-review-icon mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                complete ? "is-complete" : scanning ? "is-scanning" : ""
              }`}
              aria-hidden="true"
            >
              {complete ? <CheckIcon /> : <SpinnerIcon spinning={scanning} />}
            </div>
            <h3 className="text-base font-semibold text-white">{card.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {card.b}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function SpinnerIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${spinning ? "inside-review-spinner" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="inside-review-check h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
