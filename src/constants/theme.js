/**
 * theme.js
 * ────────
 * Design tokens & shared style constants.
 * Change the color palette here and it propagates everywhere.
 */

export const COLORS = {
  bgPrimary: "#0a0a0f",
  bgSecondary: "#111118",
  bgCard: "#16161f",
  bgCardHover: "#1c1c28",
  accent: "#22d3ee",
  accentDim: "rgba(34,211,238,0.15)",
  accentGlow: "rgba(34,211,238,0.3)",
  textPrimary: "#e8e8ef",
  textSecondary: "#8888a0",
  textMuted: "#55556a",
  border: "#222233",
  green: "#4ade80",
};

export const NAV_ITEMS = ["about", "skills", "experience", "projects", "education", "contact"];

/**
 * Shared button base styles.
 * Spread into any <a> or <button> for consistent CTA look.
 */
export const btnBase = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.8rem 1.8rem",
  borderRadius: 6,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.85rem",
  fontWeight: 500,
  textDecoration: "none",
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s",
};
