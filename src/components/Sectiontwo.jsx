// src/components/Sectiontwo.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Info } from "lucide-react";

const ROTATION_RANGE = 18;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

// Keep as-is (you previously matched this to the next section)
const NEXT_SECTION_BG =
  "linear-gradient(135deg, rgba(219,158,51,0.10) 0%, rgba(255,255,255,0.92) 42%, rgba(122,166,60,0.10) 100%)";

// Simple section bg: primary colors only, opacity ~10, no images/overlays
const SECTION_BG =
  "linear-gradient(135deg, rgba(219,158,51,0.10) 0%, rgba(255,255,255,0.10) 50%, rgba(122,166,60,0.10) 100%)";

// Accessibility: brand-consistent, higher-contrast text tones for white surfaces
const ACCENT_GREEN_TEXT = "#2E5A16"; // darker green (passes on white)
const ACCENT_GOLD_TEXT = "#A06B10";  // darker gold (passes on white)

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const rafRef = useRef(null);
  const lastEvtRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Lighter spring than before to reduce work while still feeling premium
  const xSpring = useSpring(x, { stiffness: 200, damping: 22, mass: 0.6 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 22, mass: 0.6 });

  const reduceMotion = useReducedMotion();

  const update = () => {
    rafRef.current = null;
    if (!rectRef.current || !lastEvtRef.current) return;

    const e = lastEvtRef.current; // { clientX, clientY }
    const rect = rectRef.current;

    const w = rect.width || 1;
    const h = rect.height || 1;

    const px = (e.clientX - rect.left) / w;
    const py = (e.clientY - rect.top) / h;

    const rX = (py * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = px * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const onPointerEnter = (e) => {
    if (reduceMotion) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    if (!ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const onPointerMove = (e) => {
    if (reduceMotion) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    if (!ref.current) return;

// Ensure we have a cached rect BEFORE the rAF (avoid layout reads inside update)
    if (!rectRef.current) rectRef.current = ref.current.getBoundingClientRect();

    // Store only numbers (don’t keep the event object around)
    lastEvtRef.current = { clientX: e.clientX, clientY: e.clientY };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(update);
    }
  };

  const onPointerLeave = () => {
    rectRef.current = null;
    lastEvtRef.current = null;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX: xSpring,
              rotateY: ySpring,
              transformPerspective: 900,
            }
      }
      className={["will-change-transform transform-gpu", className].join(" ")}
    >
      {children}
    </motion.div>
  );
}

export default function SectionTwo() {
  return (
    <section
      id="section-two"
      className="relative w-full overflow-hidden"
      style={{ background: SECTION_BG }}
    >
      {/* Simple top hairline (static) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(122,166,60,0) 0%, rgba(122,166,60,0.65) 20%, rgba(219,158,51,0.75) 50%, rgba(122,166,60,0.65) 80%, rgba(122,166,60,0) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-36 sm:pt-32 sm:pb-44">
          <div className="mx-auto max-w-5xl">
            <TiltCard>
              <div className="relative rounded-[34px] border-[8px] border-[#DB9E33]/75 bg-white shadow-[0_24px_80px_rgba(219,158,51,0.10)]">
                {/* Removed blur-3xl glow layer (paint-heavy) */}

                <div className="relative rounded-[30px] p-7 sm:p-10 lg:p-12">
                  <div className="flex flex-col items-start gap-5 sm:gap-6 md:flex-row">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-[0_18px_50px_rgba(219,158,51,0.16)]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(219,158,51,1) 0%, rgba(219,158,51,0.80) 55%, rgba(122,166,60,0.70) 100%)",
                      }}
                    >
                      <Info className="h-8 w-8 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="text-xs font-body font-semibold tracking-[0.22em] text-[#A06B10]"
                      >
                        THE BASICS
                      </p>

                      <h2 className="mt-1 font-heading text-3xl font-semibold tracking-tight text-[#2E5A16] sm:text-4xl lg:text-5xl">
                        What is a Supplemental Needs Trust?
                      </h2>

                      <p className="mt-10 font-body text-base leading-relaxed text-[#24401B]/70 sm:text-lg">
                        A{" "}
                        <span className="rounded-md border border-[#DB9E33]/35 bg-[#DB9E33]/15 px-2 py-1 font-semibold text-[#2E5A16]">
                          Supplemental Needs Trust
                        </span>{" "}
                        is designed to cover expenses that are not provided by government assistance programs such as SSI or Medicaid.
                      </p>

                      <p className="mt-5 font-body text-base leading-relaxed text-[#24401B]/70 sm:text-lg">
                        It allows funds to be used for enhanced care, comfort, and quality-of-life needs while preserving benefit eligibility.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-px opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(219,158,51,0.55) 40%, rgba(122,166,60,0.35) 60%, transparent 100%)",
                  }}
                />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Bottom divider: EXACT same bg as next section, no opacity/blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <div
          className="h-16 sm:h-20"
          style={{
            background: NEXT_SECTION_BG,
            clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>
    </section>
  );
}
