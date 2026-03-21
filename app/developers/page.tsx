import { DeveloperPartnerSection } from "@/components/sections/DeveloperPartnerSection";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Developer Partners",
  description:
    "Partner with Biz Boost Agency as a developer — premium leads, white-label friendly delivery, and scalable engagements.",
  path: "/developers",
});

export default function DevelopersPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Partners</div>
        <h1>
          Scale with a
          <br />
          <span style={{ color: "var(--neon3)" }}>premium brand.</span>
        </h1>
        <p>
          Independent developers plug into our sales narrative, client experience, and
          delivery scaffolding — you stay focused on the craft.
        </p>
      </div>
      <DeveloperPartnerSection />
    </SiteShell>
  );
}
