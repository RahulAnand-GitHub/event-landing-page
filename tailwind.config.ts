/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsl(var(--color-primary))',
          light: 'hsl(var(--color-primary-light))',
          dark: 'hsl(var(--color-primary-dark))',
          content: 'hsl(var(--color-primary-content))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--color-secondary))',
          content: 'hsl(var(--color-secondary-content))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--color-accent))',
          content: 'hsl(var(--color-accent-content))',
        },
        'neutral': 'hsl(var(--color-neutral))',
        'neutral-content': 'hsl(var(--color-neutral-content))',
        'base-100': 'hsl(var(--color-base-100))',
        'base-200': 'hsl(var(--color-base-200))',
        'base-300': 'hsl(var(--color-base-300))',
        'base-content': 'hsl(var(--color-base-content))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#7c3aed', // Indigo/purple color
          'primary-content': '#ffffff',
          'secondary': '#ec4899', // Pink color
          'accent': '#4fd1c5', // Teal color
          'neutral': '#4a5568',
          'base-100': '#ffffff',
          'base-200': '#f7fafc',
          'base-300': '#edf2f7',
          'base-content': '#2d3748',
        },
        dark: {
          'primary': '#9f7aea', // Lighter indigo/purple for dark mode
          'primary-content': '#ffffff',
          'secondary': '#f687b3', // Lighter pink for dark mode
          'accent': '#76e4da', // Lighter teal for dark mode
          'neutral': '#a0aec0',
          'base-100': '#1a202c',
          'base-200': '#171923',
          'base-300': '#0d1117',
          'base-content': '#f7fafc',
        },
      },
    ],
  },
}
