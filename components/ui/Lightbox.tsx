'use client'

import { useEffect, useCallback, useState } from 'react'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxItem {
  src: string
  caption?: string
  venue?: string
  date?: string
}

interface LightboxProps {
  items: LightboxItem[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ items, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1))
  }, [items.length])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1))
  }, [items.length])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const item = items[currentIndex]

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.96)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          color: 'white',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div
        style={{
          position: 'absolute',
          top: 28,
          left: 24,
          fontSize: 11,
          color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.15em',
          fontFamily: 'var(--font-body)',
        }}
      >
        {currentIndex + 1} / {items.length}
      </div>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '85vw',
          maxHeight: '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', maxHeight: '70vh', maxWidth: '100%' }}>
          {item.src.endsWith('.mp4') ? (
            <video
              src={item.src}
              autoPlay
              loop
              controls
              style={{
                maxHeight: '70vh',
                maxWidth: '85vw',
                objectFit: 'contain',
              }}
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.src}
              alt={item.caption || 'Gallery photo'}
              style={{
                maxHeight: '70vh',
                maxWidth: '85vw',
                objectFit: 'contain',
                filter: 'grayscale(0.2)',
              }}
            />
          )}
        </div>
      </div>

      {/* Caption */}
      {(item.caption || item.venue || item.date) && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            marginTop: 24,
            textAlign: 'center',
            maxWidth: 600,
            padding: '0 24px',
          }}
        >
          {item.caption && (
            <p style={{ fontSize: 13, color: 'white', letterSpacing: '0.12em', marginBottom: 6 }}>
              {item.caption}
            </p>
          )}
          {(item.venue || item.date) && (
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              {item.venue}{item.venue && item.date ? ' — ' : ''}{item.date}
            </p>
          )}
        </div>
      )}

      {/* Navigation arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute',
              left: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}
