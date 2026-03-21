import { ContactPageClient } from "@/components/interactive/ContactPageClient";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Biz Boost Agency. Free strategy call, project inquiry, or just say hello.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Let&apos;s Talk</div>
        <h1>
          Start the
          <br />
          <span style={{ color: "var(--neon)" }}>conversation.</span>
        </h1>
        <p>
          No hard sell, no pressure. Just a real conversation about your business and
          how we can help it grow.
        </p>
      </div>
      <ContactPageClient />
    </SiteShell>
  );
}
