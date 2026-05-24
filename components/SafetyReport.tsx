type Status = "Passed" | "Warnings" | "Blocked" | "Ship";

const items: { label: string; status: Status; detail?: string }[] = [
  { label: "Prompt Safety Review", status: "Passed" },
  { label: "Logic & Flow Check", status: "Passed" },
  { label: "Launch Checklist", status: "Passed" },
  { label: "Issue Spotting", status: "Warnings", detail: "2 Warnings" },
  { label: "Final Recommendation", status: "Ship", detail: "Ship Confidently" },
];

function StatusBadge({
  status,
  detail,
}: {
  status: Status;
  detail?: string;
}) {
  const map: Record<Status, string> = {
    Passed:
      "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
    Warnings: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    Blocked: "bg-rose-400/10 text-rose-300 border-rose-400/30",
    Ship: "bg-violet-400/15 text-violet-200 border-violet-400/40",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${map[status]}`}
    >
      {status === "Passed" && <CheckIcon />}
      {status === "Warnings" && <WarningIcon />}
      {status === "Ship" && <ShipIcon />}
      {detail ?? status}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 2 21h20L12 2Z" />
      <path d="M12 9v5" />
      <path d="M12 18h.01" />
    </svg>
  );
}
function ShipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" />
    </svg>
  );
}

export function SafetyReport() {
  return (
    <div className="relative">
      {/* Outer glow rings */}
      <div className="pointer-events-none absolute -inset-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/10" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/15" />
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20" />
      </div>

      <div className="glass-strong relative rounded-2xl p-5 shadow-glow-lg">
        {/* Window header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violetglow-500 to-violetglow-700">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
              </svg>
            </span>
            VibeCode Safety Report
          </div>
          <button
            type="button"
            aria-label="close"
            className="text-gray-500 hover:text-gray-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-[1fr,1.4fr]">
          {/* Score */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full shield-bg">
              <svg viewBox="0 0 24 24" className="h-10 w-10 text-violet-200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="mt-4 text-xs text-gray-400">Overall Score</div>
            <div className="mt-1 text-3xl font-semibold text-violet-300">
              92<span className="text-gray-500">/100</span>
            </div>
            <div className="mt-1 text-xs text-emerald-400">● Good to Ship</div>
          </div>

          {/* Checklist */}
          <ul className="space-y-2.5">
            {items.map((it) => (
              <li
                key={it.label}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-sm"
              >
                <span className="flex items-center gap-2 text-gray-200">
                  <span className="text-violet-300">
                    <DotIcon />
                  </span>
                  {it.label}
                </span>
                <StatusBadge status={it.status} detail={it.detail} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
