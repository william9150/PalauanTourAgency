import { useI18n } from 'vue-i18n'
import attractionsData from '../data/attractions.json'

export interface Attraction {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  googleMapUrl: string
  tags: string[]
}

interface AttractionRaw {
  id: string
  name: { 'zh-TW': string; 'en-US': string }
  description: { 'zh-TW': string; 'en-US': string }
  longDescription: { 'zh-TW': string; 'en-US': string }
  image: string
  googleMapUrl: string
  tags: Array<{ 'zh-TW': string; 'en-US': string }>
}

export function useAttractions() {
  const { locale } = useI18n()
  const images = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' })

  const attractions = computed<Attraction[]>(() => {
    const currentLocale = locale.value as 'zh-TW' | 'en-US'

    return (attractionsData as AttractionRaw[]).map(item => ({
      id: item.id,
      name: item.name[currentLocale],
      description: item.description[currentLocale],
      longDescription: item.longDescription[currentLocale],
      image: (images[`../assets/${item.image}`] as string) || '',
      googleMapUrl: item.googleMapUrl,
      tags: item.tags.map(tag => tag[currentLocale])
    }))
  })

  const getAttractionById = (id: string) => {
    return attractions.value.find(a => a.id === id)
  }

  return {
    attractions,
    getAttractionById
  }
}
