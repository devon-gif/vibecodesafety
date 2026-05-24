import Link from "next/link";
import { Logo } from "./Logo";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top: brand + tagline */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm text-gray-400">
              A practical safety system for AI-assisted builders.
            </p>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-gray-500">
              VibeCode Safety Kit helps reduce risk but does not guarantee
              bug-free, secure, or production-ready software. It is not a
              replacement for professional engineering, QA, or security
              review.
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
        </div>

        <div className="divider-line mt-12" />

        {/* Bottom: subtle legal row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-gray-500 md:flex-row md:items-center">
          <div>&copy; 2026 VibeCode Safety Kit. All rights reserved.</div>

          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <Link
              href="/privacy"
              className="text-gray-400 transition hover:text-violet-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 transition hover:text-violet-300"
            >
              Terms &amp; Agreements
            </Link>
            <Link
              href="/refund-policy"
              className="text-gray-400 transition hover:text-violet-300"
            >
              Refund Policy
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-gray-400 transition hover:text-violet-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
