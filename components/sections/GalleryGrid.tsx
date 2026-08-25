'use client'

import { useState } from 'react'
import Image from 'next/image'
import LabelBadge from '@/components/ui/LabelBadge'
import Lightbox from '@/components/ui/Lightbox'




const LOCAL_GALLERY = [
  { _id: '27', type: 'image', src: '/gallery/img-27.jpg' },
  { _id: '28', type: 'image', src: '/gallery/img-28.jpg' },  
  { _id: '15', type: 'image', src: '/gallery/img-15.jpg' },
  // { _id: '1', type: 'image', src: '/gallery/img-1.jpeg' },
  // { _id: '2', type: 'image', src: '/gallery/img-2.jpeg' },
  { _id: '17', type: 'image', src: '/gallery/img-17.jpg' },
  { _id: '10', type: 'image', src: '/gallery/img-10.jpeg' },
  { _id: '30', type: 'video', src: '/gallery/vid-3.mp4' },

  { _id: '3', type: 'image', src: '/gallery/img-3.jpeg' },
  // { _id: '11', type: 'image', src: '/gallery/img-11.jpg' },
  { _id: '12', type: 'image', src: '/gallery/img-12.jpg' },
  { _id: '13', type: 'image', src: '/gallery/img-13.jpg' },
  { _id: '14', type: 'image', src: '/gallery/img-14.jpg' },
  { _id: '4', type: 'image', src: '/gallery/img-4.jpeg' },
  { _id: '31', type: 'video', src: '/gallery/vid-4.mp4' },
  { _id: '16', type: 'image', src: '/gallery/img-16.jpg' },
  { _id: '5', type: 'image', src: '/gallery/img-5.jpeg' },
  { _id: '32', type: 'video', src: '/gallery/vid-5.mp4' },
  { _id: '18', type: 'image', src: '/gallery/img-18.jpg' },
  { _id: '6', type: 'image', src: '/gallery/img-6.jpeg' },
  { _id: '33', type: 'video', src: '/gallery/vid-6.mp4' },
  { _id: '19', type: 'image', src: '/gallery/img-19.jpg' },
  { _id: '20', type: 'image', src: '/gallery/img-20.jpg' },
  { _id: '34', type: 'video', src: '/gallery/vid-7.mp4' },
  { _id: '21', type: 'image', src: '/gallery/img-21.jpg' },
  { _id: '8', type: 'image', src: '/gallery/img-8.jpeg' },
  { _id: '35', type: 'video', src: '/gallery/vid-8.mp4' },
  { _id: '24', type: 'image', src: '/gallery/img-24.jpg' },
  { _id: '9', type: 'image', src: '/gallery/img-9.jpeg' },

  { _id: '25', type: 'image', src: '/gallery/img-25.jpg' },
  { _id: '22', type: 'image', src: '/gallery/img-22.jpg' },
  { _id: '26', type: 'image', src: '/gallery/img-26.jpg' },
  { _id: '29', type: 'video', src: '/gallery/vid-2.mp4' },
  { _id: '36', type: 'image', src: '/gallery/img-29.jpeg' },
  { _id: '37', type: 'image', src: '/gallery/img-30.jpeg' },
]

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const gallery = limit ? LOCAL_GALLERY.slice(0, limit) : LOCAL_GALLERY

  const lightboxItems = gallery.map((item) => ({
    src: item.src,
    caption: 'Live in Action',
  }))

  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: '100px 0',
      }}
      id="gallery-section"
    >
      <div className="section-container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <LabelBadge>#AFELMUSIC LIVE</LabelBadge>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 96px)',
              marginTop: 16,
            }}
          >
            Live Gallery
          </h2>
        </div>

        {/* Stats bar
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
            marginBottom: 48,
          }}
        >
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div> */}

        {/* Photo grid — masonry-style 3 columns desktop, 2 columns mobile */}
        <div className="gallery-grid">
          {gallery.map((item, index) => (
              <div
                key={item._id}
                onClick={() => setLightboxIndex(index)}
                style={{
                  position: 'relative',
                  aspectRatio: index % 3 === 1 ? '4/3' : '3/4',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'var(--surface)',
                }}
                onMouseEnter={(e) => {
                  const media = e.currentTarget.querySelector('img, video') as HTMLElement
                  if (media) {
                    media.style.transform = 'scale(1.04)'
                    media.style.filter = 'grayscale(0.1) brightness(1.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  const media = e.currentTarget.querySelector('img, video') as HTMLElement
                  if (media) {
                    media.style.transform = 'scale(1)'
                    media.style.filter = 'grayscale(0.4) brightness(0.85)'
                  }
                }}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      filter: 'grayscale(0.4) brightness(0.85)',
                      transition: 'transform 0.4s ease, filter 0.4s ease',
                    }}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={'Performance photo'}
                    fill
                    sizes="33vw"
                    style={{
                      objectFit: 'cover',
                      filter: 'grayscale(0.4) brightness(0.85)',
                      transition: 'transform 0.4s ease, filter 0.4s ease',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
