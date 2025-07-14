import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormInput',
      sourcePath: '/BFormInput/BFormInput.vue',
      props: {
        '': {
          max: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Значение для атрибута 'max' у input. Используется для числовых и подобных полей",
          },
          min: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Значение для атрибута 'min' у input. Используется для числовых и подобных полей",
          },
          modelValue: {
            type: 'Numberish | null',
            default: "''",
            description: 'Текущее значение поля',
          },
          step: {
            type: 'Numberish',
            default: 'undefined',
            description:
              "Значение для атрибута 'step' у input. Используется для числовых и подобных полей",
          },
          type: {
            type: 'InputType',
            default: 'text',
            description: 'Тип поля для рендера. См. документацию для поддерживаемых типов',
          },
          ...pick(buildCommonProps(buildCommonProps()), [
            'ariaInvalid',
            'autocomplete',
            'autofocus',
            'debounce',
            'debounceMaxWait',
            'disabled',
            'form',
            'formatter',
            'id',
            'lazyFormatter',
            'list',
            'name',
            'placeholder',
            'plaintext',
            'readonly',
            'required',
            'size',
            'state',
            'tooltip',
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormInput'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description:
            'Вызывается при изменении выбранного значения. Ищете событие `input` или `change` — используйте `update:model-value`',
          args: [
            {
              arg: 'value',
              type: 'string',
              description:
                'Значение поля после форматирования. Не вызывается, если значение не изменилось',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
