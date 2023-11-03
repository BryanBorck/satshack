/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#251349",
        "secondary-color": "#2f195a",
        "blue-color": "#6434ff",
      },
    },
  },
  plugins: [],
}

