import { build } from 'vite'
import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = new URL('../', import.meta.url)
const at = path => fileURLToPath(new URL(path, root))
await build({
  root: at('.'),
  configFile: false,
  publicDir: false,
  build: {
    target: 'es2022',
    outDir: at('dist'),
    lib: {
      entry: at('src/rack-scene.js'),
      name: 'Rack3D',
      formats: ['es', 'iife'],
      fileName: format => format === 'es' ? 'rack-scene.mjs' : 'rack-scene.iife.js',
    },
  },
})

const code = await readFile(at('dist/rack-scene.iife.js'), 'utf8')
const license = await readFile(at('THREE-LICENSE.txt'), 'utf8')
const template = await readFile(at('embed.html'), 'utf8')
const html = template.replace('<!-- RACK_RUNTIME -->', () =>
  '<script>\n/*\n' + license + '\n*/\n' + code.replace(/<\/script/gi, '<\\/script') + '\n</script>')
await writeFile(at('dist/rack-viewer.html'), html)
await copyFile(at('equipment-layout/设备货架布局.html'), at('dist/rack-embed.html'))
await copyFile(at('THREE-LICENSE.txt'), at('dist/THREE-LICENSE.txt'))
