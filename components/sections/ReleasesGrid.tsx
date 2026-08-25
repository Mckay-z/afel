'use client'

import Image from 'next/image'
import Link from 'next/link'
import LabelBadge from '@/components/ui/LabelBadge'
import { urlFor } from '@/sanity/lib/image'

interface Release {
  _id: string
  title: string
  slug: string
  coverArt?: { asset?: { _ref: string }; hotspot?: object }
  releaseType?: string
  releaseYear?: number
  isFeatured?: boolean
}

interface ReleasesGridProps {
  releases: Release[]
}

// Fallback cover art colors for placeholder releases
const COLORS = ['#1a0a0a', '#0a0a1a', '#0a1a0a', '#1a1a0a', '#1a0a1a', '#0a1a1a']

export default function ReleasesGrid({ releases }: ReleasesGridProps) {
  const preview = releases?.slice(0, 4) || []

  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: '100px 0 80px',
      }}
      id="releases-preview"
    >
      <div className="section-container">
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 40,
            animation: 'fadeUp 0.6s ease forwards',
          }}
        >
          <LabelBadge>Releases</LabelBadge>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 96px)',
              marginTop: 16,
              color: 'var(--text-primary)',
            }}
          >
            Latest Drops
          </h2>
        </div>
      </div>

      {/* Edge-to-edge image grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.max(preview.length, 1)}, 1fr)`,
          gap: 0,
          margin: '0',
        }}
      >
        {preview.length > 0 ? (
          preview.map((release, i) => (
            <Link key={release._id} href={`/releases/${release.slug}`}>
              <div
                style={{
                  aspectRatio: '1',
                  position: 'relative',
                  overflow: 'hidden',
                  background: COLORS[i % COLORS.length],
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                {release.coverArt?.asset ? (
                  <Image
                    src={urlFor(release.coverArt).width(600).height(600).url()}
                    alt={release.title}
                    fill
                    sizes="25vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: COLORS[i % COLORS.length],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 48,
                        color: 'rgba(255,255,255,0.08)',
                      }}
                    >
                      AFEL
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    transition: 'background 0.3s',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 16,
                    pointerEvents: 'none',
                  }}
                  className="release-overlay"
                >
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>
                      {release.releaseType || 'Single'} · {release.releaseYear}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 14,
                        color: '#fff',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                      }}
                      className="release-title"
                    >
                      {release.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // Placeholder tiles when no releases in Sanity yet
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: '1',
                background: COLORS[i],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'rgba(255,255,255,0.06)' }}>
                AFEL
              </span>
            </div>
          ))
        )}
      </div>

      {/* View all link */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          href="/releases"
          style={{
            fontSize: 13,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            transition: 'color 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
        >
          View All ▶
        </Link>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        a:hover .release-overlay { background: rgba(0,0,0,0.45) !important; }
        a:hover .release-title { opacity: 1 !important; }
      `}</style>
    </section>
  )
}
