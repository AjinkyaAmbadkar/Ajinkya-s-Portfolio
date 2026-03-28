# Ajinkya's Portfolio

A modern, dark-themed developer portfolio built with **React**. Features smooth scroll animations, responsive design, and a clean component architecture following software engineering best practices.

---

## ✨ Features

- 🌙 Dark theme with cyan accent colors
- 📱 Fully responsive (mobile hamburger menu + adaptive grids)
- 🎞️ Scroll-triggered fade-in animations via IntersectionObserver
- ⬇️ Resume download button
- 🔗 Contact links (Email, LinkedIn, GitHub)
- ⚡ Zero external CSS frameworks — all custom styling

---

## 🏗️ Project Structure

The codebase follows a **modular architecture** inspired by OOP principles like Single Responsibility, Encapsulation, and Separation of Concerns:

```
src/
├── data/
│   └── portfolioData.js          # All personal data (profile, skills, experience, etc.)
├── constants/
│   └── theme.js                  # Design tokens (colors, nav items, button styles)
├── hooks/
│   └── useFadeIn.js              # Custom scroll-animation hook + FadeIn wrapper
├── styles/
│   └── globalStyles.js           # Global CSS (fonts, scrollbar, media queries)
├── components/
│   ├── common/
│   │   ├── SectionHeader.jsx     # Reusable section header (used by 6 sections)
│   │   └── HoverCard.jsx         # Reusable hover-effect card
│   ├── Navbar.jsx                # Fixed top nav with mobile drawer
│   ├── Hero.jsx                  # Landing section with CTA buttons & stats
│   ├── About.jsx                 # Bio + detail cards
│   ├── Skills.jsx                # Skills grid (contains SkillCard & SkillTag)
│   ├── Experience.jsx            # Work timeline
│   ├── Projects.jsx              # Project showcase (contains ProjectCard)
│   ├── Education.jsx             # Academic background
│   ├── Contact.jsx               # Contact info + resume download
│   └── Footer.jsx                # Copyright footer
└── Portfolio.jsx                 # Root orchestrator — composes all sections
```

> **Previously**, everything lived in a single 798-line `Portfolio.jsx`. The original file is still at the repo root as a backup.

---

## 🧠 Design Principles Applied

| Principle | How It's Applied |
|---|---|
| **Single Responsibility** | Each file has one job — data, styling, animation, or rendering a section |
| **Encapsulation** | Sub-components like `SkillCard`, `ProjectCard`, `ContactLink` are private to their parent file |
| **Separation of Concerns** | Data → Constants → Hooks → Styles → Components are distinct layers |
| **DRY** | `SectionHeader` and `HoverCard` are shared in `common/` instead of duplicated |
| **Open/Closed** | Adding a new section = 1 new file + 1 import in `Portfolio.jsx` — no changes to existing code |

---

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/Ajinkya-s-Portfolio.git
   cd Ajinkya-s-Portfolio
   ```

2. **Import `Portfolio` into your React app**
   ```jsx
   import Portfolio from "./src/Portfolio";

   function App() {
     return <Portfolio />;
   }
   ```

3. **Customize your data** — edit `src/data/portfolioData.js` with your own info

4. **Change the theme** — edit `src/constants/theme.js` to adjust colors

---

## 📝 What to Edit Where

| Want to change… | Edit this file |
|---|---|
| Your name, bio, skills, projects | `src/data/portfolioData.js` |
| Colors, fonts, button styles | `src/constants/theme.js` |
| Scroll animation behavior | `src/hooks/useFadeIn.js` |
| Global CSS, media queries | `src/styles/globalStyles.js` |
| A specific section's layout | `src/components/<Section>.jsx` |
| Section ordering | `src/Portfolio.jsx` |

---

## 🛠️ Tech Stack

- **React** (JSX components, hooks)
- **Vanilla CSS** (inline styles + injected global stylesheet)
- **Google Fonts** — Outfit (body) + JetBrains Mono (code/accents)

---

## 📄 License

© 2026 Ajinkya. Built with React & passion.
