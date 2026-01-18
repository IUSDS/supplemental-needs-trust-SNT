// src/components/SectionFive.jsx
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * SANITIZED / PERF
 * - No on-scroll transitions
 * - No Framer Motion
 * - Background shine kept (CSS-only transform animation)
 * - Background is now: cover image + gradient overlay (both adjustable)
 */

const GOLD = "#DB9E33";
const GREEN = "#7AA63C";
const WHITE = "#FFFFFF";

/**
 * BG CONTROLS (adjust these two values anytime)
 */
const BG_IMAGE_SRC = "/section5.webp";
const BG_IMAGE_OPACITY = 0.78; // 0..1 (lower = more subtle image)
const BG_OVERLAY_OPACITY = 0.92; // 0..1 (higher = cleaner readability)

export default function SectionFive() {
  return (
    <section
      id="section-five"
      className="relative w-full overflow-hidden py-16 sm:py-24"
      // fallback if image fails
      style={{ backgroundColor: GOLD }}
    >
      <style>{`
        @keyframes sntBgShine {
          0%   { transform: translateX(-60%) rotate(10deg); opacity: 0; }
          18%  { opacity: 0.12; }
          50%  { opacity: 0.20; }
          82%  { opacity: 0.12; }
          100% { transform: translateX(60%) rotate(10deg); opacity: 0; }
        }
        .snt-shine {
          animation: sntBgShine 16s linear infinite;
          will-change: transform, opacity;
          transform: translateX(-60%) rotate(10deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .snt-shine { animation: none !important; opacity: 0.12 !important; transform: none !important; }
        }
      `}</style>

      {/* Background image (cover) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url('${BG_IMAGE_SRC}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: BG_IMAGE_OPACITY,
        }}
      />

      {/* Gradient overlay (primary colors only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: BG_OVERLAY_OPACITY,
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 48%, rgba(255,255,255,0.06) 100%), linear-gradient(135deg, rgba(219,158,51,0.18) 0%, rgba(255,255,255,0.12) 52%, rgba(122,166,60,0.06) 100%)",
        }}
      />

      {/* Background shine (NOT remover) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-[440px] w-[140%] -translate-x-1/2"
      >
        <div
          className="snt-shine absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.68) 48%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main card: SOLID WHITE so background glare never affects readability */}
        <div className="mx-auto max-w-5xl">
          <div
            className={[
              "relative overflow-hidden rounded-[44px]",
              "border-[10px] shadow-[0_40px_130px_rgba(0,0,0,0.14)]",
              "px-6 py-12 sm:px-12 sm:py-16 lg:px-16",
            ].join(" ")}
            style={{
              background: WHITE,
              borderColor: GREEN,
            }}
          >
            {/* Small top accent line (gold) */}
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-6 h-[3px] rounded-full opacity-90"
              style={{ background: GOLD }}
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              {/* Icon */}
              <div
                className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border"
                style={{ borderColor: GOLD, background: WHITE }}
              >
                <Sparkles className="h-11 w-11" style={{ color: GOLD }} />
              </div>

              <h2
                className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: GREEN }}
              >
                Ready to Learn More?
              </h2>

              <p
                className="mt-6 font-body text-lg leading-relaxed sm:text-xl"
                style={{ color: GREEN, opacity: 0.88 }}
              >
                This page provides a basic overview of{" "}
                <span className="font-semibold" style={{ color: GREEN }}>
                  Supplemental Needs Trusts
                </span>
                .
              </p>

              <p
                className="mt-4 font-body max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: GREEN, opacity: 0.88 }}
              >
                This page is an introduction to Supplemental Needs Trusts. For
                complete details and personalized guidance, visit our main
                website.
              </p>

              {/* CTA (CSS-only) */}
              <a
                href="https://www.specialneedstrustsonline.com/"
                target="_blank"
                rel="noreferrer"
                className={[
                  "group mt-10 font-body inline-flex w-full max-w-[420px] items-center justify-center gap-3",
                  "rounded-full px-7 py-4",
                  "text-base font-semibold sm:text-lg",
                  "transition-[transform,box-shadow] duration-400 ease-out",
                  "hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.12)]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  "motion-reduce:transition-none motion-reduce:hover:transform-none",
                ].join(" ")}
                style={{
                  background: GREEN,
                  color: WHITE,
                }}
              >
                Visit Our Main Website
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-400 group-hover:translate-x-2"
                  style={{ color: WHITE }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
