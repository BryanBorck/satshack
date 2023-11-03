/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#251349",
        "secondary-color": "#3e2278",
        "primary-blur": "rgba(62, 35, 114, 0.5)",
        "secondary-blur": "rgba(101, 67, 172, 0.5)",
        "yellow-color": "#a8a36d",
        "blue-color": "#6434ff",
        "green-color": "#3a937b",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [],
}

