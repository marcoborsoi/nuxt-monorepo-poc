import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-02',

  devServer: {
    port: 3001,
    https: true,
  },

  modules: ['@myorg/shared-ui-nuxt'],

  sharedUi: { css: true, fonts: true },
})