import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSpinbutton',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BFormSpinbutton/BFormSpinbutton.vue',
      props: {
        '': {
          formatterFn: {
            type: '(value: number) => string',
            default: undefined,
          },
          inline: {
            type: 'boolean',
            default: 'false',
            description: 'Когда установлено, компонент отображается как inline-элемент',
          },
          labelDecrement: {
            type: 'string',
            default: 'Decrement',
            description: 'Текст для aria-label кнопки уменьшения',
          },
          labelIncrement: {
            type: 'string',
            default: 'Increment',
            description: 'Текст для aria-label кнопки увеличения',
          },
          locale: {
            type: 'string',
            default: 'undefined',
            description:
              'Локаль для форматирования числа. По умолчанию — локаль браузера. Применяется только при использовании внутреннего форматтера',
          },
          max: {
            type: 'Numberish',
            default: '100',
            description:
              'Максимальное значение. Должно быть больше значения min. Допускаются отрицательные числа',
          },
          min: {
            type: 'Numberish',
            default: '1',
            description: 'Минимальное значение. Допускаются отрицательные числа',
          },
          placeholder: {
            type: 'string',
            default: 'undefined',
            description: 'Значение, отображаемое при v-model=null',
          },
          repeatDelay: {
            type: 'Numberish',
            default: '500',
            description:
              'Задержка (мс) перед автоповтором увеличения/уменьшения. Только положительное число. Требует удержания кнопки мыши/клавиши',
          },
          repeatInterval: {
            type: 'Numberish',
            default: '100',
            description:
              'Интервал (мс) между автоповторами увеличения/уменьшения. Только положительное число',
          },
          repeatStepMultiplier: {
            type: 'Numberish',
            default: '4',
            description:
              'Количество шагов для прыжка после достижения repeat-threshold. Только положительное число. Также используется для клавиш PageUp/PageDown',
          },
          repeatThreshold: {
            type: 'Numberish',
            default: '10',
            description:
              'Количество повторов до увеличения шага на repeat-step-multiplier. Только положительное число',
          },
          step: {
            type: 'Numberish',
            default: '1',
            description: 'Положительное число, определяющее шаг изменения значения',
          },
          vertical: {
            type: 'boolean',
            default: 'false',
            description: 'Когда установлено, компонент отображается вертикально',
          },
          wrap: {
            type: 'boolean',
            default: 'false',
            description: 'Когда установлено, компонент отображается вертикально',
          },
          ...pick(buildCommonProps(), [
            'ariaControls',
            'ariaLabel',
            'disabled',
            'form',
            'id',
            'name',
            'readonly',
            'required',
            'size',
            'state',
          ]),
          modelValue: {},
        } satisfies Record<keyof BvnComponentProps['BFormSpinbutton'], PropertyReference>,
      },
      emits: [
        {
          event: 'change',
          args: [
            {
              arg: 'value',
              type: 'number | null',
              description: 'Текущее значение spinbutton',
            },
          ],
          description: 'Вызывается при отпускании кнопки мыши или клавиши',
        },

        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              type: 'number | null',
              description: 'Текущее значение spinbutton',
            },
          ],
          description: 'Вызывается при каждом изменении значения для обновления v-model',
        },
      ],
      slots: [
        {
          name: 'decrement',
          description: 'Пользовательское содержимое для кнопки уменьшения',
          scope: [
            {
              prop: 'hasFocus',
              type: 'boolean',
              description: '`true`, если spinbutton в фокусе',
            },
          ],
        },
        {
          name: 'increment',
          description: 'Пользовательское содержимое для кнопки увеличения',
          scope: [
            {
              prop: 'hasFocus',
              type: 'boolean',
              description: '`true`, если spinbutton в фокусе',
            },
          ],
        },
      ],
    },
  ],
}
