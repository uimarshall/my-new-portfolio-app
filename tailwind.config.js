/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'FFFFFF',
        'primary-10': '#F5F8FD',
        'primary-50': '#C5CBFE',
        'primary-100': '#7CB1FF',
        'primary-200': '#4253F1',
        'primary-300': '#4456FB',
        'red-100': '#FA4969',
        'red-200': '#FF869C',
        'gray-10': '#E5E5E5',
        'gray-100': '#E6E9F0',
        'gray-200': '#737986',
        'gray-300': '#505F79',
        'gray-400': '#4F5461',
      },
      backgroundImage: (theme) => ({
        'gradient-purplepink':
          'linear-gradient(257.1deg, #AE5BD6 27.51%, #4052F0 113.53%)',
        'gradient-bluepink':
          'linear-gradient(234.04deg, #7F38DA 0%, #4052F0 71.02%)',
        'project-img': 'url(./assets/dev.jpg)',
      }),
      fontFamily: {
        neogrotesque: ['Roboto', 'sans-serif'],
        geometricsans: ['Poppins', 'sans-serif'],
      },
      content: {
        projecttext: 'url(./assets/contract.jpg)',
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
