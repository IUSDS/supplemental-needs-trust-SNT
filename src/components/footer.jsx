// src/components/Footer.jsx
import React from "react";

// Replace this with your real logo path later (e.g. "/logo.svg")
const EMPTY_LOGO_SRC =
  "/thumbnail.png";

  // A11y: darker gold tones for text on white (keeps brand feel, passes contrast)
const GOLD_TEXT_STRONG = "#8A5C12";
const GOLD_TEXT_MUTED = "#6D4A10";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white">
      {/* Green separator line */}
      <div aria-hidden="true" className="h-[3px] w-full bg-[#7AA63C]" />

      {/* Increased height via larger vertical padding */}
      <div className="mx-auto max-w-8xl px-4 py-2 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              src={EMPTY_LOGO_SRC}
              alt=""
              className="h-52 w-52"
            />
            <span
              className="text-2xl font-heading font-semibold tracking-tight sm:text-3xl"
              style={{ color: GOLD_TEXT_STRONG }}
            >
              Special Needs Trust
            </span>
          </div>

          {/* Right */}
          <p
            className="text-base font-body leading-relaxed sm:text-lg"
            style={{ color: GOLD_TEXT_MUTED }}
          >
            © 2026 Professional guidance for protecting your loved ones.
          </p>
        </div>
      </div>
    </footer>
  );
}
