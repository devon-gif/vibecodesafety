import type { Metadata } from "next";
import Link from "next/link";
import { CUSTOMER_PORTAL_LINK, SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Manage Subscription - VibeCode Safety",
};

export default function ManageSubscriptionPage() {
  const hasPortal = Boolean(CUSTOMER_PORTAL_LINK);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="pill">
          <span className="pill-dot" />
          BILLING SUPPORT
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Manage your{" "}
          <span className="violet-text">VibeCode Safety subscription.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Billing is handled through Stripe. You can manage billing, invoices,
          or cancellation through the Stripe Customer Portal once connected.
        </p>

        {hasPortal ? (
          <div className="mt-8 flex justify-center">
            <a
              href={CUSTOMER_PORTAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Open Stripe Customer Portal
            </a>
          </div>
        ) : (
          <div className="glass mx-auto mt-8 max-w-md rounded-xl p-5 text-sm leading-6 text-gray-300">
            The self-serve customer portal is not connected yet. For billing
            help or cancellation, email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-violet-300 hover:text-violet-200"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </div>
        )}

        <p className="mt-6 text-xs leading-relaxed text-gray-500">
          This page does not create a custom dashboard or account system. It
          routes members to Stripe when the portal link is available.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
