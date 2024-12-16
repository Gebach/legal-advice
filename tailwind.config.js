/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#292d33',
      secondary: {
        DEFAULT: '#85afe0',
        light: '#b6d0ed',
      },
      black: '#000',
      white: '#fff',
      gray: '#999',
      transparent: 'transparent',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
