/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/*.md',
    './*.markdown',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#F4F1DE', // Drafting Paper
        'theme-text': '#003049', // Blueprint Navy
        'theme-navy': '#003049', // Blueprint Navy
        'theme-primary': '#D62828', // Retro Red
        'theme-accent-1': '#F77F00', // Retro Orange
        'theme-accent-2': '#FCBF49', // Gold/Yellow
        'theme-white': '#FFFFFF',
        'theme-border': '#E0DDCB',
      },
    },
  },
  plugins: [],
}
