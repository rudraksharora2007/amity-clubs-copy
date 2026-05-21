import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubFaq',
  title: 'Club FAQ',
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
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
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
      title: 'question',
    },
  },
});
