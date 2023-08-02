/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': 'url(/world-map.png)'
      },
      colors:{
          color01:'#00ABB3',
          color02: '#3C4048',
          color03: '#B2B2B2',
          color04: '#EAEAEA'
      }
    },
  },
  plugins: [],
}
