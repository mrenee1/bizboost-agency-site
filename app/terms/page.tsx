import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Biz Boost Agency websites and engagements.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SiteShell>
      <div className="legal-wrap">
        <div className="sec-label" style={{ marginTop: 40 }}>
          Legal
        </div>
        <h1>Terms of Service</h1>
        <span className="legal-date">Last updated: January 1, 2025</span>

        <p>
          Please read these Terms of Service carefully before using our website or engaging
          our services. By accessing our website or hiring Biz Boost Agency, you agree to be
          bound by these terms.
        </p>

        <h2>Services</h2>
        <p>
          Biz Boost Agency provides digital marketing, web design, branding, social media
          management, SEO, email marketing, and consulting services. The specific scope,
          deliverables, and pricing for each engagement will be outlined in a separate
          proposal or service agreement.
        </p>

        <h2>Payment Terms</h2>
        <ul>
          <li>
            One-time projects require a 50% deposit before work begins, with the remaining
            50% due upon project completion.
          </li>
          <li>Monthly retainer services are billed in advance at the beginning of each billing period.</li>
          <li>Invoices are due within 14 days of receipt.</li>
          <li>Late payments may be subject to a 1.5% monthly finance charge.</li>
        </ul>

        <h2>Cancellation Policy</h2>
        <p>Monthly plans may be cancelled with 30 days written notice. Upon cancellation:</p>
        <ul>
          <li>Access to ongoing services will continue through the end of the current billing period.</li>
          <li>Deposits on one-time projects are non-refundable once work has begun.</li>
          <li>Completed work product will be delivered to the client upon final payment.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          Upon receipt of full payment, clients receive full ownership of all custom
          deliverables created specifically for them, including website designs, logos, and
          content. We retain the right to display completed work in our portfolio unless
          otherwise agreed in writing.
        </p>
        <p>
          We retain ownership of any proprietary tools, templates, frameworks, or processes
          used in delivering services.
        </p>

        <h2>Client Responsibilities</h2>
        <p>Clients agree to:</p>
        <ul>
          <li>Provide timely feedback and required materials (content, images, credentials, etc.)</li>
          <li>Ensure all materials provided to us do not infringe on third-party intellectual property</li>
          <li>Designate a point of contact for communication and approvals</li>
          <li>Pay invoices on time as agreed</li>
        </ul>

        <h2>Project Timelines</h2>
        <p>
          Project timelines are estimates based on prompt client feedback and material
          delivery. Delays caused by late client responses or missing materials may affect
          delivery dates. We will communicate any timeline changes proactively.
        </p>

        <h2>Revisions</h2>
        <p>
          Project proposals include a specified number of revision rounds. Additional revisions
          beyond the agreed scope may be billed at our standard hourly rate. Revision scope
          and pricing will be communicated in advance.
        </p>

        <h2>Confidentiality</h2>
        <p>
          Both parties agree to keep confidential any proprietary business information shared
          during the course of the engagement. This obligation survives termination of the
          service relationship.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Biz Boost Agency&apos;s total liability for any claim arising from our services shall not
          exceed the total fees paid by the client in the 3 months preceding the claim. We are
          not liable for indirect, incidental, or consequential damages.
        </p>

        <h2>Results Disclaimer</h2>
        <p>
          While we strive to deliver exceptional results, specific outcomes such as search
          rankings, traffic increases, or revenue growth cannot be guaranteed. Our calculators
          and case studies represent past performance, which is not a guarantee of future
          results.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          United States. Any disputes shall be resolved through good-faith negotiation, and if
          necessary, binding arbitration.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of our services
          following notification of changes constitutes acceptance of the updated Terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? Reach us at:
          <br />
          <br />
          Biz Boost Agency
          <br />
          Email:{" "}
          <a href="mailto:michelle@mreneewilliams.com">michelle@mreneewilliams.com</a>
          <br />
          <Link href="/contact">Contact Form →</Link>
        </p>
      </div>
    </SiteShell>
  );
}
