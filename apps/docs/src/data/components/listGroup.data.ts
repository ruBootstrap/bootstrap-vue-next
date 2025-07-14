import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, type linkProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BListGroup',
      sourcePath: '/BListGroup/BListGroup.vue',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, отображает список без левых и правых границ (flush)',
          },
          horizontal: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'Если установлено, список отображается горизонтально вместо вертикального варианта по умолчанию',
          },
          numbered: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, элементы списка будут с нумерацией слева',
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BListGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое (элементы) для размещения в списке',
        },
      ],
    },
    {
      component: 'BListGroupItem',
      sourcePath: '/BListGroup/BListGroupItem.vue',
      props: {
        '': {
          action: {
            type: 'boolean',
            default: false,
          },
          button: {
            type: 'boolean',
            default: false,
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BListGroupItem'], keyof typeof linkProps>,
          PropertyReference
        >,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в элементе списка',
        },
      ],
    },
  ],
}
