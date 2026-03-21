import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="about-founder">
      <div className="section-intro section-intro--about">
        <div className="sec-label center">Founder</div>
        <h2 className="sec-title">
          Built from hustle,
          <br />
          <span style={{ color: "var(--neon)" }}>scaled with systems.</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-photo-wrap reveal">
          <Image
            src="/images/michelle-headshot.jpg"
            alt="Professional headshot of Michelle, founder of Biz Boost Agency, in a bright pink blazer against a black background."
            width={1024}
            height={682}
            className="about-photo"
            sizes="(max-width:900px) 100vw, 420px"
          />
        </div>
        <div className="about-copy">
          <p className="reveal">
            <strong>Hi, I&apos;m Michelle — founder of Biz Boost Agency.</strong> I
            started this agency after years of watching brilliant operators get
            stuck behind weak websites, scattered branding, and marketing that
            looked busy but didn&apos;t book revenue. I built Biz Boost to be the
            partner I wished I had: fast execution, premium craft, and strategy
            that maps to real business outcomes.
          </p>
          <p className="reveal">
            Today we help founders and growing teams launch and scale with web
            experiences, brand systems, and growth campaigns that feel{" "}
            <strong>luxury-grade</strong> — without the agency bloat. Every
            engagement is built around clarity, conversion, and momentum.
          </p>
          <p className="reveal about-pullquote">
            If you&apos;re ready to look as sharp as you operate, you&apos;re in
            the right place.
          </p>
          <p className="reveal" style={{ marginBottom: 0 }}>
            <Link href="/contact" className="btn-primary">
              Book a strategy call
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
