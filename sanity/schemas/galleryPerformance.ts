import { defineField, defineType } from 'sanity'

export const galleryPerformance = defineType({
  name: 'galleryPerformance',
  title: 'Gallery / Performance',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Performance Photo',
      type: 'image',
      description: 'Upload a photo from this performance. Black and white or dark photography works best.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Short description shown in the lightbox when someone clicks the photo — e.g. "Electric night at the amphitheater"',
    }),
    defineField({
      name: 'venue',
      title: 'Venue Name',
      type: 'string',
      description: 'Name of the venue — e.g. "National Theatre" or "Alliance Française"',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'City where the performance took place — e.g. "Accra"',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      description: 'Country where the performance took place — e.g. "Ghana"',
    }),
    defineField({
      name: 'date',
      title: 'Performance Date',
      type: 'date',
      description: 'Date of the performance. Used to sort shows and display in the gallery table.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Photo',
      type: 'boolean',
      description: 'Turn ON to make this photo appear at the TOP of the gallery. Use for your best shots.',
      initialValue: false,
    }),
    defineField({
      name: 'isUpcoming',
      title: 'Upcoming Performance',
      type: 'boolean',
      description: 'Turn ON if this is a FUTURE performance (not yet happened). Turn OFF for past shows. This changes how it looks in the gallery table.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'venue',
      subtitle: 'city',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Venue',
        subtitle: subtitle || '',
        media,
      }
    },
  },
})
