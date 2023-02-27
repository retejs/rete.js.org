// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  telemetry: false,
  css: ['view-ui-plus/dist/styles/viewuiplus.css'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'uk', file: 'uk.json' },
    ],
    detectBrowserLanguage: {
      fallbackLocale: 'en',
    },
    lazy: true,
    defaultLocale: 'en',
    langDir: '/locales',
  },
});
