import {
  addComponentsDir,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    configKey: 'featuredComponents',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },

  setup() {
    const resolver = createResolver(import.meta.url)

    addComponentsDir({
      path: resolver.resolve('../src/runtime/components'),
      pathPrefix: false,
      global: true,
    })
  },
})
