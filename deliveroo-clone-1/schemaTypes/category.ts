import {defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Menu Catagory',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    },
  ],
})
