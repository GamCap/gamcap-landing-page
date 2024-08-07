import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        white: "#ffffff",
        blue: "#5465ff",
        pink: "#ff35ae",
        stroke: "#394842",
        accent: {
          mainGreen: "#00ffb9",
          green: "#00866e",
          greenHover: "#05483c",
          mainGreenHover: "#00d69b",
          greenDisabled: "#909f9a",
        },
        background: {
          primary: "#1a1a1a",
          secondary: "#151515",
        },
        button: {
          black: "#101615",
          disabled: "#cadfd9",
        },
        text: {
          secondary: "#dbe3e1",
          tertiary: "#909f9a",
          disabled: "#707d7a",
          contrastPrimary: "#101615",
          contrastSecondary: "#394842",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
