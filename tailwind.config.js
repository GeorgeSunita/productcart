/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RedHatText: ["Red Hat Text", "sans-serif"],
      },
      colors: {
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)",
        rose50: "hsl(20, 50%, 98%))",
        rose100: "hsl(13, 31%, 94%)",
        rose300: "hsl(0, 0%, 98%)",
        rose400: "hsl(0, 0%, 100%)",
        rose500: "hsl(0, 0%, 98%)",
        rose490: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
