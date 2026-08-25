import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'
import { createClient } from '@sanity/client'

// Fallback builder for when client is null (no valid project ID)
const fallbackClient = createClient({
  projectId: 'placeholder',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client || fallbackClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
