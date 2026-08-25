import { defineField, defineType } from 'sanity'

export const pressQuote = defineType({
  name: 'pressQuote',
  title: 'Press Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote Text',
      type: 'text',
      description: 'The actual quote from the press or publication',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sourceName',
      title: 'Source / Author Name',
      type: 'string',
      description: 'Name of the journalist or critic — e.g. "John Mensah"',
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      description: 'Name of the magazine, blog, or media outlet — e.g. "Accra Music Times"',
    }),
    defineField({
      name: 'url',
      title: 'Source URL (Optional)',
      type: 'url',
      description: 'Link to the original article (if available)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first. Use 1, 2, 3...',
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: 'publication', subtitle: 'sourceName' },
  },
})
