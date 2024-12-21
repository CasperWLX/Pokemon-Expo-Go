/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            // Define your custom colors
            'primary': '#EAF0E6',
            'secondary': '#a5dd67',
            'accent': '#9070ca',
          },
    },
  },
  plugins: [],
}

