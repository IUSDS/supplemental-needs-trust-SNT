import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Sparkles } from "lucide-react";

const HERO_IMG = "/hero-snt.jpg"; // put your hero image in /public/hero-snt.jpg

export default function SectionOne() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: reduceMotion
      ? { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.01 } }
      : { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background: gold/white gradient + subtle white dots */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#DB9E33] to-[#7AA63C]" />
      <div className="absolute inset-0 -z-10">
        {/* gold + white glows */}
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#DB9E33]/20 blur-[70px]" />
        <div className="absolute -bottom-28 -right-28 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute left-1/2 top-[-10%] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#7AA63C]/12 blur-[90px]" />

        {/* dots */}
        <div
          className="absolute inset-0 opacity-[0.8]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.28) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14"
        >
          {/* Left: content */}
          <div className="flex flex-col justify-center">
            <motion.div variants={item}>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur"
                data-aos="fade-up"
              >
                <Sparkles className="h-4 w-4 text-[#FFFFFF]" />
                <span className="font-body text-sm text-white/85">
                  Financial Support &amp; Security
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              data-aos="fade-up"
              className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Supplemental Needs
              Trust
            </motion.h1>

            <motion.p
              variants={item}
              data-aos="fade-up"
              className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Provide additional financial support without interfering with essential government
              benefits.
            </motion.p>

            <motion.div
              variants={item}
              data-aos="fade-up"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                href="https://www.specialneedstrustsonline.com/"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-body text-sm text-[#DB9E33] shadow-[0_18px_50px_rgba(219,158,51,0.25)] ring-1 ring-white/10 transition"
              >
                Continue to Main Website
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: image card with offset white shape behind */}
          <motion.div variants={item} className="relative" data-aos="fade-left">
            <div className="relative mx-auto w-full max-w-2xl">
              {/* offset shape */}
              <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:translate-x-4 sm:translate-y-4" />

              {/* main card */}
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 backdrop-blur"
              >
                {/* subtle inner highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                {/* image */}
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                  <img
                    src="/hero_section.webp"
                    alt="Supportive hands"
                    className="h-118 w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                {/* optional bottom fade (keeps it premium on bright images) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
              </motion.div>

              {/* tiny corner glow accents */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#DB9E33]/18 blur-[30px]" />
              <div className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-[#7AA63C]/14 blur-[34px]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
