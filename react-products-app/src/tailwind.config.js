/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F1F8E9",
        text: "#1B5E20",
        primary: "#4CAF50",
        secondary: "#81C784",
        accent: "#A5D6A7",
        dark: "#2E7D32",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

