import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emeraldglow-400" />
          <span className="text-gray-300">VibeCode Safety Kit</span>
          <span className="ml-2 text-gray-500">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/refund-policy" className="hover:text-white">
            Refund policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
