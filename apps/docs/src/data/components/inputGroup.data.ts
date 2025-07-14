import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BInputGroup',
      sourcePath: '/BInputGroup/BInputGroup.vue',
      props: {
        '': {
          append: {
            type: 'string',
            default: undefined,
            description: 'Текст, добавляемый после input-группы',
          },
          prepend: {
            type: 'string',
            default: undefined,
            description: 'Текст, добавляемый перед input-группой',
          },
          ...pick(buildCommonProps(buildCommonProps()), ['id', 'size', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BInputGroup'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'append',
          description: 'Содержимое, добавляемое после input-группы',
        },
        {
          name: 'default',
          description: 'Содержимое для размещения в input-группе',
        },
        {
          name: 'prepend',
          description: 'Содержимое, добавляемое перед input-группой',
        },
      ],
    },
    {
      component: 'BInputGroupText',
      sourcePath: '/BInputGroup/BInputGroupText.vue',
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description: 'Содержимое для размещения в тексте input-группы',
          },
          ...pick(buildCommonProps(buildCommonProps()), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BInputGroupText'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в тексте input-группы',
        },
      ],
    },
  ],
}
