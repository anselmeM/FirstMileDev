/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.html",
    "./*.js",
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
      boxShadow: {
        'btn': '0 4px 14px rgba(0, 0, 0, 0.1)',
        'btn-hover': '0 8px 25px rgba(0, 0, 0, 0.15)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}