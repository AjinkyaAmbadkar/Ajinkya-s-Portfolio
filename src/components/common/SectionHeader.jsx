/**
 * SectionHeader.jsx
 * ──────────────────
 * Reusable header used at the top of every portfolio section.
 * Renders a monospace label (e.g. "// About") and an animated title.
 */

import { COLORS } from "../../constants/theme";
import { FadeIn } from "../../hooks/useFadeIn";

export default function SectionHeader({ label, title }) {
  return (
    <>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.8rem",
        color: COLORS.accent,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        marginBottom: "0.75rem",
      }}>
        <span style={{ color: COLORS.textMuted }}>// </span>{label}
      </div>
      <FadeIn>
        <h2 style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}>{title}</h2>
      </FadeIn>
    </>
  );
}
