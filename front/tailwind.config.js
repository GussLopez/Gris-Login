/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "lite-granite": "#666B64",
        "jet-gray": "#C1D1CF",
        "lite-slate": "#748891",
        "granite": "#636467",
        "dark-jungle": "#171F22",
        "charcoal": "#1C1C1C",
        "canvas": "#EAE6E0",
    },
    },
  },
  plugins: [],
}
