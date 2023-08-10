/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'vhblue':'#324496',
        'vhbtn' : '#324496',
        'vhbtn2' : '#3b56d1',
        'vhblack' : '#222222',
      },
      screens: {
        'mdm': { 'mdm': '(min-height: 360px)' },
      },
      spacing: {
        '50px': '4vw',
      }
    },
  },
  plugins: [],
}
