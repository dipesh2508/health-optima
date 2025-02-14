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
        'primary': {
          0: '#FAF5FF',
          1: '#F3E8FF',
  				2: '#E9D5FF',
  				3: '#D8B4FE',
  				4: '#C084FC',
  				5: '#A855F7',
  				6: '#9333EA',
  				7: '#7E22CE',
  				8: '#6B21A8',
  				9: '#581C87',
				  10: '#3B0764',
        },
        'secondary': '#115E59',
        'background': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Mona-Sans', 'sans-serif']
      },
      boxShadow: {
        "custom": '0px 25px 50px -12px rgba(0, 0, 0, 0.25) ',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
    require('tailwind-scrollbar'),
  ],
    
}