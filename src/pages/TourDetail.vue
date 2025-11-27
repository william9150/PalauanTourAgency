<template>
  <div class="page-container" v-if="tour">
    <div class="header-section">
      <h1>{{ $t(tour.titleKey) }}</h1>
    </div>

    <div class="tour-content">
      <div class="tour-image">
        <img :src="tour.image" :alt="$t(tour.titleKey)" />
      </div>

      <div class="tour-info">
        <p class="description">{{ $t(tour.descKey) }}</p>
        
        <div class="features">
          <h3>行程特色</h3>
          <ul>
            <li v-for="feature in tour.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>

        <div class="full-desc" v-if="tour.fullDescKey">
          <h3>詳細介紹</h3>
          <p>{{ $t(tour.fullDescKey) }}</p>
        </div>

        <div class="action-area">
          <el-button type="primary" size="large" @click="$router.push('/booking')">{{ $t('common.booking') }}</el-button>
          <el-button size="large" @click="$router.push('/tours')">返回列表</el-button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <p>找不到該行程</p>
    <el-button @click="$router.push('/tours')">返回列表</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTours } from '../composables/useTours'
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { getTourById } = useTours()
const { t } = useI18n()

const tour = computed(() => getTourById(route.params.id as string))

useHead({
  title: computed(() => tour.value ? `${t(tour.value.titleKey)} | Palauan Tour` : 'Palauan Tour')
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
.tour-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.tour-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.tour-info {
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
.features h3, .full-desc h3 {
  color: var(--el-color-secondary);
  margin-bottom: 15px;
}
.features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}
.features li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}
.features li::before {
  content: "✓";
  color: var(--el-color-success);
  position: absolute;
  left: 0;
  font-weight: bold;
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
  .tour-content {
    grid-template-columns: 1fr;
  }
}
</style>
