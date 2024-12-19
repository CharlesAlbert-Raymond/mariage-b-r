import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            arial: ["Arial", "sans-serif"],
            comic: ["Comic Sans MS", "sans-serif"],
        },
    },
  plugins: [],
} satisfies Config;
