"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(168, 159, 140, 0.18), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 95%, rgba(26,42,64,1) 95%)",
          backgroundSize: "100% 6px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="mb-10 font-serif text-2xl tracking-widest text-ink/80">
          Lucid
        </p>

        <h1 className="font-serif text-3xl leading-[1.5] text-ink md:text-5xl md:leading-[1.45]">
          {HERO.copy1}
          <br />
          {HERO.copy2}
        </h1>

        <p className="mt-12 text-sm leading-loose text-earth md:text-base">
          {HERO.description}
        </p>

        <div className="mt-14">
          <CTAButton>{HERO.cta}</CTAButton>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink/40"
      >
        <svg
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M10 4 L10 24 M4 18 L10 24 L16 18"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
