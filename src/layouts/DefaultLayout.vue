<template>
  <div class="layout-container">
    <AppHeader />
    <el-main class="main-content">
      <slot />
    </el-main>
    <AppFooter />
    <FloatingBtn />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import FloatingBtn from '../components/FloatingBtn.vue'
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
</style>
