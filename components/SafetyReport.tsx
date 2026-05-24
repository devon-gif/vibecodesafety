type Status = "Passed" | "Warnings" | "Blocked" | "Ship";

const items: { label: string; status: Status; detail?: string }[] = [
  { label: "Prompt Safety Review", status: "Passed" },
  { label: "Logic & Flow Check", status: "Passed" },
  { label: "Launch Checklist", status: "Passed" },
  { label: "Issue Spotting", status: "Warnings", detail: "2 Warnings" },
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
    <div className="relative mx-auto w-full max-w-2xl">
      <div
        aria-hidden
        className="absolute -inset-12 rounded-full bg-violet-600/20 blur-3xl"
      />

      <div className="glass-strong relative rounded-[1.75rem] border-violet-300/25 p-5 shadow-[0_30px_120px_-55px_rgba(139,92,246,0.95)] sm:p-7">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-violetglow-400 to-violetglow-700 text-white shadow-glow">
            <ShieldCheckIcon className="h-6 w-6" />
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            VibeCode Safety Report
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr,1.25fr]">
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-6 shadow-inner">
            <div
              className="relative flex h-40 w-40 items-center justify-center rounded-full shadow-[0_0_55px_rgba(139,92,246,0.35)]"
              style={{
                background:
                  "conic-gradient(from 220deg, #8b5cf6 0deg, #a78bfa 282deg, rgba(139,92,246,0.18) 282deg, rgba(139,92,246,0.18) 360deg)",
              }}
            >
              <div className="absolute inset-3 rounded-full bg-[#130b27]" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-violet-200/20 bg-violet-300/10">
                <ShieldCheckIcon className="h-12 w-12 text-violet-100" />
              </div>
            </div>
            <div className="mt-5 text-sm text-gray-400">Overall Score</div>
            <div className="mt-1 text-5xl font-semibold tracking-tight text-white">
              92<span className="text-gray-500">/100</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-emerald-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Good to Ship
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="space-y-3">
              {items.map((it) => (
                <li
                  key={it.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm"
                >
                  <span className="flex items-center gap-3 text-gray-200">
                    <span className="text-violet-300">
                      <CheckSquareIcon />
                    </span>
                    {it.label}
                  </span>
                  <StatusBadge status={it.status} detail={it.detail} />
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between gap-4 rounded-xl border border-violet-300/20 bg-violet-500/[0.07] px-4 py-4 text-sm">
              <span className="flex items-center gap-3 text-gray-100">
                <ShipIcon />
                <span>
                  Final
                  <br />
                  Recommendation
                </span>
              </span>
              <StatusBadge status="Ship" detail="Ship Confidently" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckSquareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
