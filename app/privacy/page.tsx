import { LegalShell } from "@/components/LegalShell";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata = { title: "Privacy Policy - VibeCode Safety" };

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated="May 24, 2026"
      intro={
        <p>
          VibeCode Safety respects your privacy. This Privacy Policy
          explains what information may be collected when you visit our
          website, subscribe to the membership, or contact us.
        </p>
      }
    >
      <h2>1. Information We Collect</h2>
      <p>
        We may collect basic information you provide, such as your name,
        email address, payment-related details, and any message you send
        through a contact form or support email.
      </p>
      <p>
        Payments are processed by Stripe or another third-party payment
        provider. We do not store your full payment card information on our
        website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>deliver your membership access</li>
        <li>send member kit access or download instructions</li>
        <li>respond to support requests</li>
        <li>send important membership updates</li>
        <li>improve the website and membership materials</li>
        <li>prevent fraud or abuse</li>
      </ul>

      <h2>3. Email Updates</h2>
      <p>
        If you choose to receive updates, we may send occasional emails about
        membership updates, new resources, related tools, or launch
        announcements. You can unsubscribe from marketing emails at any time.
      </p>
      <p>
        Transactional emails related to your subscription may still be sent when
        necessary.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We may use trusted third-party services for payments, email delivery,
        analytics, hosting, or product delivery. These services may process
        information according to their own privacy policies.
      </p>

      <h2>5. Cookies and Analytics</h2>
      <p>
        The website may use basic analytics or cookies to understand site
        traffic and improve the product. You can adjust cookie settings in
        your browser.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use reasonable measures to protect information, but no online
        system can be guaranteed to be completely secure.
      </p>

      <h2>7. Your Choices</h2>
      <p>
        You may contact us to request access, correction, or deletion of
        personal information where applicable.
      </p>

      <h2>8. Contact</h2>
      <p>
        For privacy questions, contact:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
