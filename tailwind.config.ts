import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    },
    plugins: [],
  }
}
export default config
