import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome theme - Beige background, Blue accent
        // Palette: #1B3C53, #234C6A, #456882, #D2C1B6
        primary: {
          DEFAULT: "#234C6A",
          dark: "#1B3C53",
          light: "#456882",
        },
        accent: {
          DEFAULT: "#1B3C53",
          light: "#234C6A",
          muted: "#456882",
        },
        background: {
          DEFAULT: "#D2C1B6",
          dark: "#C4B3A7",
          light: "#E5DCD6",
          card: "#E0D3CA",
        },
        foreground: {
          DEFAULT: "#1B3C53",
          muted: "#456882",
          light: "#234C6A",
        },
        surface: {
          DEFAULT: "#E0D3CA",
          dark: "#D2C1B6",
          light: "#EDE6E1",
        },
        border: {
          DEFAULT: "#C4B3A7",
          light: "#D2C1B6",
          dark: "#456882",
        },
        text: {
          DEFAULT: "#1B3C53",
          muted: "#456882",
          light: "#234C6A",
          inverse: "#E0D3CA",
        },
        // Action colors with blue theme
        action: {
          DEFAULT: "#234C6A",
          hover: "#1B3C53",
          active: "#456882",
        },
        // Keep some utility colors
        success: "#2D5A45",
        warning: "#8B6914",
        error: "#8B3A3A",
        white: "#fff",
      },
      fontSize: {
        "h1-min": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "h1-max": ["64px", { lineHeight: "1.2", fontWeight: "600" }],
        "h2-min": ["30px", { lineHeight: "1.3", fontWeight: "600" }],
        "h2-max": ["50px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-min": ["28px", { lineHeight: "1.4", fontWeight: "500" }],
        "h3-max": ["35px", { lineHeight: "1.4", fontWeight: "500" }],
        "h4-min": ["21px", { lineHeight: "1.5", fontWeight: "500" }],
        "h4-max": ["28px", { lineHeight: "1.5", fontWeight: "500" }],
        "h5-min": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "h5-max": ["21px", { lineHeight: "1.6", fontWeight: "400" }],
        "h6-min": ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        "h6-max": ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-min": ["12px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-max": ["13px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      screens: {
        phone: { max: "600px" },
        tablet: { max: "1023px" },
        desktop: { min: "1024px", max: "1199px" },
        "xl-desktop": { min: "1200px", max: "1800px" },
        "extra-screen": { min: "1920px" },
        "extra-big-screen": { min: "2560px" },
        "h-800": { raw: "(max-height: 800px)" },
        "h-1024": { raw: "(min-height: 900px) and (max-height: 1024px)" },
        "h-1080": { raw: "(min-height: 1080px)" },
        "h-4k": { raw: "(min-height: 2000px)" },
      },
      backdropBlur: {
        custom: "3.9px",
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  safelist: [
    "col-span-1", "col-span-2", "col-span-3", "col-span-4", "col-span-5", "col-span-6",
    "col-span-7", "col-span-8", "col-span-9", "col-span-10", "col-span-11", "col-span-12",
    "col-span-13", "col-span-14", "col-span-15", "col-span-16", "col-span-17", "col-span-18",
    "col-span-19", "col-span-20", "col-span-21", "col-span-22", "col-span-23", "col-span-24",
    "sm:col-span-24", "md:col-span-24", "lg:col-span-24", "xl:col-span-24", "2xl:col-span-24",
  ],
  plugins: [require("tailwindcss-animate")],
}

export default config
