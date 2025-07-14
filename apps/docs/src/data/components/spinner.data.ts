import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.spinner-*'},
      sourcePath: '/BSpinner/BSpinner.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'Текст для скрытой подписи (label), видимой только для скринридеров',
          },
          small: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, отображается уменьшенный спиннер, подходящий для кнопок',
          },
          type: {
            type: 'SpinnerType',
            default: 'border',
            description: "Тип отображаемого спиннера. Поддерживаются типы: 'border' и 'grow'",
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'span',
              },
            }),
            ['role', 'tag', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BSpinner'], PropertyReference>,
      },
      slots: [
        {
          name: 'label',
          description: 'Содержимое для скрытой подписи (label)',
        },
      ],
    },
  ],
}
