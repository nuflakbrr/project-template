import { useHead, useSeoMeta } from '@unhead/vue'
import { siteMetadata } from '@/data/siteMetadata'

interface SeoOptions {
  title?: string
  description?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
}

export const useSeo = (options: SeoOptions = {}) => {
  const {
    title,
    description = siteMetadata.description,
    ogType = 'website',
    ogImage = siteMetadata.socialBanner,
    twitterCard = 'summary_large_image',
    canonical,
  } = options

  const fullTitle = title ? `${title} | ${siteMetadata.headerTitle}` : siteMetadata.title

  useHead({
    title: fullTitle,
    link: [
      {
        rel: 'canonical',
        href: canonical || siteMetadata.siteUrl,
      },
    ],
  })

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType,
    ogUrl: canonical || siteMetadata.siteUrl,
    ogImage,
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterCard,
    twitterImage: ogImage,
  })
}
