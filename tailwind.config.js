module.exports = {
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      visibility: ['responsive'],
      spacing: {
        '6': '1.5rem',
        '3': '0.75rem',
        '2': '0.5rem',
      },
      colors: {
        gray: {
          '700': '#4a5568',
          '800': '#2d3748',
        },
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        'ul': {
          marginBottom: '1.5rem',
          marginLeft: '1.5rem',
          marginRight: '1.5rem',
        },
        'ul li': {
          marginBottom: '1.5rem',
          backgroundColor: '#4a5568',
          padding: '0.75rem 0.5rem',
          borderRadius: '0.25rem',
        },
      })
    },
  ],
  variants: {
    extend: {
      visibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  corePlugins: {
    container: false
  },
}
