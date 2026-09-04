/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#EDE3D3',       // Primary Warm Cream background
          sand: '#DCCDBA',        // Warm Sand background
          linen: '#F1E8DC',       // Soft Linen light section
          espresso: '#131D23',    // Primary Deep Espresso
          brown: '#45382F',       // Secondary Warm Brown
          terracotta: '#9A6048',  // Muted Terracotta Accent
          'terracotta-hover': '#86513B',
          bronze: '#B78A55',      // Primary Warm Gold Accent #B78A55
          gold: '#B78A55',        // Primary Warm Gold Accent #B78A55
          accent: '#B78A55',      // Global Accent Token #B78A55
          'bronze-light': '#FCD34D',
          text: '#131D23',        // Dark Body Text
          muted: '#6F6256',       // Muted Editorial Text
          'text-light': '#F5F0E7', // Cream Text for Dark Sections
          'muted-light': '#D4C9BC',
          border: 'rgba(19, 29, 35, 0.16)',
          'border-light': 'rgba(237, 227, 211, 0.22)',
          'border-terracotta': 'rgba(154, 96, 72, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Manrope"', 'system-ui', 'sans-serif'],
        editorial: ['"Manrope"', 'system-ui', 'sans-serif'],
        heading: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.22em',
        'ultra-wide': '0.32em',
      },
      boxShadow: {
        'terracotta-glow': '0 0 25px rgba(154, 96, 72, 0.25)',
        'bronze-glow': '0 0 25px rgba(183, 138, 85, 0.35)',
        'gold-glow': '0 0 25px rgba(183, 138, 85, 0.35)',
        'editorial': '0 20px 45px -15px rgba(19, 29, 35, 0.12)',
        'editorial-dark': '0 25px 50px -18px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
