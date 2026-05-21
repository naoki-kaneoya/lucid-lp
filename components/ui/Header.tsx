"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "bg-cream/85 backdrop-blur-sm border-b border-ink/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-serif text-xl tracking-widest text-ink"
        >
          Lucid
        </a>
        <a
          href="#cta"
          className="hidden text-xs tracking-widest text-earth hover:text-ink md:inline"
        >
          PRE-OPEN
        </a>
      </div>
    </header>
  );
}
