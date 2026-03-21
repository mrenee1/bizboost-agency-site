import { SiteShell } from "@/components/SiteShell";
import { ServicesPageContent } from "@/components/page-content/ServicesPageContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Biz Boost Agency services — web design, brand identity, social media, SEO, email marketing, and consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <div className="page-hero">
        <div className="hero-scan" />
        <div className="sec-label center">What We Do</div>
        <h1>
          Services That
          <br />
          <span style={{ color: "var(--neon)" }}>Deliver.</span>
        </h1>
        <p>
          Everything you need to build, brand, and dominate your market — all under
          one roof. Pick one, stack them all.
        </p>
      </div>
      <ServicesPageContent />
    </SiteShell>
  );
}
