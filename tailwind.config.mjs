import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001f3f",
        secondary: "#FDFBF7",
        accent: "#D4AF37",
        "text-charcoal": "#333333",
        success: "#48BB78",
        error: "#E57373",
        card: "#ffffff",
        "card-foreground": "#333333",
        "muted-foreground": "#666666",
        border: "#e5e7eb",
        ring: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-playfair-display)", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config; 