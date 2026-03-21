import { ProcessPageContent } from "@/components/page-content/ProcessPageContent";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "Our proven 5-step process for delivering websites, brands, and marketing that get results.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">How It Works</div>
        <h1>
          Simple Process.
          <br />
          <span style={{ color: "var(--neon)" }}>Real Results.</span>
        </h1>
        <p>
          A proven 5-step framework that keeps you informed, in control, and confident
          every step of the way.
        </p>
      </div>
      <ProcessPageContent />
    </SiteShell>
  );
}
