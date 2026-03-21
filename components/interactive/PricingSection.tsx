"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

function showToast(msg: string) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  window.setTimeout(() => t.classList.remove("show"), 3200);
}

const FAQ = [
  {
    q: "Do you require a contract?",
    a: "Monthly plans require a minimum 3-month commitment so we have time to deliver real results. After that, cancel with 30 days notice. One-time projects are billed 50% upfront and 50% on delivery.",
  },
  {
    q: "How quickly can you start?",
    a: "Most projects kick off within 3–5 business days of signing. We'll schedule your discovery call immediately and have your strategy in hand within the first week.",
  },
  {
    q: "What if I need something custom?",
    a: "All packages are flexible. If your business needs something not listed, reach out and we'll build a custom proposal. Most clients mix and match services based on their stage and budget.",
  },
  {
    q: "Will I own everything you create?",
    a: "Absolutely. Every deliverable — code, designs, brand files, copy — is 100% yours the moment final payment clears. No licenses, no strings.",
  },
  {
    q: "How does the money-back guarantee work?",
    a: "If you're not satisfied within the first 30 days of a monthly plan, we'll refund your first month. No drama, no hoops. We back our work because we're confident in it.",
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const togglePricing = useCallback(() => {
    setIsAnnual((v) => {
      const next = !v;
      showToast(
        next
          ? "Annual pricing — you're saving 20%! 🎉"
          : "Switched to monthly pricing"
      );
      return next;
    });
  }, []);

  const displayPrice = (monthly: number, annual: number) => {
    const v = isAnnual ? annual : monthly;
    return v.toLocaleString();
  };

  const cycleText = (index: number, base: string) => {
    if (index === 0) return base;
    return isAnnual ? "per month" : "per month";
  };

  const annualNote = (pkgIndex: number) => {
    if (!isAnnual || pkgIndex === 0) return "";
    const annualYearly = [4764, 7644, 14364];
    return `Billed $${annualYearly[pkgIndex].toLocaleString()}/yr`;
  };

  return (
    <>
      <div className="price-section">
        <div style={{ textAlign: "center" }}>
          <div className="price-toggle">
            <span
              className={`toggle-label${!isAnnual ? " active" : ""}`}
              id="lbl-monthly"
            >
              Monthly
            </span>
            <button
              type="button"
              className={`toggle-switch${isAnnual ? " on" : ""}`}
              id="priceToggle"
              onClick={togglePricing}
              aria-label="Toggle annual pricing"
            >
              <div className="toggle-knob" />
            </button>
            <span
              className={`toggle-label${isAnnual ? " active" : ""}`}
              id="lbl-annual"
            >
              Annual <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>
        <div className="pkg-grid">
          <div className="pkg reveal">
            <div className="pkg-badge" style={{ color: "var(--mid)" }}>
              STARTER
            </div>
            <div className="pkg-name">Launch</div>
            <div className="pkg-price" style={{ color: "var(--text)" }}>
              <sup>$</sup>
              <span className="p-val">{displayPrice(497, 397)}</span>
            </div>
            <div className="pkg-annual-note" id="an-note-0" />
            <div className="pkg-cycle">
              <span className="p-cycle">{cycleText(0, "one-time")}</span>
            </div>
            <ul className="pkg-features">
              <li>Logo + color palette</li>
              <li>1-page landing site</li>
              <li>Mobile responsive design</li>
              <li>Social profile setup (2 platforms)</li>
              <li>1 round of revisions</li>
              <li>30-day post-launch support</li>
              <li className="dim">Monthly content</li>
              <li className="dim">Ad management</li>
              <li className="dim">SEO optimization</li>
            </ul>
            <Link
              href="/contact"
              className="pkg-cta"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--mid)",
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 16,
                letterSpacing: ".12em",
              }}
            >
              Get Started
            </Link>
          </div>
          <div className="pkg featured reveal">
            <div className="pkg-badge" style={{ color: "var(--neon)" }}>
              GROWTH
            </div>
            <div className="pkg-name" style={{ color: "var(--neon)" }}>
              Boost
            </div>
            <div className="pkg-price" style={{ color: "var(--neon)" }}>
              <sup>$</sup>
              <span className="p-val">{displayPrice(797, 637)}</span>
            </div>
            <div
              className="pkg-annual-note"
              id="an-note-1"
              style={{ color: "var(--neon)" }}
            >
              {annualNote(1)}
            </div>
            <div className="pkg-cycle" style={{ color: "var(--neon)", opacity: 0.6 }}>
              <span className="p-cycle">{cycleText(1, "per month")}</span>
            </div>
            <ul className="pkg-features">
              <li>Full brand identity kit</li>
              <li>5-page custom website</li>
              <li>12 social posts / month</li>
              <li>Email newsletter (monthly)</li>
              <li>Basic SEO setup</li>
              <li>Monthly strategy call</li>
              <li>Unlimited revisions</li>
              <li>90-day support</li>
              <li className="dim">Paid ad management</li>
            </ul>
            <Link href="/contact" className="btn-primary pkg-cta">
              Start Growing
            </Link>
          </div>
          <div className="pkg reveal">
            <div className="pkg-badge" style={{ color: "var(--neon2)" }}>
              DOMINATE
            </div>
            <div className="pkg-name" style={{ color: "var(--neon2)" }}>
              Scale
            </div>
            <div className="pkg-price" style={{ color: "var(--neon2)" }}>
              <sup>$</sup>
              <span className="p-val">{displayPrice(1497, 1197)}</span>
            </div>
            <div
              className="pkg-annual-note"
              id="an-note-2"
              style={{ color: "var(--neon2)" }}
            >
              {annualNote(2)}
            </div>
            <div className="pkg-cycle">
              <span className="p-cycle">{cycleText(2, "per month")}</span>
            </div>
            <ul className="pkg-features">
              <li>Everything in Boost</li>
              <li>Full eCommerce or client portal</li>
              <li>30 posts + Stories / month</li>
              <li>Google &amp; Meta ad management</li>
              <li>Full SEO + local listings</li>
              <li>Weekly strategy call</li>
              <li>Priority 48-hour turnaround</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
            </ul>
            <Link
              href="/contact"
              className="pkg-cta"
              style={{
                background: "transparent",
                border: "1px solid var(--neon2)",
                color: "var(--neon2)",
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 16,
                letterSpacing: ".12em",
              }}
            >
              Let&apos;s Dominate
            </Link>
          </div>
        </div>
        <div className="guarantee">
          <span style={{ fontSize: 22 }}>🛡️</span>
          <div className="guarantee-text">
            30-Day Money-Back Guarantee · No Questions Asked · Cancel Anytime
          </div>
        </div>
      </div>

      <div className="pricing-faq-section">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div className="sec-label center">FAQ</div>
          <h2 className="sec-title">
            Common
            <br />
            questions.
          </h2>
        </div>
        <div className="pricing-faq-wrap" style={{ paddingTop: 0 }}>
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className={`pricing-faq-item${openFaq === i ? " open" : ""}`}
              onClick={() => setOpenFaq((o) => (o === i ? null : i))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenFaq((o) => (o === i ? null : i));
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="pricing-faq-q">
                {item.q}
                <span className="pricing-faq-icon">+</span>
              </div>
              <div className="pricing-faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-not-sure">
        <h2 className="sec-title" style={{ marginBottom: 20 }}>
          Still not sure?
        </h2>
        <p
          style={{
            color: "var(--mid)",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 460,
            margin: "0 auto 36px",
          }}
        >
          Book a free 30-min call. We&apos;ll tell you exactly which package makes
          sense for your business — or if none of them do.
        </p>
        <Link href="/contact" className="btn-primary">
          Book Free Strategy Call
        </Link>
      </div>
    </>
  );
}
