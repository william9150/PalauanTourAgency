<template>
  <div class="page-container">
    <div class="header-section">
      <h1>帛琉旅行探險手冊</h1>
      <p>歡迎來到彩虹的故鄉！在開始探險之前，請先閱讀這份常見問題指南。</p>
    </div>

    <div class="guide-image">
      <img src="../assets/exploration-guide.png" alt="Exploration Guide" />
    </div>

    <el-tabs type="border-card" class="guide-tabs">
      <el-tab-pane label="玩家宣示">
        <div class="pledge-section">
          <h2>🌟 第一章：玩家宣示 (The Pledge)</h2>
          <blockquote class="pledge-text">
            我懷著感恩的心，珍惜帛琉的海洋與土地。<br>
            我不傷害生物，也不拿取不屬於我的東西。<br>
            我善待島上居民，以尊重與敬仰守護文化。<br>
            我不留下垃圾與汙染，只留下笑容與回憶恩典。
          </blockquote>
        </div>
      </el-tab-pane>

      <el-tab-pane label="認識帛琉">
        <h2>🌏 第二章：認識帛琉 (About Palau)</h2>
        <ul class="info-list">
          <li><strong>地理與人口</strong>：面積 484km²（約 1.8 個台北），島民約 16,000 人。</li>
          <li><strong>語言溝通</strong>：官方語言是英文，簡單溝通大家都會懂。</li>
          <li><strong>飛行時間</strong>：直飛約 4 小時。</li>
          <li><strong>時差</strong>：比台灣快 1 個小時。</li>
          <li><strong>氣候</strong>：海島型氣候，年均溫 28~32°C。容易看見彩虹，故有「彩虹故鄉」之稱。</li>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="行前準備">
        <h2>✈️ 第三章：行前準備與簽證</h2>
        
        <h3>1. 簽證資訊</h3>
        <p>持有效期限 6 個月以上之中華民國護照正本，享 <strong>90 天免簽證</strong>待遇。</p>

        <h3>2. 必備物品清單</h3>
        <el-checkbox-group v-model="packingList" disabled>
          <el-checkbox label="護照、現金（美金）、信用卡" checked />
          <el-checkbox label="夏季衣服、泳衣" checked />
          <el-checkbox label="個人藥品" checked />
          <el-checkbox label="玩水裝備 (面鏡、呼吸管、防水相機)" checked />
          <el-checkbox label="物理防曬用品 (墨鏡、帽子、毛巾衣)" checked />
        </el-checkbox-group>

        <el-alert title="重要禁忌" type="error" :closable="false" show-icon style="margin-top: 20px;">
          <p><strong>嚴禁化學性防曬乳</strong>：攜帶入境或販售都會被沒收，並處 US$1,000 罰鍰。</p>
          <p><strong>行動電源</strong>：飛行中全程禁用，請隨身攜帶（不可託運）。</p>
        </el-alert>
      </el-tab-pane>

      <el-tab-pane label="入境須知">
        <h2>🛃 第四章：入境須知</h2>
        
        <h3>1. 入境表格填寫</h3>
        <p>出發前 72 小時內需線上填寫「報關單」及「入境卡」。</p>
        <p>網址：<a href="https://palautravel.pw/" target="_blank">https://palautravel.pw/</a></p>

        <h3>2. 海關攜帶限制</h3>
        <ul class="info-list">
          <li><strong>酒類</strong>：1 公升裝僅限一人一瓶。</li>
          <li><strong>香菸</strong>：每位成年人（滿 21 歲）僅限攜帶 <strong>一包 19 支</strong>（需拆封）。</li>
          <li><strong>現金</strong>：隨身攜帶請勿超過 US$10,000。</li>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="當地生活">
        <h2>💰 第五章：當地生活實用資訊</h2>
        
        <h3>消費與現金</h3>
        <p>建議攜帶現金 US$300~500。賣場可刷卡，但多數店家只接受現金。</p>

        <h3>網路與電壓</h3>
        <p><strong>網路</strong>：海上無訊號。網卡五天無限流量吃到飽約 US$20。</p>
        <p><strong>電壓</strong>：110V 雙孔，插座與台灣相通。</p>

        <h3>小費文化 (建議金額)</h3>
        <ul class="info-list">
          <li>旅館行李員：每人每次 US$1</li>
          <li>床頭小費：每間每天 US$1</li>
          <li>船家：每次出海 US$2</li>
          <li>領隊服務費：每天 US$5</li>
          <li>導遊：每天 US$10</li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const packingList = ref([])
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
.guide-image img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.pledge-section {
  text-align: center;
  padding: 40px;
  background: #f0f9eb;
  border-radius: 8px;
}
.pledge-text {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--el-color-success);
  line-height: 2;
}
.info-list {
  list-style: none;
  padding: 0;
}
.info-list li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}
.info-list li::before {
  content: "•";
  color: var(--el-color-primary);
  position: absolute;
  left: 0;
}
h2 {
  color: var(--el-color-primary);
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
h3 {
  color: var(--el-color-secondary);
  margin-top: 30px;
}
</style>
