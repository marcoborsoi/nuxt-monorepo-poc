import { useNuxt } from '@nuxt/kit'

export const useTranspile = () => {
  const nuxt = useNuxt()

  nuxt.options.build.transpile.push('@myorg/shared-ui')
}
