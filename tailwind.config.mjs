/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        bowlbyOne: ['Bowbly One', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
