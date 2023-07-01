export default (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Singleton document for "About"
      S.listItem()
        .title('About')
        .child(S.editor().id('aboutPage').schemaType('about').documentId('about')),
      // Then list out the rest of the document types
      ...S.documentTypeListItems().filter((listItem: any) => !['about'].includes(listItem.getId())),
    ])
