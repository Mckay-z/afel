import { client } from './client'
import { groq } from 'next-sanity'

// ─── Site Settings ────────────────────────────────────────────────────────────
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  artistName,
  tagline,
  heroImage,
  heroLabel,
  heroCTALabel,
  heroCTAUrl,
  streamingLinks,
  socialLinks,
  contactEmails,
  seoTitle,
  seoDescription
}`

export interface Release {
  _id: string
  title: string
  slug: string
  releaseType: string
  releaseYear: number
  coverArt: { asset: { _ref: string }; hotspot?: object; crop?: object }
  description?: string
  genre?: string
  duration?: string
  streamingLinks?: { platform: string; url: string }[]
  officialVideoUrl?: string
}

// ─── Releases ────────────────────────────────────────────────────────────────
export const releasesQuery = groq`*[_type == "release"] | order(order asc, releaseYear desc){
  _id,
  title,
  "slug": slug.current,
  releaseType,
  releaseYear,
  coverArt,
  genre,
  isFeatured,
  order
}`

export const featuredReleaseQuery = groq`*[_type == "release" && isFeatured == true][0]{
  _id,
  title,
  "slug": slug.current,
  releaseType,
  releaseYear,
  coverArt,
  description,
  genre,
  duration,
  streamingLinks,
  officialVideoUrl
}`

export const releaseBySlugQuery = groq`*[_type == "release" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  releaseType,
  releaseYear,
  coverArt,
  description,
  genre,
  duration,
  streamingLinks,
  officialVideoUrl
}`

export const releaseSlugsQuery = groq`*[_type == "release" && defined(slug.current)]{
  "slug": slug.current
}`

// ─── Gallery Performances ────────────────────────────────────────────────────
export const galleryQuery = groq`*[_type == "galleryPerformance"] | order(date desc){
  _id,
  image,
  caption,
  venue,
  city,
  country,
  date,
  featured,
  isUpcoming
}`

export const featuredGalleryQuery = groq`*[_type == "galleryPerformance" && featured == true] | order(date desc){
  _id,
  image,
  caption,
  venue,
  city,
  country,
  date,
  isUpcoming
}`

// ─── About Content ────────────────────────────────────────────────────────────
export const aboutQuery = groq`*[_type == "aboutContent"][0]{
  photos,
  bio,
  quote,
  concertPhoto,
  stats
}`

// ─── Press Quotes ─────────────────────────────────────────────────────────────
export const pressQuotesQuery = groq`*[_type == "pressQuote"] | order(order asc){
  _id,
  quote,
  sourceName,
  publication,
  url
}`

// ─── Nav Settings ─────────────────────────────────────────────────────────────
export const navSettingsQuery = groq`*[_type == "navSettings"][0]{
  navLinks
}`

// ─── Safe fetch helper ────────────────────────────────────────────────────────
async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!client) return null
  try {
    return await client.fetch<T>(query, params || {}, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

// ─── Fetch helpers ──────────────────────────────────────────────────────────
export async function getSiteSettings() {
  return safeFetch(siteSettingsQuery)
}

export async function getReleases() {
  return safeFetch<unknown[]>(releasesQuery)
}

export async function getFeaturedRelease() {
  return safeFetch<Release>(featuredReleaseQuery)
}

export async function getReleaseBySlug(slug: string) {
  return safeFetch<Release>(releaseBySlugQuery, { slug })
}

export async function getReleaseSlugs() {
  return safeFetch<{ slug: string }[]>(releaseSlugsQuery)
}

export async function getGallery() {
  return safeFetch<unknown[]>(galleryQuery)
}

export async function getFeaturedGallery() {
  return safeFetch<unknown[]>(featuredGalleryQuery)
}

export async function getAbout() {
  return safeFetch(aboutQuery)
}

export async function getPressQuotes() {
  return safeFetch<unknown[]>(pressQuotesQuery)
}

export async function getNavSettings() {
  return safeFetch(navSettingsQuery)
}
