/**
 * About.jsx
 * ──────────
 * "About me" section with bio paragraphs and detail cards.
 */

import { COLORS } from "../constants/theme";
import { PROFILE } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";
import HoverCard from "./common/HoverCard";

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", background: COLORS.bgSecondary }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="About" title="A bit about me." />
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            {PROFILE.about.map((p, i) => (
              <FadeIn key={i}>
                <p style={{ color: COLORS.textSecondary, marginBottom: "1.25rem", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8 }}
                   dangerouslySetInnerHTML={{ __html: p }} />
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {PROFILE.details.map((d) => (
                <HoverCard key={d.label}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{d.label}</div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{d.value}</div>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
