'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  // Staggered word reveal animation on mount
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '1'
    const words = el.querySelectorAll('span')
    words.forEach((w, i) => {
      ; (w as HTMLElement).style.animationDelay = `${i * 0.12}s`
    })
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000',
      }}
      id="hero"
    >
      {/* Background image */}
      <Image
        src="/bg.png"
        alt=""
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: '33% top',
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
        }}
      >


        {/* Headline */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 18vw, 200px)',
            lineHeight: 0.88,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            opacity: 0,
            animation: 'fadeUp 0.8s ease 0.2s forwards',
          }}
        >
          AFEL
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.4)',
            marginTop: 20,
            animation: 'fadeUp 0.7s ease 0.4s forwards',
            fontWeight: 500,
            opacity: 0,
          }}
        >
          Afrobeat Artist — Accra, Ghana
        </p>

        {/* Streaming links bar */}
        <div
          className="streaming-links"
          style={{
            marginTop: 56,
            animation: 'fadeUp 0.7s ease 0.6s forwards',
            opacity: 0,
          }}
        >
          {[
            { label: 'Spotify', url: 'https://open.spotify.com/artist/1H82g08pBFEqJ5fd3LbMwg?si=kXpzJ7odRx-dETEZ3TtFkQ', icon: '/sportify.png' },
            { label: 'Apple Music', url: 'https://music.apple.com/us/artist/afel/1746960117', icon: '/apple.png' },
            { label: 'YouTube Music', url: 'https://music.youtube.com/channel/UCHRp_n79AY9LzSFPJBn3vbw', icon: '/youtubem.png' },
            { label: 'Audiomack', url: 'https://audiomack.com/afelmusic', icon: '/audiomack.png' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="streaming-link-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: '24px 12px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              <Image
                src={s.icon}
                alt={s.label}
                width={28}
                height={28}
                style={{
                  objectFit: 'contain'
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: 'fadeIn 1s ease 1.2s forwards',
          opacity: 0,
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
