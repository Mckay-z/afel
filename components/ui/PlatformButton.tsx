'use client'

import Image from 'next/image'

interface PlatformButtonProps {
  platform: string
  url?: string
  showIcon?: boolean
}

const PLATFORM_LABELS: Record<string, string> = {
  apple: 'Apple Music',
  spotify: 'Spotify',
  youtube: 'YouTube Music',
  amazon: 'Amazon Music',
  soundcloud: 'SoundCloud',
  deezer: 'Deezer',
  audiomack: 'Audiomack',
}

const PLATFORM_ICONS: Record<string, string> = {
  apple: '/apple.png',
  spotify: '/sportify.png',
  youtube: '/youtubem.png',
  amazon: '♪',
  soundcloud: '☁',
  deezer: '◈',
  audiomack: '/audiomack.png',
}

export default function PlatformButton({ platform, url, showIcon = true }: PlatformButtonProps) {
  const label = PLATFORM_LABELS[platform] || platform
  const icon = PLATFORM_ICONS[platform] || '♪'
  const isImageIcon = icon.startsWith('/')

  const content = (
    <div
      style={{
        background: 'var(--surface)',
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        cursor: url ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        if (!url) return
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.4)'
        el.style.background = 'var(--surface-2)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.background = 'var(--surface)'
      }}
    >
      {showIcon && (
        isImageIcon ? (
          <Image 
            src={icon} 
            alt={label} 
            width={32}
            height={32}
            style={{ 
              objectFit: 'contain' 
            }} 
          />
        ) : (
          <span style={{ fontSize: 20, opacity: 0.7 }}>{icon}</span>
        )
      )}
      <span
        style={{
          fontSize: 9,
          letterSpacing: '0.15em',
          color: url ? 'var(--text-primary)' : 'var(--text-muted)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </div>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return content
}
