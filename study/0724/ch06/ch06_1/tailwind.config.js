module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ← 꼭 있어야 돼
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};