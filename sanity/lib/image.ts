import imageUrlBuilder from '@sanity/image-url'
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

export function urlFor(source: any) {
  return builder.image(source)
}
