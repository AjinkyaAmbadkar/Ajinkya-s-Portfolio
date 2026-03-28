/**
 * useFadeIn.js
 * ─────────────
 * Custom hook + wrapper component for scroll-triggered fade-in animations.
 * Uses IntersectionObserver to detect when an element enters the viewport.
 */

import { useState, useEffect, useRef } from "react";

/**
 * Hook that returns a ref and a style object.
 * Attach `ref` to the element and spread `style` to get a fade-in-up animation.
 */
export function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    },
  };
}

/**
 * Wrapper component for declarative usage:
 *   <FadeIn>
 *     <p>This fades in when scrolled into view</p>
 *   </FadeIn>
 *
 * Props:
 *   - as: HTML tag to render (default: "div")
 *   - style: additional inline styles merged with the animation styles
 */
export function FadeIn({ children, as: Tag = "div", style: extraStyle = {}, ...props }) {
  const { ref, style } = useFadeIn();
  return (
    <Tag ref={ref} style={{ ...style, ...extraStyle }} {...props}>
      {children}
    </Tag>
  );
}
