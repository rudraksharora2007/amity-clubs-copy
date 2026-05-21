import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubGalleryImage',
  title: 'Club Gallery Image',
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
      description: 'e.g., "Annual Fest Opening"',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g., "2024"',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gridClass',
      title: 'Grid Layout Class',
      type: 'string',
      description: 'Tailwind grid span class for the 12-column, 2-row gallery',
      initialValue: 'col-span-12 md:col-span-4 row-span-1',
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
      subtitle: 'year',
      media: 'photo',
    },
  },
});
