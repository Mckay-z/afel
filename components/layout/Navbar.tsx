'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LEFT_LINKS = [
  { href: '/releases', label: 'Releases' },
  { href: '/gallery', label: 'Gallery' },
]
const RIGHT_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/booking', label: 'Booking' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    background: scrolled ? 'rgba(0,0,0,0.95)' : '#000000',
    borderBottom: '0.5px solid var(--border-nav)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background 0.3s, backdrop-filter 0.3s',
  }

  const linkStyle = (href: string): React.CSSProperties => ({
    fontSize: 11,
    letterSpacing: '0.15em',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    color: pathname === href ? '#ffffff' : 'var(--text-muted)',
    transition: 'color 0.2s',
    textDecoration: 'none',
  })

  return (
    <>
      <nav style={navStyle} id="main-nav">
        <div
          style={{
            width: '100%',
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
          }}
        >
          {/* LEFT */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav-links">
            {LEFT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={linkStyle(l.href)}
                onMouseEnter={(e) => { if (pathname !== l.href) (e.target as HTMLElement).style.color = '#ffffff' }}
                onMouseLeave={(e) => { if (pathname !== l.href) (e.target as HTMLElement).style.color = 'var(--text-muted)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CENTER — Artist name */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              letterSpacing: '0.1em',
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1,
            }}
          >
            AFEL
          </Link>

          {/* RIGHT */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'flex-end' }} className="desktop-nav-links">
            {RIGHT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={linkStyle(l.href)}
                onMouseEnter={(e) => { if (pathname !== l.href) (e.target as HTMLElement).style.color = '#ffffff' }}
                onMouseLeave={(e) => { if (pathname !== l.href) (e.target as HTMLElement).style.color = 'var(--text-muted)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* MOBILE toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              color: 'white',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              gridColumn: '3',
              justifySelf: 'end',
            }}
            aria-label="Toggle navigation"
            id="mobile-nav-toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-nav-menu"
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            background: '#000000',
            zIndex: 999,
            borderBottom: '0.5px solid var(--border-nav)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 18,
                fontFamily: 'var(--font-display)',
                color: pathname === l.href ? '#ffffff' : 'var(--text-muted)',
                letterSpacing: '0.12em',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-links { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
