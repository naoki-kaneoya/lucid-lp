import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A2A40",
          light: "#2C3E5C",
          dark: "#0F1F35",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          light: "#FAF7F0",
          dark: "#E8DFD0",
        },
        earth: {
          DEFAULT: "#4A4540",
          light: "#6B6359",
          dark: "#2C2724",
        },
        accent: {
          DEFAULT: "#A89F8C",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-noto-sans-jp)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
