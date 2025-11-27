import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('../pages/Home.vue'), meta: { title: 'home' } },
    { path: '/about-us', component: () => import('../pages/AboutUs.vue'), meta: { title: 'about_us' } },
    { path: '/about-palau', component: () => import('../pages/AboutPalau.vue'), meta: { title: 'about_palau' } },
    { path: '/tours', component: () => import('../pages/Tours.vue'), meta: { title: 'tours' } },
    { path: '/tours/:id', component: () => import('../pages/TourDetail.vue'), meta: { title: 'tours' } },
    { path: '/guide', component: () => import('../pages/Guide.vue'), meta: { title: 'guide' } },
    { path: '/booking', component: () => import('../pages/Booking.vue'), meta: { title: 'booking' } },
]
