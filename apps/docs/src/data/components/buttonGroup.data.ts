import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonGroup',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-group'},
      sourcePath: '/BButton/BButtonGroup.vue',
      props: {
        '': {
          vertical: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, отображает группу кнопок вертикально',
          },
          ...pick(buildCommonProps(), ['ariaLabel', 'size', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BButtonGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Контент (кнопки) для размещения внутри группы кнопок',
        },
      ],
    },
  ],
}
