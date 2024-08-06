import { addImports } from '@nuxt/kit'
import { resolveInRuntime } from './../utils/resolve'
import importNames from '../config/composables'
import type { Import } from 'unimport'

export const useComposables = () => {
  const composablesFrom = resolveInRuntime('./runtime/composables.mjs')
  const autoImportsList = importNames.map<Import>(item => ({
    name: item,
    as: item,
    from: composablesFrom,
  }))

  addImports(autoImportsList)
}
