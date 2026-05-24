import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* --- Deep dark backgrounds --- */
        ink: {
          950: "#05030B",   /* deep-black */
          900: "#0B0616",   /* near-black-purple */
          800: "#160B2E",   /* dark-purple */
          700: "#24153F",   /* card-purple */
        },
        /* --- Brand purple scale --- */
        violetglow: {
          300: "#C4B5FD",   /* soft-lavender */
          400: "#A78BFA",   /* bright-purple */
          500: "#8B5CF6",   /* primary-purple */
          600: "#7C3AED",
          700: "#6D28D9",
        },
        /* --- Light section palette --- */
        lavender: {
          bg:   "#F6F2FF",
          deep: "#2E1065",
          muted:"#6D5A88",
        },
        /* --- Status / accent --- */
        status: {
          green:  "#4ADE80",
          orange: "#F59E0B",
          soft:   "#FB923C",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Inter",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow:    "0 0 60px -10px rgba(139,92,246,0.45)",
        "glow-lg":"0 0 120px -20px rgba(139,92,246,0.60)",
        "glow-orange": "0 0 40px -12px rgba(245,158,11,0.25)",
      },
      backgroundImage: {
        "radial-violet":
          "radial-gradient(ellipse at top, rgba(139,92,246,0.25), transparent 60%)",
        "radial-orange":
          "radial-gradient(ellipse at bottom right, rgba(251,146,60,0.08), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
