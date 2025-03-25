/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#2563eb", // Example color (blue-600)
        },
      },
    },
  },
  plugins: [],
};
