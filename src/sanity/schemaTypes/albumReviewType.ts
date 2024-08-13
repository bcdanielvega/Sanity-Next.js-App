import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const albumReviewType = defineType({
  name: 'albumReview',
  title: 'Album Review',
  type: 'document',
  icon: DocumentTextIcon,
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
        name: 'genre',
        type: 'string',
        options: {
            list: [
                {title: 'Jazz', value: 'jazz'},
                {title: 'Post Rock', value: 'post-rock'},
                {title: 'Punk Rock', value: 'punk-rock'},
                {title: 'Pop Punk', value: 'pop-punk'},
                {title: 'Alternative Rock', value: 'alternative-rock'},
                {title: 'Classic Rock', value: 'classic-rock'},
                {title: 'Hip Hop', value: 'hip-hop'},
                {title: 'Electronic', value: 'electronic'},
                {title: 'Folk Rock', value: 'folk-rock'},
                {title: 'Grunge', value: 'grunge'},
                {title: 'Pop', value: 'pop'},
                {title: 'Hardcore', value: 'hardcore'},
                {title: 'Metal', value: 'metal'},
            ]
        }
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
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
