'use client'

import LabelBadge from '@/components/ui/LabelBadge'
import StatCard from '@/components/ui/StatCard'
import Link from 'next/link'

interface AboutBioProps {
  bio?: string
  stats?: { value: string; label: string }[]
  quote?: string
}

const PLACEHOLDER_BIO = `AFEL is an emerging musical force from the vibrant city of Accra, Ghana, making waves with his unique and diverse soundscapes. Rooted deeply in the rich cultural heritage of his homeland, AFEL blends traditional African rhythms with modern beats, creating a sound that is both nostalgic and innovative. His music transcends genres, effortlessly weaving elements of Afrobeats, Highlife, Reggae, Hip-Hop, and Electronic Music into a tapestry that reflects the dynamic spirit of contemporary African music.

Growing up in Accra, AFEL was immersed in a melting pot of musical influences. From the soulful melodies of Highlife to the infectious rhythms of Afrobeats, his eclectic taste and keen ear for music were honed by the vibrant sounds of his environment. AFEL remains committed to his goal of taking African music to the next level — a movement, a celebration of African culture, and a beacon of what's possible when creativity knows no bounds.`

const DEFAULT_STATS = [
  { value: '4', label: 'Single Tracks Released' },
  { value: '10+', label: 'Features' },
  { value: '50+', label: 'Performances' },
  { value: '2', label: 'Music Videos' },
]

export default function AboutBio({ bio, stats }: AboutBioProps) {
  const displayBio = bio || PLACEHOLDER_BIO
  const displayStats = stats?.length ? stats : DEFAULT_STATS

  return (
    <section style={{ background: 'var(--bg)', padding: '80px 0' }} id="about-section">
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <LabelBadge>Story</LabelBadge>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 6vw, 64px)',
              marginTop: 16,
            }}
          >
            About AFEL
          </h2>
        </div>

        {/* Bio */}
        <div className="bio-grid">
          <div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                display: 'inline-block',
                marginBottom: 16,
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '4px 10px',
              }}
            >
              AFEL — Accra, Ghana
            </span>
          </div>
          <div>
            {displayBio.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  fontWeight: 500,
                  color: 'var(--text-muted-2)',
                  letterSpacing: '0.05em',
                  marginBottom: i < displayBio.split('\n\n').length - 1 ? 24 : 0,
                }}
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <StatCard value={displayStats[0]?.value || '4'} label={displayStats[0]?.label || 'Single Tracks Released'} large />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}>
            <StatCard value={displayStats[1]?.value || '10+'} label={displayStats[1]?.label || 'Features'} />
            <StatCard value={displayStats[2]?.value || '50+'} label={displayStats[2]?.label || 'Performances'} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}>
            <StatCard value={displayStats[3]?.value || '2'} label={displayStats[3]?.label || 'Music Videos'} />
            <StatCard value="∞" label="Ambition" />
          </div>
        </div>

        {/* Learn more */}
        <div style={{ textAlign: 'center', paddingTop: 8 }}>
          <Link
            href="/about"
            style={{
              fontSize: 13,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
          >
            Learn More ▶
          </Link>
        </div>
      </div>
    </section>
  )
}
