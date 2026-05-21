"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { getFormUrl } from "@/lib/constants";

type Variant = "primary" | "secondary";

type Props = {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function CTAButton({
  variant = "primary",
  href,
  children,
  className,
}: Props) {
  const target = href ?? getFormUrl();
  const disabled = target === "#";

  const base =
    "inline-flex items-center justify-center px-10 py-4 font-sans tracking-wider transition-colors duration-300";
  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-cream hover:bg-ink-light border border-ink hover:border-ink-light",
    secondary:
      "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  };

  return (
    <motion.a
      href={target}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      aria-disabled={disabled || undefined}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className={cn(
        base,
        variants[variant],
        disabled && "pointer-events-none opacity-60",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
