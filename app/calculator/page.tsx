import { CalculatorSection } from "@/components/interactive/CalculatorSection";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "ROI Calculator",
  description:
    "Free ROI, Website Value, and Brand Impact calculators from Biz Boost Agency.",
  path: "/calculator",
});

export default function CalculatorPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Free Tools</div>
        <h1>
          Know Your
          <br />
          <span style={{ color: "var(--neon)" }}>Numbers First.</span>
        </h1>
        <p>
          Real calculators. Real estimates. See the potential impact before you
          commit a single dollar.
        </p>
      </div>
      <CalculatorSection />
    </SiteShell>
  );
}
