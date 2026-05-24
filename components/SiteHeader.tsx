import Link from "next/link";
import { Logo } from "./Logo";
import { BuyLink } from "./BuyLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="VibeCode Safety home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#whats-inside" className="hover:text-white">
            What&apos;s Inside
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How It Works
          </a>
          <a href="#who-its-for" className="hover:text-white">
            Who It&apos;s For
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
        <BuyLink className="btn-primary px-4 py-2 text-sm">
          Get the Kit
        </BuyLink>
      </div>
    </header>
  );
}
