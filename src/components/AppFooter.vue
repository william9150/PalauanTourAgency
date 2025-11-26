<template>
  <el-footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} Palauan Tour. All rights reserved.
        </div>
        <div class="social-links">
          <!-- Social icons will go here -->
        </div>
      </div>
    </div>
  </el-footer>
</template>

<style scoped>
.app-footer {
  background: #333;
  color: white;
  padding: 40px 0;
  margin-top: auto;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
