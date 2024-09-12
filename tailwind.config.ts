import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "2px 3px 10px 0px rgba(0, 0, 0, 0.25) inset",
        "custom-lg": "0px 20px 24px 0px rgba(0, 0, 0, 0.40)",
        "custom-subtle": "0px 2px 10px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
