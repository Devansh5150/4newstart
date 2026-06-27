import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          100: '#fcfbf8',
          200: '#f6f3eb',
          300: '#efeadd',
          400: '#e5decb',
          500: '#d5c7b3', // Main wall color
          600: '#bfae94',
        },
        walnut: {
          400: '#5c4a3d',
          500: '#43342a', // Wood elements
          600: '#32251d',
          700: '#231812',
        },
        stone: {
          300: '#a3a39e',
          400: '#8c8c88', // Sills, arches
          500: '#6b6b67',
        },
        terracotta: {
          400: '#bd6a53',
          500: '#9b533e', // Flower pots
          600: '#7a3e2a',
        },
        iron: {
          900: '#1a1a1a', // Hinges, wrought iron
        },
        amber: {
          light: 'rgba(255, 214, 133, 0.4)', // Warm light leak
          glow: 'rgba(255, 191, 71, 0.6)', // Lantern glow
          strong: 'rgba(255, 166, 0, 0.8)',
        }
      },
      backgroundImage: {
        'plaster-texture': "url('/textures/plaster.png')",
        'wood-texture': "url('/textures/wood.png')",
        'stone-texture': "url('/textures/stone.png')",
        'paper-texture': "url('/textures/paper.png')",
      },
      boxShadow: {
        'window': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(255, 255, 255, 0.1)',
        'window-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 2px 5px rgba(255, 255, 255, 0.15)',
        'door': '0 15px 40px -10px rgba(0, 0, 0, 0.6), inset 0 -2px 10px rgba(0,0,0,0.8)',
        'lantern': '0 0 40px 10px rgba(255, 191, 71, 0.3)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
