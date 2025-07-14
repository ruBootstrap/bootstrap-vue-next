import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTextarea',
      styleSpec: {kind: StyleKind.Tag, value: 'textarea'},
      sourcePath: '/BFormTextarea/BFormTextarea.vue',
      props: {
        '': {
          modelValue: {
            type: 'Numberish | null',
            default: '""',
            description: 'Текущее значение textarea',
          },
          noResize: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, отключает ручку изменения размера браузера, предотвращая изменение высоты textarea. Автоматически включается в режиме auto height',
          },
          rows: {
            type: 'Numberish',
            default: 2,
            description: 'Минимальное количество отображаемых строк. Должно быть больше 1',
          },
          wrap: {
            type: 'string',
            default: 'soft',
            description:
              "Значение для атрибута 'wrap' у textarea. Определяет, как возвращаются переносы строк",
          },
          maxRows: {
            type: 'Numberish',
            default: 'undefined',
            description: 'Максимальное количество отображаемых строк. Должно быть больше 1',
          },
          noAutoShrink: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, отключает авто-уменьшение высоты в режиме auto-height',
          },
          ...pick(buildCommonProps(), [
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
          ]),
        } satisfies Record<keyof BvnComponentProps['BFormTextarea'], PropertyReference>,
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
                'Значение textarea после форматирования. Не вызывается, если значение не изменилось',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
