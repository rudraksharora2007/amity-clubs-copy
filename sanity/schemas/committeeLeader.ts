import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'committeeLeader',
  title: 'Committee Leader',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio / Message',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deptLabel',
      title: 'Department Label',
      type: 'string',
      description: 'Example: Director, AIIT / Amity University, Noida',
    }),
    defineField({
      name: 'chipLabel',
      title: 'Chip Label',
      type: 'string',
      description: 'Example: Academic Leadership',
    }),
    defineField({
      name: 'messageHeader',
      title: 'Message Header',
      type: 'string',
      description: 'Example: Message from the Faculty Coordinator',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '0=Director, 1-2=Advisors, 3-4=Chiefs',
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
