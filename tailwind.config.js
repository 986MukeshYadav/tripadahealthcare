// tailwind.config.js
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        'sm': '14px', // You can modify font-size here too if needed
      },
    },
  },
  plugins: [],
}
