import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070a",
          900: "#0a0e13",
          800: "#0f141b",
          700: "#161d26",
        },
        emeraldglow: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
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
        glow: "0 0 60px -10px rgba(16,185,129,0.35)",
      },
      backgroundImage: {
        "radial-emerald":
          "radial-gradient(ellipse at top, rgba(16,185,129,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
