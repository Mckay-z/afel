import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '0.5px solid var(--border)',
        padding: '40px 24px',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              letterSpacing: '0.1em',
              color: '#ffffff',
            }}
          >
            AFEL
          </span>
          <p
            style={{
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              marginTop: 6,
            }}
          >
            Afrobeat Artist | Accra, Ghana
          </p>
        </div>

        <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[
            { href: '/releases', label: 'Releases' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/about', label: 'About' },
            { href: '/booking', label: 'Booking' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 10,
                letterSpacing: '0.16em',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
              }}
              className="footer-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p
          style={{
            fontSize: 10,
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          © {new Date().getFullYear()} AFEL. All Rights Reserved.
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: #fff !important; }
      `}</style>
    </footer>
  )
}
