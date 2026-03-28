/**
 * HoverCard.jsx
 * ──────────────
 * A generic card with hover effects (lift + accent border).
 * Used by About (detail cards) and Education (degree cards).
 */

import { useState } from "react";
import { COLORS } from "../../constants/theme";

export default function HoverCard({ children, style: extraStyle = {} }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? COLORS.bgCardHover : COLORS.bgCard,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: 10,
        padding: "1.25rem",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-2px)" : "none",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}
