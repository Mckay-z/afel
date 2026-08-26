import LabelBadge from '@/components/ui/LabelBadge'
import StreamingBar from '@/components/layout/StreamingBar'

const CONTACT_CARDS = [
  {
    label: 'For Press',
    email: 'amarteyclemzi@gmail.com',
    detail: 'Media inquiries and interviews',
  },
  {
    label: 'For Organizers',
    email: 'amarteyclemzi@gmail.com',
    detail: 'Event bookings and live shows',
  },
  {
    label: 'For Collaborations',
    email: 'amarteyclemzi@gmail.com',
    detail: 'Artist features and production',
  },
]

export default function BookingPageClient() {
  return (
    <div>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="section-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <LabelBadge>Live & Collab</LabelBadge>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(72px, 14vw, 160px)',
              marginTop: 16,
              lineHeight: 0.88,
              marginBottom: 72,
            }}
          >
            Booking
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {CONTACT_CARDS.map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: 'var(--surface)',
                    padding: '32px 28px',
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: 16,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {card.label}
                  </span>
                  <a
                    href={`mailto:${card.email}`}
                    className="booking-email-link"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(16px, 2vw, 24px)',
                      color: '#ffffff',
                      display: 'block',
                      marginBottom: 10,
                      transition: 'color 0.2s',
                    }}
                  >
                    {card.email}
                  </a>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {card.detail}
                  </span>
                </div>
              ))}

              {/* Phone */}
              <div style={{ background: 'var(--surface)', padding: '24px 28px' }}>
                <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--text-muted)', display: 'block', marginBottom: 10 }}>
                  Manager
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#fff', display: 'block' }}>
                  Mr. Anunyam
                </span>
                <a
                  href="tel:+233550154186"
                  style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-body)', display: 'block', marginTop: 6 }}
                >
                  +233 550 154 186
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <StreamingBar />
    </div>
  )
}
