import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export interface SEOConfig {
    title: string
    description: string
    image?: string
    url?: string
    type?: 'website' | 'article'
    keywords?: string
    schema?: object
}

export function useSEO(config: SEOConfig) {
    const { locale } = useI18n()
    const route = useRoute()

    const baseUrl = 'https://palauantour.zeabur.app'
    const currentPath = computed(() => route.path)
    const currentUrl = computed(() => `${baseUrl}${currentPath.value}`)

    // Generate hreflang tags for multilingual support
    const hreflangTags = computed(() => [
        {
            rel: 'alternate',
            hreflang: 'zh-TW',
            href: `${baseUrl}${currentPath.value}?lang=zh-TW`
        },
        {
            rel: 'alternate',
            hreflang: 'en-US',
            href: `${baseUrl}${currentPath.value}?lang=en-US`
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: `${baseUrl}${currentPath.value}`
        }
    ])

    // Generate comprehensive meta tags
    const metaTags = computed(() => {
        const tags: any[] = [
            // Basic meta
            { name: 'description', content: config.description },

            // Canonical URL
            { rel: 'canonical', href: config.url || currentUrl.value },

            // Open Graph
            { property: 'og:type', content: config.type || 'website' },
            { property: 'og:title', content: config.title },
            { property: 'og:description', content: config.description },
            { property: 'og:url', content: config.url || currentUrl.value },
            { property: 'og:locale', content: locale.value },
            { property: 'og:site_name', content: 'Palauan Tour' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: config.title },
            { name: 'twitter:description', content: config.description },
        ]

        // Add image if provided
        if (config.image) {
            tags.push(
                { property: 'og:image', content: config.image },
                { name: 'twitter:image', content: config.image }
            )
        }

        // Add keywords if provided
        if (config.keywords) {
            tags.push({ name: 'keywords', content: config.keywords })
        }

        return tags
    })

    // Generate JSON-LD structured data
    const structuredData = computed(() => {
        if (!config.schema) return null

        return {
            tag: 'script',
            type: 'application/ld+json',
            children: JSON.stringify(config.schema)
        }
    })

    return {
        metaTags,
        hreflangTags,
        structuredData,
        currentUrl
    }
}
