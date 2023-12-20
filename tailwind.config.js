/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        // customize these colors to customize the dashboard color.
        dashboardPrimary: "#111927",
        dashboardSecondary: "#1a2332",
        dashboardTextPrimary: "#a4b1cd",
        "dashboard-primary": "#0D4663",
        "dashboard-secondary": "#12587b",
        "dashboard-text-primary": "#a4b1cd",
      },
    },
  },

  plugins: [require("daisyui")],
  darkMode: "",
};
