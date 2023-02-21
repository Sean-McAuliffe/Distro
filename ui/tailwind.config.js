/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          'primary': '#180e98',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',
          'neutral': '#3b424e',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',
          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
      {
        dark: {
          "primary": "#1d4ed8",
          "secondary": "#5b21b6",
          "accent": "#1FB2A5",
          "neutral": "#374151",
          "base-100": "#111827",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }
}
