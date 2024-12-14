/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            // Define your custom colors
            'primary': '#ffffff',
            'secondary': '#aaf67e',
            'accent': '#56f4a7',
          },
    },
  },
  plugins: [],
}

