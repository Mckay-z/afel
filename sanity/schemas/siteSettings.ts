import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      description: 'The main artist name displayed across the entire site',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline shown under the artist name — e.g. "Afrobeat Artist | Accra, Ghana"',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Full-bleed background image on the homepage hero (dark, atmospheric, moody)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroLabel',
      title: 'Hero Badge Label',
      type: 'string',
      description: 'Small badge text above the headline — e.g. "NEW DROP"',
    }),
    defineField({
      name: 'heroCTALabel',
      title: 'Hero CTA Button Label',
      type: 'string',
      description: 'Text on the main call-to-action button — e.g. "LISTEN NOW"',
    }),
    defineField({
      name: 'heroCTAUrl',
      title: 'Hero CTA Button URL',
      type: 'url',
      description: 'Where the CTA button links to — usually a streaming platform URL',
    }),
    defineField({
      name: 'streamingLinks',
      title: 'Streaming Platform Links',
      type: 'array',
      description: 'Add all streaming platforms where your music is available',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'Choose the streaming platform',
              options: {
                list: [
                  { title: 'Apple Music', value: 'apple' },
                  { title: 'Spotify', value: 'spotify' },
                  { title: 'YouTube Music', value: 'youtube' },
                  { title: 'Amazon Music', value: 'amazon' },
                  { title: 'SoundCloud', value: 'soundcloud' },
                  { title: 'Deezer', value: 'deezer' },
                  { title: 'Audiomack', value: 'audiomack' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Full link to your profile on this platform',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Links to your social media accounts',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Full link to your social profile',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactEmails',
      title: 'Contact Emails',
      type: 'object',
      description: 'Email addresses for different types of inquiries',
      fields: [
        defineField({
          name: 'press',
          title: 'Press Email',
          type: 'string',
          description: 'Email for press and media inquiries',
        }),
        defineField({
          name: 'organizers',
          title: 'Organizers Email',
          type: 'string',
          description: 'Email for booking and event organizers',
        }),
        defineField({
          name: 'collaborations',
          title: 'Collaborations Email',
          type: 'string',
          description: 'Email for other artists and producers wanting to collaborate',
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Page title shown in browser tab and search results (60 chars max)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Short description shown in search results (155 chars max)',
      rows: 3,
    }),
  ],
})
