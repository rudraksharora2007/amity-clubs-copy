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
