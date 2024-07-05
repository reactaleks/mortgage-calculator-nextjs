/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans ExtraLight", "sans-serif"]
      },
      borderRadius: {
        'special': '25%',
      }
    
    },
    colors: {
      'dark-blue': '#132E35',
      'darker-blue': '#0E2431',
      'almost-light-blue': '#808B92',
      'almost-white-blue': '#9EBACF',
      'light-blue': '#E3F4FC',
      'white-main': '#F5FDFD',
      'bright-yellow': '#DDDD2E',
      'dark-yellow': '#D9DB30',
      'light-yellow': '#FAFAE0',
      'white': '#FFFFFF',
      'error-red': '#D73329',
      'transparent': 'transparent',
    }
  },
  plugins: [],
}