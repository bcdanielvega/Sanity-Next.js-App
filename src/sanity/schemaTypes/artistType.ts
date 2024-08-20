import {BoltIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: BoltIcon,
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
        name: 'origin',
        type: 'string',
    }),
    defineField({
      name: 'genre',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'genre'}})],
    }),
    defineField({
      name: 'albums',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'albumReview'}})]
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      description: "Is this one of Daniel's featured artists?",
      initialValue: false
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      origin: 'origin',
      featured: 'featured'
    },
    prepare(selection) {
        const {origin, featured} = selection
        return {...selection, subtitle: origin && `${origin}${featured ? ": ✳️" : ""}`}
    }
  },
})
