<template>
  <div class="page-container">
    <div class="header-section">
      <h1>冒險模式</h1>
      <p>探索帛琉的無限可能，選擇最適合你的冒險方式。</p>
    </div>

    <div class="tours-grid">
      <el-card class="tour-card" :body-style="{ padding: '0px' }">
        <img src="../assets/tours-combo.png" class="image" />
        <div style="padding: 14px">
          <h3>住宿 & 旅遊套裝 (Combos)</h3>
          <p>一站式服務，包含精選住宿與經典行程，讓您輕鬆享受假期，無須煩惱瑣事。</p>
          <div class="bottom">
            <el-button type="primary" text @click="$router.push('/booking')">了解更多</el-button>
          </div>
        </div>
      </el-card>

      <el-card class="tour-card" :body-style="{ padding: '0px' }">
        <img src="../assets/tours-day.png" class="image" />
        <div style="padding: 14px">
          <h3>一日精選 (Day Tours)</h3>
          <p>精選帛琉最熱門的景點，大斷層、水母湖、牛奶湖，一天之內盡收眼底。</p>
          <div class="bottom">
            <el-button type="primary" text @click="$router.push('/booking')">了解更多</el-button>
          </div>
        </div>
      </el-card>

      <el-card class="tour-card" :body-style="{ padding: '0px' }">
        <img src="../assets/tours-sup.png" class="image" />
        <div style="padding: 14px">
          <h3>SUP 立槳遠征 (Stand Up Paddleboard)</h3>
          <p>划著 SUP 穿梭在洛克群島的秘境之中，享受寧靜與壯麗的自然風光。</p>
          <div class="bottom">
            <el-button type="primary" text @click="$router.push('/booking')">了解更多</el-button>
          </div>
        </div>
      </el-card>

      <el-card class="tour-card" :body-style="{ padding: '0px' }">
        <img src="../assets/tours-photo.png" class="image" />
        <div style="padding: 14px">
          <h3>數位影像創作 (Digital Content Creations)</h3>
          <p>專業攝影師隨行，為您記錄下每一個精彩瞬間，留下最美的回憶。</p>
          <div class="bottom">
            <el-button type="primary" text @click="$router.push('/booking')">了解更多</el-button>
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
