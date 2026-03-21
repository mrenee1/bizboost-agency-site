"use client";

import Link from "next/link";
import { useCallback, useState, type FormEvent } from "react";

const FAQ = [
  {
    q: "How quickly can you start?",
    a: "Most projects kick off within 3–5 business days of signing. We'll send a welcome packet, schedule your discovery call, and get to work fast. We respect your time and don't do month-long onboarding.",
  },
  {
    q: "Do I need to have all the details figured out?",
    a: 'Not at all. Many of our best projects start with a "I know I need something but I\'m not sure what." That\'s what the discovery call is for. We help you figure out the right approach for your goals and budget.',
  },
  {
    q: "What's included in the free strategy call?",
    a: "A 30-minute no-pressure conversation where we learn about your business, your goals, and your current challenges. You'll leave with at least 2–3 actionable insights regardless of whether you hire us.",
  },
  {
    q: "Can I cancel a monthly plan?",
    a: "Yes — monthly plans can be cancelled with 30 days' notice. No lock-in contracts, no cancellation fees. We earn your business every single month.",
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Absolutely. We work with clients across the US, Canada, UK, and beyond. Communication is primarily via email and video call, so location is never a barrier.",
  },
];

function showToast(msg: string) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  window.setTimeout(() => t.classList.remove("show"), 3200);
}

export function ContactPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const r = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (r.ok) {
        setSent(true);
        showToast("Message sent! We'll be in touch within 24 hours ✅");
      } else {
        showToast("Something went wrong. Please email us directly.");
      }
    } catch {
      showToast("Network error. Please email us directly.");
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq((o) => (o === index ? null : index));
  };

  return (
    <>
      <div className="contact-layout">
        <div className="contact-info">
          <div className="sec-label">Get In Touch</div>
          <h2>
            We&apos;d love to
            <br />
            hear from you.
          </h2>
          <p>
            Whether you&apos;re ready to jump in or just exploring your options,
            we&apos;re here for it. Reach out and let&apos;s figure out the best path
            forward together.
          </p>

          <div className="info-item reveal">
            <div className="info-icon">📧</div>
            <div>
              <span className="info-label">Email Us</span>
              <span className="info-val">
                <a href="mailto:michelle@mreneewilliams.com">
                  michelle@mreneewilliams.com
                </a>
              </span>
            </div>
          </div>
          <div className="info-item reveal">
            <div className="info-icon">📞</div>
            <div>
              <span className="info-label">Call or Text</span>
              <span className="info-val">
                <a href="tel:+15551234567">(555) 123-4567</a>
              </span>
            </div>
          </div>
          <div className="info-item reveal">
            <div className="info-icon">🕐</div>
            <div>
              <span className="info-label">Office Hours</span>
              <span className="info-val">Monday – Friday, 9am – 6pm EST</span>
            </div>
          </div>
          <div className="info-item reveal">
            <div className="info-icon">⚡</div>
            <div>
              <span className="info-label">Response Time</span>
              <span className="info-val">Within 24 hours — usually same day</span>
            </div>
          </div>

          <div className="availability reveal">
            <span className="avail-dot" />
            <span className="avail-text">Currently accepting new clients</span>
          </div>
        </div>

        <div className="form-wrap reveal">
          {!sent ? (
            <div id="formWrap">
              <div className="form-title">Send a Message</div>
              <div className="form-sub">We&apos;ll respond within 24 hours</div>
              <form
                action="https://formspree.io/f/xnnqojgk"
                method="POST"
                onSubmit={onSubmit}
              >
                <input type="hidden" name="_replyto" value="michelle@mreneewilliams.com" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New inquiry from Biz Boost Agency website"
                />
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="f-name">Your Name *</label>
                    <input type="text" name="name" id="f-name" placeholder="Jane Smith" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-email">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      id="f-email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-company">Company / Business</label>
                    <input
                      type="text"
                      name="company"
                      id="f-company"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-phone">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      id="f-phone"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="f-service">Service You&apos;re Interested In *</label>
                    <select name="service" id="f-service" required>
                      <option value="">— Select a service —</option>
                      <option>Web Design</option>
                      <option>Brand Identity</option>
                      <option>Social Media Management</option>
                      <option>SEO &amp; Ads</option>
                      <option>Email Marketing</option>
                      <option>Business Consulting</option>
                      <option>Full-Service Package</option>
                      <option>Not Sure Yet — Let&apos;s Talk</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="f-budget">Budget Range</label>
                    <select name="budget" id="f-budget">
                      <option value="">— Select a range —</option>
                      <option>Under $500</option>
                      <option>$500 – $1,500</option>
                      <option>$1,500 – $3,000</option>
                      <option>$3,000 – $5,000</option>
                      <option>$5,000+</option>
                      <option>Ongoing Monthly Retainer</option>
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="f-message">Tell Us About Your Project *</label>
                    <textarea
                      name="message"
                      id="f-message"
                      placeholder="What are you working on? What's your goal? Where are you stuck? The more detail, the better."
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="form-submit">
                  Send My Message →
                </button>
                <p className="form-note">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" style={{ color: "var(--neon)" }}>
                    privacy policy
                  </Link>
                  . No spam — ever.
                </p>
              </form>
            </div>
          ) : (
            <div className="form-success" id="formSuccess">
              <span className="success-icon">✅</span>
              <div className="success-title">Message Received!</div>
              <p className="success-sub">
                Thanks for reaching out. We&apos;ll be in touch within 24 hours —
                usually same day. Check your inbox for a confirmation.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="contact-faq-section">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <div className="sec-label center">FAQ</div>
          <h2 className="sec-title">
            Common
            <br />
            questions.
          </h2>
        </div>
        <div className="contact-faq-wrap">
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className={`contact-faq-item reveal${openFaq === i ? " open" : ""}`}
            >
              <button
                type="button"
                className="contact-faq-q"
                onClick={() => toggleFaq(i)}
              >
                {item.q} <span className="contact-faq-arrow">+</span>
              </button>
              <div className="contact-faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
