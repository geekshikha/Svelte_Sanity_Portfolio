import {defineField, defineType} from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillsList',
      title: 'skill List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'iconClass',
              title: 'Icon Class Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
