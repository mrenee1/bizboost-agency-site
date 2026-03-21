import { PricingSection } from "@/components/interactive/PricingSection";
import { SiteShell } from "@/components/SiteShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Transparent pricing packages from Biz Boost Agency. Launch, Boost, and Scale plans with no hidden fees.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">Pricing</div>
        <h1>
          Pick Your
          <br />
          <span style={{ color: "var(--neon)" }}>Boost Level.</span>
        </h1>
        <p>
          Transparent pricing. No hourly surprises. No hidden fees. Cancel monthly
          plans anytime.
        </p>
      </div>
      <PricingSection />
    </SiteShell>
  );
}
