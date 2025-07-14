import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButtonToolbar',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-toolbar'},
      sourcePath: '/BButton/BButtonToolbar.vue',
      props: {
        '': {
          justify: {
            type: 'boolean',
            default: false,
            description:
              'Растягивает тулбар на всю доступную ширину, увеличивая расстояние между группами кнопок, input-группами и выпадающими списками',
          },
          ...pick(buildCommonProps(), ['ariaLabel', 'role']),
        } satisfies Record<keyof BvnComponentProps['BButtonToolbar'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри тулбара',
        },
      ],
    },
  ],
}
