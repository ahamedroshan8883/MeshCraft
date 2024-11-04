/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Replace 'Roboto' with your Google Font name
        Oswald: ["Oswald", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        custom: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add the custom shadow
        profileBoxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      },
       backgroundImage: {
        // 'homebg' : 'linear-gradient(to bottom, #19191a, #222127, #2e2933, #3b313f, #4a384a)',
        'homebg': 'radial-gradient(circle, #3a4c7a, #2f4172, #24366a, #182b62, #0a205a)',
        // 'homebg': 'url("C:/Users/USER/Desktop/MeshCraft/meshcraft/src/assets/background8.jpg")',
        'wordsHover':'linear-gradient(to right, #fbb040, #faa137, #f99230, #f7822b, #f57229, #f46728, #f25c27, #f04f27, #ef4526, #ef3b25, #ee2e24, #ed1c24)',
        'custom-gradient': 'radial-gradient(circle, #f46728, #bb4434, #7d2c30, #401a21, #000000)',
        'animation-bg':'linear-gradient(to right, #fbb040,#f46728,#ed1c24)',
      },
    },
  },
  plugins: [],
}