import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfb",
          100: "#faf8f5",
          200: "#f5f0e8",
          300: "#ebe3d6",
          400: "#d4c4a8",
        },
        gold: {
          400: "#c9a962",
          500: "#b8954a",
          600: "#9a7b3d",
          700: "#7d6332",
          800: "#5c4a26",
        },
        maroon: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#7c2d12",
          400: "#6b2110",
          500: "#5c1d0e",
        },
        /* Design system from CSS variables */
        theme: {
          bg: "var(--bg)",
          card: "var(--card)",
          text: "var(--text)",
          muted: "var(--muted)",
          gold: "var(--gold)",
          maroon: "var(--maroon)",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        "card-lg": "1.5rem",
      },
      animation: {
        "particle-float": "particle-float 25s ease-in-out infinite",
      },
      keyframes: {
        "particle-float": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 50%" },
          "50%": { backgroundPosition: "50% 100%" },
          "75%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-lg": "0 8px 40px 0 rgba(31, 38, 135, 0.12)",
        soft: "0 4px 24px -4px rgba(0, 0, 0, 0.08)",
        "gold-sm": "0 2px 12px -2px rgba(184, 149, 74, 0.2)",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, var(--bg) 0%, #ebe3d6 50%, #d4c4a8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
