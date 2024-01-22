/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(135deg, #32536c, #456780)',
        'button-gradient-hover': 'linear-gradient(135deg, #d6f1ef, #56789c)',

      },
      boxShadow: {
        'custom-dark': '0 6px 8px -1px rgba(0, 0, 0, 0.7), 0 4px 8px -1px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
