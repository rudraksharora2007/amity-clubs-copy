import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clubPage',
  title: 'Club Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Club Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'applyLabel',
      title: 'Apply Button Label',
      type: 'string',
    }),
    defineField({
      name: 'aboutHeadline',
      title: 'About Headline',
      type: 'string',
    }),
    defineField({
      name: 'aboutBody1',
      title: 'About Body Paragraph 1',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'aboutBody2',
      title: 'About Body Paragraph 2',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'aboutStats',
      title: 'About Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
    },
  },
});
