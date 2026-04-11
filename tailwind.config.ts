/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['"Archivo Black"', 'sans-serif'],
        'body': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        // Primary Accent - Red
        'accent-red': '#FF3B3F',
        'accent-red-dark': '#E63539',
        'accent-red-light': '#FF6B6E',

        // Secondary Accent - Teal
        'accent-teal': '#0D9488',
        'accent-teal-dark': '#0F766E',
        'accent-teal-light': '#14B8A6',

        // Carbon/Neutral Shades
        'carbon-900': '#111827',
        'carbon-800': '#1F2937',
        'carbon-700': '#374151',
        'carbon-600': '#4B5563',
        'carbon-500': '#6B7280',
        'carbon-400': '#9CA3AF',
        'carbon-300': '#D1D5DB',
        'carbon-200': '#E5E7EB',
        'carbon-100': '#F3F4F6',
        'carbon-50': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
