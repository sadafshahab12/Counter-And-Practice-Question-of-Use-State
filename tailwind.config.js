/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'box1': "url('/images/bg1.jpg')",
        'box2': "url('/images/bg2.jpg')",
        'box3': "url('/images/bg3.jpg')",
        'box4': "url('/images/bg4.jpg')",
        'box5': "url('/images/bg5.avif')",
  
      }
    },
  },
  plugins: [],
}