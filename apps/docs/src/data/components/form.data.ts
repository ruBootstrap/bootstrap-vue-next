import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      styleSpec: {kind: StyleKind.Tag, value: 'form'},
      sourcePath: '/BForm/BForm.vue',
      props: {
        '': {
          ...pick(buildCommonProps(), ['floating', 'id', 'novalidate', 'validated']),
        } satisfies Record<keyof BvnComponentProps['BForm'], PropertyReference>,
      },
      emits: [
        {
          event: 'submit',
          description: 'Вызывается при отправке формы',
          args: [
            {
              arg: 'submit',
              type: 'Event',
              description: 'Нативное событие submit',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое, размещаемое внутри формы',
        },
      ],
    },
    {
      component: 'BFormDatalist',
      styleSpec: {kind: StyleKind.Tag, value: 'datalist'},
      sourcePath: '/BForm/BFormDatalist.vue',
      props: {
        '': {
          ...pick(
            buildCommonProps({
              options: {
                type: 'readonly (unknown | Record<string, unknown>)[]',
                description:
                  'Array of items to render in the component. Note that BFormDatalist only supports Options, not OptionsGroups',
              },
            }),
            ['disabledField', 'id', 'options', 'textField', 'valueField']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormDatalist'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое, размещаемое внутри datalist',
        },
        {
          name: 'first',
          description: "Слот для размещения опций выше тех, что переданы через prop 'options'",
        },
        {
          name: 'option',
          description: 'Используйте этот слот для полного контроля над содержимым каждой опции',
          scope: [
            {
              prop: 'value',
              type: 'any (T)',
              description: 'Значение опции',
            },
            {
              prop: 'text',
              type: 'string',
              description: 'Текст опции',
            },
            {
              prop: 'disabled',
              type: 'boolean',
              description: 'Отключена ли опция',
            },
          ],
        },
      ],
    },

    {
      component: 'BFormFloatingLabel',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'floating-label'},
      sourcePath: '/BForm/BFormFloatingLabel.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'Текст плавающей метки',
          },
          labelFor: {
            type: 'string',
            default: undefined,
            description: 'ID элемента управления, к которому относится плавающая метка',
          },
        } satisfies Record<keyof BvnComponentProps['BFormFloatingLabel'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Элемент управления, содержащий плавающую метку',
        },
        {
          name: 'label',
          description: 'Содержимое для отображения в плавающей метке',
        },
      ],
    },
    {
      component: 'BFormInvalidFeedback',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'invalid-feedback, invalid-tooltip'},
      sourcePath: '/BForm/BFormInvalidFeedback.vue',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: 'Показывает текст обратной связи независимо от значения prop state',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст обратной связи для отображения',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        } satisfies Record<keyof BvnComponentProps['BFormInvalidFeedback'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для обратной связи об ошибке валидации',
        },
      ],
    },
    {
      component: 'BFormRow',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'row'},
      sourcePath: '/BForm/BFormRow.vue',
      props: {
        '': {
          ...pick(buildCommonProps(), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BFormRow'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое, размещаемое внутри строки формы',
        },
      ],
    },
    {
      component: 'BFormText',
      sourcePath: '/BForm/BFormText.vue',
      props: {
        '': {
          inline: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, текст справки отображается как inline-элемент, а не как блочный',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст для отображения',
          },
          ...pick(buildCommonProps(), ['id', 'tag', 'textVariant']),
        } satisfies Record<keyof BvnComponentProps['BFormText'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'Содержимое для справочного текста формы',
        },
      ],
    },
    {
      component: 'BFormValidFeedback',
      styleSpec: {kind: StyleKind.OverrideClass, value: 'valid-feedback, valid-tooltip'},
      sourcePath: '/BForm/BFormValidFeedback.vue',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: 'Показывает текст обратной связи независимо от значения prop state',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст обратной связи для отображения',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        } satisfies Record<keyof BvnComponentProps['BFormValidFeedback'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для обратной связи об успешной валидации',
        },
      ],
    },
  ],
}
