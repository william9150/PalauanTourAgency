<template>
  <div class="page-container">
    <div class="header-section">
      <h1>冒險模式</h1>
      <p>探索帛琉的無限可能，選擇最適合你的冒險方式。</p>
    </div>

    <div class="tours-grid">
      <el-card v-for="tour in tours" :key="tour.id" class="tour-card" :body-style="{ padding: '0px' }">
        <img :src="tour.image" class="image" />
        <div style="padding: 14px">
          <h3>{{ $t(tour.titleKey) }}</h3>
          <p>{{ $t(tour.descKey) }}</p>
          <div class="bottom">
            <el-button type="primary" text @click="$router.push(`/tours/${tour.id}`)">了解更多</el-button>
          </div>
        </div>
      </el-card>
    </div>

    <div class="features-section">
      <h2>為什麼選擇我們？</h2>
      <div class="features-grid">
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><Trophy /></el-icon>
          <h4>合法註冊公司</h4>
          <p>Licensed Professionals</p>
        </div>
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><Ship /></el-icon>
          <h4>全方位旅遊內容</h4>
          <p>Full-Service Tours</p>
        </div>
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><House /></el-icon>
          <h4>風味民宿</h4>
          <p>Accommodation</p>
        </div>
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><User /></el-icon>
          <h4>私人定製旅遊</h4>
          <p>Private Customized Tours</p>
        </div>
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><Guide /></el-icon>
          <h4>專業嚮導</h4>
          <p>Professionals Local Guide</p>
        </div>
        <div class="feature-item">
          <el-icon :size="40" color="var(--el-color-primary)"><Camera /></el-icon>
          <h4>數位影像創作</h4>
          <p>Digital Content Creations</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trophy, Ship, House, User, Guide, Camera } from '@element-plus/icons-vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useTours } from '../composables/useTours'

const { t } = useI18n()
const { tours } = useTours()

useHead({
  title: computed(() => t('common.tours')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.tours_desc')),
    },
    {
      property: 'og:title',
      content: computed(() => `${t('common.tours')} | ${t('common.title')}`),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.tours_desc')),
    },
  ],
})
</script>

<style scoped>
.page-container {
  padding: 40px 20px;
  max-width: 1200px;
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
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}
.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.tour-card h3 {
  margin: 0 0 10px;
  color: var(--el-color-primary);
}
.tour-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  min-height: 42px;
}
.bottom {
  text-align: right;
}
.features-section {
  text-align: center;
  background: #f9f9f9;
  padding: 60px 20px;
  border-radius: 16px;
}
.features-section h2 {
  color: var(--el-color-primary);
  margin-bottom: 50px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
}
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feature-item h4 {
  margin: 15px 0 5px;
  color: #333;
}
.feature-item p {
  margin: 0;
  color: #999;
  font-size: 12px;
}
</style>
