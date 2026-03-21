"use client";

/**
 * React Bits "Magic Rings"–style layered concentric rings.
 * Styled via global CSS (no Tailwind). Pure CSS animations for performance.
 */
export function MagicRings({ isExiting }: { isExiting: boolean }) {
  return (
    <div
      className={`magic-rings${isExiting ? " magic-rings--exiting" : ""}`}
      aria-hidden
    >
      <div className="magic-rings__orbit">
        <div className="magic-rings__spin">
          <span className="magic-ring magic-ring--1" />
          <span className="magic-ring magic-ring--2" />
          <span className="magic-ring magic-ring--3" />
          <span className="magic-ring magic-ring--4" />
        </div>
      </div>
    </div>
  );
}
