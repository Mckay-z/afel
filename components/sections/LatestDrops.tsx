'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface Drop {
  title: string
  image: string
  year: string
  type: string
  featured?: string
}

const drops: Drop[] = [
  { title: 'DonDo', image: '/latest drops/dondo.jpeg', year: '2026', type: 'Single', featured: 'Prod. Silbeat' },
  { title: 'Akwadu', image: '/latest drops/Akwadu.jpeg', year: '2026', type: 'Single', featured: 'ft. Darkovibes' },
  { title: 'Jawuley', image: '/latest drops/jawuley.png', year: '2023', type: 'Single' },
  { title: 'Kilimanjaro', image: '/latest drops/kilimanjaro.png', year: '2023', type: 'Single', featured: 'Prod. Ugly & Tough' },
  { title: 'Paradise', image: '/latest drops/paradise.jpeg', year: '2025', type: 'Single' },
]

export default function LatestDrops() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll<HTMLElement>('.drop-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--bg)',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="latest-drops"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(204,0,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{
              width: 32,
              height: 1,
              background: 'var(--accent)',
            }} />
            <span style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
            }}>
              LATEST DROPS
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 7vw, 80px)',
            color: 'var(--text-primary)',
            lineHeight: 0.95,
          }}>
            NEW MUSIC
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--text-muted-2)',
            marginTop: 16,
            letterSpacing: '0.05em',
            maxWidth: 400,
            textTransform: 'none',
            lineHeight: 1.6,
          }}>
            The latest singles and releases from AFEL. Each track tells a different story.
          </p>
        </div>

        {/* Bento-style staggered grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(200px, auto)',
          gap: 16,
        }}>
          {/* Card 1 — DonDo (large, spans 7 cols) */}
          <div
            className="drop-card"
            style={{
              gridColumn: 'span 7',
              gridRow: 'span 2',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <DropCard drop={drops[0]} height="100%" index={0} />
          </div>

          {/* Card 2 — Akwadu (top right) */}
          <div
            className="drop-card"
            style={{
              gridColumn: 'span 5',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <DropCard drop={drops[1]} height="100%" index={1} />
          </div>

          {/* Card 3 — Jawuley (bottom right) */}
          <div
            className="drop-card"
            style={{
              gridColumn: 'span 5',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            <DropCard drop={drops[2]} height="100%" index={2} />
          </div>

          {/* Card 4 — Kilimanjaro */}
          <div
            className="drop-card"
            style={{
              gridColumn: 'span 5',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            }}
          >
            <DropCard drop={drops[3]} height="100%" index={3} />
          </div>

          {/* Card 5 — Paradise */}
          <div
            className="drop-card"
            style={{
              gridColumn: 'span 7',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
            }}
          >
            <DropCard drop={drops[4]} height="100%" index={4} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #latest-drops .section-container > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
          #latest-drops .section-container > div:last-of-type > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}

function DropCard({ drop, height, index }: { drop: Drop; height: string; index: number }) {
  return (
    <a
      href="#find-me-on"
      className={`latest-drop-item latest-drop-item-${index}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        height,
        minHeight: 280,
        cursor: 'pointer',
        background: 'var(--surface)',
      }}
    >
      {/* Cover image */}
      <Image
        src={drop.image}
        alt={drop.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease',
        }}
      />

      {/* Gradient overlay — always visible at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 100%)',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Red accent line on hover */}
      <div
        className="accent-line"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          background: 'var(--accent)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 3,
        }}
      />

      {/* Track number */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          fontFamily: 'var(--font-display)',
          fontSize: 64,
          color: 'rgba(255,255,255,0.06)',
          lineHeight: 1,
          zIndex: 2,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px 24px 28px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div>
          {/* Type & Year */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 8,
          }}>
            <span style={{
              fontSize: 9,
              letterSpacing: '0.2em',
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
            }}>
              {drop.type}
            </span>
            <span style={{
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
              display: 'inline-block',
            }} />
            <span style={{
              fontSize: 9,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}>
              {drop.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="drop-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: index === 0 ? 'clamp(32px, 4vw, 48px)' : 'clamp(24px, 3vw, 36px)',
              color: '#ffffff',
              lineHeight: 1,
              transition: 'transform 0.4s ease',
            }}
          >
            {drop.title}
          </h3>

          {/* Featured / Producer */}
          {drop.featured && (
            <p style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'var(--font-body)',
              marginTop: 8,
              fontWeight: 400,
              letterSpacing: '0.08em',
              textTransform: 'none',
            }}>
              {drop.featured}
            </p>
          )}
        </div>

        {/* Play icon */}
        <div
          className="play-icon"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            opacity: 0,
            transform: 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease, border-color 0.3s ease, background 0.3s ease',
          }}
        >
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M2 1.5L12.5 8L2 14.5V1.5Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Hover styles */}
      <style>{`
        .latest-drop-item:hover img {
          transform: scale(1.08) !important;
        }
        .latest-drop-item:hover .accent-line {
          transform: scaleX(1) !important;
        }
        .latest-drop-item:hover .play-icon {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .latest-drop-item:hover .drop-title {
          transform: translateX(4px) !important;
        }
      `}</style>
    </a>
  )
}
