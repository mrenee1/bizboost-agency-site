import { AboutSection } from "@/components/sections/AboutSection";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Meet the founder and story behind Biz Boost Agency — premium web, brand, and growth for operators who refuse to settle.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Our Story</div>
        <h1>
          Built to
          <br />
          <span style={{ color: "var(--neon)" }}>convert.</span>
        </h1>
        <p>
          Premium execution, clear strategy, and partnerships that map to revenue — not
          vanity metrics.
        </p>
      </div>
      <AboutSection />
    </SiteShell>
  );
}
