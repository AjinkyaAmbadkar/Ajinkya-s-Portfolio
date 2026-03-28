/**
 * Education.jsx
 * ──────────────
 * Academic background section with status badges.
 */

import { COLORS } from "../constants/theme";
import { EDUCATION } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";
import HoverCard from "./common/HoverCard";

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 2rem", background: COLORS.bgSecondary }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Education" title="Academic background." />
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {EDUCATION.map((edu, i) => (
            <FadeIn key={i}>
              <HoverCard>
                <span style={{
                  display: "inline-block", fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem", padding: "0.25rem 0.7rem", borderRadius: 4,
                  marginBottom: "1rem", fontWeight: 500,
                  background: edu.status === "current" ? COLORS.accentDim : "rgba(74,222,128,0.15)",
                  color: edu.status === "current" ? COLORS.accent : COLORS.green,
                }}>{edu.badge}</span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.3rem" }}>{edu.degree}</h3>
                <div style={{ color: COLORS.textSecondary, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{edu.school}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: COLORS.textMuted }}>{edu.date}</div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
