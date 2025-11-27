import { computed } from 'vue'

export interface Tour {
    id: string
    titleKey: string
    descKey: string
    image: string
    features: string[]
    fullDescKey?: string
}

export function useTours() {
    const tours = computed<Tour[]>(() => [
        {
            id: 'combos',
            titleKey: 'tours.combos_title',
            descKey: 'tours.combos_desc',
            image: new URL('../assets/tours-combo.png', import.meta.url).href,
            features: ['精選住宿', '經典行程', '機場接送', '專屬導遊'],
            fullDescKey: 'tours.combos_full_desc'
        },
        {
            id: 'day-tours',
            titleKey: 'tours.day_tours_title',
            descKey: 'tours.day_tours_desc',
            image: new URL('../assets/tours-day.png', import.meta.url).href,
            features: ['大斷層', '水母湖', '牛奶湖', '鯊魚城'],
            fullDescKey: 'tours.day_tours_full_desc'
        },
        {
            id: 'sup',
            titleKey: 'tours.sup_title',
            descKey: 'tours.sup_desc',
            image: new URL('../assets/tours-sup.png', import.meta.url).href,
            features: ['專業教練', '裝備提供', '秘境探索', '拍照服務'],
            fullDescKey: 'tours.sup_full_desc'
        },
        {
            id: 'photo',
            titleKey: 'tours.photo_title',
            descKey: 'tours.photo_desc',
            image: new URL('../assets/tours-photo.png', import.meta.url).href,
            features: ['專業攝影師', '空拍機', '修圖服務', '專屬回憶'],
            fullDescKey: 'tours.photo_full_desc'
        }
    ])

    const getTourById = (id: string) => {
        return tours.value.find(t => t.id === id)
    }

    return {
        tours,
        getTourById
    }
}
