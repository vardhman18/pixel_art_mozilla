module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace']
      },
      colors: {
        transformer: {
          50: '#f7f6ff',
          100: '#e6e3ff',
          200: '#c9c1ff',
          300: '#a695ff',
          400: '#7c5bff',
          500: '#5a3cff',
          600: '#472fcf',
          700: '#341f99',
          800: '#231466',
          900: '#120a33'
        }
      }
    }
  },
  plugins: [],
}
