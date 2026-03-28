/**
 * Projects.jsx
 * ─────────────
 * Project showcase grid with hover-animated cards.
 * ProjectCard is a private sub-component (encapsulated).
 */

import { useState } from "react";
import { COLORS } from "../constants/theme";
import { PROJECTS } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";

/* ─── Sub-component: individual project card ─── */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.bgCard,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: 12, padding: "2rem", transition: "all 0.3s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
        height: "100%", display: "flex", flexDirection: "column",
      }}
    >
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
        color: COLORS.textMuted, textTransform: "uppercase",
        letterSpacing: "0.1em", marginBottom: "0.75rem",
      }}>{project.type}</div>
      <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem", fontWeight: 600 }}>{project.title}</h3>
      <p style={{ color: COLORS.textSecondary, fontSize: "0.9rem", fontWeight: 300, marginBottom: "1.25rem", lineHeight: 1.7 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
            padding: "0.3rem 0.75rem", borderRadius: 20,
            background: COLORS.bgPrimary, border: `1px solid ${COLORS.border}`,
            color: COLORS.textSecondary,
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
        {project.links.map((l) => (
          <a key={l.label} href={l.url} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem",
            color: COLORS.accent, textDecoration: "none",
          }}>{l.label} →</a>
        ))}
      </div>
    </div>
  );
}

/* ─── Main section component ─── */
export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Projects" title="Things I've built." />
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={i}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
