<template>
  <el-header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.jpg" alt="Palauan Tour" class="logo-img" />
        </router-link>
      </div>
      <div class="nav-wrapper">
        <el-menu mode="horizontal" :router="true" :ellipsis="false" class="nav-menu">
          <el-menu-item index="/">首頁</el-menu-item>
          <el-menu-item index="/about">認識帛琉</el-menu-item>
          <el-menu-item index="/tours">冒險模式</el-menu-item>
          <el-menu-item index="/guide">行前攻略</el-menu-item>
          <el-menu-item index="/rental">裝備租借</el-menu-item>
          <el-menu-item index="/booking">立即報名</el-menu-item>
        </el-menu>
      </div>
    </div>
  </el-header>
</template>

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
}
</style>
