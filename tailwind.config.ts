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
          'primary': 'hsl(var(--color-primary))',
          'primary-content': 'hsl(var(--color-primary-content))',
          'secondary': 'hsl(var(--color-secondary))',
          'accent': 'hsl(var(--color-accent))',
          'neutral': 'hsl(var(--color-neutral))',
          'base-100': 'hsl(var(--color-base-100))',
          'base-200': 'hsl(var(--color-base-200))',
          'base-300': 'hsl(var(--color-base-300))',
          'base-content': 'hsl(var(--color-base-content))',
        },
        dark: {
          'primary': 'hsl(var(--color-primary))',
          'primary-content': 'hsl(var(--color-primary-content))',
          'secondary': 'hsl(var(--color-secondary))',
          'accent': 'hsl(var(--color-accent))',
          'neutral': 'hsl(var(--color-neutral))',
          'base-100': 'hsl(var(--color-base-100))',
          'base-200': 'hsl(var(--color-base-200))',
          'base-300': 'hsl(var(--color-base-300))',
          'base-content': 'hsl(var(--color-base-content))',
        },
      },
    ],
  },
}
