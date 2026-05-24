"use client";

import { useEffect, useRef, useState } from "react";

/* ─── data ──────────────────────────────────────────────────────────── */

const SCORE_TARGET = 92;
const SCORE_DURATION = 1800; // ms
const SCORE_DELAY = 600;     // ms before ring starts

type RowStatus = "Passed" | "Warnings" | "Blocked";

const checklistRows: { label: string; status: RowStatus; detail?: string }[] = [
  { label: "Auth & Routes",   status: "Passed" },
  { label: "Env Vars",        status: "Passed" },
  { label: "Checkout Flow",   status: "Warnings", detail: "2 Warnings" },
  { label: "Data Rules",      status: "Passed" },
  { label: "Build Check",     status: "Passed" },
];

const changedFiles = [
  "/app/api/checkout/route.ts",
  "/components/Pricing.tsx",
  ".env.example",
];

/* ─── sub-components ─────────────────────────────────────────────────── */

function StatusBadge({ status, detail }: { status: RowStatus; detail?: string }) {
  const styles: Record<RowStatus, string> = {
    Passed:   "border-[#4ADE80]/35 bg-[#4ADE80]/12 text-[#4ADE80]",
    Warnings: "border-[#F59E0B]/40 bg-[#F59E0B]/12 text-[#F59E0B]",
    Blocked:  "border-rose-400/35 bg-rose-400/10 text-rose-300",
  };
  return (
    <span className={`report-status-badge inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${styles[status]}`}>
      {status === "Passed"   && <CheckIcon />}
      {status === "Warnings" && <WarningIcon />}
      {status === "Blocked"  && <BlockIcon />}
      {detail ?? status}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 flex-none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 flex-none" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2 2 21h20L12 2Z" /><path d="M12 9v5" /><path d="M12 18h.01" />
    </svg>
  );
}
function BlockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 flex-none" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 14.14 14.14" />
    </svg>
  );
}
function ShieldCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 flex-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

/* ─── main component ──────────────────────────────────────────────────── */

