/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#960A11',
      'dark': '#151515',
      'neutral': '#F9F9F9',
      'background': '#CCCCCC',
    }
  },
  plugins: [ animations],
}

