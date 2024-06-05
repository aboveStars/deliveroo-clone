import {defineType} from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'TL',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish',
    },
  ],
})