export function SafetyReport() {
  const [score, setScore]           = useState(0);
  const [rowsVisible, setRowsVisible] = useState(0);
  const [verdictVisible, setVerdictVisible] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion.current) {
      setScore(SCORE_TARGET);
      setRowsVisible(checklistRows.length);
      setVerdictVisible(true);
      return;
    }

    /* score ring fill */
    let frame = 0;
    let start = 0;
    const scoreTimer: number = window.setTimeout(() => {
      const tick = (time: number) => {
        if (!start) start = time;
        const progress = Math.min((time - start) / SCORE_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setScore(Math.round(eased * SCORE_TARGET));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }, SCORE_DELAY);

    /* stagger checklist rows — start after ring is ~done */
    const ROW_BASE_DELAY  = SCORE_DELAY + SCORE_DURATION + 100; // ~2500ms
    const ROW_STAGGER     = 200; // ms per row
    const rowTimers: number[] = [];
    checklistRows.forEach((_, i) => {
      rowTimers.push(window.setTimeout(() => setRowsVisible(i + 1), ROW_BASE_DELAY + i * ROW_STAGGER));
    });

    /* final verdict after all rows */
    const verdictTimer: number = window.setTimeout(
      () => setVerdictVisible(true),
      ROW_BASE_DELAY + checklistRows.length * ROW_STAGGER + 250
    );

    return () => {
      window.clearTimeout(scoreTimer);
      window.clearTimeout(verdictTimer);
      rowTimers.forEach(window.clearTimeout);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scoreAngle = (score / 100) * 360;

  return (
    <div className="safety-report-float relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* ambient glow */}
      <div aria-hidden className="absolute -inset-10 rounded-[3rem] bg-[#8B5CF6]/14 blur-3xl" />

      {/* card */}
      <div className="glass-strong relative rounded-[1.5rem] p-4 shadow-[0_32px_100px_-40px_rgba(139,92,246,0.90)] sm:p-5">

        {/* ── header ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#6D28D9] text-white shadow-glow">
              <ShieldCheckIcon className="h-4.5 w-4.5" />
            </span>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">VibeCode Safety Report</div>
              <div className="text-[11px] text-[#C4B5FD]/70 leading-tight mt-0.5">AI change reviewed before deploy</div>
            </div>
          </div>
          {/* live indicator */}
          <span className="flex items-center gap-1.5 rounded-full border border-[#4ADE80]/25 bg-[#4ADE80]/08 px-2.5 py-1 text-[10px] font-medium text-[#4ADE80]">
            <span className="report-status-dot h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
            Live
          </span>
        </div>

        {/* ── body: score + checklist ─────────────────────────── */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[auto,1fr]">

          {/* ── left: score panel ─────────────────────────────── */}
          <div className="flex flex-col items-center rounded-xl border border-[#C4B5FD]/14 bg-[#24153F]/55 p-4 backdrop-blur-md sm:w-[148px]">
            {/* score ring */}
            <div
              className="score-ring relative flex h-28 w-28 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(from 220deg, #8B5CF6 0deg, #A78BFA ${scoreAngle}deg, rgba(36,21,63,0.55) ${scoreAngle}deg, rgba(36,21,63,0.55) 360deg)`,
                boxShadow: `0 0 48px -10px rgba(139,92,246,0.45)`,
              }}
            >
              <div className="absolute inset-2.5 rounded-full bg-[#160B2E]" />
              <div className="relative flex flex-col items-center justify-center">
                <span className="report-score text-2xl font-bold leading-none text-white tabular-nums">{score}</span>
                <span className="text-[10px] text-[#C4B5FD]/60 font-medium">/100</span>
              </div>
            </div>

            {/* status */}
            <div className="report-status mt-3 flex items-center gap-1.5 text-xs font-medium text-[#4ADE80]">
              <span className="report-status-dot h-2 w-2 rounded-full bg-[#4ADE80]" />
              Good to Ship
            </div>

            {/* divider */}
            <div className="my-3 w-full border-t border-white/8" />

            {/* changed files */}
            <div className="w-full">
              <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#C4B5FD]/50">Changed Files</div>
              <ul className="space-y-1">
                {changedFiles.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono leading-tight">
                    <FileIcon />
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── right: checklist ──────────────────────────────── */}
          <div className="flex flex-col gap-2">
            {checklistRows.map((row, i) => {
              const visible = i < rowsVisible;
              const isWarning = row.status === "Warnings";
              return (
                <div
                  key={row.label}
                  className={[
                    "flex items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm",
                    "transition-all duration-300",
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                    isWarning
                      ? "border-[#F59E0B]/22 bg-[#F59E0B]/05 report-row-warning"
                      : "border-[#C4B5FD]/10 bg-[#24153F]/35",
                  ].join(" ")}
                  style={{ transitionDelay: visible ? `0ms` : undefined }}
                >
                  <span className={`font-medium ${isWarning ? "text-[#FCD34D]" : "text-gray-200"}`}>
                    {row.label}
                  </span>
                  <StatusBadge status={row.status} detail={row.detail} />
                </div>
              );
            })}

            {/* ── final verdict ─────────────────────────────── */}
            <div
              className={[
                "mt-auto flex items-center justify-between gap-3 rounded-xl border-2 border-[#A78BFA]/35 bg-gradient-to-r from-[#8B5CF6]/12 to-[#A78BFA]/08 px-3.5 py-3 transition-all duration-500",
                verdictVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              ].join(" ")}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[#8B5CF6]/20 text-[#C4B5FD]">
                  <FlagIcon />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Pass with Warnings
                  </div>
                  <div className="text-[10px] text-[#C4B5FD]/60 leading-tight mt-0.5">
                    Review checkout redirect before deploy
                  </div>
                </div>
              </div>
              <span className="flex-none rounded-full border border-[#A78BFA]/40 bg-[#A78BFA]/15 px-2.5 py-1 text-[11px] font-semibold text-[#C4B5FD]">
                2 tracked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
