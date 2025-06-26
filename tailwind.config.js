/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        primary: {
          light: "#FFFFFF",
          dark: "#363738",
        },
        // SECONDARY
        secondary: {
          light: "#F5F5F5",
          soft: "#FEFAF1",
          red: "#DB4444",
        },
        // TEXT
        text: {
          base: "#FAFAFA",
          muted: "#D37643",
          card: "#D37643",
          strong: "#D37643",
        },
        // BUTTON / OTHER COLORS
        button: {
          green: "#47B486",
          red: "#DB4444",
          hoverRed: "#E2B93B",
          hoverBlue: "#EB5757",
        },
        // BACKGROUND
        bg: {
          base: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  plugins: [],
};
