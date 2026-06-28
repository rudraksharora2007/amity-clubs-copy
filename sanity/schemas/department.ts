import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'department',
  title: 'Committee Department',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Department Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'departmentId',
      title: 'Department ID',
      type: 'string',
      description: 'Two-digit display ID (e.g., "01", "02")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'departmentHead',
      title: 'Department Head Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headRole',
      title: 'Department Head Role',
      type: 'string',
      initialValue: 'Department Head',
    }),
    defineField({
      name: 'headMessage',
      title: 'Department Head Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'headPortrait',
      title: 'Department Head Portrait',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'headLinkedinUrl',
      title: 'Department Head LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'headTwitterUrl',
      title: 'Department Head Twitter / X URL',
      type: 'url',
    }),
    defineField({
      name: 'theme',
      title: 'Card Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Green', value: 'green' },
          { title: 'Red', value: 'red' },
          { title: 'Teal', value: 'teal' },
          { title: 'Gold', value: 'gold' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'blue',
    }),
    defineField({
      name: 'coHeads',
      title: 'Co-Heads',
      type: 'array',
      of: [{ type: 'string' }],
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
      subtitle: 'departmentHead',
    },
  },
});
