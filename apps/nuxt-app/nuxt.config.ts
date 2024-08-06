// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: 'custom',
  },

  compatibilityDate: '2024-02-21',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  features: {
    devLogs: false,
  },

  imports: {
    autoImport: false,
  },

  modules: ['@myorg/shared-ui-nuxt', '@myorg/shared-featured-components'],

  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'custom/[name].[hash].js',
            entryFileNames: 'custom/[name].[hash].js',
          },
        },
      },
    },
  },
})