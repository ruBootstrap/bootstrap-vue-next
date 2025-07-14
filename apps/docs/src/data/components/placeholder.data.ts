import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPlaceholder',
      sourcePath: '/BPlaceholder/BPlaceholder.vue',
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cols: {
            type: 'Numberish',
            default: 12,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          tag: {
            type: 'string',
            default: 'span',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          width: {
            type: 'Numberish',
            default: undefined,
          },
          wrapperTag: {
            type: 'string',
            default: 'span',
          },
        } satisfies Record<keyof BvnComponentProps['BPlaceholder'], PropertyReference>,
      },
      emits: [],
      slots: [],
    },
    {
      component: 'BPlaceholderCard',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card'},
      sourcePath: '/BPlaceholder/BPlaceholderCard.vue',
      emits: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          footerWidth: {
            type: 'Numberish',
            default: 100,
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerWidth: {
            type: 'Numberish',
            default: 100,
          },
          imgBlankColor: {
            type: 'string',
            default: '#868e96',
          },
          imgPlacement: {
            type: "'top' | 'bottom'",
            default: 'top',
          },
          imgHeight: {
            type: 'Numberish',
            default: 100,
          },
          imgSrc: {
            type: 'string',
            default: undefined,
          },
          noButton: {
            type: 'boolean',
            default: false,
          },
          noFooter: {
            type: 'boolean',
            default: false,
          },
          noHeader: {
            type: 'boolean',
            default: false,
          },
          noImg: {
            type: 'boolean',
            default: false,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BPlaceholderCard'], PropertyReference>,
      },
      slots: [
        {
          description: 'Переопределяет изображение по умолчанию',
          name: 'img',
          scope: [],
        },
        {
          description: 'Переопределяет заголовок по умолчанию',
          name: 'header',
          scope: [],
        },
        {
          description: 'Переопределяет плейсхолдеры по умолчанию',
          name: 'default',
          scope: [],
        },
        {
          description: 'Переопределяет футер по умолчанию',
          name: 'footer',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderWrapper',
      styleSpec: {kind: StyleKind.None},
      sourcePath: '/BPlaceholder/BPlaceholderWrapper.vue',
      emits: [],
      props: {
        '': {
          loading: {
            description: 'Определяет, должен ли отображаться слот загрузки',
            type: 'boolean',
            default: false,
          },
        } satisfies Record<keyof BvnComponentProps['BPlaceholderWrapper'], PropertyReference>,
      },
      slots: [
        {
          description: 'Содержимое, отображаемое, когда prop `loading` равен `false`',
          name: 'default',
          scope: [],
        },
        {
          description: 'Содержимое, отображаемое, когда prop `loading` равен `true`',
          name: 'loading',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderTable',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.table'},
      sourcePath: '/BPlaceholder/BPlaceholderTable.vue',
      emits: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cellWidth: {
            type: 'Numberish',
            default: 100,
          },
          columns: {
            type: 'Numberish',
            default: 5,
          },
          footerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          footerCellWidth: {
            type: 'Numberish',
            default: 100,
          },
          footerColumns: {
            type: 'Numberish',
            default: undefined,
          },
          footerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          headerAnimation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          headerCellWidth: {
            type: 'Numberish',
            default: 100,
          },
          headerColumns: {
            type: 'Numberish',
            default: undefined,
          },
          headerSize: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          noHeader: {
            type: 'boolean',
            default: false,
          },
          rows: {
            type: 'Numberish',
            default: 3,
          },
          showFooter: {
            type: 'boolean',
            default: false,
          },
          size: {
            type: 'PlaceholderSize',
            default: 'md',
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BPlaceholderTable'], PropertyReference>,
      },
      slots: [
        {
          description: 'Переопределяет thead таблицы',
          name: 'thead',
          scope: [],
        },
        {
          description: 'Переопределяет tfoot таблицы',
          name: 'tfoot',
          scope: [],
        },
        {
          description: 'Переопределяет tbody таблицы',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderButton',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.placeholder.btn'},
      sourcePath: '/BPlaceholder/BPlaceholderButton.vue',
      emits: [],
      slots: [],
      props: {
        '': {
          animation: {
            type: 'PlaceholderAnimation',
            default: undefined,
          },
          cols: {
            type: 'Numberish',
            default: undefined,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          variant: {
            type: 'ColorVariant | null',
            default: 'primary',
          },
          width: {
            type: 'Numberish',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BPlaceholderButton'], PropertyReference>,
      },
    },
  ],
}
