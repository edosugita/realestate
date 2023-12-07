import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#D7E5FF',
              100: '#BCD4FF',
              200: '#9BBEFF',
              300: '#7AA8FF',
              400: '#5893FF',
              500: '#377DFF',
              600: '#2E68D4',
              700: '#2553AA',
              800: '#1B3E80',
              900: '#122A55',
              DEFAULT: '#D7E5FF',
              'foreground': '#2553AA',
            }
          }
        }
      }
    })
  ]
}
export default config
