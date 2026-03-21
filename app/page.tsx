import { Preloader } from "@/components/Preloader";
import { SiteShell } from "@/components/SiteShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { DeveloperPartnerSection } from "@/components/sections/DeveloperPartnerSection";
import { TeamSection } from "@/components/sections/TeamSection";
import type { CSSProperties } from "react";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <SiteShell>
        <section className="hero">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
          <div className="hero-scan" />
          <div className="hero-eyebrow">Biz Boost Agency · Est. 2025</div>
          <h1 className="hero-title">
            <span className="line1">Build.</span>
            <span className="line2">Brand.</span>
            <span className="line3">Dominate.</span>
          </h1>
          <p className="hero-sub">
            Websites, branding, and digital marketing that actually move the
            needle. <strong>We don&apos;t do average.</strong> Every pixel, every
            word, every campaign is built to convert.
          </p>
          <div className="hero-btns">
            <a href="/services.html" className="btn-primary">
              See Our Services
            </a>
            <a href="/calculator.html" className="btn-ghost">
              ROI Calculator
            </a>
          </div>
          <div className="hero-stats">
            <div style={{ textAlign: "center" }}>
              <span className="stat-num">150+</span>
              <span className="stat-lbl">Clients Served</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="stat-num">98%</span>
              <span className="stat-lbl">Retention Rate</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="stat-num">7–14</span>
              <span className="stat-lbl">Day Delivery</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="stat-num" style={{ color: "var(--neon2)" }}>
                $0
              </span>
              <span className="stat-lbl">Fluff Included</span>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-dot" />
            </div>
            <p className="scroll-hint">Scroll to explore</p>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {[
              "WEB DESIGN",
              "BRAND IDENTITY",
              "SOCIAL MEDIA",
              "SEO & ADS",
              "EMAIL MARKETING",
              "CONSULTING",
              "LOGO DESIGN",
              "LANDING PAGES",
            ]
              .flatMap((t) => [t, t])
              .map((t, i) => (
                <span key={`${t}-${i}`} className="ticker-item">
                  {t} <span style={{ opacity: 0.4 }}>✦</span>
                </span>
              ))}
          </div>
        </div>

        <div className="marquee-wrap" aria-hidden="true">
          <div className="marquee-row">
            {[
              "WEBSITES",
              "LOGOS",
              "CAMPAIGNS",
              "BRANDS",
              "FUNNELS",
              "CONTENT",
            ]
              .flatMap((t) => [t, t])
              .map((t, i) => (
                <span key={`m1-${i}`} className="marquee-item">
                  {t}
                </span>
              ))}
          </div>
          <div className="marquee-row rev">
            {[
              "GROWTH",
              "CONVERSION",
              "IDENTITY",
              "STRATEGY",
              "REACH",
              "RESULTS",
            ]
              .flatMap((t) => [t, t])
              .map((t, i) => (
                <span key={`m2-${i}`} className="marquee-item">
                  {t}
                </span>
              ))}
          </div>
        </div>

        <AboutSection />

        <section className="services-preview">
          <div
            style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}
          >
            <div className="sec-label center">What We Do</div>
            <h2 className="sec-title">
              Everything your
              <br />
              brand needs.
            </h2>
            <p
              style={{
                color: "var(--mid)",
                lineHeight: 1.8,
                fontSize: 15.5,
                marginTop: 18,
              }}
            >
              From first impression to full-scale growth engine.
            </p>
          </div>
          <div className="svc-grid">
            <div className="svc-card s-web reveal">
              <div className="svc-icon">🖥️</div>
              <div className="svc-title">Web Design</div>
              <div className="svc-desc">
                Custom websites built to convert. Fast, mobile-first, designed to
                make your competition nervous.
              </div>
              <a href="/services.html#web" className="svc-link">
                Learn More →
              </a>
            </div>
            <div className="svc-card s-brand reveal">
              <div className="svc-icon">🎨</div>
              <div className="svc-title">Brand Identity</div>
              <div className="svc-desc">
                Logos, color systems, and brand guidelines that make you instantly
                recognizable and undeniably credible.
              </div>
              <a href="/services.html#brand" className="svc-link">
                Learn More →
              </a>
            </div>
            <div className="svc-card s-social reveal">
              <div className="svc-icon">📱</div>
              <div className="svc-title">Social Media</div>
              <div className="svc-desc">
                Content strategy and scheduling that builds community and keeps
                your brand in the feed — every day.
              </div>
              <a href="/services.html#social" className="svc-link">
                Learn More →
              </a>
            </div>
            <div className="svc-card s-consult reveal">
              <div className="svc-icon">💡</div>
              <div className="svc-title">Consulting</div>
              <div className="svc-desc">
                We diagnose your business, identify the leaks, and hand you a
                concrete roadmap to plug them.
              </div>
              <a href="/services.html#consult" className="svc-link">
                Learn More →
              </a>
            </div>
            <div className="svc-card s-seo reveal">
              <div className="svc-icon">📈</div>
              <div className="svc-title">SEO &amp; Ads</div>
              <div className="svc-desc">
                Organic rankings and paid campaigns that bring buyers to your door
                — not browsers. ROI-focused.
              </div>
              <a href="/services.html#seo" className="svc-link">
                Learn More →
              </a>
            </div>
            <div className="svc-card s-email reveal">
              <div className="svc-icon">✉️</div>
              <div className="svc-title">Email Marketing</div>
              <div className="svc-desc">
                Automated sequences and newsletters that turn one-time buyers into
                loyal, repeat customers.
              </div>
              <a href="/services.html#email" className="svc-link">
                Learn More →
              </a>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="/services.html" className="btn-outline">
              View All Services
            </a>
          </div>
        </section>

        <TeamSection />
        <DeveloperPartnerSection />

        <div className="nums-bg">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <div className="sec-label center">By The Numbers</div>
            <h2 className="sec-title">
              Results that
              <br />
              speak louder.
            </h2>
          </div>
          <div className="nums-grid">
            <div
              className="num-item reveal"
              style={{ "--nc2": "var(--neon)" } as CSSProperties}
            >
              <div className="num-val">312%</div>
              <span className="num-lbl">Avg ROI for Clients</span>
            </div>
            <div
              className="num-item reveal"
              style={{ "--nc2": "var(--neon2)" } as CSSProperties}
            >
              <div className="num-val">2.4×</div>
              <span className="num-lbl">Avg Conv. Rate Lift</span>
            </div>
            <div
              className="num-item reveal"
              style={{ "--nc2": "var(--neon3)" } as CSSProperties}
            >
              <div className="num-val">11d</div>
              <span className="num-lbl">Avg Delivery Time</span>
            </div>
            <div
              className="num-item reveal"
              style={{ "--nc2": "var(--neon)" } as CSSProperties}
            >
              <div className="num-val">150+</div>
              <span className="num-lbl">Brands Launched</span>
            </div>
          </div>
        </div>

        <section className="testi-preview">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <div className="sec-label center">Client Results</div>
            <h2 className="sec-title">
              What our clients
              <br />
              actually say.
            </h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card reveal">
              <div className="stars">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="star">
                    {s}
                  </span>
                ))}
              </div>
              <div className="testi-quote">
                Biz Boost transformed our online presence completely. Traffic up
                300% in 3 months and leads are up 4x.
              </div>
              <div className="testi-author">
                <div className="testi-avatar">SM</div>
                <div>
                  <span className="testi-name">Sarah Mitchell</span>
                  <span className="testi-role">CEO, TechStart Inc.</span>
                </div>
              </div>
            </div>
            <div className="testi-card reveal">
              <div className="stars">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="star">
                    {s}
                  </span>
                ))}
              </div>
              <div className="testi-quote">
                The ROI from their digital marketing has been incredible. Best
                investment we&apos;ve ever made.
              </div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--neon2),var(--neon3))",
                  }}
                >
                  MC
                </div>
                <div>
                  <span className="testi-name">Michael Chen</span>
                  <span className="testi-role">Founder, GrowthLabs</span>
                </div>
              </div>
            </div>
            <div className="testi-card reveal">
              <div className="stars">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="star">
                    {s}
                  </span>
                ))}
              </div>
              <div className="testi-quote">
                Professional, fast, and incredibly talented. They made us look like
                a Fortune 500 overnight.
              </div>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--neon3),var(--neon))",
                  }}
                >
                  ER
                </div>
                <div>
                  <span className="testi-name">Emily Rodriguez</span>
                  <span className="testi-role">Marketing Dir., Elevate Co</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="/testimonials.html" className="btn-outline">
              Read All Reviews
            </a>
          </div>
        </section>

        <div className="cta-band">
          <div className="sec-label center" style={{ marginBottom: 20 }}>
            Ready to Boost?
          </div>
          <h2>
            Your business
            <br />
            <span style={{ color: "var(--neon)" }}>deserves more.</span>
          </h2>
          <p>
            No templates. No fluff. A partner who builds like it&apos;s their own
            business on the line.
          </p>
          <a href="/contact.html" className="btn-primary">
            Start the Conversation
          </a>
        </div>
      </SiteShell>
    </>
  );
}
