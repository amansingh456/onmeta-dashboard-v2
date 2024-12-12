module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F5F8FD",
          dark: "#121212",
        },
        sidebar: {
          light: "#FFFFFF",
          dark: "#1E1E1E",
        },
        text: {
          light: "#FFFFFF",
          dark: "#000000",
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-smooth": {
          "@apply transform active:scale-95 duration-150 ease-in-out": {},
        },
      });
    },
  ],
};
