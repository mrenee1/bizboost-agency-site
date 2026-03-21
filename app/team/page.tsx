import { TeamSection } from "@/components/sections/TeamSection";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Team",
  description:
    "The builders behind Biz Boost Agency — design, engineering, and growth specialists shipping premium work.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Squad</div>
        <h1>
          Meet the
          <br />
          <span style={{ color: "var(--neon2)" }}>builders.</span>
        </h1>
        <p>
          The team shipping your websites, brand systems, and campaigns — fast, polished,
          conversion-minded.
        </p>
      </div>
      <TeamSection />
    </SiteShell>
  );
}
