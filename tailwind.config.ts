import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#058096",
      blue2: "#0F424D",
      white: "#ffffff",
      black: "#272324",
      offwhite: "var(--off-white)",
      orange: "#D48F36",
      orange2: "#F6E6D1",
    },
  },
  // plugins: [require('@tailwindcss/forms'),],
  plugins: [],
};
export default config;
