const TEAM = [
  {
    initials: "AR",
    name: "Alex Rivera",
    role: "Lead Frontend · React / Next.js",
    bio: "Ships performant interfaces, design systems, and accessibility-forward UI for high-converting marketing sites.",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
    ],
  },
  {
    initials: "SK",
    name: "Sam Kim",
    role: "Full-Stack Engineer · APIs & integrations",
    bio: "Connects forms, CRMs, analytics, and automation so your funnel works end-to-end — no duct tape.",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Portfolio", href: "https://example.com" },
    ],
  },
  {
    initials: "JD",
    name: "Jordan Diaz",
    role: "Creative Developer · Motion & polish",
    bio: "Adds the micro-interactions, scroll storytelling, and motion that make premium brands feel alive.",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
    ],
  },
];

export function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div className="sec-label center">Squad</div>
        <h2 className="sec-title">
          The builders behind
          <br />
          <span style={{ color: "var(--neon2)" }}>the boost.</span>
        </h2>
        <p
          style={{
            color: "var(--mid)",
            lineHeight: 1.8,
            fontSize: 15.5,
            marginTop: 18,
          }}
        >
          Demo profiles — swap in your real partners anytime. Same structure,
          your links.
        </p>
      </div>
      <div className="team-grid">
        {TEAM.map((m) => (
          <article key={m.name} className="team-card reveal">
            <div className="team-avatar" aria-hidden>
              {m.initials}
            </div>
            <h3 className="team-name">{m.name}</h3>
            <p className="team-role">{m.role}</p>
            <p className="team-bio">{m.bio}</p>
            <div className="team-links">
              {m.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
