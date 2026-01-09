module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        },
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        'zoom-in-out': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        'zoom-in-out': 'zoom-in-out 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
