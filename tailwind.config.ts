import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(34,197,94,.14), 0 24px 70px rgba(15,23,42,.10)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: ".35", transform: "scaleX(.72)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        reveal: "reveal .7s ease-out both",
        "pulse-line": "pulseLine 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
