import { defineField, defineType } from 'sanity'

export const aboutContent = defineType({
  name: 'aboutContent',
  title: 'About Content',
  type: 'document',
  fields: [
    defineField({
      name: 'photos',
      title: 'Artist Photos',
      type: 'array',
      description: 'Upload 2 portrait photos for the About page header. Moody lighting (red/purple tones) works best.',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      description: 'Write your full artist biography here. This text appears on the About page.',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'quote',
      title: 'Featured Quote',
      type: 'string',
      description: 'A powerful one-liner displayed in large text over the concert photo — e.g. "The sound of Africa, amplified."',
    }),
    defineField({
      name: 'concertPhoto',
      title: 'Concert Stage Photo',
      type: 'image',
      description: 'A dramatic full-width black and white photo of you performing on stage. This is shown at the bottom of the About page.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Achievement Stats',
      type: 'array',
      description: 'Add your key stats — e.g. { Value: "150+", Label: "TRACKS RELEASED" }. These appear as stat cards.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Number / Value',
              type: 'string',
              description: 'The big number — e.g. "150+" or "9"',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'What the number means — e.g. "TRACKS RELEASED" or "ALBUMS"',
            }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        },
      ],
    }),
  ],
})
