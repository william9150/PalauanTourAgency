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
          <el-menu-item index="/about-us">{{ $t('common.about_us') }}</el-menu-item>
          <el-menu-item index="/about-palau">{{ $t('common.about_palau') }}</el-menu-item>
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
      <button class="navbar-toggler" type="button" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Mobile Collapsible Menu -->
      <div class="navbar-collapse" :class="{ 'show': isMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="isMenuOpen = false">{{ $t('common.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-us" class="nav-link" @click="isMenuOpen = false">{{ $t('common.about_us') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about-palau" class="nav-link" @click="isMenuOpen = false">{{ $t('common.about_palau') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tours" class="nav-link" @click="isMenuOpen = false">{{ $t('common.tours') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/guide" class="nav-link" @click="isMenuOpen = false">{{ $t('common.guide') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/booking" class="nav-link" @click="isMenuOpen = false">{{ $t('common.booking') }}</router-link>
          </li>
        </ul>
        <div class="mobile-lang-switch">
          <span 
            class="lang-option" 
            :class="{ active: locale === 'zh-TW' }" 
            @click="handleLangCommand('zh-TW')"
          >
            繁體中文
          </span>
          <span class="lang-divider">|</span>
          <span 
            class="lang-option" 
            :class="{ active: locale === 'en-US' }" 
            @click="handleLangCommand('en-US')"
          >
            English
          </span>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { locale } = useI18n()
const isMenuOpen = ref(false)

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
  height: auto !important; /* Allow header to expand */
}
.container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for mobile menu */
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 60px; /* Ensure minimum height */
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

/* Navbar Toggler (Hamburger) */
.navbar-toggler {
  display: none;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;
}
.navbar-toggler:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(0, 119, 190, 0.25);
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

/* Collapsible Menu */
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
  display: none; /* Hidden by default on mobile */
  transition: height 0.35s ease;
}
.navbar-collapse.show {
  display: block;
  padding-bottom: 1rem;
  border-top: 1px solid #eee;
  margin-top: 10px;
  background: white; /* Ensure background is opaque */
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav-item {
  width: 100%;
}
.nav-link {
  display: block;
  padding: 0.5rem 0;
  color: rgba(0, 0, 0, 0.55);
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  font-size: 1rem;
}
.nav-link:hover, .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.nav-link.router-link-active {
  color: var(--el-color-primary);
  font-weight: bold;
}

.mobile-lang-switch {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
}
.lang-option {
  cursor: pointer;
}
.lang-option.active {
  color: var(--el-color-primary);
  font-weight: bold;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .navbar-toggler {
    display: block;
  }
}
@media (min-width: 769px) {
  .navbar-collapse {
    display: none !important; /* Always hide mobile collapse on desktop */
  }
}
</style>
