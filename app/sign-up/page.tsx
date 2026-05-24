import Link from "next/link";
import type { Metadata } from "next";
import { BuyLink } from "@/components/BuyLink";

export const metadata: Metadata = {
  title: "Create your VibeCode Safety account - coming soon",
};

function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 8 3l5.7-5.7C33.7 6.1 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 8 3l5.7-5.7C33.7 6.1 29.1 4 24 4 16.3 4 9.6 8.3 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5 0 9.5-1.9 12.9-5l-6-5.1c-1.9 1.3-4.3 2.1-6.9 2.1-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.7 16.3 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.7l6 5.1C40.8 35.8 44 30.4 44 24c0-1.3-.1-2.4-.4-3.5Z"
      />
    </svg>
  );
}

export default function SignUpPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-md px-6 py-24">
        <div className="text-center">
          <span className="pill">
            <span className="pill-dot" />
            ACCOUNTS COMING SOON
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Create your{" "}
            <span className="violet-text">VibeCode Safety account</span>.
          </h1>
          <p className="mt-6 text-gray-300">
            Account access is coming soon. For launch, VibeCode Safety Kit is
            delivered after the one-time Stripe checkout using the email
            entered at purchase.
          </p>
        </div>

        <div className="glass-strong mt-10 rounded-2xl p-6 shadow-glow">
          {/* Disabled Google button */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Google sign-in is coming soon"
            className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-300 opacity-80"
          >
            <GoogleG />
            <span>Continue with Google</span>
            <span className="ml-2 rounded-full border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
              Coming soon
            </span>
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            Google sign-in will be added when account-based delivery is
            available.
          </p>

          <div className="my-6 flex items-center gap-3 text-xs text-gray-500">
            <span className="h-px flex-1 bg-white/10" />
            <span>OR BUY THE KIT NOW</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <BuyLink className="btn-primary w-full text-base">
            Get the Kit for $29.99
          </BuyLink>

          <p className="mt-3 text-center text-xs text-gray-500">
            One-time purchase. No subscription. No account required for v1.
            Access instructions are sent to the email used at checkout.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
