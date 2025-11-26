<template>
  <el-header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.jpg" alt="Palauan Tour" class="logo-img" />
        </router-link>
      </div>

      <!-- Desktop Menu -->
      <div class="nav-wrapper desktop-menu">
        <el-menu mode="horizontal" :router="true" :default-active="$route.path" :ellipsis="false" class="nav-menu">
          <el-menu-item index="/">{{ $t('common.home') }}</el-menu-item>
          <el-sub-menu index="/about">
            <template #title>{{ $t('common.about') }}</template>
            <el-menu-item index="/about-us">{{ $t('common.about_us') }}</el-menu-item>
            <el-menu-item index="/about-palau">{{ $t('common.about_palau') }}</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/tours">{{ $t('common.tours') }}</el-menu-item>
          <el-menu-item index="/guide">{{ $t('common.guide') }}</el-menu-item>
          <el-menu-item index="/booking">{{ $t('common.booking') }}</el-menu-item>
          <div class="lang-switch">
             <el-dropdown @command="handleLangCommand">
              <span class="el-dropdown-link">
                <el-icon><img src="https://flagcdn.com/w20/tw.png" v-if="$i18n.locale === 'zh-TW'" /><img src="https://flagcdn.com/w20/us.png" v-else /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="zh-TW">繁體中文</el-dropdown-item>
                  <el-dropdown-item command="en-US">English</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-menu>
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-menu-btn" @click="drawerVisible = true">
        <el-icon size="24"><Menu /></el-icon>
      </div>

      <!-- Mobile Drawer -->
      <el-drawer v-model="drawerVisible" title="Menu" direction="rtl" size="80%">
        <el-menu :router="true" :default-active="$route.path" class="mobile-nav-menu">
          <el-menu-item index="/" @click="drawerVisible = false">{{ $t('common.home') }}</el-menu-item>
          <el-sub-menu index="/about">
            <template #title>{{ $t('common.about') }}</template>
            <el-menu-item index="/about-us" @click="drawerVisible = false">{{ $t('common.about_us') }}</el-menu-item>
            <el-menu-item index="/about-palau" @click="drawerVisible = false">{{ $t('common.about_palau') }}</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/tours" @click="drawerVisible = false">{{ $t('common.tours') }}</el-menu-item>
          <el-menu-item index="/guide" @click="drawerVisible = false">{{ $t('common.guide') }}</el-menu-item>
          <el-menu-item index="/booking" @click="drawerVisible = false">{{ $t('common.booking') }}</el-menu-item>
        </el-menu>
        <div class="mobile-lang-switch">
          <el-button size="small" :type="locale === 'zh-TW' ? 'primary' : 'default'" @click="handleLangCommand('zh-TW')">繁體中文</el-button>
          <el-button size="small" :type="locale === 'en-US' ? 'primary' : 'default'" @click="handleLangCommand('en-US')">English</el-button>
        </div>
      </el-drawer>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'

const { locale } = useI18n()
const drawerVisible = ref(false)

const handleLangCommand = (command: string) => {
  locale.value = command
}
</script>

<style scoped>
.app-header {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
}
.logo a {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 50px;
  width: auto;
}
.nav-menu {
  border-bottom: none;
  display: flex;
  align-items: center;
}
.lang-switch {
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}

/* Mobile Styles */
.mobile-menu-btn {
  display: none;
  cursor: pointer;
}
.mobile-lang-switch {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-menu-btn {
    display: block;
  }
}
</style>
