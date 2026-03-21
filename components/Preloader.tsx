"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { MagicRings } from "@/components/magic-rings/MagicRings";

const SESSION_KEY = "bba-preloader-done";
const EXIT_MS = 950;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Preloader() {
  const [phase, setPhase] = useState<"enter" | "exit" | "gone">("enter");

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setPhase("exit");
    window.setTimeout(() => setPhase("gone"), EXIT_MS);
  }, []);

  /** Skip flash: session repeat, or reduced motion (static preloader not needed). */
  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") {
        setPhase("gone");
        return;
      }
    } catch {
      /* ignore */
    }
    if (prefersReducedMotion()) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setPhase("gone");
    }
  }, []);

  useEffect(() => {
    if (phase !== "enter") return;
    if (prefersReducedMotion()) return;

    const minMs = 1400;
    const started = performance.now();

    const done = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(finish, wait);
    };

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done, { once: true });
      return () => window.removeEventListener("load", done);
    }
  }, [phase, finish]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    <div
      className={`preloader-root${exiting ? " preloader-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <MagicRings isExiting={exiting} />

      <div className="preloader-foreground">
        <div className="preloader-logo-wrap">
          <Image
            src="/images/biz-boost-logo.png"
            alt=""
            width={200}
            height={200}
            priority
            className="preloader-logo-img"
          />
        </div>
        <p className="preloader-tag">Biz Boost Agency</p>
      </div>
    </div>
  );
}
