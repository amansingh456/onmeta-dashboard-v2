module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: {
        //   light: "#F5F8FD",
        //   dark: "#121212",
        //   mainDark: "#000000",
        // },
        // sidebar: {
        //   light: "#FFFFFF",
        //   dark: "#1E1E1E",
        // },
        text: {
          light: "#F5F8FD",
          mainLight: "#ffffff",
          dark: "#121212",
          mainDark: "#000000",
          semidark: "#A2A5AB",
        },
        change: {
          extraLight: "#cceadd",
          light: "#66c29b",
          semidark: "#00864d",
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
        wave: "wave 1s infinite ease-in-out",
        fadeInGlow: "fadeInGlow 2s ease-out forwards",
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
          "0%, 100%": { transform: "scaleY(1)", opacity: "1" },
          "50%": { transform: "scaleY(2)", opacity: "0.5" },
        },
        fadeInGlow: {
          "0%": { opacity: 0, textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
          "50%": {
            opacity: 0.5,
            textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
          },
          "100%": { opacity: 1, textShadow: "0 0 10px rgba(255, 255, 255, 1)" },
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
