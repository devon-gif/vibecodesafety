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
          950: "#070510",
          900: "#0b0817",
          800: "#120d22",
          700: "#1a1330",
        },
        violetglow: {
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
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
        glow: "0 0 60px -10px rgba(139,92,246,0.45)",
        "glow-lg": "0 0 120px -20px rgba(139,92,246,0.6)",
      },
      backgroundImage: {
        "radial-violet":
          "radial-gradient(ellipse at top, rgba(139,92,246,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
