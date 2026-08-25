import type { Metadata } from 'next'
import BookingPageClient from './BookingPageClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Booking — AFEL | Contact for Live Shows & Collaborations',
  description: 'Book AFEL for live performances, press features, and artist collaborations. Contact the management team.',
}

export default function BookingPage() {
  return <BookingPageClient />
}
