<template>
  <div class="floating-btn">
    <el-popover
      placement="left"
      :width="200"
      trigger="click"
    >
      <template #reference>
        <el-button type="primary" circle size="large" class="fab">
          <el-icon :size="24"><ChatDotRound /></el-icon>
        </el-button>
      </template>
      <div class="social-actions">
        <a href="https://line.me/ti/p/YS6uwsGt3P" target="_blank" class="social-link line">
          {{ $t('common.line_consult') }}
        </a>
        <a href="https://www.instagram.com/palauan_tour.co/" target="_blank" class="social-link ig">
          {{ $t('common.instagram') }}
        </a>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ChatDotRound } from '@element-plus/icons-vue'
</script>

<style scoped>
.floating-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}
.fab {
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.social-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.social-link {
  display: block;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  color: white;
}
.line {
  background-color: #00B900;
}
.ig {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}
</style>
