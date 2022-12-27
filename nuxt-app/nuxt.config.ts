// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt-3-starter",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "description", content: "Starter template for Nuxt 3." }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
