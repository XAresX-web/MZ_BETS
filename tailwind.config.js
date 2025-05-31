const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#121212", // fondo oscuro pro
        neonGreen: "#39ff14", // verde neón
        neonYellow: "#ffff00", // amarillo neón
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        flamePulse: {
          "0%": { filter: "blur(2px)", opacity: 0.8 },
          "50%": { filter: "blur(6px)", opacity: 0.4 },
          "100%": { filter: "blur(2px)", opacity: 0.8 },
        },
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        glow: "glow 4s ease-in-out infinite",
        flamePulse: "flamePulse 1.4s infinite linear",
        "spin-y": "spinY 6s linear infinite",
        slide: "slide 25s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      // ✅ Utilidades personalizadas
      addUtilities({
        ".clip-path-custom": {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)",
        },
        ".glassmorphism": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "1rem",
        },
        ".neon-border": {
          border: "2px solid #39ff14",
          boxShadow: "0 0 8px #39ff14, 0 0 16px #39ff14",
        },
      });

      // ✅ Componente llama animada
      addComponents({
        ".flame-tag": {
          position: "relative",
          isolation: "isolate",
          zIndex: "10",
        },
        ".flame-tag::before": {
          content: '""',
          position: "absolute",
          top: "-2px",
          right: "-2px",
          bottom: "-2px",
          left: "-2px",
          background: "conic-gradient(from 0deg, #ffdd00, #ff8800, #ffdd00)",
          borderRadius: "9999px",
          filter: "blur(4px)",
          animation: "flamePulse 1.4s infinite linear",
          zIndex: "-1",
        },
      });
    }),
  ],
};
