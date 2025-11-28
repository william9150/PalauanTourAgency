<template>
  <div class="page-container">
    <div class="header-section">
      <h1>{{ $t('common.about_us') }}</h1>
      <p>我們是一群熱愛帛琉的探險家，致力於帶給您最真實、最感動的海洋體驗。</p>
    </div>

    <div class="content-section">
      <div class="story-block">
        <h2>品牌故事</h2>
        <p>Palauan Tour 成立於對這片海洋的熱愛。我們深信，旅行不只是走馬看花，更是一場與自然對話的靈魂之旅。</p>
        <p>我們的團隊由深耕帛琉多年的專業導遊組成，堅持小班制、高品質的服務，讓每一位旅人都能在安全、舒適的環境下，探索帛琉的秘境。</p>
      </div>

      <div class="values-block">
        <h2>核心價值</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>永續環保</h3>
            <p>堅持無痕海洋，守護這片蔚藍天堂。</p>
          </div>
          <div class="value-item">
            <h3>在地體驗</h3>
            <p>深入在地文化，體驗最道地的帛琉生活。</p>
          </div>
          <div class="value-item">
            <h3>專業安全</h3>
            <p>合法執照導遊，高規格安全標準。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
