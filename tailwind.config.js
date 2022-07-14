/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070724",
        "second-primary": "#38384F",
        light: "#838391",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC1A2",
        neptune: "#2D68F0",
      },
    },
  },
  plugins: [],
};
