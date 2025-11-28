import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
    Sitemap({
      hostname: 'https://palauantour.zeabur.app',
      dynamicRoutes: [
        '/tours/combos',
        '/tours/day-tours',
        '/tours/sup',
        '/tours/photo'
      ]
    }),
  ],
  // @ts-expect-error ssgOptions is not in UserConfig type
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
