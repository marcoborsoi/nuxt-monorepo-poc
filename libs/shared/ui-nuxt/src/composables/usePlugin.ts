// import { addPluginTemplate } from '@nuxt/kit'
// import { resolveInRuntime } from '../utils/resolve'
// import type { SharedUiOptions } from '../types'

// /** Register Shared Ui nuxt plugin */
// export const useSharedUiPlugin = (options: SharedUiOptions) => {
//   // const pluginPath = resolveInRuntime('./runtime/plugin.mjs')
//   const pluginPath = resolveInRuntime('./runtime/plugin.ts')

//   addPluginTemplate({
//     src: pluginPath,
//     filename: pluginPath.split('/').pop(),

//     // Use JSON.stringify() here, because it will be inserted in ejs template as string. Then we will JSON.parse it.
//     options: {
//       value: JSON.stringify(options),
//     },
//   })
// }
