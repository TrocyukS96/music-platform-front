import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height:{
        'content-height':'calc(100vh - 48px);'
      },
      gridTemplateColumns:{
        'header':'1fr 100px',
        'track-progress':'1fr auto',
        'player':'20% 1fr 20%'
      },
      maxWidth:{
        'max-w-260':'260px'
      }
    },
  },
  plugins: [],
}
export default config
