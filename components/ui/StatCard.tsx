'use client'

interface StatCardProps {
  value: string
  label: string
  large?: boolean
}

export default function StatCard({ value, label, large = false }: StatCardProps) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        padding: large ? '40px 32px' : '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: large ? 72 : 48,
          lineHeight: 1,
          color: 'var(--text-primary)',
          display: 'block',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 12,
          letterSpacing: '0.18em',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  )
}
