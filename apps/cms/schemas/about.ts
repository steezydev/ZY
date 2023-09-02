const aboutSchema = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
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
            },
          ],
        },
      ],
    },
    {
      name: 'aboutText',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'tech_stack_primary',
      title: 'Primary Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'techStack'}],
        },
      ],
    },
    {
      name: 'tech_stack_all',
      title: 'All Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'techStack'}],
        },
      ],
    },
  ],
}

export default aboutSchema
