import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Aileron", "sans-serif"],
            serif: ["Brittany", "serif"],
        },
    },
  plugins: [],
} satisfies Config;
