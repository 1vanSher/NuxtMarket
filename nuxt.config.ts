export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~~/assets/styles/global.scss'], // только глобальные стили

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~~/assets/styles/variable.scss" as *;',
        },
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
        },
      ],
    },
  },
})
