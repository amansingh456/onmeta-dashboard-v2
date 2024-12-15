module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
          semidark: "#A2A5AB",
        },
        change: {
          extraLight: "#cceadd",
          light: "#66c29b",
          semidark: "#00864e",
          dark: "#009a59",
          errorRed: "#B91C1C",
          warning: "#EAB308",
          info: "#1D4ED8",
        },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)"],
        tagline: ["var(--font-satisfy)"],
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slidIn: "slideIn 0.3s ease-out",
        wave: "wave 1.2s infinite",
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
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        wave: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(-10px) scale(1.5)",
            opacity: 0.8,
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
