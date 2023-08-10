module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        stripe:
          'repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 0.5rem, transparent 0.5rem, transparent 1rem)',
      },
      transitionDuration: {
        DEFAULT: '10ms',
      },
      colors: {
        'clr-primary': '#29221d',
        'clr-white': '#fff',
        'clr-jet': '#302924',
        'clr-primar-light': '#473b33',
        'clr-secondary': '#1e1611',
        'clr-black': '#000',
        'clr-pumpkin': '#fe6c00',
        'clr-silver': '#a8a5a6',
        'clr-silver-v1': '#bdbabb',
        'clr-scarlet': '#fe1e00',
        'clr-green': '#00fe93',
        'clr-yellow': '#fec80a',
        'clr-peach': '#ffc397',
      },
    },
  },
  plugins: [],
}
