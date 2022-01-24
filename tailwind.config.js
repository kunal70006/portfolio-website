module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1A1A2E",
      darkBlue: "#16213E",
      blue: "#0F3460",
      red: "#E94560",
      white: "#ffffff",
      slate: "#94a3b8",
      lightSlate: "#CCD6F6",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
