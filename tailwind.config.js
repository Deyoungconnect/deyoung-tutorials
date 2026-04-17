/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deyoung-terracotta': '#c44536',
        'deyoung-navy': '#1e2c3a',
        'deyoung-cream': '#f5efe7',
        'deyoung-charcoal': '#2d3a42',
        'deyoung-gray': '#5f6c72',
        'deyoung-dark-bg': '#1a252f',
      },
      fontFamily: {
        'logo': ['Cabin Sketch', 'cursive'],
        'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        'content': '1110px',
      },
    },
  },
  plugins: [],
}