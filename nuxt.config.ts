// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts
//import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  // Другие настройки...
  compatibilityDate: '2024-04-05',
  devtools: { enabled: false },
  css: ['~/assets/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});