import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubActivity',
  title: 'Club Activity',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Display date (e.g., "March 2024")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Activity Type',
      type: 'string',
      options: {
        list: [
          { title: 'Past', value: 'past' },
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Extra', value: 'extra' },
        ],
      },
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
      title: 'title',
      subtitle: 'date',
    },
  },
});
