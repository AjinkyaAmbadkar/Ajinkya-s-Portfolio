/**
 * main.jsx
 * ─────────
 * App entry point — mounts the Portfolio component into the DOM.
 * This is the file referenced by index.html's <script> tag.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
