import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/service'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://powweb.bg'

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
    '/blog/kakvo-e-seo',
    '/blog/za-wordpress',
    '/proekti',
    '/proekti/elektronni-magazini',
    '/proekti/sites',
    '/proekti/spa',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic routes
  const posts = await getPosts() || []
  const dynamicRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/proekti/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
