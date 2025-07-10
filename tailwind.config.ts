// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // App Router
    './pages/**/*.{js,ts,jsx,tsx}', // Pages Router
    './components/**/*.{js,ts,jsx,tsx}', // Components
    './node_modules/antd/**/*.{js,ts,jsx,tsx}', // Optional: just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


