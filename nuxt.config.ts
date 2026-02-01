export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      title: 'Agent Crafter v2.0 - Professional AI Personality Builder',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
