import Image from 'next/image'
import LabelBadge from '@/components/ui/LabelBadge'

const STREAMING_LINKS = [
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/1H82g08pBFEqJ5fd3LbMwg?si=kXpzJ7odRx-dETEZ3TtFkQ', icon: '/sportify.png' },
  { platform: 'Apple Music', url: 'https://music.apple.com/us/artist/afel/1746960117', icon: '/apple.png' },
  { platform: 'YouTube Music', url: 'https://music.youtube.com/channel/UCHRp_n79AY9LzSFPJBn3vbw', icon: '/youtubem.png' },
  { platform: 'Audiomack', url: 'https://audiomack.com/afelmusic', icon: '/audiomack.png' },
]

export default function StreamingBar() {
  return (
    <section
      id="find-me-on"
      style={{
        background: 'var(--bg)',
        borderTop: '0.5px solid var(--border)',
        padding: '60px 0',
        textAlign: 'center',
      }}
    >
      <div className="section-container">
        <LabelBadge>LISTEN TO ME ON</LabelBadge>

        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 32,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {STREAMING_LINKS.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="streaming-btn"
              style={{
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: '24px 32px',
                minWidth: 160,
                transition: 'all 0.3s ease',
                border: '1px solid var(--border)',
              }}
            >
              <Image 
                src={s.icon} 
                alt={s.platform} 
                width={40}
                height={40}
                style={{ 
                  objectFit: 'contain' 
                }} 
              />
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                }}
              >
                {s.platform}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .streaming-btn:hover { background: var(--surface-2) !important; }
        @media (max-width: 640px) {
          .streaming-btn {
            background: transparent !important;
            border: none !important;
            padding: 12px 16px !important;
            min-width: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
