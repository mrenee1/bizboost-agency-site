"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const THEME_KEY = "bba-theme";

function showToast(msg: string) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  window.setTimeout(() => t.classList.remove("show"), 3200);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const applyTheme = useCallback((t: "dark" | "light") => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(THEME_KEY, t);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [applyTheme, theme]);

  useEffect(() => {
    const c = cursor.current;
    const r = ring.current;
    if (!c || !r) return;
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      c.style.left = `${mx}px`;
      c.style.top = `${my}px`;
    };
    document.addEventListener("mousemove", onMove);
    let id = 0;
    const anim = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      r.style.left = `${rx}px`;
      r.style.top = `${ry}px`;
      id = requestAnimationFrame(anim);
    };
    id = requestAnimationFrame(anim);
    const interactive =
      "a, button, .svc-card, .pkg, .calc-tab, .marquee-item, .testi-card, .proc-step, .blog-card, .team-card, .nav-cta, .theme-btn, .hamburger";
    const onEnter = () => document.body.classList.add("hovered");
    const onLeave = () => document.body.classList.remove("hovered");
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(id);
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  useEffect(() => {
    const nav = document.getElementById("mainNav");
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const run = () => {
      document.querySelectorAll(".reveal").forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${(i % 6) * 80}ms`;
        ro.observe(el);
      });
    };
    const id = requestAnimationFrame(run);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(".newsletter-btn");
      if (!btn) return;
      const inp = btn.previousElementSibling as HTMLInputElement | null;
      if (inp?.value && /\S+@\S+\.\S+/.test(inp.value)) {
        showToast("You're subscribed! Watch your inbox 📧");
        inp.value = "";
      } else {
        showToast("Please enter a valid email address");
      }
    };
    document.body.addEventListener("click", onClick);
    return () => document.body.removeEventListener("click", onClick);
  }, []);

  const navClass = (href: string) => {
    if (href.startsWith("/#")) return "";
    const target = href.replace(/^\//, "");
    if (target === "index.html" || target === "") return pathname === "/" ? "active" : "";
    return pathname === `/${target}` ? "active" : "";
  };

  return (
    <>
      <div className="cursor" id="cursor" ref={cursor} />
      <div className="cursor-ring" id="cursorRing" ref={ring} />
      <div className="toast" id="toast" />

      <div
        className={`mob-menu${mobOpen ? " open" : ""}`}
        id="mobMenu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobOpen}
      >
        <button
          type="button"
          className="mob-close"
          id="mobClose"
          onClick={() => setMobOpen(false)}
        >
          [ CLOSE ]
        </button>
        <Link href="/" onClick={() => setMobOpen(false)}>
          Home
        </Link>
        <Link href="/#about" onClick={() => setMobOpen(false)}>
          About
        </Link>
        <Link href="/#team" onClick={() => setMobOpen(false)}>
          Team
        </Link>
        <Link href="/#developer-partner" onClick={() => setMobOpen(false)}>
          For Developers
        </Link>
        <a href="/services.html" onClick={() => setMobOpen(false)}>
          Services
        </a>
        <a href="/pricing.html" onClick={() => setMobOpen(false)}>
          Pricing
        </a>
        <a href="/calculator.html" onClick={() => setMobOpen(false)}>
          Calculator
        </a>
        <a href="/process.html" onClick={() => setMobOpen(false)}>
          Process
        </a>
        <a href="/testimonials.html" onClick={() => setMobOpen(false)}>
          Clients
        </a>
        <a
          href="/contact.html"
          onClick={() => setMobOpen(false)}
          style={{ color: "var(--neon)" }}
        >
          Get Started
        </a>
      </div>

      <nav id="mainNav">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/biz-boost-logo.png"
            alt=""
            width={44}
            height={44}
            className="nav-logo-img"
            priority
          />
          <span className="nav-logo-text">
            Biz Boost Agency
            <span>Web · Brand · Growth</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#about" className={navClass("/#about")}>
            About
          </Link>
          <Link href="/#team" className={navClass("/#team")}>
            Team
          </Link>
          <Link href="/#developer-partner" className={navClass("/#developer-partner")}>
            Partners
          </Link>
          <a href="/services.html" className={navClass("services.html")}>
            Services
          </a>
          <a href="/pricing.html" className={navClass("pricing.html")}>
            Pricing
          </a>
          <a href="/calculator.html" className={navClass("calculator.html")}>
            Calculator
          </a>
          <a href="/process.html" className={navClass("process.html")}>
            Process
          </a>
          <a href="/testimonials.html" className={navClass("testimonials.html")}>
            Clients
          </a>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className="theme-btn"
            id="themeBtn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a href="/contact.html" className="nav-cta">
            Get Started
          </a>
          <button
            type="button"
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            aria-expanded={mobOpen}
            onClick={() => setMobOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {children}

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-mark">
              Biz Boost Agency<span>Web · Brand · Growth</span>
            </div>
            <p>
              Building brands that dominate. Websites, branding, and digital
              marketing that actually moves the needle. Est. 2025.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address..." />
              <button type="button" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/services.html#web">Web Design</a>
              </li>
              <li>
                <a href="/services.html#brand">Brand Identity</a>
              </li>
              <li>
                <a href="/services.html#social">Social Media</a>
              </li>
              <li>
                <a href="/services.html#seo">SEO &amp; Ads</a>
              </li>
              <li>
                <a href="/services.html#email">Email Marketing</a>
              </li>
              <li>
                <a href="/services.html#consult">Consulting</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/#about">Our Story</Link>
              </li>
              <li>
                <Link href="/#team">Team</Link>
              </li>
              <li>
                <Link href="/#developer-partner">Developer Partners</Link>
              </li>
              <li>
                <a href="/process.html">Our Process</a>
              </li>
              <li>
                <a href="/testimonials.html">Client Results</a>
              </li>
              <li>
                <a href="/calculator.html">ROI Calculator</a>
              </li>
              <li>
                <a href="/pricing.html">Pricing</a>
              </li>
              <li>
                <a href="/contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/calculator.html">Free ROI Calculator</a>
              </li>
              <li>
                <a href="/contact.html">Free Strategy Call</a>
              </li>
              <li>
                <a href="/pricing.html">Packages &amp; Pricing</a>
              </li>
              <li>
                <span>Blog — Coming Soon</span>
              </li>
              <li>
                <span>Case Studies — Coming Soon</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:michelle@mreneewilliams.com">
                  michelle@mreneewilliams.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <span>Mon–Fri, 9am–6pm EST</span>
              </li>
              <li>
                <a href="/contact.html">Send a Message</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 Biz Boost Agency · All rights reserved.
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Instagram">
              📸
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              👥
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              💼
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              🐦
            </a>
          </div>
          <div className="footer-legal">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href="/contact.html">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
