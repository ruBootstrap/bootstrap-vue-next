import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn'},
      sourcePath: '/BButton/BButton.vue',
      props: {
        '': {
          loading: {
            type: 'boolean',
            default: false,
            description: 'Если установлено в `true`, отображает кнопку в состоянии загрузки',
          },
          loadingFill: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено в `true`, заполняет кнопку спиннером загрузки и игнорирует `loading-text`',
          },
          loadingText: {
            type: 'string',
            default: 'Loading...',
            description: 'Текст, отображаемый при состоянии загрузки кнопки',
          },
          pill: {
            type: 'boolean',
            default: false,
            description:
              "Если установлено в 'true', отображает кнопку в стиле pill (с закруглёнными краями)",
          },
          pressed: {
            type: 'boolean',
            default: undefined,
            description:
              "Если установлено в 'true', кнопка выглядит нажатой и получает атрибут 'aria-pressed=\"true\"'. Если 'false' — 'aria-pressed=\"false\"'. Три состояния. Можно синхронизировать с помощью .sync",
          },
          squared: {
            type: 'boolean',
            default: false,
            description:
              "Если установлено в 'true', отображает кнопку с прямыми углами (без скругления)",
          },
          type: {
            type: 'ButtonType',
            default: 'button',
            description:
              "Значение для атрибута 'type' кнопки. Может быть 'button', 'submit' или 'reset'",
          },
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['size', 'tag', 'variant']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BButton'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...pick(linkProps, [
            'activeClass',
            'exactActiveClass',
            'replace',
            'routerComponentName',
            'routerTag',
          ]),
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: 'Событие клика',
          event: 'click',
        },
        {
          event: 'update:pressed',
          description: 'Вызывается при изменении свойства `pressed`',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Новое значение свойства `pressed`',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри кнопки',
        },
        {
          name: 'loading',
          description: 'Контент для замены стандартного лоадера',
        },
        {
          name: 'loading-spinner',
          description: 'Контент для замены стандартного спиннера загрузки',
        },
      ],
    },
    {
      component: 'BCloseButton',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-close'},
      sourcePath: '/BButton/BCloseButton.vue',
      props: {
        '': {
          type: {
            type: 'ButtonType',
            default: 'button',
            description:
              "Значение для атрибута 'type' кнопки. Может быть 'button', 'submit' или 'reset'",
          },
          ...pick(
            buildCommonProps({
              ariaLabel: {
                default: 'Close',
              },
            }),
            ['ariaLabel', 'disabled']
          ),
        } satisfies Record<keyof BvnComponentProps['BCloseButton'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по неактивной кнопке',
          args: [
            {
              arg: 'click',
              type: 'MouseEvent',
              description: 'Объект события клика мышью',
            },
          ],
        },
      ],
    },
  ],
}
