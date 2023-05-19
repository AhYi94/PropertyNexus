/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#faf7f2',
          100: '#f0e9db',
          300: '#dccdae',
          500: '#C9B180',
          600: '#b09b70',
          700: '#978560',
          800: '#7E6F50',
          900: '#655940',
        },
        brown: {
          50: '#F6F2ED',
          100: '#E7DACE',
          200: '#D7C3AE',
          700: '#7E5D3B',
          900: '#543E28',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },

      keyframes: {
        pulse: {
          '0%, ': { transform: 'scale(1)', opacity: 0 },
          '50%, ': { opacity: 1 },
          '100%': { transform: 'scale(1.2)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

