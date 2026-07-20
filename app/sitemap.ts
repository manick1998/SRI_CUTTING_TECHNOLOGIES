import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { services } from '@/lib/services-data'
import { locations } from '@/lib/locations-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
  ]
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}
