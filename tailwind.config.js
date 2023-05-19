import formKitTailwind from '@formkit/themes/tailwindcss';

module.exports = {
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
    `./formkit.config.js`,
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#111C18',
          200: '#111827',
          300: '#6b7280',
        },
        secondary: {
          100: '#f2f2f2',
          200: '#d1d5db',
          300: '#374151',
        },
        accent: {
          100: '#10D38D',
          200: '#86C1AC',
          300: '#D4F5E9',
        },
        warning: {
          100: '#a855f7',
        },
        // white: '#ffffff',
      },
    },
  },
  variants: {},
  plugins: [formKitTailwind],
};
