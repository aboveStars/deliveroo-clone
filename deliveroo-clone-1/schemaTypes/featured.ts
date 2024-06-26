import {defineType} from 'sanity'

export const featured = defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
