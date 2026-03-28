/**
 * globalStyles.js
 * ────────────────
 * Global CSS injected once into <head> by the root Portfolio component.
 * Imports COLORS so the CSS stays in sync with the JS theme tokens.
 */

import { COLORS } from "../constants/theme";

export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Outfit', sans-serif;
    background: ${COLORS.bgPrimary};
    color: ${COLORS.textPrimary};
    line-height: 1.7;
    overflow-x: hidden;
  }
  ::selection { background: ${COLORS.accentDim}; color: ${COLORS.accent}; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${COLORS.bgPrimary}; }
  ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-40px, 30px); }
  }

  @media (max-width: 768px) {
    .nav-links-desktop { display: none !important; }
    .hamburger-btn { display: flex !important; }
    .about-grid, .edu-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .skills-grid, .projects-grid { grid-template-columns: 1fr !important; }
    section { padding: 4rem 1.25rem !important; }
  }
  @media (min-width: 769px) {
    .mobile-menu { display: none !important; }
  }
`;
