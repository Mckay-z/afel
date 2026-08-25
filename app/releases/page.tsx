import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LabelBadge from '@/components/ui/LabelBadge'
import StreamingBar from '@/components/layout/StreamingBar'
import { getReleases } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Releases — AFEL | Discography',
  description: 'Explore the complete discography of AFEL — singles, EPs, albums, and mixtapes.',
}

interface ReleaseItem {
  _id: string
  title: string
  slug: string
  releaseType?: string
  releaseYear?: number
  isFeatured?: boolean
  localImage?: string
  coverArt?: { asset?: { _ref: string } }
}

const PLACEHOLDER_RELEASES: ReleaseItem[] = [
  { _id: '1', title: 'DonDo', slug: 'dondo', releaseType: 'Single', releaseYear: 2026, isFeatured: true, localImage: '/latest drops/dondo.jpeg' },
  { _id: '2', title: 'Akwadu', slug: 'akwadu', releaseType: 'Single', releaseYear: 2026, isFeatured: false, localImage: '/latest drops/Akwadu.jpeg' },
  { _id: '3', title: 'Jawuley', slug: 'jawuley', releaseType: 'Single', releaseYear: 2023, isFeatured: false, localImage: '/latest drops/jawuley.png' },
  { _id: '4', title: 'Kilimanjaro', slug: 'kilimanjaro', releaseType: 'Single', releaseYear: 2023, isFeatured: false, localImage: '/latest drops/kilimanjaro.png' },
  { _id: '5', title: 'Paradise', slug: 'paradise', releaseType: 'Single', releaseYear: 2025, isFeatured: false, localImage: '/latest drops/paradise.jpeg' },
]

const COLORS = ['#1a0000', '#0a0a1a', '#0d1a0a', '#1a1800', '#180a1a', '#001a18', '#1a0a00', '#0a1a18']

export default async function ReleasesPage() {
  const releases = (await getReleases().catch(() => [])) as ReleaseItem[]
  const display: ReleaseItem[] = releases?.length ? releases : PLACEHOLDER_RELEASES
  const featured = display.find((r) => r.isFeatured) || display[0]
  const rest = display.filter((r) => r._id !== featured._id)

  return (
    <>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="section-container" style={{ paddingTop: 80, paddingBottom: 48 }}>
          <LabelBadge>Discography</LabelBadge>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(72px, 14vw, 160px)',
              marginTop: 16,
              lineHeight: 0.88,
            }}
          >
            Releases
          </h1>
        </div>

        {/* Asymmetric featured layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 3,
            marginBottom: 3,
          }}
        >
          {/* Featured large left */}
          <Link href="#find-me-on" style={{ display: 'block' }}>
            <div
              className="release-card-featured"
              style={{
                aspectRatio: '1',
                position: 'relative',
                overflow: 'hidden',
                background: COLORS[0],
              }}
            >
              {featured.localImage || featured.coverArt?.asset ? (
                <Image
                  src={featured.localImage || urlFor(featured.coverArt as NonNullable<ReleaseItem['coverArt']>).width(900).height(900).url()}
                  alt={featured.title}
                  fill
                  sizes="66vw"
                  priority
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="card-image"
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 80, color: 'rgba(255,255,255,0.05)' }}>AFEL</span>
                </div>
              )}
              <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 6 }}>
                  {featured.releaseType} · {featured.releaseYear}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#fff' }}>{featured.title}</span>
              </div>
            </div>
          </Link>

          {/* Right column — smaller releases stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {rest.slice(0, 3).map((r: ReleaseItem, i: number) => (
              <Link key={r._id} href="#find-me-on" style={{ display: 'block', flex: 1 }}>
                <div
                  className="release-card-small"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: COLORS[(i + 1) % COLORS.length],
                    height: '100%',
                    minHeight: 120,
                  }}
                >
                  {r.localImage || r.coverArt?.asset ? (
                    <Image
                      src={r.localImage || urlFor(r.coverArt).width(400).url()}
                      alt={r.title}
                      fill
                      sizes="33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      className="card-image"
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', minHeight: 120 }} />
                  )}
                  <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 3, letterSpacing: '0.1em' }}>
                      {r.releaseType} · {r.releaseYear}
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: '#fff' }}>{r.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row — 4 equal columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 3,
          }}
        >
          {rest.slice(3).map((r: ReleaseItem, i: number) => (
            <Link key={r._id} href="#find-me-on" style={{ display: 'block' }}>
              <div
                className="release-card-bottom"
                style={{
                  aspectRatio: '1',
                  position: 'relative',
                  overflow: 'hidden',
                  background: COLORS[(i + 4) % COLORS.length],
                }}
              >
                {r.localImage || r.coverArt?.asset ? (
                  <Image
                    src={r.localImage || urlFor(r.coverArt).width(400).url()}
                    alt={r.title}
                    fill
                    sizes="25vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="card-image"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'rgba(255,255,255,0.05)' }}>AFEL</span>
                  </div>
                )}
                <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 2, letterSpacing: '0.1em' }}>
                    {r.releaseType}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: '#fff' }}>{r.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <StreamingBar />
      <style>{`
        .release-card-featured:hover .card-image,
        .release-card-small:hover .card-image,
        .release-card-bottom:hover .card-image {
          transform: scale(1.03) !important;
        }
      `}</style>
    </>

  )
}
