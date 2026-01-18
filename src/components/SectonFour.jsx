// src/components/SectionFour.jsx
import React from "react";
import { MoveRight } from "lucide-react";

const AUDIENCE = [
  { text: "Individuals receiving SSI or Medicaid" },
  { text: "Families planning additional financial support" },
  { text: "Caregivers and guardians" },
  { text: "Those seeking structured, compliant planning" },
];

export default function SectionFour() {
  return (
    <section
      id="section-four"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-24"
      aria-labelledby="who-is-this-for"
    >
      {/* Corner-only art (bolder + more visible, still clean) */}
      <div className="pointer-events-none absolute inset-0">
        {/* TOP-LEFT: layered glow + accent block */}
        <div
          className="absolute -top-28 -left-28 h-[28rem] w-[28rem] rounded-full blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(219,158,51,0.85), transparent 62%)",
          }}
        />
        <div
          className="absolute -top-16 -left-10 h-64 w-64 rounded-full blur-xl opacity-45"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(122,166,60,0.75), transparent 60%)",
          }}
        />
        <div
          className="absolute top-8 left-6 h-24 w-24 rotate-12 rounded-3xl opacity-25"
          style={{
            background:
              "linear-gradient(135deg, rgba(219,158,51,0.9), rgba(122,166,60,0.7))",
          }}
        />
        <div className="absolute top-10 left-10 h-28 w-28 rounded-full border-2 border-[#DB9E33]/35 opacity-70" />

        {/* BOTTOM-RIGHT: layered glow + accent block */}
        <div
          className="absolute -bottom-36 -right-36 h-[32rem] w-[32rem] rounded-full blur-2xl opacity-55"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(122,166,60,0.85), transparent 64%)",
          }}
        />
        <div
          className="absolute -bottom-14 -right-10 h-72 w-72 rounded-full blur-xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, rgba(219,158,51,0.75), transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-10 right-8 h-24 w-24 -rotate-12 rounded-3xl opacity-22"
          style={{
            background:
              "linear-gradient(135deg, rgba(122,166,60,0.9), rgba(219,158,51,0.7))",
          }}
        />
        <div className="absolute bottom-12 right-12 h-32 w-32 rounded-full border-2 border-[#7AA63C]/35 opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2
            id="who-is-this-for"
            className="font-heading text-4xl font-semibold tracking-tight text-[#DB9E33] sm:text-5xl"
          >
            Who is this for?
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-24 rounded-full bg-[#DB9E33]/90" />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {AUDIENCE.map((item, idx) => (
            <div
              key={item.text}
              data-aos="fade-up"
              data-aos-delay={idx * 60}
              className="group relative overflow-hidden rounded-2xl bg-[#7AA63C] p-5 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              {/* subtle gloss highlight (doesn't change base color) */}
              <div
                className="pointer-events-none absolute -top-10 left-10 h-24 w-24 rounded-full opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.55), transparent 65%)",
                }}
              />

              <div className="relative flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur">
                  <MoveRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>

                <p className="font-body text-base font-medium leading-snug text-white sm:text-lg">
                  {item.text}
                </p>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
