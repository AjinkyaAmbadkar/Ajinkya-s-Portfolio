/**
 * Contact.jsx
 * ─────────────
 * Contact section with CTA, resume download, and contact links.
 * ContactLink is a private sub-component.
 */

import { useState } from "react";
import { COLORS, btnBase } from "../constants/theme";
import { CONTACTS, PROFILE } from "../data/portfolioData";
import { FadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./common/SectionHeader";

/* ─── Sub-component: individual contact link row ─── */
function ContactLink({ contact }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={contact.url}
      target={contact.label !== "Email" ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "1rem",
        padding: "1rem 1.5rem", background: COLORS.bgCard,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: 10, textDecoration: "none", color: COLORS.textPrimary,
        transition: "all 0.3s",
        transform: hovered ? "translateX(6px)" : "none",
      }}
    >
      <div style={{
        width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 8, background: COLORS.accentDim, color: COLORS.accent,
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", fontWeight: 600, flexShrink: 0,
      }}>{contact.icon}</div>
      <div>
        <div style={{
          fontSize: "0.75rem", color: COLORS.textMuted, textTransform: "uppercase",
          letterSpacing: "0.08em", fontFamily: "'JetBrains Mono', monospace",
        }}>{contact.label}</div>
        <div style={{ fontWeight: 500, fontSize: "0.95rem" }}>{contact.value}</div>
      </div>
    </a>
  );
}

/* ─── Main section component ─── */
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Contact" title="" />
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <FadeIn>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>Let's connect.</h2>
            </FadeIn>
            <FadeIn>
              <p style={{ color: COLORS.textSecondary, fontSize: "1.1rem", fontWeight: 300, marginBottom: "2rem", lineHeight: 1.8 }}>
                I'm open to full-time opportunities starting May 2026, as well as internships and collaborations. Feel free to reach out!
              </p>
            </FadeIn>
            <FadeIn>
              <a href={PROFILE.resumeUrl} download style={{
                ...btnBase,
                background: COLORS.accent, color: COLORS.bgPrimary,
                boxShadow: `0 0 20px ${COLORS.accentDim}`,
                display: "inline-flex",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </FadeIn>
          </div>
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTACTS.map((c) => (
                <ContactLink key={c.label} contact={c} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
