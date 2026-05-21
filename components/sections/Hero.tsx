"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* 背景写真 */}
      <Image
        src="/images/hero.jpg"
        alt="湖畔の遊歩道を歩くふたりの前撮り写真"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* 可読性のためのスクリム（夕景の暖色を保つためニュートラルな黒） */}
      <div aria-hidden className="absolute inset-0 bg-black/30" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="mb-10 font-serif text-2xl tracking-widest text-cream">
          Lucid
        </p>

        <h1 className="font-serif text-3xl leading-[1.5] text-cream md:text-5xl md:leading-[1.45]">
          {HERO.copy1}
          <br />
          {HERO.copy2}
        </h1>

        <p className="mt-12 text-sm leading-loose text-cream/85 md:text-base">
          {HERO.description}
        </p>

        <div className="mt-14">
          <CTAButton className="bg-cream text-ink hover:bg-cream-dark border-cream hover:border-cream-dark">
            {HERO.cta}
          </CTAButton>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60"
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
