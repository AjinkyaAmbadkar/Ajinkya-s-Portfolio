/**
 * Navbar.jsx
 * ───────────
 * Fixed top navigation with desktop links, hamburger menu, and mobile drawer.
 * Handles its own scroll and menu-open state.
 */

import { useState, useEffect, useCallback } from "react";
import { COLORS, NAV_ITEMS } from "../constants/theme";
import { PROFILE } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(() => setMenuOpen(false), []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,15,0.8)", backdropFilter: "blur(20px)",
      borderBottom: `1px solid ${COLORS.border}`, padding: "0 2rem",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      transition: "box-shadow 0.3s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#hero" style={{ textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, fontSize: "1.05rem", color: COLORS.accent, cursor: "pointer" }}>
          <span style={{ color: COLORS.textMuted }}>&lt;</span>
          {PROFILE.name}
          <span style={{ color: COLORS.textMuted }}> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
          className="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item}`} style={{
                textDecoration: "none", color: COLORS.textSecondary,
                fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.05em",
                textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace",
              }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.accent)}
                onMouseLeave={(e) => (e.target.style.color = COLORS.textSecondary)}
              >{item}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{ display: "none", flexDirection: "column", gap: 5, padding: 4, background: "none", border: "none", cursor: "pointer" }}
          aria-label="Menu">
          <span style={{ width: 24, height: 2, background: COLORS.textSecondary, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: COLORS.textSecondary, display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ width: 24, height: 2, background: COLORS.textSecondary, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          display: "flex", flexDirection: "column", gap: "1.25rem",
          padding: "1.5rem 2rem", borderTop: `1px solid ${COLORS.border}`,
          background: COLORS.bgPrimary,
        }}>
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item}`} onClick={handleNavClick} style={{
              textDecoration: "none", color: COLORS.textSecondary,
              fontSize: "0.9rem", fontWeight: 500, textTransform: "uppercase",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
