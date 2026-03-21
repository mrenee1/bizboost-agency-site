import { TestimonialsPageContent } from "@/components/page-content/TestimonialsPageContent";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Client Results",
  description:
    "Real results from real clients. See what businesses say about working with Biz Boost Agency.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Social Proof</div>
        <h1>
          Real clients.
          <br />
          <span style={{ color: "var(--neon)" }}>Real results.</span>
        </h1>
        <p>
          We let the numbers do the talking. Here&apos;s what businesses say after
          working with us.
        </p>
      </div>
      <TestimonialsPageContent />
    </SiteShell>
  );
}
