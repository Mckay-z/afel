'use client'

import { ReactNode } from 'react'

interface LabelBadgeProps {
  children: ReactNode
  className?: string
}

export default function LabelBadge({ children, className = '' }: LabelBadgeProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        border: '1px solid rgba(255,255,255,0.5)',
        padding: '4px 12px',
        fontSize: '10px',
        letterSpacing: '0.2em',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
