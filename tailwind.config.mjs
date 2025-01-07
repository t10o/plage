/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#eeeef1",
        font: "#333333",
      },
      boxShadow: {
        down: "1px 1px 2px hsl(0deg 0% 100% / 69%), -1px -1px 2px rgb(0 0 0 / 10%), inset -2px -2px 3px hsl(0deg 0% 100% / 69%), inset 2px 2px 6px rgb(0 0 0 / 12%)",
        up: "4px 4px 4px rgba(0,0,0,.1), inset 4px 4px 8px hsla(0,0%,100%,.6), inset -4px -4px 8px rgba(0,0,0,.05)",
      },
      fontFamily: {
        notoSansJp: ["Noto Sans JP Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
