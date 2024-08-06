import { addComponent } from '@nuxt/kit'
import importNames from '../config/components'

export const useSharedUiComponents = () => {
  importNames.forEach(name => {
    addComponent({
      name,
      export: name,
      filePath: '@myorg/shared-ui',
    })
  })
}
