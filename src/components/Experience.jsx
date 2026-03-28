/**
 * Experience.jsx
 * ───────────────
 * Work experience timeline with a vertical line and dot markers.
 */

import { COLORS } from "../constants/theme";
import { EXPERIENCE } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 2rem", background: COLORS.bgSecondary }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Experience" title="Where I've worked." />
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: COLORS.border }} />
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i}>
              <div style={{ position: "relative", paddingBottom: i < EXPERIENCE.length - 1 ? "3rem" : 0 }}>
                <div style={{
                  position: "absolute", left: "-2rem", top: "0.4rem",
                  width: 14, height: 14, borderRadius: "50%",
                  background: exp.current ? COLORS.accent : COLORS.bgPrimary,
                  border: `2px solid ${COLORS.accent}`,
                  transform: "translateX(-6px)",
                }} />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: COLORS.accent, marginBottom: "0.5rem" }}>{exp.date}</div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.25rem" }}>{exp.role}</div>
                <div style={{ fontSize: "0.95rem", color: COLORS.textSecondary, marginBottom: "1rem" }}>{exp.company}</div>
                <ul style={{ color: COLORS.textSecondary, fontWeight: 300, fontSize: "0.95rem", marginBottom: "1rem", lineHeight: 1.7, paddingLeft: "1.2rem", listStyle: "disc" }}>
                  {exp.desc.map((point, j) => (
                    <li key={j} style={{ marginBottom: "0.35rem" }}>{point}</li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
                      padding: "0.25rem 0.65rem", borderRadius: 4,
                      background: COLORS.accentDim, color: COLORS.accent,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
