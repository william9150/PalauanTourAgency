import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Tours from '../pages/Tours.vue'
import Guide from '../pages/Guide.vue'
import Rental from '../pages/Rental.vue'
import Booking from '../pages/Booking.vue'

export const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/tours', component: Tours },
    { path: '/guide', component: Guide },
    { path: '/rental', component: Rental },
    { path: '/booking', component: Booking },
]
