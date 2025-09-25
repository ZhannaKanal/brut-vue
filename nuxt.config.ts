// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  css: ['./assets/css/tailwind.css'],

  image: {
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280 }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
