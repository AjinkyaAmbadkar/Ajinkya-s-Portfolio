/**
 * Portfolio.jsx
 * ──────────────
 * Root orchestrator component.
 *
 * This is the ONLY file that knows about ALL sections.
 * Each section is self-contained — it imports its own data and styles.
 * This file just composes them in order and injects global styles.
 *
 * Architecture:
 *   src/
 *   ├── data/         → Pure data (portfolioData.js)
 *   ├── constants/    → Design tokens (theme.js)
 *   ├── hooks/        → Custom hooks (useFadeIn.js)
 *   ├── styles/       → Global CSS (globalStyles.js)
 *   ├── components/
 *   │   ├── common/   → Reusable building blocks (SectionHeader, HoverCard)
 *   │   ├── Navbar, Hero, About, Skills, Experience,
 *   │   │   Projects, Education, Contact, Footer
 *   └── Portfolio.jsx → This file (root)
 */

import { useEffect } from "react";
import { globalCSS } from "./styles/globalStyles";

// Section components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  // Inject global styles into <head> on mount, clean up on unmount
  useEffect(() => {
    const existing = document.getElementById("portfolio-global-styles");
    if (!existing) {
      const style = document.createElement("style");
      style.id = "portfolio-global-styles";
      style.textContent = globalCSS;
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById("portfolio-global-styles");
      if (el) el.remove();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
