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
      <el-tab-pane :label="$t('guide.tabs.preparation')">
        <h2>{{ $t('guide.preparation.title') }}</h2>
        
        <h3>{{ $t('guide.preparation.visa_title') }}</h3>
        <p v-html="$t('guide.preparation.visa_content')"></p>

        <h3>{{ $t('guide.preparation.packing_title') }}</h3>
        <el-checkbox-group v-model="packingList" disabled>
          <el-checkbox :label="$t('guide.preparation.packing_list.item1')" checked />
          <el-checkbox :label="$t('guide.preparation.packing_list.item2')" checked />
          <el-checkbox :label="$t('guide.preparation.packing_list.item3')" checked />
          <el-checkbox :label="$t('guide.preparation.packing_list.item4')" checked />
          <el-checkbox :label="$t('guide.preparation.packing_list.item5')" checked />
        </el-checkbox-group>

        <el-alert :title="$t('guide.preparation.alert_title')" type="error" :closable="false" show-icon style="margin-top: 20px;">
          <p v-html="$t('guide.preparation.alert_content_1')"></p>
          <p>{{ $t('guide.preparation.alert_content_2') }}</p>
        </el-alert>
      </el-tab-pane>

      <el-tab-pane :label="$t('guide.tabs.entry')">
        <h2>{{ $t('guide.entry.title') }}</h2>
        
        <h3>{{ $t('guide.entry.ppef_title') }}</h3>
        <p v-html="$t('guide.entry.ppef_content')"></p>
        <p class="note">{{ $t('guide.entry.ppef_note') }}</p>

        <h3>{{ $t('guide.entry.pledge_title') }}</h3>
        <p>{{ $t('guide.entry.pledge_content') }}</p>

        <h3>{{ $t('guide.entry.form_title') }}</h3>
        <p>{{ $t('guide.entry.form_content') }}</p>
        <p>{{ $t('guide.entry.form_url_label') }}<a href="https://palautravel.pw/" target="_blank">https://palautravel.pw/</a></p>

        <h3>{{ $t('guide.entry.customs_title') }}</h3>
        <ul class="info-list">
          <li v-html="$t('guide.entry.customs_list.alcohol')"></li>
          <li v-html="$t('guide.entry.customs_list.tobacco')"></li>
          <li v-html="$t('guide.entry.customs_list.ecig')"></li>
          <li v-html="$t('guide.entry.customs_list.cash')"></li>
        </ul>
      </el-tab-pane>

      <el-tab-pane :label="$t('guide.tabs.life')">
        <h2>{{ $t('guide.life.title') }}</h2>
        
        <h3>{{ $t('guide.life.money_title') }}</h3>
        <p>{{ $t('guide.life.money_content') }}</p>

        <h3>{{ $t('guide.life.network_title') }}</h3>
        <p v-html="$t('guide.life.network_content')"></p>
        <p v-html="$t('guide.life.voltage_content')"></p>

        <h3>{{ $t('guide.life.tips_title') }}</h3>
        <ul class="info-list">
          <li>{{ $t('guide.life.tips_list.porter') }}</li>
          <li>{{ $t('guide.life.tips_list.housekeeping') }}</li>
          <li>{{ $t('guide.life.tips_list.boatman') }}</li>
          <li>{{ $t('guide.life.tips_list.guide_service') }}</li>
          <li>{{ $t('guide.life.tips_list.guide') }}</li>
        </ul>
      </el-tab-pane>

      <el-tab-pane :label="$t('guide.tabs.rental')">
        <h2>{{ $t('guide.rental.title') }}</h2>
        <p style="margin-bottom: 20px;">{{ $t('guide.rental.subtitle') }}</p>

        <h3>{{ $t('guide.rental.snorkeling_title') }}</h3>
        <!-- @vue-ignore -->
        <el-table :data="snorkelingData" style="width: 100%" stripe border>
          <el-table-column prop="item" :label="$t('guide.rental.table.item')" />
          <el-table-column prop="price" :label="$t('guide.rental.table.price')" width="150" />
          <el-table-column prop="compensation" :label="$t('guide.rental.table.compensation')" width="180" />
        </el-table>

        <h3 style="margin-top: 40px;">{{ $t('guide.rental.scuba_title') }}</h3>
        <!-- @vue-ignore -->
        <el-table :data="scubaData" style="width: 100%" stripe border>
          <el-table-column prop="item" :label="$t('guide.rental.table.item')" />
          <el-table-column prop="price" :label="$t('guide.rental.table.price')" width="150" />
          <el-table-column prop="compensation" :label="$t('guide.rental.table.compensation')" width="180" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: computed(() => t('common.guide')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.guide_desc')),
    },
    {
      property: 'og:title',
      content: computed(() => `${t('common.guide')} | ${t('common.title')}`),
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.guide_desc')),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '帛琉簽證需要辦理嗎？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '持有效期限 6 個月以上之中華民國護照正本，享 90 天免簽證待遇。'
            }
          },
          {
            '@type': 'Question',
            name: '去帛琉需要帶什麼？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '必備：護照、現金（美金）、信用卡、夏季衣服、泳衣、個人藥品、玩水裝備、物理防曬用品。嚴禁攜帶化學性防曬乳。'
            }
          },
          {
            '@type': 'Question',
            name: '帛琉電壓是多少？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '110V 雙孔，插座與台灣相通，不需轉接頭。'
            }
          },
          {
            '@type': 'Question',
            name: '帛琉網路狀況如何？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '海上無訊號。建議購買網卡，五天無限流量吃到飽約 US$20。'
            }
          },
          {
            '@type': 'Question',
            name: '帛琉小費怎麼給？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '建議金額：導遊每天 US$10，領隊每天 US$5，船家每次 US$2，床頭小費每天 US$1。'
            }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://palauantour.zeabur.app/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guide',
            item: 'https://palauantour.zeabur.app/guide'
          }
        ]
      })
    }
  ]
})

