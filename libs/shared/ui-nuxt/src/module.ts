import { addComponent, addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name, version } from '../package.json'
import type { SharedUiOptions } from './types'
import { /* useSharedUiComponents, */ useSharedUiCSS, useTranspile } from './composables'
// import { useComposables } from './composables/useComposables'

export default defineNuxtModule<SharedUiOptions>({
  meta: {
    name,
    version,
    configKey: 'sharedUi',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },

  defaults: {
    css: true,
    fonts: false,
  },

  setup(options) {
    const resolver = createResolver(import.meta.url)

    addComponentsDir({
      path: resolver.resolve('../src/runtime/components'),
      pathPrefix: false,
      global: true,
    })

    addComponent({
      name: 'VTag',
      export: 'VTag',
      filePath: '@myorg/shared-ui',
      // global: true,
    })

    useSharedUiCSS(options)
    // useSharedUiComponents()
    // useComposables()
    useTranspile()
  },
})
