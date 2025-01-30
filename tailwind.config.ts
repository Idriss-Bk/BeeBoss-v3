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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'orange-300': '0 2px 4px rgba(252, 165, 165, 0.5), 0 1px 12px rgba(252, 165, 165, 0.3)',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
