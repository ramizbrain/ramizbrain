// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  theme: {},
  modules: ["@nuxt/content"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      inter: [100, 400],
    },
  },
});
