import {defineType} from 'sanity'
import {category} from './category'

export const restaurant = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Lattitude of Restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longtitude of Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of Restaurant',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rate of Restaurant',
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: category.name}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
