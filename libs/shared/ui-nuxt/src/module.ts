import { addComponent, addComponentsDir, createResolver, defineNuxtModule, useNuxt } from '@nuxt/kit'
import { name, version } from '../package.json'
import type { ModuleOptions } from '@nuxt/schema'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'sharedUi',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },

  setup() {
    const nuxt = useNuxt()
    const resolver = createResolver(import.meta.url)

    nuxt.options.build.transpile.push('@myorg/shared-ui')
    nuxt.options.css.push('@myorg/shared-ui/dist/shared-ui.css')
    
    // This works.
    addComponentsDir({
      path: resolver.resolve('../src/runtime/components'),
      pathPrefix: false,
      global: true,
    })

    // This works on nuxt@3.10.3 and below, but it does not work on nuxt@3.11.0 and above.
    addComponent({
      name: 'VSpan',
      export: 'VSpan',
      filePath: '@myorg/shared-ui',
    })
  },
})
