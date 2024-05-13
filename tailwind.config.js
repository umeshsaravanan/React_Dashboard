/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/App.js",
    "./src/components/Navbar.js",
    "./src/components/Sidebar.js",
    "./src/components/Details.js",
    "./src/components/UserDetails.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}

