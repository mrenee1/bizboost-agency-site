import Link from "next/link";

const CARDS = [
  {
    featured: true,
    quote:
      "Biz Boost transformed our online presence completely. Within 3 months of our new website launching, organic traffic was up 300% and qualified leads quadrupled. They didn't just build us a website — they built us a growth machine.",
    initials: "SM",
    grad: "linear-gradient(135deg,var(--neon),var(--neon2))",
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    result: "📈 300% traffic increase",
  },
  {
    quote:
      "The ROI from their digital marketing work has been absolutely incredible. We were skeptical at first — we'd worked with other agencies before and been burned. This was completely different. Transparent, strategic, and effective.",
    initials: "MC",
    grad: "linear-gradient(135deg,var(--neon2),var(--neon3))",
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    result: "💰 4× lead volume",
  },
  {
    quote:
      "Professional, fast, and incredibly talented. They made us look like a Fortune 500 company overnight. Our close rate went from 18% to 34% just from having a polished brand. Worth every single penny.",
    initials: "ER",
    grad: "linear-gradient(135deg,var(--neon3),var(--neon))",
    name: "Emily Rodriguez",
    role: "Marketing Director, Elevate Co.",
    result: "🎯 34% close rate",
  },
  {
    quote:
      "I came to Biz Boost with basically nothing — a basic Squarespace site and zero brand presence. They built us a full brand kit, new website, and email funnel in under two weeks. Revenue doubled in the first quarter.",
    initials: "JL",
    grad: "linear-gradient(135deg,#7c3aed,var(--neon2))",
    name: "Jordan Lee",
    role: "Owner, Luxe Interiors",
    result: "🚀 2× revenue Q1",
  },
  {
    quote:
      "The consulting session alone was worth the investment. They identified three major gaps in our funnel in 60 minutes that we'd missed for two years. Implemented the recommendations and saw a 40% revenue bump within 6 weeks.",
    initials: "AT",
    grad: "linear-gradient(135deg,var(--neon),#7c3aed)",
    name: "Amanda Torres",
    role: "Director, PrimeCare Health",
    result: "📊 40% revenue bump",
  },
  {
    quote:
      "We hired Biz Boost for SEO and within 90 days we were ranking #1 for our primary keywords. Our Google Ads cost-per-lead dropped by 52%. They know what they're doing and they know how to communicate it in plain English.",
    initials: "RK",
    grad: "linear-gradient(135deg,var(--neon2),#7c3aed)",
    name: "Ryan Kowalski",
    role: "CEO, Summit Financial",
    result: "🔍 #1 keyword ranking",
  },
  {
    quote:
      "Social media was a nightmare for us — we had no strategy, inconsistent posting, and zero engagement. After 60 days with Biz Boost managing our accounts, engagement is up 580% and we're getting DMs from potential clients daily.",
    initials: "KJ",
    grad: "linear-gradient(135deg,var(--neon3),var(--neon2))",
    name: "Keisha Johnson",
    role: "Founder, Fresh Eats Co.",
    result: "📱 580% engagement lift",
  },
  {
    quote:
      "Their email sequences are works of art. We went from a 12% open rate to 41% and our abandoned cart recovery emails alone are bringing in an extra $8K a month. The automation runs itself now.",
    initials: "DW",
    grad: "linear-gradient(135deg,var(--neon),var(--neon3))",
    name: "Derek Walsh",
    role: "E-Commerce Dir., StyleVault",
    result: "✉️ 41% email open rate",
  },
  {
    quote:
      "Fast, professional, and genuinely invested in our success. They delivered our full brand package in 9 days and it was better than anything I imagined. The whole team references the brand guide constantly — it's that good.",
    initials: "LP",
    grad: "linear-gradient(135deg,#7c3aed,var(--neon3))",
    name: "Laura Park",
    role: "Co-Founder, Bloom Studio",
    result: "⚡ 9-day turnaround",
  },
];

export function TestimonialsPageContent() {
  return (
    <>
      <div className="results-bar-page">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div className="sec-label center">By The Numbers</div>
          <h2 className="sec-title">
            The proof is
            <br />
            in the data.
          </h2>
        </div>
        <div className="results-grid-page">
          <div className="result-item-page reveal">
            <span className="result-val-page" style={{ color: "var(--neon)" }}>
              312%
            </span>
            <span className="result-lbl-page">Avg Client ROI</span>
          </div>
          <div className="result-item-page reveal">
            <span className="result-val-page" style={{ color: "var(--neon2)" }}>
              2.4×
            </span>
            <span className="result-lbl-page">Avg Conv. Lift</span>
          </div>
          <div className="result-item-page reveal">
            <span className="result-val-page" style={{ color: "var(--neon3)" }}>
              98%
            </span>
            <span className="result-lbl-page">Retention Rate</span>
          </div>
          <div className="result-item-page reveal">
            <span className="result-val-page" style={{ color: "var(--neon)" }}>
              150+
            </span>
            <span className="result-lbl-page">Brands Launched</span>
          </div>
        </div>
      </div>

      <section className="page-testimonials" style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 52px" }}>
          <div className="sec-label" style={{ marginBottom: 12 }}>
            Testimonials
          </div>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>
            What they&apos;re
            <br />
            saying.
          </h2>
        </div>
        <div className="testi-grid" style={{ padding: "0 52px 80px" }}>
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`testi-card reveal${c.featured ? " featured-card" : ""}`}
            >
              <div className="stars">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="star">
                    {s}
                  </span>
                ))}
              </div>
              <div className="testi-quote">{c.quote}</div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{ background: c.grad }}
                  aria-hidden
                >
                  {c.initials}
                </div>
                <div>
                  <span className="testi-name">{c.name}</span>
                  <span className="testi-role">{c.role}</span>
                  <span className="testi-result">{c.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="testimonials-cta-band">
        <div className="sec-label center" style={{ marginBottom: 20 }}>
          Join Them
        </div>
        <h2>
          Ready to be our
          <br />
          <span style={{ color: "var(--neon)" }}>next success story?</span>
        </h2>
        <p
          style={{
            color: "var(--mid)",
            maxWidth: 480,
            margin: "0 auto 44px",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Let&apos;s build something that gets results worth talking about.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
          <Link href="/pricing" className="btn-ghost">
            View Pricing
          </Link>
        </div>
      </div>
    </>
  );
}
