/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:       '#0A2540',
        'navy-deep':'#071C30',
        blue:       '#388BFD',
        sky:        '#B5D4F4',
        'off-white':'#F7F9FC',
        green:      '#1D9E75',
        'red-soft': '#D85A30',
        muted:      '#64748B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        body:    ['DM Sans', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
        section: '640px',
        hero: '540px',
        container: '1100px',
      },
    },
  },
  plugins: [],
};
