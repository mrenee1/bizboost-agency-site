"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Tab = "roi" | "web" | "brand";

function fmtK(n: number) {
  return n > 9999 ? Math.round(n / 1000) + "k" : n.toLocaleString();
}

export function CalculatorSection() {
  const [tab, setTab] = useState<Tab>("roi");

  const [roiRev, setRoiRev] = useState(50000);
  const [roiIndustry, setRoiIndustry] = useState(0.15);
  const [roiMonths, setRoiMonths] = useState(24);
  const [roiAds, setRoiAds] = useState(2000);
  const [roiGain, setRoiGain] = useState("+$13k");
  const [roiPayback, setRoiPayback] = useState("1mo");
  const [roiScore, setRoiScore] = useState("A");

  const calcROI = useCallback(() => {
    const rev = roiRev || 0;
    const mult = roiIndustry || 0.15;
    const months = roiMonths || 0;
    const ads = roiAds || 0;
    const gain = Math.round(rev * (mult + Math.min(months / 24, 1) * 0.1));
    const payback = Math.max(1, Math.round((ads * 6) / Math.max(gain, 1)));
    const score =
      gain > rev * 0.2 ? "A+" : gain > rev * 0.15 ? "A" : gain > rev * 0.12 ? "B+" : "B";
    setRoiGain("+$" + fmtK(gain));
    setRoiPayback(payback + "mo");
    setRoiScore(score);
  }, [roiRev, roiIndustry, roiMonths, roiAds]);

  const [wVisitors, setWVisitors] = useState(1000);
  const [wConv, setWConv] = useState(1.5);
  const [wVal, setWVal] = useState(500);
  const [wAge, setWAge] = useState(3);
  const [wCurrent, setWCurrent] = useState("$7,500");
  const [wNew, setWNew] = useState("$13,500");
  const [wUplift, setWUplift] = useState("+80%");

  const calcWeb = useCallback(() => {
    const visitors = wVisitors || 0;
    const conv = (wConv || 0) / 100;
    const val = wVal || 0;
    const age = wAge || 0;
    const current = Math.round(visitors * conv * val);
    const uplift = Math.max(1.5, 2.3 - age * 0.05);
    setWCurrent("$" + current.toLocaleString());
    setWNew("$" + Math.round(current * uplift).toLocaleString());
    setWUplift("+" + Math.round((uplift - 1) * 100) + "%");
  }, [wVisitors, wConv, wVal, wAge]);

  const [bLeads, setBLeads] = useState(50);
  const [bClose, setBClose] = useState(20);
  const [bSale, setBSale] = useState(1500);
  const [bProf, setBProf] = useState(3);
  const [bCurrent, setBCurrent] = useState("$15,000");
  const [bBoost, setBBoost] = useState("$21,000");
  const [bDelta, setBDelta] = useState("+$6k");

  const calcBrand = useCallback(() => {
    const leads = bLeads || 0;
    const close = (bClose || 0) / 100;
    const sale = bSale || 0;
    const prof = bProf || 3;
    const current = Math.round(leads * close * sale);
    const boosted = Math.round(current * (1 + (5 - prof) * 0.08));
    setBCurrent("$" + current.toLocaleString());
    setBBoost("$" + boosted.toLocaleString());
    setBDelta("+$" + fmtK(boosted - current));
  }, [bLeads, bClose, bSale, bProf]);

  useEffect(() => {
    calcROI();
  }, [calcROI]);

  useEffect(() => {
    calcWeb();
  }, [calcWeb]);

  useEffect(() => {
    calcBrand();
  }, [calcBrand]);

  return (
    <>
      <div className="calc-section">
        <div className="calc-wrap">
          <div className="calc-tabs">
            <button
              type="button"
              className={`calc-tab${tab === "roi" ? " active" : ""}`}
              onClick={() => setTab("roi")}
            >
              📊 Business ROI
            </button>
            <button
              type="button"
              className={`calc-tab${tab === "web" ? " active" : ""}`}
              onClick={() => setTab("web")}
            >
              🖥️ Website Value
            </button>
            <button
              type="button"
              className={`calc-tab${tab === "brand" ? " active" : ""}`}
              onClick={() => setTab("brand")}
            >
              🎨 Brand Impact
            </button>
          </div>
          <div className={`calc-panel${tab === "roi" ? " active" : ""}`} id="tab-roi">
            <h3
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 28,
                marginBottom: 6,
                color: "var(--neon)",
              }}
            >
              Business ROI Calculator
            </h3>
            <p style={{ color: "var(--mid)", fontSize: 14, marginBottom: 28 }}>
              Estimate how much more revenue a Biz Boost engagement could generate for
              your business.
            </p>
            <div className="calc-grid">
              <div className="cf">
                <label htmlFor="roi-rev">Monthly Revenue ($)</label>
                <input
                  id="roi-rev"
                  type="number"
                  value={roiRev}
                  onChange={(e) => setRoiRev(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="roi-industry">Industry</label>
                <select
                  id="roi-industry"
                  value={roiIndustry}
                  onChange={(e) => setRoiIndustry(+e.target.value)}
                >
                  <option value={0.15}>Service Business</option>
                  <option value={0.22}>E-Commerce</option>
                  <option value={0.18}>Healthcare</option>
                  <option value={0.2}>Consulting</option>
                  <option value={0.12}>Retail</option>
                </select>
              </div>
              <div className="cf">
                <label htmlFor="roi-months">Months Since Last Rebrand</label>
                <input
                  id="roi-months"
                  type="number"
                  value={roiMonths}
                  onChange={(e) => setRoiMonths(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="roi-ads">Current Ad Spend / mo ($)</label>
                <input
                  id="roi-ads"
                  type="number"
                  value={roiAds}
                  onChange={(e) => setRoiAds(+e.target.value)}
                />
              </div>
            </div>
            <div className="calc-res">
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon)" }}>
                <span className="res-val">{roiGain}</span>
                <span className="res-lbl">Potential Monthly Gain</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon2)" }}>
                <span className="res-val">{roiPayback}</span>
                <span className="res-lbl">Est. Payback Period</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon3)" }}>
                <span className="res-val">{roiScore}</span>
                <span className="res-lbl">Growth Score</span>
              </div>
            </div>
            <p className="calc-note">
              Based on industry benchmarks. Actual results vary.{" "}
              <Link href="/contact">Get your full audit →</Link>
            </p>
          </div>
          <div className={`calc-panel${tab === "web" ? " active" : ""}`} id="tab-web">
            <h3
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 28,
                marginBottom: 6,
                color: "var(--neon)",
              }}
            >
              Website Value Calculator
            </h3>
            <p style={{ color: "var(--mid)", fontSize: 14, marginBottom: 28 }}>
              See how much more revenue a new website could generate based on your
              current traffic and pricing.
            </p>
            <div className="calc-grid">
              <div className="cf">
                <label htmlFor="w-visitors">Monthly Website Visitors</label>
                <input
                  id="w-visitors"
                  type="number"
                  value={wVisitors}
                  onChange={(e) => setWVisitors(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="w-conv">Current Conversion Rate (%)</label>
                <input
                  id="w-conv"
                  type="number"
                  step={0.1}
                  value={wConv}
                  onChange={(e) => setWConv(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="w-val">Avg Sale / Lead Value ($)</label>
                <input
                  id="w-val"
                  type="number"
                  value={wVal}
                  onChange={(e) => setWVal(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="w-age">Website Age (years)</label>
                <input
                  id="w-age"
                  type="number"
                  value={wAge}
                  onChange={(e) => setWAge(+e.target.value)}
                />
              </div>
            </div>
            <div className="calc-res">
              <div className="res-cell" style={{ ["--cc" as string]: "var(--mid)" }}>
                <span className="res-val">{wCurrent}</span>
                <span className="res-lbl">Current Monthly Value</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon)" }}>
                <span className="res-val">{wNew}</span>
                <span className="res-lbl">Potential w/ New Site</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon3)" }}>
                <span className="res-val">{wUplift}</span>
                <span className="res-lbl">Avg Conversion Uplift</span>
              </div>
            </div>
            <p className="calc-note">
              New websites typically increase conversions 50–120%.{" "}
              <Link href="/contact">Get a quote →</Link>
            </p>
          </div>
          <div className={`calc-panel${tab === "brand" ? " active" : ""}`} id="tab-brand">
            <h3
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 28,
                marginBottom: 6,
                color: "var(--neon)",
              }}
            >
              Brand Impact Calculator
            </h3>
            <p style={{ color: "var(--mid)", fontSize: 14, marginBottom: 28 }}>
              Find out how much revenue a stronger brand identity could unlock for your
              business.
            </p>
            <div className="calc-grid">
              <div className="cf">
                <label htmlFor="b-leads">Monthly Leads / Inquiries</label>
                <input
                  id="b-leads"
                  type="number"
                  value={bLeads}
                  onChange={(e) => setBLeads(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="b-close">Current Close Rate (%)</label>
                <input
                  id="b-close"
                  type="number"
                  value={bClose}
                  onChange={(e) => setBClose(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="b-sale">Avg Contract / Sale Value ($)</label>
                <input
                  id="b-sale"
                  type="number"
                  value={bSale}
                  onChange={(e) => setBSale(+e.target.value)}
                />
              </div>
              <div className="cf">
                <label htmlFor="b-prof">Brand Professionalism (1–5)</label>
                <select
                  id="b-prof"
                  value={bProf}
                  onChange={(e) => setBProf(+e.target.value)}
                >
                  <option value={1}>1 — DIY / No brand</option>
                  <option value={2}>2 — Basic logo only</option>
                  <option value={3}>3 — Decent, not polished</option>
                  <option value={4}>4 — Pretty good</option>
                  <option value={5}>5 — Professional &amp; cohesive</option>
                </select>
              </div>
            </div>
            <div className="calc-res">
              <div className="res-cell" style={{ ["--cc" as string]: "var(--mid)" }}>
                <span className="res-val">{bCurrent}</span>
                <span className="res-lbl">Current Monthly Rev</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon2)" }}>
                <span className="res-val">{bBoost}</span>
                <span className="res-lbl">With Strong Brand</span>
              </div>
              <div className="res-cell" style={{ ["--cc" as string]: "var(--neon3)" }}>
                <span className="res-val">{bDelta}</span>
                <span className="res-lbl">Monthly Upside</span>
              </div>
            </div>
            <p className="calc-note">
              Strong branding increases close rates by 20–45% on average.{" "}
              <Link href="/contact">Book a brand audit →</Link>
            </p>
          </div>
        </div>

        <div className="calc-explainer">
          <div className="sec-label">How We Calculate</div>
          <h2 className="sec-title" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
            These aren&apos;t just
            <br />
            random numbers.
          </h2>
          <div className="explainer-grid">
            <div className="exp-item">
              <h4>Industry Data</h4>
              <p>
                Our benchmarks are sourced from real conversion and ROI data across
                150+ client engagements and industry research.
              </p>
            </div>
            <div className="exp-item" style={{ borderTopColor: "var(--neon2)" }}>
              <h4 style={{ color: "var(--neon2)" }}>Conservative Estimates</h4>
              <p>
                We deliberately use conservative multipliers. Real results often
                exceed these projections — we&apos;d rather under-promise.
              </p>
            </div>
            <div className="exp-item" style={{ borderTopColor: "var(--neon3)" }}>
              <h4 style={{ color: "var(--neon3)" }}>Your Inputs Matter</h4>
              <p>
                The accuracy of results depends on the inputs you provide. The more
                accurate your numbers, the more useful the output.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="calc-bottom-cta">
        <div className="sec-label center" style={{ marginBottom: 20 }}>
          Want the Full Picture?
        </div>
        <h2 className="sec-title" style={{ marginBottom: 20 }}>
          Get a real audit,
          <br />
          <span style={{ color: "var(--neon)" }}>not a calculator.</span>
        </h2>
        <p
          style={{
            color: "var(--mid)",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 500,
            margin: "0 auto 40px",
          }}
        >
          We&apos;ll dig into your actual numbers, your competitors, and your market —
          and hand you a personalized roadmap. Free, no pitch.
        </p>
        <Link href="/contact" className="btn-primary">
          Book Your Free Audit
        </Link>
      </div>
    </>
  );
}
