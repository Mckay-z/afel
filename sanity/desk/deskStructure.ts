import { StructureBuilder } from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('AFEL Studio')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('About Page Content')
                .child(
                  S.document()
                    .schemaType('aboutContent')
                    .documentId('aboutContent')
                ),
              S.listItem()
                .title('Navigation')
                .child(
                  S.document()
                    .schemaType('navSettings')
                    .documentId('navSettings')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('release').title('Releases'),
              S.documentTypeListItem('galleryPerformance').title('Gallery & Performances'),
              S.documentTypeListItem('pressQuote').title('Press Quotes'),
            ])
        ),
    ])
