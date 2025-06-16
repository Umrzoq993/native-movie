/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // App fayli
    "./index.{js,jsx,ts,tsx}", // Qo‘shimcha: index.js ham kiritiladi
    "./components/**/*.{js,jsx,ts,tsx}", // Komponentlar papkasi
    "./src/**/*.{js,jsx,ts,tsx}", // Agar src papkangiz bo‘lsa
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
