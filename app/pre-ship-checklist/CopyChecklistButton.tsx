"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
};

export function CopyChecklistButton({ text }: Props) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;

    const timeout = window.setTimeout(() => setStatus("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [status]);

  async function copyChecklist() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copyChecklist}
        className="inline-flex items-center justify-center rounded-lg border border-violet-300/30 bg-violet-500/10 px-3.5 py-2 text-sm font-semibold text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-500/20"
      >
        Copy Checklist
      </button>
      <span
        aria-live="polite"
        className="min-h-5 text-xs font-medium text-gray-400"
      >
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Copy failed"
            : ""}
      </span>
    </div>
  );
}
