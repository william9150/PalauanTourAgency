<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const route = useRoute()
const { t } = useI18n()

const siteTitle = computed(() => {
  if (route.path === '/') return 'Palauan Tour'
  const pageTitle = route.meta.title ? t(`common.${route.meta.title}`) : ''
  return pageTitle ? `${pageTitle} | Palauan Tour` : 'Palauan Tour'
})

useHead({
  title: siteTitle,
})
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>
