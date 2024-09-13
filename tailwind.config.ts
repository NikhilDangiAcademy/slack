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
        custom:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2.4px 25.3px 0px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gradient-start": "#E4A77C",
        "gradient-middle": "#F0BE96",
        "gradient-end": "#E3A67B",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, #E4A77C 0%, #F0BE96 47%, #E3A67B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
