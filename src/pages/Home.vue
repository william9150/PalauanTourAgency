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
        <div class="video-grid">
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/lA0e0ckrPX8?si=DsiyPutbNk55KP0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/n5bCbQjYEo8?si=wT6NjnagxACwCWN2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
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
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('../assets/hero-bg.png') no-repeat center center;
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
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
