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
      hostname: 'https://palauantour.com',
      dynamicRoutes: [
        '/tours/combos',
        '/tours/day-tours',
        '/tours/sup',
        '/tours/photo',
        '/about-palau/big-drop-off',
        '/about-palau/jellyfish-lake',
        '/about-palau/milky-way',
        '/about-palau/long-beach',
        '/about-palau/german-channel',
        '/about-palau/shark-city'
      ]
    }),
  ],
  // @ts-expect-error ssgOptions is not in UserConfig type
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
