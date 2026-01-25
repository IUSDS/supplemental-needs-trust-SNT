import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, FileCheck2, HeartHandshake, Users, Sparkles } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, text: "Protects eligibility for government assistance", tone: "gold", aosDelay: 0 },
  { icon: FileCheck2, text: "Prevents loss of government benefits", tone: "green", aosDelay: 80 },
  { icon: HeartHandshake, text: "Allows funds to be used for care, support, and quality-of-life expenses", tone: "goldSoft", aosDelay: 160 },
  { icon: Users, text: "Helps families plan for long-term financial security", tone: "greenSoft", aosDelay: 240 },
  { icon: Sparkles, text: "Ensures assets are managed and distributed properly", tone: "gold", aosDelay: 320 },
];

const toneStyles = {
  gold: { box: "bg-[#DB9E33]/15 ring-1 ring-[#DB9E33]/25", icon: "text-[#DB9E33]" },
  goldSoft: { box: "bg-[#DB9E33]/10 ring-1 ring-[#DB9E33]/20", icon: "text-[#DB9E33]" },
  green: { box: "bg-[#7AA63C]/15 ring-1 ring-[#7AA63C]/25", icon: "text-[#7AA63C]" },
  greenSoft: { box: "bg-[#7AA63C]/10 ring-1 ring-[#7AA63C]/20", icon: "text-[#7AA63C]" },
};

function BenefitCard({ icon: Icon, text, tone, className = "", aosDelay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={[
        "group relative rounded-3xl bg-white px-7 py-9 sm:px-8 sm:py-10",
        "shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-black/5",
        "transition-shadow duration-300 hover:shadow-[0_40px_110px_rgba(0,0,0,0.55)]",
        "flex min-h-[170px] sm:min-h-[190px]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(115deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_45%)] opacity-60" />

      <div className="relative flex w-full flex-col gap-5">
        <div
          className={[
            "h-14 w-14 rounded-2xl grid place-items-center",
            toneStyles[tone]?.box ?? toneStyles.gold.box,
          ].join(" ")}
        >
          <Icon className={["h-6 w-6", toneStyles[tone]?.icon ?? toneStyles.gold.icon].join(" ")} />
        </div>

        <p className="font-body text-[15px] sm:text-[16px] leading-relaxed text-slate-700">{text}</p>
      </div>
    </motion.div>
  );
}

/**
 * backgroundImage: pass a URL (public path or imported asset) to enable a real image background
 * Example: <SectionThree backgroundImage="/images/section-three.jpg" />
 */
export default function SectionThree({ backgroundImage = "/section_three.webp" }) {
  return (
    <section id="section-three" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background image + gold->green overlay (NO black in the gradient) */}
      <div className="absolute inset-0">
        {/* Image layer (enabled by prop) */}
        <div
          className={[
            "absolute inset-0 bg-center bg-cover",
            // reduce image dominance (no black gradient, just image filtering)
            "brightness-[0.55] contrast-[1.05] saturate-[0.95]",
          ].join(" ")}
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          }}
        />

        {/* Fallback abstract lighting if no image provided */}
        {!backgroundImage && (
          <>
            <div className="absolute -top-24 left-[-10%] h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(219,158,51,0.42),transparent_62%)]" />
            <div className="absolute -top-28 right-[-10%] h-[560px] w-[560px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(122,166,60,0.36),transparent_64%)]" />
            <div className="absolute bottom-[-220px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_62%)]" />
          </>
        )}

        {/* Strong primary-color overlay only: gold -> green (no blend) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#DB9E33]/70 via-[#DB9E33]/35 to-[#7AA63C]/70 opacity-95" />

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.14] mix-blend-overlay bg-[linear-gradient(120deg,rgba(255,255,255,0.10),rgba(255,255,255,0)_40%,rgba(255,255,255,0.06))]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            data-aos="fade-up"
            className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Why does a Supplemental Needs Trust matter?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-body mt-4 text-white/80 text-base sm:text-lg"
          >
            Essential benefits that protect your financial security and quality of life
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          <BenefitCard {...benefits[0]} className="lg:col-span-2" />
          <BenefitCard {...benefits[1]} className="lg:col-span-2" />
          <BenefitCard {...benefits[2]} className="lg:col-span-2" />
          <BenefitCard {...benefits[3]} className="lg:col-span-2 lg:col-start-2" />
          <BenefitCard {...benefits[4]} className="lg:col-span-2 lg:col-start-4" />
        </div>
      </div>
    </section>
  );
}
