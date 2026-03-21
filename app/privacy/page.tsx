import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Biz Boost Agency collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <div className="legal-body">
        <h1>Privacy Policy</h1>
        <div className="legal-meta">Last updated: January 1, 2025 · Biz Boost Agency</div>

        <h2>1. Information We Collect</h2>
        <p>When you use our website or contact us, we may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Contact information</strong> — name, email address, phone number, and
            company name when you submit our contact form
          </li>
          <li>
            <strong>Usage data</strong> — pages visited, time on site, and browser/device
            type via analytics tools
          </li>
          <li>
            <strong>Communications</strong> — content of messages you send us via email or
            contact forms
          </li>
          <li>
            <strong>Newsletter subscriptions</strong> — email address if you subscribe to
            our newsletter
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and deliver the services you request</li>
          <li>Send you project updates, invoices, and business communications</li>
          <li>Send marketing emails if you&apos;ve opted in (you can unsubscribe anytime)</li>
          <li>Improve our website and understand how visitors use it</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may
          share your information with:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> — tools we use to operate our business (e.g.,
            email platforms, form processors, analytics) who are bound by confidentiality
            agreements
          </li>
          <li>
            <strong>Legal requirements</strong> — if required by law or to protect our rights
          </li>
        </ul>

        <h2>4. Cookies &amp; Tracking</h2>
        <p>
          Our website uses cookies and similar tracking technologies to improve your
          experience and analyze traffic. You can control cookie settings through your
          browser preferences. Disabling cookies may affect some website functionality.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of internet
          transmission is 100% secure.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to fulfill the purposes
          for which it was collected, or as required by law. Contact form submissions are
          retained for up to 3 years.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:michelle@mreneewilliams.com">michelle@mreneewilliams.com</a>.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the
          privacy practices of those sites and encourage you to review their policies.
        </p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect
          personal information from children.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. We&apos;ll notify you of significant changes
          by posting the new policy on this page with an updated date.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact:</p>
        <p>
          <strong>Biz Boost Agency</strong>
          <br />
          Email:{" "}
          <a href="mailto:michelle@mreneewilliams.com">michelle@mreneewilliams.com</a>
          <br />
          Phone: (555) 123-4567
        </p>

        <div className="legal-nav">
          <Link href="/" className="btn-ghost" style={{ padding: "12px 28px" }}>
            ← Back to Home
          </Link>
          <Link
            href="/terms"
            style={{
              marginLeft: 16,
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: ".1em",
            }}
          >
            View Terms of Service →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
