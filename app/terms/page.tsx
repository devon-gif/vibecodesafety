import { LegalShell } from "@/components/LegalShell";

export const metadata = { title: "Terms — VibeCode Safety Kit" };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="2025-01-01">
      <p>
        These Terms govern your purchase and use of the VibeCode Safety Kit
        (&quot;the Kit&quot;), a one-time digital product. By purchasing or
        downloading the Kit, you agree to these Terms.
      </p>
      <h2>License</h2>
      <p>
        You receive a non-exclusive, non-transferable license to use the Kit
        for your own personal or internal business projects. You may not
        resell, sublicense, or redistribute the Kit or its templates as a
        standalone product.
      </p>
      <h2>No warranty</h2>
      <p>
        The Kit is provided &quot;as is&quot; without warranties of any kind.
        It is a guardrail system, not a replacement for professional
        engineering, security, or legal review. We make no guarantees that
        using the Kit will prevent bugs, data loss, security incidents, or
        downtime.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability is limited
        to the amount you paid for the Kit.
      </p>
      <h2>Changes</h2>
      <p>
        We may update the Kit and these Terms over time. Continued use after
        changes constitutes acceptance of the updated Terms.
      </p>
    </LegalShell>
  );
}
