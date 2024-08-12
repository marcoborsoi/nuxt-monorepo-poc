import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devServer: {
    port: 3001,
    https: true,
  },

  modules: ['@myorg/shared-ui-nuxt'],
})
