import Link from "next/link";

export function ProcessPageContent() {
  return (
    <>
      <div className="process-section">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
          <div className="sec-label center">Typical Timeline</div>
          <p style={{ color: "var(--mid)", fontSize: 15, lineHeight: 1.8 }}>
            Most projects go from kickoff to launch in 7–14 days. Here&apos;s how the
            time breaks down:
          </p>
        </div>
        <div className="timeline-bar">
          <div className="tl-step">
            <span className="tl-day">Day 1</span>
            <span className="tl-lbl">Discovery Call</span>
          </div>
          <div className="tl-step">
            <span className="tl-day">Day 2–3</span>
            <span className="tl-lbl">Strategy &amp; Plan</span>
          </div>
          <div className="tl-step">
            <span className="tl-day">Day 4–10</span>
            <span className="tl-lbl">Build &amp; Create</span>
          </div>
          <div className="tl-step">
            <span className="tl-day">Day 11–13</span>
            <span className="tl-lbl">Review &amp; Refine</span>
          </div>
          <div className="tl-step">
            <span className="tl-day">Day 14</span>
            <span className="tl-lbl">Launch 🚀</span>
          </div>
        </div>

        <div className="process-list">
          <div className="proc-item reveal" style={{ ["--nc" as string]: "var(--neon)" }}>
            <div className="proc-num-wrap">
              <span className="proc-num">01</span>
              <span className="proc-emoji">🎯</span>
            </div>
            <div className="proc-body">
              <h3>Discovery</h3>
              <p>
                We start with a real conversation — no 40-question intake forms, no
                generic briefs. We want to understand your business, your customers,
                your goals, and what&apos;s been holding you back. This call typically
                runs 45–60 minutes and we come prepared with questions.
              </p>
              <ul className="proc-bullets">
                <li>Deep-dive into your business, competitors, and market</li>
                <li>Honest assessment of your current digital presence</li>
                <li>Define clear goals, KPIs, and success metrics</li>
                <li>Identify the highest-leverage opportunities first</li>
              </ul>
              <span className="proc-tag">Day 1</span>
            </div>
          </div>
          <div className="proc-item reveal" style={{ ["--nc" as string]: "var(--neon2)" }}>
            <div className="proc-num-wrap">
              <span
                className="proc-num"
                style={{ WebkitTextStrokeColor: "var(--neon2)" }}
              >
                02
              </span>
              <span className="proc-emoji">📊</span>
            </div>
            <div className="proc-body">
              <h3 style={{ color: "var(--neon2)" }}>Strategy</h3>
              <p>
                Within 24–48 hours of your discovery call, we present a custom
                strategy document — specific to your business, your stage, and your
                budget. We walk you through every recommendation and the reasoning
                behind it. You approve everything before we execute a single thing.
              </p>
              <ul className="proc-bullets" style={{ ["--nc" as string]: "var(--neon2)" }}>
                <li>Custom roadmap with prioritized action items</li>
                <li>Budget recommendations with expected ROI</li>
                <li>Timeline with clear milestones and deliverables</li>
                <li>Your approval before any work begins</li>
              </ul>
              <span
                className="proc-tag"
                style={{
                  color: "var(--neon2)",
                  borderColor: "var(--neon2)",
                }}
              >
                Days 2–3
              </span>
            </div>
          </div>
          <div className="proc-item reveal" style={{ ["--nc" as string]: "var(--neon3)" }}>
            <div className="proc-num-wrap">
              <span
                className="proc-num"
                style={{ WebkitTextStrokeColor: "var(--neon3)" }}
              >
                03
              </span>
              <span className="proc-emoji">⚡</span>
            </div>
            <div className="proc-body">
              <h3 style={{ color: "var(--neon3)" }}>Creation</h3>
              <p>
                This is where we build. Our team executes with speed and precision —
                clean code, sharp design, and every pixel in its right place.
                You&apos;ll receive progress updates throughout so there are never any
                surprises. We work fast, but we never cut corners.
              </p>
              <ul className="proc-bullets" style={{ ["--nc" as string]: "var(--neon3)" }}>
                <li>Daily updates on progress — you&apos;re never in the dark</li>
                <li>Designs submitted for review before development begins</li>
                <li>Brand voice and messaging woven through every element</li>
                <li>Mobile-first, accessibility-conscious, SEO-ready</li>
              </ul>
              <span className="proc-tag" style={{ color: "var(--neon3)", borderColor: "var(--neon3)" }}>
                Days 4–10
              </span>
            </div>
          </div>
          <div className="proc-item reveal" style={{ ["--nc" as string]: "var(--neon)" }}>
            <div className="proc-num-wrap">
              <span className="proc-num">04</span>
              <span className="proc-emoji">🚀</span>
            </div>
            <div className="proc-body">
              <h3>Launch</h3>
              <p>
                We don&apos;t just hand you a zip file and disappear. We handle the full
                deployment — domain connection, performance optimization, cross-browser
                testing, and a complete walkthrough so you know exactly how everything
                works. Launch day should feel exciting, not stressful.
              </p>
              <ul className="proc-bullets">
                <li>Full QA across browsers and devices</li>
                <li>Performance optimization and speed checks</li>
                <li>Analytics and tracking properly configured</li>
                <li>Recorded training walkthrough — yours to keep</li>
              </ul>
              <span className="proc-tag">Days 11–14</span>
            </div>
          </div>
          <div className="proc-item reveal" style={{ ["--nc" as string]: "var(--neon2)" }}>
            <div className="proc-num-wrap">
              <span
                className="proc-num"
                style={{ WebkitTextStrokeColor: "var(--neon2)" }}
              >
                05
              </span>
              <span className="proc-emoji">📈</span>
            </div>
            <div className="proc-body">
              <h3 style={{ color: "var(--neon2)" }}>Optimize</h3>
              <p>
                The work doesn&apos;t stop at launch. For monthly clients, we meet every
                month to review performance data, identify what&apos;s working, and
                refine what isn&apos;t. Results compound over time — and we&apos;re
                committed to being your long-term growth partner, not just a vendor.
              </p>
              <ul className="proc-bullets" style={{ ["--nc" as string]: "var(--neon2)" }}>
                <li>Monthly performance reports with plain-English insights</li>
                <li>A/B testing and conversion rate optimization</li>
                <li>Content updates and SEO improvements</li>
                <li>Strategy calls to adjust based on real data</li>
              </ul>
              <span
                className="proc-tag"
                style={{ color: "var(--neon2)", borderColor: "var(--neon2)" }}
              >
                Ongoing
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="process-bottom-cta">
        <div className="sec-label center" style={{ marginBottom: 20 }}>
          Ready to Start?
        </div>
        <h2 className="sec-title" style={{ marginBottom: 20 }}>
          Step one is just
          <br />
          <span style={{ color: "var(--neon)" }}>a conversation.</span>
        </h2>
        <p
          style={{
            color: "var(--mid)",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          Book your free discovery call and we&apos;ll walk you through exactly what
          we&apos;d do for your business — no pitch, no pressure.
        </p>
        <Link href="/contact" className="btn-primary">
          Book Discovery Call
        </Link>
      </div>
    </>
  );
}
