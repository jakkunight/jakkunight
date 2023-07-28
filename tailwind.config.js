/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const colors = theme('colors');
      const neonUtilities = {};
      for(const color in colors){
        if(typeof colors[color] !== "object"){
          continue;
        }
        const color1 = colors[color]["400"];
        const color2 = colors[color]["500"];
        neonUtilities[`.neon-${color}-100`] = {
          boxShadow: `0 0 5px ${color2}, 0 0 20px ${color1}`
        }
        neonUtilities[`.neon-${color}-200`] = {
          boxShadow: `0 0 15px ${color2}, 0 0 30px ${color1}`
        }
      }
      addUtilities(neonUtilities);
    })
  ],
}

