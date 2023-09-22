/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url('/images/10.jpg')",
      },
      transitionDuration: {
        '3000': '3000ms',
      }
    },
    fontFamily :{
      in: ["in"],
      laleh : ["laleh"],
      bnazanin : ["bnazanin"],
    },
  },
  plugins: [],
}

