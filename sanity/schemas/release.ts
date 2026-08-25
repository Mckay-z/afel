import { defineField, defineType } from 'sanity'

export const release = defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Release Title',
      type: 'string',
      description: 'Name of the song, EP, album, or mixtape',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated URL-friendly version of the title — used in the web address',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'releaseType',
      title: 'Release Type',
      type: 'string',
      description: 'What type of release is this?',
      options: {
        list: [
          { title: 'Single', value: 'Single' },
          { title: 'EP', value: 'EP' },
          { title: 'Album', value: 'Album' },
          { title: 'Mixtape', value: 'Mixtape' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
      description: 'The year this was released — e.g. 2025',
    }),
    defineField({
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      description: 'Upload the cover art image for this release (square format recommended)',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of this release — shown on the release detail page',
      rows: 4,
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'string',
      description: 'Primary genre — e.g. "Afrobeats", "Highlife", "Afropop"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Total play time — e.g. "04 MIN 16 SEC" for a single, or "24 MIN" for an EP',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Release',
      type: 'boolean',
      description: 'Turn ON to make this the large featured release shown prominently on the homepage. Only one release should be featured at a time.',
      initialValue: false,
    }),
    defineField({
      name: 'streamingLinks',
      title: 'Streaming Links',
      type: 'array',
      description: 'Add links to this release on each streaming platform',
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
              title: 'Link URL',
              type: 'url',
              description: 'Direct link to this release on the platform',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'officialVideoUrl',
      title: 'Official Music Video URL',
      type: 'url',
      description: 'Paste the full YouTube video URL here — it will be embedded on the release page. Example: https://www.youtube.com/watch?v=abc123',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = appears first on the Releases page. Use 1, 2, 3... to control the order.',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseType',
      media: 'coverArt',
    },
  },
})
