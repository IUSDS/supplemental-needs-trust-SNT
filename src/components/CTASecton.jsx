// src/components/SectionThree.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Users,
  FileSignature,
  GraduationCap,
  HeartPulse,
  NotebookPen,
} from "lucide-react";

const PLANNING_ITEMS = [
  {
    title: "Special Needs Trusts For Adults With Disabilities",
    description:
      "Protect assets owned by an individual with disabilities while preserving eligibility for government benefits.",
    href: "https://www.specialneedstrustsonline.com/first-party-trust/",
    Icon: Shield,
  },
  {
    title: "Special Needs Trusts & Wills For Parents",
    description:
      "Let family members leave money or assets for a loved one with disabilities without affecting government benefits.",
    href: "https://www.specialneedstrustsonline.com/special-needs-trust/",
    Icon: Users,
  },
  {
    title: "Power of Attorney",
    description:
      "Authorize a trusted person to manage financial and legal matters if you are unable to do so.",
    href: "https://www.specialneedstrustsonline.com/power-of-attorney/",
    Icon: FileSignature,
  },
  {
    title: "Power of Attorney for Education",
    description: "Designate someone to handle education-related decisions.",
    href: "https://www.specialneedstrustsonline.com/power-of-attorney-for-education/",
    Icon: GraduationCap,
  },
  {
    title: "Healthcare Directives",
    description:
      "Document healthcare preferences and appoint a medical decision-maker in advance.",
    href: "https://www.specialneedstrustsonline.com/healthcare-directives/",
    Icon: HeartPulse,
  },
  {
    title: "Letter of Intent",
    description:
      "Provide caregivers and trustees with clear guidance about care preferences, routines, and long-term goals.",
    href: "https://www.specialneedstrustsonline.com/letter-of-intent/",
    Icon: NotebookPen,
  },
];

const LEARN_MORE_HREF = "https://www.specialneedstrustsonline.com/";

export default function CTASection() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 16,
      filter: reduceMotion ? "none" : "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 10,
      filter: reduceMotion ? "none" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduceMotion ? 0 : 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="planning-solutions" className="relative overflow-hidden bg-white">
      {/* Background tint: subtle gold → yellow gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(219,158,51,0.14) 0%, rgba(255,214,102,0.12) 45%, rgba(255,255,255,1) 78%)",
        }}
      />

      {/* Soft glows (gold/yellow only) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#DB9E33]/18 to-yellow-300/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-[-5rem] h-96 w-96 rounded-full bg-gradient-to-tr from-[#DB9E33]/14 to-yellow-200/18 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Centered heading/subheading */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight
                         bg-gradient-to-r from-[#DB9E33] via-[#7AA63C] to-yellow-300
                         bg-clip-text text-transparent leading-[1.08] pb-2"
            >
              Planning Solutions
            </h2>
            <p className="font-body mt-4 text-base sm:text-lg text-slate-600">
              Clear documents that protect benefits, reduce uncertainty, and support long-term care planning.
            </p>
          </div>

          {/* 2 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {PLANNING_ITEMS.map(({ title, description, href, Icon }) => (
              <motion.a
                key={title}
                variants={item}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group h-full relative rounded-2xl bg-white
                           border border-[2px] border-[#7AA63C]/80
                           shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                           hover:shadow-[0_24px_70px_rgba(0,0,0,0.10)]
                           transition-all duration-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7AA63C]/40"
              >
                <div className="flex flex-col items-start h-full p-6 sm:p-7 flex items-center gap-4">
                  {/* icon box */}
                <div className="shrink-0 flex items-center justify-center h-16 w-16 rounded-xl border border-[#7AA63C]/30 bg-gradient-to-br from-[#DB9E33]/12 to-yellow-200/20">
                    <Icon className="h-10 w-10 text-[#7AA63C]" aria-hidden="true" />
                </div>

                <div className="flex flex-row">          
                  {/* text */}
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <h3 className="font-heading text-3xl font-semibold text-[#7AA63C] leading-snug">
                      {title}
                    </h3>
                    <p className="font-body mt-2 text-md sm:text-lg text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* arrow button */}
                  <div className="shrink-0 ml-3 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[#7AA63C]/25 bg-white shadow-sm">
                      <ArrowRight
                        className="h-5 w-5 text-slate-700 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#7AA63C]/30 transition duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Learn More button centered */}
          <div className="pt-2 flex justify-center">
            <a
              href={LEARN_MORE_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full max-w-sm sm:w-auto justify-center text-xl rounded-2xl px-18 py-3.5 font-body text-sm text-white text-slate-900
                         bg-gradient-to-r from-[#DB9E33] to-yellow-300
                         shadow-[0_14px_40px_rgba(219,158,51,0.28)]
                         hover:shadow-[0_18px_55px_rgba(219,158,51,0.34)]
                         transition-shadow duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
