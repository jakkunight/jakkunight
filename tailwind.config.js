/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

const textNeon = plugin(({ theme, addUtilities }) => {
  const colors = theme('colors');
  const neonUtilities = {};
  for(const color in colors){
    if(typeof colors[color] !== "object"){
      continue;
    }
    const color1 = colors[color]["400"];
    const color2 = colors[color]["500"];
    neonUtilities[`.text-neon-${color}-100`] = {
      filter: `drop-shadow(0 0 10px ${color2}) drop-shadow(0 0 1px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-200`] = {
      filter: `drop-shadow(0 0 20px ${color2}) drop-shadow(0 0 2px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-300`] = {
      filter: `drop-shadow(0 0 30px ${color2}) drop-shadow(0 0 3px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-400`] = {
      filter: `drop-shadow(0 0 40px ${color2}) drop-shadow(0 0 4px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-500`] = {
      filter: `drop-shadow(0 0 50px ${color2}) drop-shadow(0 0 5px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-600`] = {
      filter: `drop-shadow(0 0 60px ${color2}) drop-shadow(0 0 6px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-700`] = {
      filter: `drop-shadow(0 0 70px ${color2}) drop-shadow(0 0 7px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-800`] = {
      filter: `drop-shadow(0 0 80px ${color2}) drop-shadow(0 0 8px ${color1})`
    }
    neonUtilities[`.text-neon-${color}-900`] = {
      filter: `drop-shadow(0 0 90px ${color2}) drop-shadow(0 0 9px ${color1})`
    }
  }
  addUtilities(neonUtilities);
});
const neon = plugin(({ theme, addUtilities }) => {
  const colors = theme('colors');
  const neonUtilities = {};
  for(const color in colors){
    if(typeof colors[color] !== "object"){
      continue;
    }
    const color1 = colors[color]["400"];
    const color2 = colors[color]["500"];
    neonUtilities[`.neon-${color}-100`] = {
      boxShadow: `0 0 10px ${color2}, 0 0 1px ${color1}`
    }
    neonUtilities[`.neon-${color}-200`] = {
      boxShadow: `0 0 20px ${color2}, 0 0 2px ${color1}`
    }
    neonUtilities[`.neon-${color}-300`] = {
      boxShadow: `0 0 30px ${color2}, 0 0 3px ${color1}`
    }
    neonUtilities[`.neon-${color}-400`] = {
      boxShadow: `0 0 40px ${color2}, 0 0 4px ${color1}`
    }
    neonUtilities[`.neon-${color}-500`] = {
      boxShadow: `0 0 50px ${color2}, 0 0 5px ${color1}`
    }
    neonUtilities[`.neon-${color}-600`] = {
      boxShadow: `0 0 60px ${color2}, 0 0 6px ${color1}`
    }
    neonUtilities[`.neon-${color}-700`] = {
      boxShadow: `0 0 70px ${color2}, 0 0 7px ${color1}`
    }
    neonUtilities[`.neon-${color}-800`] = {
      boxShadow: `0 0 80px ${color2}, 0 0 8px ${color1}`
    }
    neonUtilities[`.neon-${color}-900`] = {
      boxShadow: `0 0 90px ${color2}, 0 0 9px ${color1}`
    }
  }
  addUtilities(neonUtilities);
});



export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        primary: "Fira Code"
      },
      animation: {},
      keyframes: {}
    },
  },
  plugins: [
    neon,
    textNeon
  ],
}