const packingList = ref([
  '護照、現金（美金）、信用卡',
  '夏季衣服、泳衣',
  '個人藥品',
  '玩水裝備 (面鏡、呼吸管、防水相機)',
  '物理防曬用品 (墨鏡、帽子、毛巾衣)'
])

interface RentalItem {
  item: string
  price: string
  compensation: string
}

const snorkelingData = computed<RentalItem[]>(() => [
  { item: t('guide.rental.items.mask_snorkel'), price: '$6', compensation: '$ 30' },
  { item: t('guide.rental.items.long_fins'), price: '$10', compensation: '$ 100' },
  { item: t('guide.rental.items.wetsuit'), price: '$10', compensation: '$ 100' },
  { item: t('guide.rental.items.life_jacket'), price: '$15', compensation: '$ 350' },
  { item: t('guide.rental.items.windbreaker'), price: '$10', compensation: '$ 180' },
  { item: t('guide.rental.items.weight_belt'), price: '$5', compensation: '$ 40' },
  { item: t('guide.rental.items.weight'), price: '$2', compensation: '$ 10' },
  { item: t('guide.rental.items.computer'), price: '$15', compensation: '$ 350' },
  { item: t('guide.rental.items.compass'), price: '$6', compensation: '$ 100' },
  { item: t('guide.rental.items.torch'), price: '$5', compensation: '$ 200' },
  { item: t('guide.rental.items.buoy'), price: '$20', compensation: '$ 150 (底鉛&繩子另計)' },
  { item: t('guide.rental.items.reef_hook'), price: '$5', compensation: '$ 20' },
])

const scubaData = computed<RentalItem[]>(() => [
  { item: t('guide.rental.items.bcd'), price: '$15', compensation: '$ 500' },
  { item: t('guide.rental.items.adapter'), price: '$8', compensation: '$ 80' },
  { item: t('guide.rental.items.regulator'), price: '$15', compensation: '$ 750' },
  { item: t('guide.rental.items.wetsuit'), price: '$10', compensation: '$ 100' },
  { item: t('guide.rental.items.windbreaker'), price: '$10', compensation: '$ 180' },
  { item: t('guide.rental.items.computer'), price: '$15', compensation: '$ 350' },
  { item: t('guide.rental.items.torch'), price: '$5', compensation: '$ 200' },
  { item: t('guide.rental.items.compass'), price: '$6', compensation: '$ 100' },
  { item: t('guide.rental.items.fins'), price: '$6', compensation: '$ 80' },
  { item: t('guide.rental.items.weight'), price: '$2', compensation: '$ 10' },
  { item: t('guide.rental.items.smb'), price: '$15', compensation: '$ 50' },
  { item: t('guide.rental.items.reef_hook'), price: '$5', compensation: '$ 20' },
])
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
.note {
  font-size: 0.9rem;
  color: #666;
  margin-top: -10px;
  margin-bottom: 15px;
}
</style>
