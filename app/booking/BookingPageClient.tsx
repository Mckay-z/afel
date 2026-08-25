'use client'

import { useState } from 'react'
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

const BOOKING_CATEGORIES = [
  'Live Show',
  'Press',
  'Collaboration',
  'Other',
]

export default function BookingPageClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real deployment, connect to a form backend or API route
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--surface)',
    border: 'none',
    color: 'var(--text-primary)',
    fontSize: 12,
    letterSpacing: '0.08em',
    fontFamily: 'var(--font-body)',
    padding: '16px 20px',
    outline: 'none',
    textTransform: 'uppercase' as const,
    marginBottom: 2,
    display: 'block',
  }

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
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
            }}
          >
            {/* Left — contact cards */}
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
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(16px, 2vw, 24px)',
                      color: '#ffffff',
                      display: 'block',
                      marginBottom: 10,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
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

            {/* Right — contact form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    background: 'var(--surface)',
                    padding: '64px 40px',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: 32 }}>✓</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>Message Sent</h3>
                  <p style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                    We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    placeholder="NAME *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    placeholder="EMAIL *"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    placeholder="PHONE"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <select
                    id="booking-category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">BOOKING CATEGORY</option>
                    {BOOKING_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <textarea
                    id="booking-message"
                    name="message"
                    placeholder="MESSAGE *"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                  <button
                    type="submit"
                    id="booking-submit"
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      color: '#000000',
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      padding: '18px',
                      cursor: 'pointer',
                      border: 'none',
                      transition: 'background 0.2s, color 0.2s',
                      marginTop: 2,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--accent)'
                      ;(e.currentTarget as HTMLElement).style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#fff'
                      ;(e.currentTarget as HTMLElement).style.color = '#000'
                    }}
                  >
                    Send Message ▶
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Performance photos below */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 80 }}>
            {[
              { bg: 'linear-gradient(135deg, #1a0000 0%, #050505 100%)' },
              { bg: 'linear-gradient(135deg, #050505 0%, #0d0005 100%)' },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  height: 300,
                  background: p.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(140,0,0,0.15) 0%, transparent 70%)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(32px, 6vw, 80px)',
                    color: 'rgba(255,255,255,0.04)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {i === 0 ? 'LIVE ENERGY' : 'AFEL ON STAGE'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StreamingBar />
    </div>
  )
}
