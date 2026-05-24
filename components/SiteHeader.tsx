import Link from "next/link";
import { Logo } from "./Logo";
import { BuyLink } from "./BuyLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="VibeCode Safety home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-9 text-sm text-gray-300 md:flex">
          <a href="#whats-inside" className="hover:text-white">
            What&apos;s Inside
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <BuyLink className="btn-primary px-5 py-2.5 text-sm">
            Get Started
          </BuyLink>
        </div>
      </div>
    </header>
  );
}
