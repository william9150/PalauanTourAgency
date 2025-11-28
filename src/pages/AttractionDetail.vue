<template>
  <div class="page-container" v-if="attraction">
    <div class="header-section">
      <h1>{{ $t(attraction.titleKey) }}</h1>
    </div>

    <div class="attraction-content">
      <div class="attraction-image">
        <img :src="attraction.image" :alt="$t(attraction.titleKey)" />
      </div>

      <div class="attraction-info">
        <p class="description">{{ $t(attraction.descKey) }}</p>
        
        <div class="full-desc" v-if="attraction.fullDescKey">
          <h3>詳細介紹</h3>
          <p>{{ $t(attraction.fullDescKey) }}</p>
        </div>

        <div class="action-area">
          <el-button type="primary" size="large" @click="$router.push('/booking')">{{ $t('common.booking') }}</el-button>
          <el-button size="large" @click="$router.push('/about-palau')">返回列表</el-button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <p>找不到該景點</p>
    <el-button @click="$router.push('/about-palau')">返回列表</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAttractions } from '../composables/useAttractions'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { getAttractionById } = useAttractions()
const { t } = useI18n()

const attraction = computed(() => getAttractionById(route.params.id as string))

useHead({
  title: computed(() => attraction.value ? `${t(attraction.value.titleKey)} | Palauan Tour` : 'Palauan Tour')
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.header-section {
  text-align: center;
  margin-bottom: 40px;
}
.header-section h1 {
  color: var(--el-color-primary);
}
.attraction-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.attraction-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.attraction-info {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 16px;
}
.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
}
.full-desc h3 {
  color: var(--el-color-secondary);
  margin-bottom: 15px;
}
.action-area {
  margin-top: 40px;
  display: flex;
  gap: 20px;
}
.not-found {
  text-align: center;
  padding: 100px 0;
}

@media (max-width: 768px) {
  .attraction-content {
    grid-template-columns: 1fr;
  }
}
</style>
