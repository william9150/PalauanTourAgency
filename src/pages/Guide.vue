<template>
  <div class="page-container">
    <div class="header-section">
      <h1>{{ $t('common.guide') }}</h1>
      <p>歡迎來到彩虹的故鄉！在開始探險之前，請先閱讀這份常見問題指南。</p>
    </div>

    <div class="guide-image">
      <img src="../assets/exploration-guide.png" alt="Exploration Guide" />
    </div>

    <el-tabs type="border-card" class="guide-tabs">
      <el-tab-pane label="行前準備">
        <h2>✈️ 行前準備與簽證</h2>
        
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
        <h2>🛃 入境須知</h2>
        
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
        <h2>💰 當地生活實用資訊</h2>
        
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

      <el-tab-pane label="裝備租借">
        <h2>🤿 裝備租借價目表</h2>
        <p style="margin-bottom: 20px;">帶上自己習慣的裝備，剩下的交給 PALAUAN TOUR！</p>

        <h3>1. 浮潛 & 自潛裝備 (Snorkeling & Free Diving)</h3>
        <!-- @vue-ignore -->
        <el-table :data="snorkelingData" style="width: 100%" stripe border>
          <el-table-column prop="item" label="項目" />
          <el-table-column prop="price" label="租金 (每天)" width="150" />
          <el-table-column prop="compensation" label="遺失/損毀賠償" width="180" />
        </el-table>

        <h3 style="margin-top: 40px;">2. 水肺潛水裝備 (Scuba Diving)</h3>
        <!-- @vue-ignore -->
        <el-table :data="scubaData" style="width: 100%" stripe border>
          <el-table-column prop="item" label="項目" />
          <el-table-column prop="price" label="租金 (每天)" width="150" />
          <el-table-column prop="compensation" label="遺失/損毀賠償" width="180" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const packingList = ref([])

interface RentalItem {
  item: string
  price: string
  compensation: string
}

const snorkelingData: RentalItem[] = [
  { item: '面鏡 + 呼吸管', price: '$6', compensation: '$ 30' },
  { item: '自潛長蛙', price: '$10', compensation: '$ 100' },
  { item: '防寒衣', price: '$10', compensation: '$ 100' },
  { item: '浮潛救生衣', price: '$15', compensation: '$ 350' },
  { item: '防寒外套', price: '$10', compensation: '$ 180' },
  { item: '自潛配重帶', price: '$5', compensation: '$ 40' },
  { item: '1kg 鉛塊 (1pcs)', price: '$2', compensation: '$ 10' },
  { item: '電腦錶', price: '$15', compensation: '$ 350' },
  { item: '指北針', price: '$6', compensation: '$ 100' },
  { item: '潛水手電筒', price: '$5', compensation: '$ 200' },
  { item: '自潛浮球', price: '$20', compensation: '$ 150 (底鉛&繩子另計)' },
  { item: '流勾', price: '$5', compensation: '$ 20' },
]

const scubaData: RentalItem[] = [
  { item: 'BCD (浮力補償裝置)', price: '$15', compensation: '$ 500' },
  { item: '轉接頭 DIN', price: '$8', compensation: '$ 80' },
  { item: '二極頭 (調節器)', price: '$15', compensation: '$ 750' },
  { item: '防寒衣', price: '$10', compensation: '$ 100' },
  { item: '防寒外套', price: '$10', compensation: '$ 180' },
  { item: '電腦錶', price: '$15', compensation: '$ 350' },
  { item: '潛水手電筒', price: '$5', compensation: '$ 200' },
  { item: '指北針', price: '$6', compensation: '$ 100' },
  { item: '蛙鞋', price: '$6', compensation: '$ 80' },
  { item: '1kg 鉛塊 (1pcs)', price: '$2', compensation: '$ 10' },
  { item: '浮力棒 & SMB', price: '$15', compensation: '$ 50' },
  { item: '流勾', price: '$5', compensation: '$ 20' },
]
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
  margin-bottom: 15px;
}
</style>
