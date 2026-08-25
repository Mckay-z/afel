import { defineField, defineType } from 'sanity'

export const navSettings = defineType({
  name: 'navSettings',
  title: 'Navigation Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      description: 'Control which links appear in the top navigation bar and their labels',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Text shown in the navigation — e.g. "RELEASES"',
            }),
            defineField({
              name: 'href',
              title: 'URL / Path',
              type: 'string',
              description: 'Where this link goes — e.g. "/releases" or "/about"',
            }),
            defineField({
              name: 'showInNav',
              title: 'Show in Navigation',
              type: 'boolean',
              description: 'Turn OFF to hide this link from the nav bar without deleting it',
              initialValue: true,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    }),
  ],
})
