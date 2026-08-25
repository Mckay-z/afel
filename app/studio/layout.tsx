import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AFEL — Sanity Studio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
