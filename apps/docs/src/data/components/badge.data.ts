import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {linkProps, linkTo} from '../../utils/link-props'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBadge',
      sourcePath: '/BBadge/BBadge.vue',
      props: {
        '': {
          dotIndicator: {
            type: 'boolean',
            default: false,
            description: 'Положение индикатора и применение стиля точки',
          },
          pill: {
            type: 'boolean',
            default: false,
            description:
              "Если установлено в 'true', отображает бейдж в стиле pill (с закруглёнными краями)",
          },
          tag: {
            type: 'string',
            default: 'span',
            description: 'HTML-тег, который будет использоваться вместо тега по умолчанию',
          },
          placement: {
            type: 'CombinedPlacement',
            default: undefined,
            description:
              'Положение бейджа относительно родителя. Одно из значений CombinedPlacement',
          },
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['bgVariant', 'variant', 'textVariant']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBadge'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
