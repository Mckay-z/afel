import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'AFEL — Afrobeat Artist | Accra, Ghana',
  description: 'Official website of AFEL, an emerging Afrobeat artist from Accra, Ghana. Blending Afrobeats, Highlife, and global influences into a unique sound.',
  keywords: ['AFEL', 'Afrobeat', 'Ghana music', 'Accra', 'African music', 'Highlife'],
  openGraph: {
    title: 'AFEL — Afrobeat Artist',
    description: 'The sound of Africa, amplified. Streaming everywhere.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ paddingTop: 56 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
