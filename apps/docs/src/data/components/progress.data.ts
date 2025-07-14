import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BProgress',
      sourcePath: '/BProgress/BProgress.vue',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: undefined,
            description: "Включить анимированный фон. Также автоматически устанавливает 'striped'",
          },
          height: {
            type: 'string',
            default: undefined,
            description:
              'Переопределяет высоту по умолчанию, укажите CSS-значение высоты (включая единицы измерения)',
          },
          max: {
            type: 'Numberish',
            default: 100,
            description: 'Устанавливает максимальное значение',
          },
          precision: {
            type: 'Numberish',
            default: undefined,
            description: 'Количество знаков после запятой для округления значения',
          },
          showProgress: {
            type: 'boolean',
            default: undefined,
            description: 'Отображать текущее значение прогресса в процентах',
          },
          showValue: {
            type: 'boolean',
            default: undefined,
            description: 'Отображать текущее значение прогресса',
          },
          striped: {
            type: 'boolean',
            default: undefined,
            description: 'Включить полосатый фон',
          },
          value: {
            type: 'Numberish',
            default: undefined,
            description: 'Текущее значение прогресс-бара',
          },
          ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BProgress'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое (прогресс-бары), размещаемое внутри элемента прогресса',
        },
      ],
    },
    {
      component: 'BProgressBar',
      sourcePath: '/BProgress/BProgressBar.vue',
      props: {
        '': {
          animated: {
            type: 'boolean',
            default: false,
            description: "Включить анимированный фон. Также автоматически устанавливает 'striped'",
          },
          label: {
            type: 'string',
            default: undefined,
            description: 'Текстовая строка для явного задания подписи',
          },
          max: {
            type: 'Numberish',
            default: undefined,
            description: 'Устанавливает максимальное значение',
          },
          precision: {
            type: 'Numberish',
            default: 0,
            description: 'Количество знаков после запятой для округления значения',
          },
          showProgress: {
            type: 'boolean',
            default: false,
            description: 'Отображать текущее значение прогресса в процентах',
          },
          showValue: {
            type: 'boolean',
            default: false,
            description: 'Отображать текущее значение прогресса',
          },
          striped: {
            type: 'boolean',
            default: false,
            description: 'Включить полосатый фон',
          },
          value: {
            type: 'Numberish',
            default: 0,
            description: 'Текущее значение прогресс-бара',
          },
          ...pick(buildCommonProps(), ['bgVariant', 'textVariant', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BProgressBar'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description:
            'Содержимое, размещаемое внутри прогресс-бара. Переопределяет props `label`, `show-progress` и `show-value`',
        },
      ],
    },
  ],
}
