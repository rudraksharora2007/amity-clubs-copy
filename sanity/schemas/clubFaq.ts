import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubFaq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'club',
      title: 'Club (Optional)',
      type: 'reference',
      to: [{ type: 'clubPage' }],
      description: 'Leave empty for general FAQs that appear on the main FAQ page and chatbot',
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
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Alternate ways users might ask this question (e.g., "apply", "join", "signup")',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Committee', value: 'committee' },
          { title: 'Clubs', value: 'clubs' },
          { title: 'Events', value: 'events' },
          { title: 'Contact', value: 'contact' },
          { title: 'Applications', value: 'applications' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'general',
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
      category: 'category',
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category ? `Category: ${category}` : 'No category',
      };
    },
  },
});
