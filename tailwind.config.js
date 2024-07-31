import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'valkey': ['Valkey', 'sans-serif'],
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      spacing: {
        '90vh': '90vh',
        '40vh': '40vh',
        '60vh': '60vh',
        '20vh': '20vh',
        '30%': '30%',
        '8%': '8%',
        '13%': '13%',
        '15%': '15%',
        '92%': '92%',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/2.jpg')",
      },
    }
  },
  plugins: [typography, forms, aspectRatio]
}
