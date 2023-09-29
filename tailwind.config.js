
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("daisify-shadcn"),
  ],

  daisyui: {
    themes: [
      {
        custom: {
          primary: "#433922",
          secondary: "#34d399",

          accent: "#a3e635",

          neutral: "#ffe4e6",

          "base-100": "#ffffff",

          info: "#62c2d5",

          success: "#25bbac",

          warning: "#c88314",

          error: "#e77982",
        },
        cupcake: {
          ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
          primary: "#4f4530",
          "primary-content": "#ffffff",
          secondary: "#850a0a",
          "secondary-content": "#ffffff",
        },
      },
      "light",
      "dark",

      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
};
