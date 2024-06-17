import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "radix-accent": "var(--accent-9)",
      },
      height: {
        "home-page-initial": "50rem",
        "home-page-md": "100dvh",
      },
      keyframes: {
        moveUp: {
          "0%, 12.33%, 100%": { transform: "translateY(0)" }, // 1s of moving up and 5s of staying still
          "4.16%": { transform: "translateY(-5px)" }, // At 1s (1/6 of 6s) it's at the top
        },
      },
      animation: {
        moveUp: "moveUp 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
