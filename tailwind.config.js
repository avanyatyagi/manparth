/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #ffffffE6, transparent 30%, transparent 70%, #ffffffE6)',
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        'custom-dark': '#3C0301',
        'custom-light': '#936F43',
        'custom-bg': '#F2F2F2',
      },
      fontFamily: {
        'custom-font': ['Prata', 'serif'],
        'hindi-font': ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}