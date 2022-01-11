module.exports = {
  content: ["./src/**/*.vue"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontWeight: {
        normal: 300,
        semibold: 600,
        extrabold: 800,
      },
      fontFamily: {
        body: ["Nunito"],
      },
      gap: {
        lgX: "3%",
      },
    },
  },
  plugins: [],
};
