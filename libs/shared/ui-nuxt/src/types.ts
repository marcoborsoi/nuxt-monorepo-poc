export interface SharedUiOptions {
  /**
   * Choose which CSS modules will be added to nuxt
   *
   * If `true`, all CSS modules will be added. If `false`, no CSS modules will be added.
   * If an array, only CSS modules from this array will be added.
   *
   * @default true
   */
  css: boolean

  /**
   * Use Shared Ui default fonts.
   *
   * If `false` you will need to install fonts manually. If you're going to use different font, don't forget to change `--va-font-family` CSS variable.
   *
   * @notice this option adds `Graphik` and `Material Icons` fonts.
   *
   * @default true
   */
  fonts: boolean
}

/** Declare SharedUi module options in NuxtConfig */
declare module '@nuxt/schema' {
  interface NuxtConfig {
    sharedUi?: Partial<SharedUiOptions>
  }
}
