export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold ${className}`}>
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violetglow-500 to-violetglow-700 shadow-glow">
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-4 w-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <span className="text-white">
        VibeCode <span className="violet-text">Safety</span>
      </span>
    </span>
  );
}
