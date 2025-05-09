// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // ...
    ],
    corePlugins: {
      preflight: true // <== disable this!
    },
    important: true,
  }
  