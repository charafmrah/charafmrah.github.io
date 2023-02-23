/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "light-orange": "#E07A5F",
        "light-pink": "#D4CBE5",
        "light-green": "#81B29A",
        "light-yellow": "#F2CC8F",
        "dark-purple": "#3D405B",
        "blueish-purple": "#9BB1FF",
      },
    },
    plugins: [],
  },
};
