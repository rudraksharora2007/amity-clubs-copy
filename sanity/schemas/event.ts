import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Homepage Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., "Flagship Event", "Technical Session"',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Display date (e.g., "March 15, 2024")',
    }),
    defineField({
      name: 'photo',
      title: 'Event Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gridClass',
      title: 'Grid Layout Class',
      type: 'string',
      description: 'Tailwind grid span class (e.g., "md:col-span-8 md:row-span-2")',
      initialValue: 'md:col-span-4 md:row-span-1',
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
      subtitle: 'category',
      media: 'photo',
    },
  },
});
