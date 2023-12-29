/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkblue: {
          400: "#6f6f9b",
          700: "#313154",
          800: "#1a1a42",
          900: "#0c0c1e",
        },
        lfred: {
          300: "#f17ea1",
          400: "#e75f88",
          500: "#e13367",
          600: "#c81e51",
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
