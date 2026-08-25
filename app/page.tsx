import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import LatestDrops from '@/components/sections/LatestDrops'
import GalleryGrid from '@/components/sections/GalleryGrid'
import AboutBio from '@/components/sections/AboutBio'
import StreamingBar from '@/components/layout/StreamingBar'
import { getGallery, getAbout } from '@/sanity/lib/queries'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'AFEL — Official Website | Afrobeat Artist from Accra, Ghana',
  description: 'Official website of AFEL, an Afrobeat artist from Accra, Ghana. Stream music on Spotify, Apple Music, Audiomack, and more.',
}

function extractBioText(bio: unknown): string | undefined {
  if (!bio || !Array.isArray(bio)) return undefined
  return (bio as { children?: { text: string }[] }[])
    .map((b) => b.children?.map((c) => c.text).join('') || '')
    .filter(Boolean)
    .join('\n\n') || undefined
}

export default async function HomePage() {
  const [gallery, about] = await Promise.all([
    getGallery(),
    getAbout(),
  ])

  return (
    <>
      <Hero />
      <LatestDrops />
      <GalleryGrid />
      <AboutBio
        bio={extractBioText(about && (about as { bio?: unknown }).bio)}
        stats={(about as { stats?: { value: string; label: string }[] } | null)?.stats}
        quote={(about as { quote?: string } | null)?.quote}
      />
      <StreamingBar />
    </>
  )
}
