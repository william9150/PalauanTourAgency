# Palauan Tour 官方網站

> 帛琉專業旅行社官方網站 - 永續旅行 × 海島探索

[Live Demo](#) | [Instagram](https://www.instagram.com/palauan_tour.co/) | [LINE](https://line.me/ti/p/YS6uwsGt3P)

## 📖 專案簡介

Palauan Tour 是一間位於帛琉的在地旅行社，提供專業中文導遊服務。本網站旨在整合行前資訊、透明化價格與服務模式，並引導使用者進入社群軟體完成諮詢與報名。

### 核心特色

- 🌊 **永續旅行理念** - 強調環保與海洋保護
- 🏝️ **在地專業導遊** - 提供專業中文導遊服務
- 🎮 **遊戲化體驗** - 以冒險風格呈現旅遊資訊
- 🌐 **多語言支援** - 繁體中文 / English
- 📱 **響應式設計** - 完美適配桌面與行動裝置

## 🛠️ 技術架構

### 核心技術

- **框架**: Vue 3.5 (Composition API + `<script setup>`)
- **建置工具**: Vite
- **UI 框架**: Element Plus
- **路由管理**: Vue Router
- **狀態/工具**: VueUse (含 Head 管理、視窗監聽等)
- **多語系**: Vue I18n
- **SEO 方案**: Vite-SSG (Static Site Generation)
- **開發語言**: TypeScript

### 設計系統

#### 色彩計畫

| 色碼 | 用途 |
|------|------|
| `#0077BE` | 品牌主色 - 深海藍 |
| `#56bfc2` | 次要色 - 淺海藍（牛奶湖意象） |
| `#fcd85d` | 點綴色 - 陽光黃（CTA按鈕） |
| `#40b682` | 成功色 - 環保綠 |
| `#FF9F43` | 警示色 - 橘色 |
| `#F5F5F5` | 背景色 |

## 📁 專案結構

```
PalauanTourAgency/
├── src/
│   ├── assets/          # 靜態資源（圖片、Logo等）
│   ├── components/      # 共用元件
│   │   ├── AppHeader.vue       # 導航列
│   │   ├── AppFooter.vue       # 頁尾
│   │   └── FloatingBtn.vue     # 浮動聯絡按鈕
│   ├── composables/     # 組合式函數
│   │   ├── useTours.ts         # 行程資料管理
│   │   └── useAttractions.ts   # 景點資料管理
│   ├── locales/         # 多語言檔案
│   │   ├── zh-TW.json          # 繁體中文
│   │   └── en-US.json          # 英文
│   ├── pages/           # 頁面元件
│   │   ├── Home.vue            # 首頁
│   │   ├── AboutUs.vue         # 品牌故事
│   │   ├── AboutPalau.vue      # 認識帛琉
│   │   ├── AttractionDetail.vue # 景點詳情
│   │   ├── Tours.vue           # 冒險模式
│   │   ├── TourDetail.vue      # 行程詳情
│   │   ├── Guide.vue           # 探險手冊
│   │   └── Booking.vue         # 報名攻略
│   ├── router/          # 路由配置
│   ├── styles/          # 全域樣式
│   └── App.vue          # 根元件
├── docs/                # 專案文件
└── public/              # 公開資源
```

## 🚀 快速開始

### 環境需求

- Node.js >= 16
- npm >= 7

### 安裝

```bash
# 克隆專案
git clone https://github.com/william9150/PalauanTourAgency.git

# 進入專案目錄
cd PalauanTourAgency

# 安裝依賴
npm install
```

### 開發

```bash
# 啟動開發伺服器
npm run dev

# 開啟瀏覽器訪問 http://localhost:5173
```

### 建置

```bash
# 建置生產版本（含 SSG）
npm run build

# 預覽建置結果
npm run preview
```

### 型別檢查

```bash
# TypeScript 型別檢查
npm run type-check
```

## 📄 頁面架構

### 首頁 (Home)
- Hero Section - 全螢幕視覺封面
- Trust Bar - 媒體報導展示（YouTube影片）
- Service Cards - 服務入口（團體/蜜月/包船）

### 品牌故事 (About Us)
- 公司介紹
- 核心價值展示

### 認識帛琉 (About Palau)
- 玩家守則（環保宣言）
- 帛琉概述
- 熱門景點列表（卡片式展示）

### 景點詳情 (Attraction Detail)
- 動態路由: `/about-palau/:id`
- 景點詳細介紹
- 精美圖片展示

### 冒險模式 (Tours)
- 行程類型展示
- 「為什麼選擇我們」特色說明

### 行程詳情 (Tour Detail)
- 動態路由: `/tours/:id`
- 完整行程介紹
- 特色項目列表

### 探險手冊 (Guide)
- 行前準備指南
- 簽證資訊
- 打包清單
- 當地生活資訊
- 裝備租借價目表

### 報名攻略 (Booking)
- 7步驟完整報名流程
- 視覺化步驟呈現
- LINE / Instagram 聯絡按鈕

## 🎨 特色功能

### 響應式導航列
- 桌面版: 完整選單
- 行動版: Bootstrap 風格的摺疊選單
- 語言切換器（中/英）

### 動態路由系統
- 行程詳情頁: `/tours/:id`
- 景點詳情頁: `/about-palau/:id`
- 動態麵包屑導航

### 多語言支援
- 使用 Vue I18n
- 支援繁體中文、英文
- 架構支援未來擴充其他語言

### SEO 優化
- 動態頁面標題
- Meta 標籤管理
- SSG 靜態生成

### 浮動聯絡按鈕
- 固定於右下角
- 提供 LINE / Instagram 快速聯絡

## 🎯 設計理念

### 視覺風格
- **遊戲化冒險風格** - 使用「關卡」、「任務」等遊戲化術語
- **熱帶海島氛圍** - 運用海洋色系與陽光元素
- **專業且信賴** - 清晰的資訊架構與透明的服務說明

### 使用者體驗
- **資訊透明化** - 完整的行前資訊與價格說明
- **引導式設計** - 所有路徑最終引導至社群平台進行諮詢
- **行動優先** - 響應式設計確保行動裝置體驗

## 📝 開發紀錄

### v1.0.0 (2025-11)
- ✅ 基礎架構建置
- ✅ 所有頁面實作
- ✅ 多語言系統
- ✅ 響應式設計
- ✅ 動態路由系統
- ✅ SEO 優化
- ✅ 顏色方案修復
- ✅ Bootstrap 風格導航列
- ✅ 景點詳情系統

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📄 授權

Copyright © 2025 Palauan Tour. All rights reserved.

## 📞 聯絡方式

- **Instagram**: [@palauan_tour.co](https://www.instagram.com/palauan_tour.co/)
- **LINE**: [立即諮詢](https://line.me/ti/p/YS6uwsGt3P)

---

Made with ❤️ by Palauan Tour Team
