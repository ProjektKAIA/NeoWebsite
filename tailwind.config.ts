import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff5d37",
          dark: "#fe3410",
          light: "#ff9571",
        },
        card: {
          DEFAULT: "#fff2ed",
          light: "#ffe2d4",
        },
        text: {
          DEFAULT: "#333333",
          muted: "#666666",
          light: "#999999",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
