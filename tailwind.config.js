/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./*.html"],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
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
        'li': {
          marginBottom: '1.5rem',
          backgroundColor: '#4a5568',
          padding: '0.75rem 0.5rem',
          borderRadius: '0.25rem',
        },
      })
    })
  ],
}