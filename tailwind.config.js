/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#0A0E1A',
        foreground: '#F8FAFC',
        navy: {
          950: '#0A0E1A', // deep dark background
          900: '#0D1220', // subtle dark banner
          850: '#101728', // card background
          800: '#151F38', // active/highlight
          700: '#1E2B4A',
          border: '#29344C', // subtle card borders
        },
        brand: {
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          light: '#8EAFFF',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwindcss-animate')],
}
