import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAvatar',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BAvatar/BAvatar.vue',
      props: {
        '': {
          badge: {
            type: 'boolean | string',
            default: false,
            description:
              'Если `true`, отображает пустой бейдж на аватаре, либо строка — содержимое бейджа',
          },
          badgeBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к фону бейджа',
          },
          badgeDotIndicator: {
            type: 'boolean',
            default: false,
            description:
              'Если `true`, отображает маленький индикатор-точку на аватаре. Все свойства бейджа применяются к точке. `badge-dot-indicator` имеет приоритет над `badge`',
          },
          badgeTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к тексту',
          },
          badgeVariant: {
            type: 'ColorVariant | null',
            default: 'primary',
            description: 'Применяет одну из цветовых тем Bootstrap к бейджу',
          },
          badgePlacement: {
            type: 'CombinedPlacement',
            default: 'bottom-end',
            description:
              'Положение бейджа относительно аватара. Одно из значений CombinedPlacement',
          },
          badgePill: {
            type: 'boolean',
            default: false,
            description: 'Отображает бейдж с закруглёнными краями (pill)',
          },
          button: {
            type: 'boolean',
            default: false,
            description: 'Если установлено в `true`, рендерит аватар как кнопку',
          },
          buttonType: {
            type: 'ButtonType',
            default: 'button',
            description:
              'Тип кнопки для рендера (например, `button`, `submit`, `reset`). Не влияет, если не установлен prop button',
          },
          size: {
            type: 'Size | string',
            default: undefined,
            description: 'Размер аватара. Подробнее см. в документации',
          },
          square: {
            type: 'boolean',
            default: false,
            description: 'Отключает скругление аватара, делая его с квадратными углами',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст для отображения внутри аватара',
          },
          ...pick(
            buildCommonProps({
              alt: {
                default: 'avatar',
              },
              rounded: {
                default: 'circle',
                description:
                  'Определяет тип скругления для компонента или его потомков. Проп `square` имеет приоритет',
              },
              src: {
                description: 'URL изображения для аватара',
              },
              variant: {
                default: 'secondary',
              },
            }),
            [
              'ariaLabel',
              'alt',
              'bgVariant',
              'rounded',
              'roundedBottom',
              'roundedEnd',
              'roundedStart',
              'roundedTop',
              'src',
              'textVariant',
              'variant',
            ]
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BAvatar'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      emits: [
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'Событие клика мышью',
              type: 'MouseEvent',
            },
          ],
        },
        {
          event: 'img-error',
          args: [
            {
              arg: 'img-error',
              description: 'При ошибке загрузки изображения',
              type: 'Event',
            },
          ],
          description: 'При ошибке изображения',
        },
      ],
      slots: [
        {
          name: 'default',
          description:
            'Контент для размещения внутри дополнительного бейджа аватара. Переопределяет prop `badge`',
        },
        {
          name: 'badge',
          description:
            'Контент для размещения внутри аватара. Переопределяет props `text`, `src` и `icon-name`',
        },
      ],
    },
    {
      component: 'BAvatarGroup',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BAvatar/BAvatarGroup.vue',
      props: {
        '': {
          overlap: {
            type: 'Numberish',
            default: 0.3,
            description:
              'Контент для размещения внутри аватара. Переопределяет props `text`, `src` и `icon-name`',
          },
          size: {
            type: 'Size | string',
            default: undefined,
            description: 'Размер дочерних аватаров. Подробнее см. в документации',
          },
          square: {
            type: 'boolean',
            default: false,
            description: 'Отключает скругление дочерних аватаров, делая их с квадратными углами',
          },
          ...pick(
            buildCommonProps({
              rounded: {
                default: 'circle',
                description:
                  'Определяет тип скругления для компонента или его потомков. Проп `square` имеет приоритет. Подробнее см. в документации.',
              },
              variant: {
                default: 'secondary',
              },
            }),
            [
              'bgVariant',
              'rounded',
              'roundedBottom',
              'roundedEnd',
              'roundedStart',
              'roundedTop',
              'tag',
              'textVariant',
              'variant',
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BAvatarGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Контент (аватары) для размещения внутри группы аватаров',
        },
      ],
    },
  ],
}
