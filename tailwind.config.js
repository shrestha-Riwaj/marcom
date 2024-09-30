/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'#031e3f',
        'bg-head':"#fefffe",
      }
    },
  },
  plugins: [],
}

