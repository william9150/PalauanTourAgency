<template>
  <div class="page-container">
    <div class="header-section">
      <h1>冒險守則：報名全攻略</h1>
      <p>歡迎各位冒險家！掌握報名通關的七大步驟，確保你的旅程順利無阻！</p>
    </div>

    <div class="guide-image">
      <img src="../assets/booking-guide.png" alt="Booking Guide" />
    </div>

    <div class="steps-container">
      <el-steps direction="vertical" :active="1">
        <el-step title="關卡一：開啟對話框 (Initiate Contact)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：建立連結</h4>
              <p>一切冒險的起點！請透過 <strong>Instagram</strong> 或 <strong>Line</strong> 私訊我們，告訴我們你想開啟帛琉對話。</p>
            </div>
          </template>
        </el-step>

        <el-step title="關卡二：客製化關卡設計 (Customize Your Journey)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：許下願望</h4>
              <p>告訴我們你的需求，讓我們為你量身打造專屬行程。</p>
              <ul class="info-list">
                <li>📍 <strong>旅遊日期</strong>：預計出發與結束時間。</li>
                <li>📍 <strong>旅遊人數</strong>：有多少冒險夥伴？</li>
                <li>📍 <strong>旅遊目的</strong>：(例：家族旅行、蜜月、員工旅遊...)</li>
                <li>📍 <strong>景點願望清單</strong>：(例：大斷層、鯊魚城、牛奶湖...)</li>
                <li>📍 <strong>想玩的活動</strong>：(例：浮潛、深潛、陸地遊...)</li>
                <li>📍 <strong>後勤需求</strong>：是否需要包車、包船、代訂機票住宿？</li>
              </ul>
            </div>
          </template>
        </el-step>

        <el-step title="關卡三：行程報價與討論 (Quotation & Discussion)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：初步規劃與溝通</h4>
              <p>收到需求後，我們會提供初步的行程檔案（PDF）與報價明細。</p>
              <el-alert title="重要規則" type="warning" :closable="false" show-icon>
                這還不是最終確認！如果你有新的想法，我們都會再提供更新版檔案給你。
              </el-alert>
            </div>
          </template>
        </el-step>

        <el-step title="關卡四：合約簽訂保障雙方 (Contract Signing)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：確認遊戲條款</h4>
              <p>在雙方確認最終版行程與報價沒問題後，我們會先簽立「旅遊定型化契約」以保障雙方權益。</p>
            </div>
          </template>
        </el-step>

        <el-step title="關卡五：遊戲付費下載01 - 訂金收取 (Deposit Payment)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：完成下訂</h4>
              <p>契約簽訂後，請將訂金（美金換算台幣）匯入指定的台灣旅行社公司帳號。</p>
              <p class="tip">💡 小提示：若需要開立公司抬頭和統編，請在此階段告知。</p>
            </div>
          </template>
        </el-step>

        <el-step title="🌟 重要插播：行程彈性規則">
          <template #description>
            <div class="step-content">
              <p>下訂之後一直到<strong>出發前一週</strong>，如果行程有任何問題或想法，都可以再進行調整或變動喔！</p>
            </div>
          </template>
        </el-step>

        <el-step title="關卡六：關卡包領取 (Pre-departure Package)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：取得完整裝備</h4>
              <p>在<strong>出發前 3 天</strong>，你將會收到完整的冒險裝備包資料：</p>
              <ol>
                <li>精美完整行程檔案</li>
                <li>入境填寫表格網址</li>
                <li>當地導遊聯絡資訊</li>
                <li>旅責險投保證明</li>
              </ol>
            </div>
          </template>
        </el-step>

        <el-step title="關卡七：遊戲付費下載02 - 當地尾款收取 (Final Payment)">
          <template #description>
            <div class="step-content">
              <h4>任務目標：抵達戰場</h4>
              <p>抵達帛琉確認行程無誤後，請直接以<strong>美金現金</strong>支付尾款。</p>
              <el-alert title="團體特別規則" type="error" :closable="false" show-icon>
                若團體超過 15 人(含) 以上，尾款可以接受直接以「台幣匯款」方式支付。
              </el-alert>
            </div>
          </template>
        </el-step>
      </el-steps>
    </div>
    
    <div class="cta-section">
      <h3>GAME START！祝您有一趟難忘的帛琉冒險之旅！</h3>
      <el-button type="primary" size="large" @click="$router.push('/contact')">立即開啟對話</el-button>
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
  margin-bottom: 40px;
}
.header-section h1 {
  color: var(--el-color-primary);
  margin-bottom: 10px;
}
.guide-image img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.steps-container {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.step-content {
  margin-bottom: 20px;
  color: #666;
}
.step-content h4 {
  margin: 10px 0;
  color: var(--el-color-primary);
}
.info-list {
  list-style: none;
  padding: 0;
}
.info-list li {
  margin-bottom: 5px;
}
.tip {
  color: var(--el-color-warning);
  font-weight: bold;
}
.cta-section {
  text-align: center;
  margin-top: 60px;
}
.cta-section h3 {
  margin-bottom: 20px;
  color: var(--el-color-success);
}
</style>
