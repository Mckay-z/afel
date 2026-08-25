import type { Metadata } from 'next'
import GalleryGrid from '@/components/sections/GalleryGrid'
import StreamingBar from '@/components/layout/StreamingBar'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Gallery — AFEL | Live Performances',
  description: 'Gallery of AFEL live performances across Ghana and Africa. View photos and performance history.',
}

export default async function GalleryPage() {
  return (
    <>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="section-container" style={{ paddingTop: 0, paddingBottom: 48 }}>
          {/* <LabelBadge>#AFELMUSIC Live</LabelBadge> */}
          {/* <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(72px, 14vw, 160px)',
              marginTop: 16,
              lineHeight: 0.88,
            }}
          >
            Gallery
          </h1> */}
        </div>

        <GalleryGrid />
      </div>
      <StreamingBar />
    </>
  )
}
