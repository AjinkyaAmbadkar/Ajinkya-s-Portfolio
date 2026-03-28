/**
 * Skills.jsx
 * ───────────
 * Skills grid section.
 * Contains tightly-coupled sub-components: SkillCard and SkillTag.
 * They're kept in the same file because they're never used elsewhere
 * (encapsulation — like private inner classes in OOP).
 */

import { useState } from "react";
import { COLORS } from "../constants/theme";
import { SKILLS } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";

/* ─── Sub-component: individual skill tag pill ─── */
function SkillTag({ tag }) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = tag.primary;

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem",
        padding: "0.35rem 0.85rem", borderRadius: 20,
        background: isPrimary ? COLORS.accentDim : COLORS.bgPrimary,
        border: `1px solid ${isPrimary ? "rgba(34,211,238,0.3)" : hovered ? COLORS.accent : COLORS.border}`,
        color: isPrimary || hovered ? COLORS.accent : COLORS.textSecondary,
        fontWeight: isPrimary ? 500 : 400, transition: "all 0.25s", cursor: "default",
      }}
    >
      {tag.name}
    </span>
  );
}

/* ─── Sub-component: skill category card ─── */
function SkillCard({ group }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.bgCard,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: 12, padding: "2rem", transition: "all 0.3s",
        transform: hovered ? "translateY(-3px)" : "none",
        position: "relative", overflow: "hidden", height: "100%",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${COLORS.accent}, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
      }} />
      <div style={{
        fontSize: "1.3rem", marginBottom: "1rem", width: 44, height: 44,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: COLORS.accentDim, borderRadius: 10, color: COLORS.accent,
        fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
      }}>{group.icon}</div>
      <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem", fontWeight: 600 }}>{group.title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {group.tags.map((t) => (
          <SkillTag key={t.name} tag={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main section component ─── */
export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Skills" title="Technical arsenal." />
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {SKILLS.map((group) => (
            <FadeIn key={group.title}>
              <SkillCard group={group} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
