import attractionsData from '../data/attractions.json'

export interface Attraction {
  id: string
  titleKey: string
  descKey: string
  image: string
  fullDescKey?: string
  tags?: string[]
}

export function useAttractions() {
  const images = import.meta.glob('../assets/*.jpg', { eager: true, import: 'default' })

  const attractions = computed<Attraction[]>(() => {
    return attractionsData.map(item => ({
      ...item,
      image: (images[`../assets/${item.image}`] as string) || ''
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
