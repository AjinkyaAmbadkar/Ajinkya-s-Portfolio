/**
 * Footer.jsx
 * ───────────
 * Simple copyright footer.
 */

import { COLORS } from "../constants/theme";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem", textAlign: "center",
      borderTop: `1px solid ${COLORS.border}`,
      fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem",
      color: COLORS.textMuted,
    }}>
      © 2026 {PROFILE.name}. Built with React.
    </footer>
  );
}
