import { LegalShell } from "@/components/LegalShell";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata = {
  title: "Refund & Cancellation Policy - VibeCode Safety",
};

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="Refund &amp; Cancellation Policy"
      updated="May 24, 2026"
      intro={
        <p>
          VibeCode Safety is a subscription product that includes digital
          files, prompts, templates, and workflow materials. Please review
          this policy before subscribing.
        </p>
      }
    >
      <h2>1. Subscription Billing</h2>
      <p>
        VibeCode Safety is billed monthly ($6.99/month) or yearly ($59/year).
        Your subscription renews automatically at the end of each billing
        period unless cancelled.
      </p>

      <h2>2. Cancellation</h2>
      <p>
        You may cancel your subscription at any time. To cancel, contact
        support at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> until
        automated account management is added. Cancellation stops future
        billing. You retain access for the remainder of your paid period.
      </p>

      <h2>3. Refunds</h2>
      <p>
        Because the subscription includes immediate access to digital files
        and workflows, payments are generally non-refundable except where
        required by applicable law. No partial-month refunds are provided.
        For yearly subscriptions, refunds are not issued for unused portions
        of the year unless required by law.
      </p>

      <h2>4. Please Review Before Subscribing</h2>
      <p>
        Before subscribing, please review the product description, included
        materials, FAQs, and disclaimers to make sure VibeCode Safety is
        right for your workflow.
      </p>

      <h2>5. No Guarantee of Results</h2>
      <p>
        VibeCode Safety is designed to help reduce risk and improve AI coding
        review habits. It does not guarantee bug-free software, secure
        software, successful deployments, revenue, or specific outcomes. It
        does not replace professional engineering, QA, or a security audit.
      </p>

      <h2>6. Access Issues</h2>
      <p>
        If you subscribed but did not receive access, contact us and we will
        help resolve the issue.
      </p>
      <p>
        Contact: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
