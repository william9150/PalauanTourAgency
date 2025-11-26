import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about-us', component: () => import('../pages/AboutUs.vue') },
    { path: '/about-palau', component: () => import('../pages/AboutPalau.vue') },
    { path: '/tours', component: () => import('../pages/Tours.vue') },
    { path: '/guide', component: () => import('../pages/Guide.vue') },
    { path: '/booking', component: () => import('../pages/Booking.vue') },
]
