<template>
  <div class="page-container">
    <div class="header-section">
      <h1>裝備租借價目表</h1>
      <p>帶上自己習慣的裝備，剩下的交給 PALAUAN TOUR！</p>
    </div>

    <div class="tables-container">
      <h2>1. 浮潛 & 自潛裝備 (Snorkeling & Free Diving)</h2>
      <!-- @vue-ignore -->
      <el-table :data="snorkelingData" style="width: 100%" stripe border>
        <el-table-column prop="item" label="項目" />
        <el-table-column prop="price" label="租金 (每天)" width="150" />
        <el-table-column prop="compensation" label="遺失/損毀賠償" width="180" />
      </el-table>

      <h2 style="margin-top: 50px;">2. 水肺潛水裝備 (Scuba Diving)</h2>
      <!-- @vue-ignore -->
      <el-table :data="scubaData" style="width: 100%" stripe border>
        <el-table-column prop="item" label="項目" />
        <el-table-column prop="price" label="租金 (每天)" width="150" />
        <el-table-column prop="compensation" label="遺失/損毀賠償" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
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
h2 {
  color: var(--el-color-primary);
  margin-bottom: 20px;
}
</style>
