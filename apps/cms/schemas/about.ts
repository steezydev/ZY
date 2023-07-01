export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
            },
            {
              name: 'url',
              type: 'url',
            }
          ]
        }
      ]
    },
    {
      name: 'aboutText',
      title: 'About',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ]
}