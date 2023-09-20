/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'primary': '#A855F7',
        'secondary': '#115E59',
        'background': '#FFFBEB',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['PT Serif', 'serif']
      },
      boxShadow: {
        "custom": '0px 25px 50px -12px rgba(0, 0, 0, 0.25) ',
      },
      
    },
  },
  plugins: [require("tailwindcss-animate"), 'prettier-plugin-tailwindcss'],
}