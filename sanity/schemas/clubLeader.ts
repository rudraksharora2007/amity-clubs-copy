import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubLeader',
  title: 'Club Leader',
  type: 'document',
  fields: [
    defineField({
      name: 'club',
      title: 'Club',
      type: 'reference',
      to: [{ type: 'clubPage' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message / Quote',
      type: 'text',
      rows: 4,
      description: 'Optional quote displayed for faculty/president',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'portrait',
    },
  },
});
