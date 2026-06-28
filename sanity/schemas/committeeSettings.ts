import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'committeeSettings',
  title: 'Committee Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Amity Institute of Information Technology',
    }),
    defineField({
      name: 'heroTitleLine1',
      title: 'Hero Title Line 1',
      type: 'string',
      initialValue: 'AIIT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitleLine2',
      title: 'Hero Title Line 2',
      type: 'string',
      initialValue: 'STUDENT',
    }),
    defineField({
      name: 'heroTitleLine3',
      title: 'Hero Title Line 3',
      type: 'string',
      initialValue: 'COMMITTEE',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'officerCountLabel',
      title: 'Officer Count Label',
      type: 'string',
      initialValue: '45+',
    }),
    defineField({
      name: 'purposeEyebrow',
      title: 'Purpose Eyebrow',
      type: 'string',
      initialValue: 'OUR PURPOSE',
    }),
    defineField({
      name: 'purposeTitle',
      title: 'Purpose Title',
      type: 'string',
      initialValue: 'Vision. Mission. Motto.',
    }),
    defineField({
      name: 'visionBody',
      title: 'Vision Body',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'missionBody',
      title: 'Mission Body',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mottoLine1',
      title: 'Motto Line 1',
      type: 'string',
      initialValue: 'Learn Here.',
    }),
    defineField({
      name: 'mottoLine2',
      title: 'Motto Line 2',
      type: 'string',
      initialValue: 'Lead Everywhere.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Demand Excellence. Contact the Council.',
    }),
    defineField({
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Open Direct Inquiry',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Committee Page Settings',
        subtitle: 'Singleton content for /committee',
      };
    },
  },
});
