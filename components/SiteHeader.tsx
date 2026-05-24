import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emeraldglow-400 shadow-glow" />
          <span className="text-white">VibeCode Safety Kit</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#whats-inside" className="hover:text-white">
            What&apos;s inside
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <Link href="#pricing" className="btn-primary text-sm">
          Get the kit
        </Link>
      </div>
    </header>
  );
}
