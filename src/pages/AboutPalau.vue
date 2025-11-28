<template>
  <div class="page-container">
    <div class="header-section">
      <h1>{{ $t('common.about_palau') }}</h1>
      <p>探索這個被上帝灑落在太平洋上的珍珠，彩虹的故鄉。</p>
    </div>

    <div class="content-section">
      <div class="pledge-section">
        <h2>🌟 玩家宣示 (The Pledge)</h2>
        <blockquote class="pledge-text">
          我懷著感恩的心，珍惜帛琉的海洋與土地。<br>
          我不傷害生物，也不拿取不屬於我的東西。<br>
          我善待島上居民，以尊重與敬仰守護文化。<br>
          我不留下垃圾與汙染，只留下笑容與回憶恩典。
        </blockquote>
      </div>

      <div class="about-section">
        <h2>🌏 認識帛琉 (About Palau)</h2>
        <ul class="info-list">
          <li><strong>地理與人口</strong>：面積 484km²（約 1.8 個台北），島民約 16,000 人。</li>
          <li><strong>語言溝通</strong>：官方語言是英文，簡單溝通大家都會懂。</li>
          <li><strong>飛行時間</strong>：直飛約 4 小時。</li>
          <li><strong>時差</strong>：比台灣快 1 個小時。</li>
          <li><strong>氣候</strong>：海島型氣候，年均溫 28~32°C。容易看見彩虹，故有「彩虹故鄉」之稱。</li>
        </ul>
      </div>

      <div class="attractions-section">
        <h2>🏝️ 必訪景點 (Must Visit)</h2>
        <div class="attractions-grid">
          <el-card v-for="attraction in attractions" :key="attraction.id" class="attraction-card" :body-style="{ padding: '0px' }" shadow="hover" @click="$router.push(`/about-palau/${attraction.id}`)">
            <img :src="attraction.image" class="image" />
            <div style="padding: 14px">
              <h3>{{ $t(attraction.titleKey) }}</h3>
              <p class="desc">{{ $t(attraction.descKey) }}</p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useAttractions } from '../composables/useAttractions'

const { t } = useI18n()
const { attractions } = useAttractions()

useHead({
  title: computed(() => t('common.about_palau')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.about_palau_desc')),
    },
    {
      property: 'og:title',
      content: computed(() => `${t('common.about_palau')} | ${t('common.title')}`),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.about_palau_desc')),
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
.pledge-section {
  text-align: center;
  padding: 40px;
  background: #f0f9eb;
  border-radius: 16px;
  margin-bottom: 40px;
}
.pledge-text {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--el-color-success);
  line-height: 2;
}
.about-section h2 {
  color: var(--el-color-primary);
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.info-list {
  list-style: none;
  padding: 0;
}
.info-list li {
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}
.info-list li::before {
  content: "•";
  color: var(--el-color-primary);
  position: absolute;
  left: 0;
}
.attractions-section {
  margin-top: 60px;
}
.attractions-section h2 {
  color: var(--el-color-primary);
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
.attractions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.attraction-card {
  cursor: pointer;
  transition: transform 0.3s;
}
.attraction-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-secondary);
  box-shadow: 0 8px 16px rgba(86, 191, 194, 0.2);
}
.attraction-card .image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.attraction-card h3 {
  margin: 0 0 10px 0;
  color: var(--el-color-primary);
}
.attraction-card .desc {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>
