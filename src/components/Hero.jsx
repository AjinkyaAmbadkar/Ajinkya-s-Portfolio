/**
 * Hero.jsx
 * ─────────
 * Landing section with headline, description, CTA buttons, and stats.
 */

import { COLORS, btnBase } from "../constants/theme";
import { PROFILE } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -200, right: -200, width: 600, height: 600,
        background: `radial-gradient(circle, ${COLORS.accentDim} 0%, transparent 70%)`,
        pointerEvents: "none", animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", width: "100%" }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem",
          color: COLORS.accent, marginBottom: "1.5rem",
          display: "flex", alignItems: "center", gap: "0.75rem",
        }}>
          <span style={{ width: 40, height: 1, background: COLORS.accent, display: "block" }} />
          {PROFILE.tagline}
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
          {PROFILE.headline[0]}<br />
          <span style={{ color: COLORS.textMuted }}>{PROFILE.headline[1]}</span>
        </h1>

        <p style={{ fontSize: "1.15rem", color: COLORS.textSecondary, maxWidth: 560, marginBottom: "2.5rem", fontWeight: 300 }}>
          {PROFILE.description}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" style={{
            ...btnBase, background: COLORS.accent, color: COLORS.bgPrimary,
            boxShadow: `0 0 20px ${COLORS.accentDim}`,
          }}>View Projects ↓</a>
          <a href={PROFILE.resumeUrl} download style={{
            ...btnBase, background: "transparent", color: COLORS.accent,
            border: `1px solid ${COLORS.accent}`,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <a href="#contact" style={{
            ...btnBase, background: "transparent", color: COLORS.textSecondary,
            border: `1px solid ${COLORS.border}`,
          }}>Get In Touch</a>
        </div>

        <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", paddingTop: "2rem", borderTop: `1px solid ${COLORS.border}`, flexWrap: "wrap" }}>
          {PROFILE.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>{s.value}</div>
              <div style={{ fontSize: "0.78rem", color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
