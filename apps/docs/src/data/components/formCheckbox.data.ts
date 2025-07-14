import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'
import type {BvnComponentProps} from 'bootstrap-vue-next'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormCheckbox',
      sourcePath: '/BFormCheckbox/BFormCheckbox.vue',
      props: {
        '': {
          button: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, чекбокс отображается как кнопка',
          },
          buttonGroup: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, чекбокс отображается как часть группы кнопок (не оборачивает чекбокс и метку в div). Не обязательно устанавливать true, если используется внутри CheckboxGroup — это обрабатывается автоматически',
          },
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Применяет одну из цветовых тем Bootstrap в режиме `button`',
          },
          indeterminate: {
            type: 'boolean',
            default: false,
            description:
              'Установите true, чтобы отобразить чекбокс в неопределённом состоянии, false — обычное состояние',
          },
          inline: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, чекбокс отображается как inline-элемент, а не как блочный на 100% ширины',
          },
          inputClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс для применения к телу элемента чекбокса',
          },
          modelValue: {
            type: 'CheckboxValue | readonly CheckboxValue[]',
            default: undefined,
            description:
              'Текущее значение чекбокса(-ов). Должно быть массивом при нескольких чекбоксах с одним v-model. Ищете `value` — используйте `modelValue`',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, чекбокс или переключатель отображается с другой стороны',
          },
          switch: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, чекбокс отображается как переключатель',
          },
          uncheckedValue: {
            type: 'CheckboxValue',
            default: false,
            description:
              'Значение, возвращаемое при снятии чекбокса. Не применяется при нескольких чекбоксах с одним v-model',
          },
          value: {
            type: 'CheckboxValue',
            default: true,
            description: 'Значение, возвращаемое при установке чекбокса',
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
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormCheckbox'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении состояния чекбокса',
          args: [
            {
              arg: 'value',
              description:
                'Значение чекбокса. Массив для группы чекбоксов или одиночное значение для одного чекбокса. Ищете событие `input` или `change` — используйте `update:model-value`',
              type: 'CheckboxValue | readonly CheckboxValue[]',
            },
          ],
        },
        {
          event: 'update:indeterminate',
          description: 'Вызывается при изменении состояния неопределённости чекбокса',
          args: [
            {
              arg: 'value',
              description:
                'Значение состояния неопределённости — true для неопределённого, false для определённого состояния',
              type: 'boolean',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в метке чекбокса',
        },
      ],
    },
    {
      component: 'BFormCheckboxGroup',
      sourcePath: '/BFormCheckbox/BFormCheckboxGroup.vue',
      props: {
        '': {
          buttonVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Определяет цветовую тему Bootstrap для чекбоксов-кнопок',
          },
          buttons: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, чекбоксы в группе отображаются как кнопки',
          },
          modelValue: {
            type: 'readonly CheckboxValue[]',
            default: '() => []',
            description:
              'Текущее значение выбранных чекбоксов в группе. Должно быть массивом при нескольких чекбоксах. Ищете `value` — используйте `modelValue`',
          },
          options: {
            type: 'readonly CheckboxOptionRaw[]',
            default: '() => []',
          },
          reverse: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, чекбоксы и переключатели отображаются с другой стороны',
          },
          stacked: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, группа чекбоксов отображается в столбик',
          },
          switches: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, чекбоксы в группе отображаются как переключатели',
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
            'plain',
            'required',
            'size',
            'state',
            'textField',
            'valueField',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormCheckboxGroup'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description:
            'Вызывается при изменении выбранных значений. Ищете событие `input` или `change` — используйте `update:model-value`',
          args: [
            {
              arg: 'value',
              type: 'CheckboxValue[]',
              description: 'Значение чекбоксов. Значение будет массивом.',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое (чекбоксы формы) для размещения в группе чекбоксов',
        },
        {
          name: 'first',
          description:
            'Слот для чекбоксов, которые должны отображаться перед элементами, сгенерированными через options',
        },
        {
          name: 'option',
          description:
            'Используйте этот слот для полного контроля над содержимым каждого чекбокса-кнопки',
          scope: [
            {
              prop: 'value',
              type: 'string | number | undefined',
              description: 'Значение чекбокса-кнопки',
            },
            {
              prop: 'disabled',
              type: 'boolean | undefined',
              description: 'Отключён ли чекбокс-кнопка',
            },
            {
              prop: 'text',
              type: 'string | undefined',
              description: 'Текст для отображения у чекбокса-кнопки',
            },
          ],
        },
      ],
    },
  ],
}
