// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ['@myorg/shared-ui-nuxt'],

  // nitro: {
  //   preset: 'vercel',
  // },

  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         chunkFileNames: '_nuxt/[name].[hash].js',
  //         entryFileNames: '_nuxt/[name].[hash].js',
  //       },
  //     },
  //   },
  // },
})