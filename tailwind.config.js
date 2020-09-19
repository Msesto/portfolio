module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'msm': { 'max': '649px' },
      // => @media (max-width: 639px) { ... }

      'md': '650px',
      // => @media (min-width: 768px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  variants: {},
  plugins: [],
}
