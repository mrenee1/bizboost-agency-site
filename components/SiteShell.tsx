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
    const path = href.split("#")[0];
    if (path === "/") return pathname === "/" ? "active" : "";
    return pathname === path ? "active" : "";
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
        <Link href="/about" onClick={() => setMobOpen(false)}>
          About
        </Link>
        <Link href="/team" onClick={() => setMobOpen(false)}>
          Team
        </Link>
        <Link href="/developers" onClick={() => setMobOpen(false)}>
          For Developers
        </Link>
        <Link href="/services" onClick={() => setMobOpen(false)}>
          Services
        </Link>
        <Link href="/pricing" onClick={() => setMobOpen(false)}>
          Pricing
        </Link>
        <Link href="/calculator" onClick={() => setMobOpen(false)}>
          Calculator
        </Link>
        <Link href="/process" onClick={() => setMobOpen(false)}>
          Process
        </Link>
        <Link href="/testimonials" onClick={() => setMobOpen(false)}>
          Clients
        </Link>
        <Link
          href="/contact"
          onClick={() => setMobOpen(false)}
          style={{ color: "var(--neon)" }}
        >
          Get Started
        </Link>
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
          <Link href="/about" className={navClass("/about")}>
            About
          </Link>
          <Link href="/team" className={navClass("/team")}>
            Team
          </Link>
          <Link href="/developers" className={navClass("/developers")}>
            Partners
          </Link>
          <Link href="/services" className={navClass("/services")}>
            Services
          </Link>
          <Link href="/pricing" className={navClass("/pricing")}>
            Pricing
          </Link>
          <Link href="/calculator" className={navClass("/calculator")}>
            Calculator
          </Link>
          <Link href="/process" className={navClass("/process")}>
            Process
          </Link>
          <Link href="/testimonials" className={navClass("/testimonials")}>
            Clients
          </Link>
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
          <Link href="/contact" className="nav-cta">
            Get Started
          </Link>
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
                <Link href="/services#web">Web Design</Link>
              </li>
              <li>
                <Link href="/services#brand">Brand Identity</Link>
              </li>
              <li>
                <Link href="/services#social">Social Media</Link>
              </li>
              <li>
                <Link href="/services#seo">SEO &amp; Ads</Link>
              </li>
              <li>
                <Link href="/services#email">Email Marketing</Link>
              </li>
              <li>
                <Link href="/services#consult">Consulting</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">Our Story</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/developers">Developer Partners</Link>
              </li>
              <li>
                <Link href="/process">Our Process</Link>
              </li>
              <li>
                <Link href="/testimonials">Client Results</Link>
              </li>
              <li>
                <Link href="/calculator">ROI Calculator</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="/calculator">Free ROI Calculator</Link>
              </li>
              <li>
                <Link href="/contact">Free Strategy Call</Link>
              </li>
              <li>
                <Link href="/pricing">Packages &amp; Pricing</Link>
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
                <Link href="/contact">Send a Message</Link>
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
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
