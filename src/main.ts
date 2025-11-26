import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { routes } from './router'
import zhTW from './locales/zh-TW.json'
import 'element-plus/dist/index.css'
import './styles/main.css'


const i18n = createI18n({
    locale: 'zh-TW',
    messages: {
        'zh-TW': zhTW
    }
})

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app }) => {
        app.use(i18n)
    },
)
