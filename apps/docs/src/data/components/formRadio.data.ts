import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRadio',
      styleSpec: {kind: StyleKind.Tag, value: 'input[type="radio"]'},
      sourcePath: '/BFormRadio/BFormRadio.vue',
      props: {
        '': {
          button: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, радиокнопка отображается как кнопка',
          },
          buttonGroup: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, радиокнопка отображается как часть группы кнопок (не оборачивает radio и метку в div). Не обязательно устанавливать true, если используется внутри RadioGroup — это обрабатывается автоматически',
          },
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap в режиме `button`',
          },
          inline: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, радиокнопка отображается как inline-элемент, а не как блочный на 100% ширины',
          },
          modelValue: {
            type: 'RadioValue | undefined',
            default: undefined,
            description: 'Текущее значение radio. Ищете `checked` — используйте `modelValue`',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, радиокнопка отображается с другой стороны',
          },
          value: {
            type: 'RadioValue | undefined',
            default: true,
            description: 'Значение, возвращаемое при выборе этой радиокнопки',
          },

          ...pick(buildCommonProps(), [
            'ariaLabel',
            'ariaLabelledby',
            'autofocus',
            'disabled',
            'form',
            'id',
            'name',
            'plain',
            'required',
            'size',
            'state',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormRadio'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении значения радиокнопки',
          args: [
            {
              arg: 'value',
              description: 'Значение радиокнопки.',
              type: 'RadioValue',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в метке радиокнопки',
        },
      ],
    },
    {
      component: 'BFormRadioGroup',
      styleSpec: {kind: StyleKind.Tag, value: 'dev[role="radiogroup"]'},
      sourcePath: '/BFormRadio/BFormRadioGroup.vue',
      props: {
        '': {
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Определяет цветовую тему Bootstrap для радиокнопок-кнопок',
          },
          buttons: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, радиокнопки в группе отображаются как кнопки',
          },
          modelValue: {
            type: 'RadioValue | undefined',
            default: undefined,
            description:
              'Текущее значение выбранной радиокнопки в группе. Ищете `checked` — используйте `modelValue`',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, радиокнопки отображаются с другой стороны',
          },
          stacked: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, группа радиокнопок отображается в столбик',
          },
          validated: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, добавляет класс Bootstrap `was-validated` к обёртке группы',
          },
          ...pick(buildCommonProps(), [
            'ariaInvalid',
            'autofocus',
            'disabled',
            'disabledField',
            'form',
            'id',
            'name',
            'options',
            'plain',
            'required',
            'size',
            'state',
            'textField',
            'valueField',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormRadioGroup'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Текущее выбранное значение группы радиокнопок',
              type: 'RadioValue | null',
            },
          ],
          description:
            'Вызывается при изменении выбранных значений. Ищете событие `input` или `change` — используйте `update:model-value`',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое (радиокнопки формы) для размещения в группе радиокнопок',
        },
        {
          name: 'first',
          description:
            'Слот для радиокнопок, которые должны отображаться перед элементами, сгенерированными через options',
        },
        {
          name: 'option',
          description:
            'Используйте этот слот для полного контроля над содержимым каждой радиокнопки',
          scope: [
            {
              prop: 'value',
              type: 'string | number | undefined',
              description: 'Значение радиокнопки',
            },
            {
              prop: 'disabled',
              type: 'boolean | undefined',
              description: 'Отключена ли радиокнопка',
            },
            {
              prop: 'text',
              type: 'string | undefined',
              description: 'Текст для отображения у радиокнопки',
            },
          ],
        },
      ],
    },
  ],
}
