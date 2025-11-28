import { computed } from 'vue'

export interface Attraction {
  id: string
  titleKey: string
  descKey: string
  image: string
  fullDescKey?: string
}

export function useAttractions() {
  const attractions = computed<Attraction[]>(() => [
    {
      id: 'big-drop-off',
      titleKey: 'attractions.big_drop_off_title',
      descKey: 'attractions.big_drop_off_desc',
      image: new URL('../assets/attraction-big-drop-off.jpg', import.meta.url).href,
      fullDescKey: 'attractions.big_drop_off_full_desc'
    },
    {
      id: 'jellyfish-lake',
      titleKey: 'attractions.jellyfish_lake_title',
      descKey: 'attractions.jellyfish_lake_desc',
      image: new URL('../assets/attraction-jellyfish-lake.jpg', import.meta.url).href,
      fullDescKey: 'attractions.jellyfish_lake_full_desc'
    },
    {
      id: 'milky-way',
      titleKey: 'attractions.milky_way_title',
      descKey: 'attractions.milky_way_desc',
      image: new URL('../assets/attraction-milky-way.jpg', import.meta.url).href,
      fullDescKey: 'attractions.milky_way_full_desc'
    },
    {
      id: 'long-beach',
      titleKey: 'attractions.long_beach_title',
      descKey: 'attractions.long_beach_desc',
      image: new URL('../assets/attraction-long-beach.jpg', import.meta.url).href,
      fullDescKey: 'attractions.long_beach_full_desc'
    },
    {
      id: 'german-channel',
      titleKey: 'attractions.german_channel_title',
      descKey: 'attractions.german_channel_desc',
      image: new URL('../assets/attraction-german-channel.jpg', import.meta.url).href,
      fullDescKey: 'attractions.german_channel_full_desc'
    },
    {
      id: 'shark-city',
      titleKey: 'attractions.shark_city_title',
      descKey: 'attractions.shark_city_desc',
      image: new URL('../assets/attraction-shark-city.jpg', import.meta.url).href,
      fullDescKey: 'attractions.shark_city_full_desc'
    }
  ])

  const getAttractionById = (id: string) => {
    return attractions.value.find(a => a.id === id)
  }

  return {
    attractions,
    getAttractionById
  }
}
