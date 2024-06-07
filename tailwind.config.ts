import type { Config } from "tailwindcss"

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        ...defaultTheme.screens,
      },
    },
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '352px',
        'xs': '375px',
        'custom-xs': '376px',
        'custom-sm': '720px',
        'custom-sm-1': '536px',
        'custom-md': '454px',
        'custom-md-2': '358px',
        'custom-md-3': '439px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    backgroundImage:{
      "244-bg":"url('../app/img/244.png')",
      "input-bg":"url('../app/img/input.png')",
      "select-bg":"url('../app/img/select.png')",
      "button-bg":"url('../app/img/button.png')",
      "results-bg":"url('../app/img/results.png')",
      "ピカチュウ.1-bg":"url('../app/img/ピカチュウ.1.png')",
      "ピカチュウ.2-bg":"url('../app/img/ピカチュウ.2.png')",
      "ピカチュウ.3-bg":"url('../app/img/ピカチュウ.3.png')",
      "ピカチュウ.4-bg":"url('../app/img/ピカチュウ.4.png')",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config