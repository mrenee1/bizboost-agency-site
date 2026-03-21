export function DeveloperPartnerSection() {
  return (
    <section id="developer-partner" className="dev-partner">
      <div className="dev-inner">
        <div className="sec-label center">Developer partners</div>
        <h2 className="sec-title" style={{ marginBottom: 20 }}>
          Solo dev?
          <br />
          <span style={{ color: "var(--neon3)" }}>Let&apos;s scale under one brand.</span>
        </h2>
        <p>
          Biz Boost Agency partners with independent developers who want{" "}
          <strong>premium leads</strong>, a <strong>recognized brand</strong>, and a
          clear way to deliver larger projects — without building a full agency
          from scratch.
        </p>
        <p>
          You stay focused on the craft (code, integrations, performance). We bring
          the positioning, sales narrative, client experience, and delivery
          scaffolding so every engagement feels enterprise-grade.
        </p>
        <div className="dev-pill-wrap" aria-hidden>
          <span className="dev-pill">White-label friendly</span>
          <span className="dev-pill">Revenue share · project-based</span>
          <span className="dev-pill">Portfolio + case study support</span>
          <span className="dev-pill">Clear scopes &amp; timelines</span>
        </div>
        <p style={{ marginBottom: 0 }}>
          If you&apos;re a senior dev who wants to plug into a growing agency
          brand — not disappear into a generic marketplace — we should talk.
        </p>
        <div className="dev-cta-row">
          <a href="/contact.html" className="btn-primary">
            Apply as a partner
          </a>
          <a href="/process.html" className="btn-ghost">
            See how we work
          </a>
        </div>
      </div>
    </section>
  );
}
