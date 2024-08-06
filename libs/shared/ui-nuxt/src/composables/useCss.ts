import { useNuxt } from '@nuxt/kit'
import type { Nuxt, NuxtOptions } from '@nuxt/schema'
import type { SharedUiOptions } from '../types'

const SHAREDUI_DEFAULT_FONTS = [{ rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/graphik' }]

const registerDefaultFonts = (nuxt: Nuxt) => {
  nuxt.options.app = nuxt.options.app || ({} as NuxtOptions['app'])
  nuxt.options.app.head = nuxt.options.app.head || {}
  nuxt.options.app.head.link = nuxt.options.app.head.link || []
  nuxt.options.app.head.link.push(...SHAREDUI_DEFAULT_FONTS)
}

export const useSharedUiCSS = (options: SharedUiOptions) => {
  const nuxt = useNuxt()

  if (options.css) {
    nuxt.options.css.push('@myorg/shared-ui/dist/shared-ui.css')
  }

  if (options.fonts) {
    registerDefaultFonts(nuxt)
  }
}
