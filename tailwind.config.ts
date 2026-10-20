import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10243a",
        navy: "#10243a",
        amber: "#efa62b",
        paper: "#f6f4ef",
        line: "#e4e6e8",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px rgba(16,36,58,.09)",
      },
    },
  },
  plugins: [],
};

export default config;
