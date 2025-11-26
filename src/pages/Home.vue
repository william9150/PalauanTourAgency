<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{ $t('home.hero_title') }}</h1>
        <p>{{ $t('home.hero_subtitle') }}</p>
        <el-button type="primary" size="large" @click="$router.push('/booking')">{{ $t('home.start_adventure') }}</el-button>
      </div>
    </section>

    <!-- Trust Bar -->
    <section class="trust-bar">
      <div class="container">
        <h2>{{ $t('home.trust_bar_title') }}</h2>
        <div class="logos">
          <div class="logo-item">世界等一等</div>
          <div class="logo-item">下課花路米</div>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="services">
      <div class="container">
        <h2>{{ $t('home.services_title') }}</h2>
        <div class="cards">
          <el-card class="service-card" shadow="hover" @click="$router.push('/tours')">
            <template #header>
              <h3>{{ $t('home.group_tour') }}</h3>
            </template>
            <p>{{ $t('home.group_tour_desc') }}</p>
          </el-card>
          <el-card class="service-card" shadow="hover" @click="$router.push('/tours')">
            <template #header>
              <h3>{{ $t('home.honeymoon') }}</h3>
            </template>
            <p>{{ $t('home.honeymoon_desc') }}</p>
          </el-card>
          <el-card class="service-card" shadow="hover" @click="$router.push('/tours')">
            <template #header>
              <h3>{{ $t('home.private_boat') }}</h3>
            </template>
            <p>{{ $t('home.private_boat_desc') }}</p>
          </el-card>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1540206395-688085723adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.trust-bar {
  padding: 60px 0;
  background: #f9f9f9;
  text-align: center;
}
.logos {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 30px;
}
.logo-item {
  font-weight: bold;
  color: #666;
  font-size: 1.5rem;
  border: 2px dashed #ccc;
  padding: 10px 20px;
  border-radius: 8px;
}
.services {
  padding: 80px 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--el-color-primary);
  margin-bottom: 50px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.service-card {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.service-card h3 {
  margin: 0;
  color: var(--el-color-primary);
}
</style>
