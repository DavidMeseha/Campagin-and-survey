/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "primary": "var(--color-primary)",
      "secondary": "var(--color-secondary)",
      "color1": "var(--color-color1)",
      "color2": "var(--color-color2)",
      'color3': 'var(--color-color3)',
      'color4': 'var(--color-color4)',
      'color5': 'var(--color-color5)',
      'color6': 'var(--color-color6)',
      'color7': 'var(--color-color7)',
      'color8': 'var(--color-color8)',
      'red': '#EE4B49',
      'green': '#20C064',
      // 'plant': '#50BF20',
      'plant': '#F4990F',
      'plant-light': '#D1F5C2',
      'white': '#ffff',
      'black': '#000000',
    },
    extend: {},
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [

  ],
}