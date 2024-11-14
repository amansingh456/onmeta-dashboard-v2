module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F5F8FD", // Main background light
          dark: "#121212", // Main background dark
        },
        sidebar: {
          light: "#FFFFFF", // Sidebar light
          dark: "#1E1E1E", // Sidebar dark
        },
        text: {
          light: "#000000", // Black text for light mode
          dark: "#FFFFFF", // White text for dark mode
          semidark: "#B5B8BF",
        },
        change: {
          light: "#00864e",
        },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
        tagline: ["var(--font-satisfy)"],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
