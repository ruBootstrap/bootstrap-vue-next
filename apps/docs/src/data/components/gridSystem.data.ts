import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BContainer',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.container[-*]'},
      sourcePath: '/BContainer/BContainer.vue',
      props: {
        '': {
          fluid: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              'Если true — строка всегда будет 100% ширины, либо укажите имя брейкпоинта Bootstrap для 100% ширины до этого брейкпоинта',
          },
          gutterX: {
            type: 'GutterNumbers',
            default: undefined,
            description: 'Горизонтальный отступ (gutter)',
          },
          gutterY: {
            type: 'GutterNumbers',
            default: undefined,
            description: 'Вертикальный отступ (gutter)',
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BContainer'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в контейнере',
        },
      ],
    },
    {
      component: 'BRow',
      sourcePath: '/BContainer/BRow.vue',
      props: {
        '': {
          alignContent: {
            type: 'AlignmentContent',
            default: undefined,
            description:
              "Выравнивание элементов колонок по поперечной оси: 'start', 'center', 'end', 'around', 'between', 'fill' или 'stretch'. Не влияет на одиночные строки элементов",
          },
          alignH: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description:
              "Горизонтальное выравнивание/распределение всех колонок: 'start', 'center', 'end', 'around', 'between' или 'evenly'",
          },
          alignV: {
            type: 'AlignmentVertical',
            default: undefined,
            description:
              "Вертикальное выравнивание всех колонок в строке: 'start', 'center', 'end', 'baseline', 'fill' или 'stretch'",
          },
          cols: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'xs'",
          },
          colsLg: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'ls'",
          },
          colsMd: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'md'",
          },
          colsSm: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'sm'",
          },
          colsXl: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'xl'",
          },
          colsXxl: {
            type: 'ColsNumbers',
            default: undefined,
            description: "Количество колонок в строке на брейкпоинте 'xxl'",
          },
          gutterX: {
            type: 'GutterNumbers',
            default: undefined,
            description: 'Горизонтальный отступ (gutter)',
          },
          gutterY: {
            type: 'GutterNumbers',
            default: undefined,
            description: 'Вертикальный отступ (gutter)',
          },
          noGutters: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, убирает отступы у строки и padding у дочерних колонок',
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BRow'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в строке',
        },
      ],
    },
    {
      component: 'BCol',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.col[-*]'},
      sourcePath: '/BContainer/BCol.vue',
      props: {
        '': {
          alignSelf: {
            type: "AlignmentVertical | 'auto'",
            default: undefined,
            description:
              "Вертикальное выравнивание ячейки сетки относительно строки: 'start', 'center', 'fill', 'end', 'baseline' или 'stretch'",
          },
          col: {
            type: 'boolean',
            default: false,
            description: 'Если true, делает колонку одинаковой ширины для xs и выше',
          },
          cols: {
            type: "ColsNumbers | 'auto'",
            default: undefined,
            description: 'Количество колонок, занимаемых ячейкой сетки для xs и выше',
          },
          lg: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Количество колонок, занимаемых ячейкой сетки для lg и выше',
          },
          md: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Количество колонок, занимаемых ячейкой сетки для md и выше',
          },
          sm: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Количество колонок, занимаемых ячейкой сетки для sm и выше',
          },
          xl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Количество колонок, занимаемых ячейкой сетки для xl и выше',
          },
          xxl: {
            type: "boolean | ColsNumbers | 'auto'",
            default: false,
            description: 'Количество колонок, занимаемых ячейкой сетки для xxl и выше',
          },
          offset: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description: 'Количество колонок, на которое ячейка сетки смещена для xs и выше (0-12)',
          },
          offsetLg: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description: 'Количество колонок, на которое ячейка сетки смещена для lg и выше (0-12)',
          },
          offsetMd: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description: 'Количество колонок, на которое ячейка сетки смещена для md и выше (0-12)',
          },
          offsetSm: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description: 'Количество колонок, на которое ячейка сетки смещена для sm и выше (0-12)',
          },
          offsetXl: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description: 'Количество колонок, на которое ячейка сетки смещена для xl и выше (0-12)',
          },
          offsetXxl: {
            type: 'ColsOffsetNumbers',
            default: undefined,
            description:
              'Количество колонок, на которое ячейка сетки смещена для xxl и выше (0-12)',
          },
          order: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на xs и выше (1-5, 'first' или 'last')",
          },
          orderLg: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на lg и выше (1-5, 'first' или 'last')",
          },
          orderMd: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на md и выше (1-5, 'first' или 'last')",
          },
          orderSm: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на sm и выше (1-5, 'first' или 'last')",
          },
          orderXl: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на xl и выше (1-5, 'first' или 'last')",
          },
          orderXxl: {
            type: 'ColsOrderNumbers',
            default: undefined,
            description: "Порядок flex для ячейки сетки на xxl и выше (1-5, 'first' или 'last')",
          },
          ...pick(buildCommonProps({}), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BCol'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в колонке',
        },
      ],
    },
  ],
}
