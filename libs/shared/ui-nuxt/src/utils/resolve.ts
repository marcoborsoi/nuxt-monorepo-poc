import { existsSync } from 'fs'
import { parse, resolve } from 'pathe'
import { distDir } from '../dirs'

export const resolveInRuntime = (path: string) => {
  const { ext, name, dir } = parse(path)

  if (ext === '.mjs') {
    const r = resolve(distDir, `${dir}/${name}.ts`)

    if (existsSync(r)) {
      return r
    }
  }

  return resolve(distDir, path)
}
