import Link from "next/link";

export function ServicesPageContent() {
  return (
    <>
      <div className="svc-full">
        <div className="svc-block" id="web">
          <div className="svc-copy reveal">
            <div className="sec-label">01 / 06</div>
            <h2 style={{ color: "var(--neon)" }}>
              Web Design
              <br />
              &amp; Development
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Landing Pages
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Full Sites
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                eCommerce
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Client Portals
              </span>
            </div>
            <p>
              Your website is your hardest-working salesperson. We build custom,
              conversion-focused websites that load fast, look sharp on every device,
              and are engineered to turn visitors into paying customers.
            </p>
            <p>
              No templates. No page builders. Every site is coded clean from scratch
              so it&apos;s fast, scalable, and actually yours.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon)" }}>
              <li>Custom design tailored to your brand</li>
              <li>Mobile-first, lightning-fast performance</li>
              <li>SEO-ready structure from day one</li>
              <li>Contact forms, booking, and integrations</li>
              <li>Handed off with full training and documentation</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
              Starting at $997
            </div>
            <br />
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon)" }}>
            <span className="svc-visual-icon">🖥️</span>
            <div className="svc-visual-title">Avg Result</div>
            <div className="svc-visual-stat">+180%</div>
            <div className="svc-visual-lbl">Increase in qualified leads</div>
          </div>
        </div>

        <div className="svc-block flip" id="brand">
          <div className="svc-copy reveal">
            <div className="sec-label">02 / 06</div>
            <h2 style={{ color: "var(--neon2)" }}>
              Brand
              <br />
              Identity
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Logo Design
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Brand Kit
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Style Guide
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Color Systems
              </span>
            </div>
            <p>
              A strong brand isn&apos;t just a logo — it&apos;s the gut feeling people
              get when they encounter your business. We build complete visual
              identities that make you instantly recognizable and undeniably credible.
            </p>
            <p>
              From your first logo concept to a full brand bible, we give you
              everything you need to show up consistently and confidently everywhere.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon2)" }}>
              <li>Logo design (primary + alternate marks)</li>
              <li>Color palette with HEX, RGB, and CMYK values</li>
              <li>Typography system and font pairings</li>
              <li>Brand voice and messaging guidelines</li>
              <li>Business card and social media templates</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
              Starting at $497
            </div>
            <br />
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--neon2)" }}
            >
              Get a Quote
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon2)" }}>
            <span className="svc-visual-icon">🎨</span>
            <div className="svc-visual-title" style={{ color: "var(--neon2)" }}>
              Avg Result
            </div>
            <div className="svc-visual-stat">+40%</div>
            <div className="svc-visual-lbl">Increase in close rate</div>
          </div>
        </div>

        <div className="svc-block" id="social">
          <div className="svc-copy reveal">
            <div className="sec-label">03 / 06</div>
            <h2 style={{ color: "var(--neon3)" }}>
              Social Media
              <br />
              Management
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Content Creation
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Strategy
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Scheduling
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Analytics
              </span>
            </div>
            <p>
              Consistency is the secret to social media growth — and consistency is
              hard when you&apos;re running a business. We handle the content, the
              graphics, the captions, and the calendar so you never go dark.
            </p>
            <p>
              We don&apos;t do generic. Every post is written in your brand voice and
              designed to your brand standards.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon3)" }}>
              <li>Monthly content calendar and strategy</li>
              <li>Custom graphic design for every post</li>
              <li>Captions, hashtags, and scheduling</li>
              <li>Instagram, Facebook, LinkedIn, TikTok</li>
              <li>Monthly analytics report with insights</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
              Starting at $299/mo
            </div>
            <br />
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--neon3)", color: "#060810" }}
            >
              Get a Quote
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon3)" }}>
            <span className="svc-visual-icon">📱</span>
            <div className="svc-visual-title" style={{ color: "var(--neon3)" }}>
              Avg Result
            </div>
            <div className="svc-visual-stat">3.2×</div>
            <div className="svc-visual-lbl">Follower growth in 90 days</div>
          </div>
        </div>

        <div className="svc-block flip" id="seo">
          <div className="svc-copy reveal">
            <div className="sec-label">04 / 06</div>
            <h2 style={{ color: "var(--neon)" }}>
              SEO &amp;
              <br />
              Paid Ads
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Local SEO
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Google Ads
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Meta Ads
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
                Analytics
              </span>
            </div>
            <p>
              Getting found is half the battle. We run data-driven SEO and paid ad
              campaigns that bring the right buyers to your door — not just browsers.
              Every dollar of ad spend is tracked and optimized for ROI.
            </p>
            <p>
              Whether you need local dominance or national reach, we build the
              strategy that matches your goals and budget.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon)" }}>
              <li>On-page and technical SEO audit and fixes</li>
              <li>Keyword research and content strategy</li>
              <li>Google Business Profile optimization</li>
              <li>Google Ads &amp; Meta Ads campaign management</li>
              <li>Monthly performance report with ROI tracking</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon)" }}>
              Starting at $499/mo
            </div>
            <br />
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon)" }}>
            <span className="svc-visual-icon">📈</span>
            <div className="svc-visual-title">Avg Result</div>
            <div className="svc-visual-stat">312%</div>
            <div className="svc-visual-lbl">Average client ROI</div>
          </div>
        </div>

        <div className="svc-block" id="email">
          <div className="svc-copy reveal">
            <div className="sec-label">05 / 06</div>
            <h2 style={{ color: "var(--neon2)" }}>
              Email
              <br />
              Marketing
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Automation
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Sequences
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Newsletters
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
                Drip Campaigns
              </span>
            </div>
            <p>
              Email is still the highest-ROI marketing channel in existence. We design
              and automate email systems that nurture your leads, re-engage past
              customers, and generate revenue on autopilot.
            </p>
            <p>
              From welcome sequences to abandoned cart flows to monthly newsletters —
              we handle the strategy and the execution.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon2)" }}>
              <li>Welcome and onboarding sequences</li>
              <li>Abandoned cart and re-engagement flows</li>
              <li>Monthly newsletter design and copywriting</li>
              <li>List segmentation and tagging strategy</li>
              <li>A/B testing and open rate optimization</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon2)" }}>
              Starting at $249/mo
            </div>
            <br />
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--neon2)" }}
            >
              Get a Quote
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon2)" }}>
            <span className="svc-visual-icon">✉️</span>
            <div className="svc-visual-title" style={{ color: "var(--neon2)" }}>
              Avg Result
            </div>
            <div className="svc-visual-stat">42:1</div>
            <div className="svc-visual-lbl">Industry avg email ROI</div>
          </div>
        </div>

        <div className="svc-block flip" id="consult">
          <div className="svc-copy reveal">
            <div className="sec-label">06 / 06</div>
            <h2 style={{ color: "var(--neon3)" }}>
              Business
              <br />
              Consulting
            </h2>
            <div className="svc-tags">
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Strategy
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Audit
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                Roadmap
              </span>
              <span className="svc-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
                1:1 Sessions
              </span>
            </div>
            <p>
              Stuck? Growing but not sure where to invest next? We offer hands-on
              consulting that diagnoses your business, identifies the leaks, and hands
              you a concrete roadmap to plug them — fast.
            </p>
            <p>
              No 80-slide decks full of fluff. Just clear priorities, honest assessment,
              and actionable next steps you can execute immediately.
            </p>
            <ul className="svc-features" style={{ ["--nc" as string]: "var(--neon3)" }}>
              <li>Full digital marketing audit</li>
              <li>Competitor and market analysis</li>
              <li>90-day growth roadmap</li>
              <li>1:1 strategy sessions (recorded)</li>
              <li>Accountability check-ins and follow-up</li>
            </ul>
            <div className="svc-price-tag" style={{ ["--nc" as string]: "var(--neon3)" }}>
              Starting at $197/session
            </div>
            <br />
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--neon3)", color: "#060810" }}
            >
              Book a Session
            </Link>
          </div>
          <div className="svc-visual reveal" style={{ ["--nc" as string]: "var(--neon3)" }}>
            <span className="svc-visual-icon">💡</span>
            <div className="svc-visual-title" style={{ color: "var(--neon3)" }}>
              Avg Result
            </div>
            <div className="svc-visual-stat">90d</div>
            <div className="svc-visual-lbl">To see measurable impact</div>
          </div>
        </div>
      </div>

      <div className="page-bottom-cta">
        <div className="sec-label center" style={{ marginBottom: 20 }}>
          Not Sure Where to Start?
        </div>
        <h2 className="sec-title">
          Let&apos;s figure it
          <br />
          <span style={{ color: "var(--neon)" }}>out together.</span>
        </h2>
        <p
          style={{
            color: "var(--mid)",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 480,
            margin: "20px auto 40px",
          }}
        >
          Book a free 30-minute strategy call. We&apos;ll look at your business, ask
          the right questions, and tell you exactly what we&apos;d do first.
        </p>
        <Link href="/contact" className="btn-primary">
          Book Free Strategy Call
        </Link>
      </div>
    </>
  );
}
