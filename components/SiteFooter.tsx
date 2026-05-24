import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              A practical safety system for AI-assisted builders.
            </p>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-gray-500">
              VibeCode Safety Kit helps reduce risk but does not guarantee
              bug-free, secure, or production-ready software. It is not a
              replacement for professional engineering, QA, or security review.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="/#whats-inside" className="hover:text-white">
                  What&apos;s Inside
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@vibecodesafety.com"
                  className="hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider-line mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-gray-500 md:flex-row md:items-center">
          <div>&copy; 2026 VibeCode Safety Kit. All rights reserved.</div>
          <div>Make AI check the AI.</div>
        </div>
      </div>
    </footer>
  );
}
