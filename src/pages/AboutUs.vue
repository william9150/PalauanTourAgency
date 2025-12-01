<template>
  <div class="page-container">
    <div class="header-section">
      <h1>{{ $t('common.about_us') }}</h1>
      <p>{{ $t('aboutus.subtitle') }}</p>
    </div>

    <div class="content-section">
      <div class="story-block">
        <h2>{{ $t('aboutus.story_title') }}</h2>
        <p>{{ $t('aboutus.story_p1') }}</p>
        <p>{{ $t('aboutus.story_p2') }}</p>
      </div>

      <div class="values-block">
        <h2>{{ $t('aboutus.values_title') }}</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>{{ $t('aboutus.value_1_title') }}</h3>
            <p>{{ $t('aboutus.value_1_desc') }}</p>
          </div>
          <div class="value-item">
            <h3>{{ $t('aboutus.value_2_title') }}</h3>
            <p>{{ $t('aboutus.value_2_desc') }}</p>
          </div>
          <div class="value-item">
            <h3>{{ $t('aboutus.value_3_title') }}</h3>
            <p>{{ $t('aboutus.value_3_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

useHead({
  title: computed(() => t('common.about_us')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.about_us_desc')),
    },
    {
      property: 'og:title',
      content: computed(() => `${t('common.about_us')} | ${t('common.title')}`),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.about_us_desc')),
    },
  ],
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}
.header-section {
  text-align: center;
  margin-bottom: 60px;
}
.header-section h1 {
  color: var(--el-color-primary);
  margin-bottom: 10px;
}
.story-block {
  margin-bottom: 60px;
  line-height: 1.8;
  color: #444;
}
.story-block h2 {
  color: var(--el-color-primary);
  margin-bottom: 20px;
}
.values-block h2 {
  text-align: center;
  color: var(--el-color-primary);
  margin-bottom: 40px;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
.value-item {
  text-align: center;
  padding: 20px;
  background: var(--color-background);
  border-radius: 8px;
}
.value-item h3 {
  color: var(--el-color-secondary);
  margin-bottom: 10px;
}
</style>
