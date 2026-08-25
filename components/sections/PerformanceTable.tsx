'use client'

import LabelBadge from '@/components/ui/LabelBadge'
import { formatDate } from '@/lib/formatDate'

interface Performance {
  _id: string
  venue?: string
  city?: string
  country?: string
  date?: string
  isUpcoming?: boolean
}

interface PerformanceTableProps {
  performances: Performance[]
}

const PLACEHOLDER_PERFORMANCES = [
  { _id: '1', venue: 'National Theatre', city: 'Accra', country: 'Ghana', date: '2025-03-15', isUpcoming: false },
  { _id: '2', venue: 'Alliance Française', city: 'Accra', country: 'Ghana', date: '2025-06-20', isUpcoming: false },
  { _id: '3', venue: 'Labadi Beach Hotel', city: 'Accra', country: 'Ghana', date: '2025-09-10', isUpcoming: false },
  { _id: '4', venue: 'Kigali Arena', city: 'Kigali', country: 'Rwanda', date: '2025-11-14', isUpcoming: false },
  { _id: '5', venue: 'Freedom Park', city: 'Lagos', country: 'Nigeria', date: '2026-02-28', isUpcoming: true },
  { _id: '6', venue: 'Cape Town Stadium', city: 'Cape Town', country: 'South Africa', date: '2026-05-10', isUpcoming: true },
]

export default function PerformanceTable({ performances }: PerformanceTableProps) {
  const data = performances?.length ? performances : PLACEHOLDER_PERFORMANCES

  return (
    <section style={{ background: 'var(--bg)', padding: '80px 0' }} id="performance-table">
      <div className="section-container">
        <div style={{ marginBottom: 40 }}>
          <LabelBadge>Tour Dates</LabelBadge>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 7vw, 80px)',
              marginTop: 16,
            }}
          >
            Performances
          </h2>
        </div>

        <div style={{ borderTop: '0.5px solid var(--border)' }}>
          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 1fr auto',
              gap: 16,
              padding: '12px 0',
              borderBottom: '0.5px solid var(--border)',
            }}
          >
            {['Date', 'City', 'Venue', ''].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Data rows */}
          {data.map((p) => (
            <div
              key={p._id}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 1fr auto',
                gap: 16,
                padding: '18px 8px',
                borderBottom: '0.5px solid var(--border)',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: p.isUpcoming ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {p.date ? formatDate(p.date, true) : '—'}
              </span>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: p.isUpcoming ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {p.city}{p.country ? `, ${p.country}` : ''}
              </span>
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  color: p.isUpcoming ? '#ffffff' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                }}
              >
                {p.venue || '—'}
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  color: p.isUpcoming ? 'var(--accent)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                }}
              >
                {p.isUpcoming ? 'UPCOMING ▶' : 'EXPLORE ▶'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
