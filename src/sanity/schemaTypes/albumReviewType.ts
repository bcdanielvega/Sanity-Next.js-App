import {SparklesIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const albumReviewType = defineType({
  name: 'albumReview',
  title: 'Album',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
        name: 'artist',
        type: 'reference',
        to: {type: 'artist'},
      }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      description: "Is this one of Daniel's featured records?",
      initialValue: false

    }),
    defineField({
        name: 'genre',
        type: 'reference',
        to: {type: 'genre'},
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      artist: 'artist.name',
      featured: 'featured'
    },
    prepare(selection) {
      const {artist, featured} = selection
      return {...selection, subtitle: artist && `by ${artist}${featured ? ": ✳️" : ""}`}
    },
  },
})
