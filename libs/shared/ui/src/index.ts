import * as components from './lib/components'
import type { App } from 'vue'

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error ts(7053)
    app.component(key, components[key])
  }
}

export * from './lib/components'
export * from './lib/composables'
export default { install }
