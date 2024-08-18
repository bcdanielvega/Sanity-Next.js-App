import {AsteriskIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const genreType = defineType({
  name: 'genre',
  title: 'Genre',
  type: 'document',
  icon: AsteriskIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
        name: 'primaryReferenceArtist',
        type: 'reference',
        title: 'Primary Reference Artist',
        to:[{type: 'artist'}]
    }),
    defineField({
        name: 'secondaryyReferenceArtist',
        type: 'reference',
        title: 'Secondaryy Reference Artist',
        to:[{type: 'artist'}]
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
