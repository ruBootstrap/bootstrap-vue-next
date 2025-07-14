import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

const optionSlot = {
  name: 'option',
  description: 'Используйте этот слот для полного контроля над содержимым каждого элемента списка',
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
}

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
      styleSpec: {kind: StyleKind.Tag, value: 'select'},
      sourcePath: '/BFormSelect/BFormSelect.vue',
      props: {
        '': {
          labelField: {
            type: 'string',
            default: 'label',
            description: 'Ключ из объекта опции для получения label',
          },
          modelValue: {
            type: `SelectValue`,
            default: '',
            description: 'Значение select-контрола',
          },
          multiple: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, позволяет выбрать несколько опций (мультивыбор)',
          },
          optionsField: {
            type: 'string',
            default: 'options',
            description: 'Ключ из объекта опции для получения options',
          },
          selectSize: {
            type: 'Numberish',
            default: 0,
            description:
              'Если больше 0, задаёт количество отображаемых строк. Не все браузеры поддерживают',
          },
          ...pick(
            buildCommonProps({
              options: {type: 'unknown[] | Record<string, unknown>'},
            }),
            [
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
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BFormSelect'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Текущее выбранное значение select-контрола',
              type: 'SelectValue',
            },
          ],
          description:
            'Вызывается при изменении выбранного значения. Ищете событие `input` или `change` — используйте `update:model-value`',
        },
      ],
      slots: [
        {
          description: 'Содержимое для размещения в select-контроле',
          name: 'default',
        },
        {
          description:
            'Слот для опций или групп опций, которые должны отображаться перед элементами, сгенерированными через options',
          name: 'first',
        },
        optionSlot,
      ],
    },
    {
      component: 'BFormSelectOption',
      styleSpec: {kind: StyleKind.Tag, value: 'option'},
      sourcePath: '/BFormSelect/BFormSelectOption.vue',
      props: {
        '': {
          value: {
            type: 'any',
            default: undefined,
            description: 'Значение опции',
          },
          disabled: {
            type: 'boolean',
            default: false,
            description: 'Отключена ли опция',
          },
        } satisfies Record<keyof BvnComponentProps['BFormSelectOption'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form select option',
        },
      ],
    },
    {
      component: 'BFormSelectOptionGroup',
      styleSpec: {kind: StyleKind.Tag, value: 'optgroup'},
      sourcePath: '/BFormSelect/BFormSelectOptionGroup.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
            description: 'Метка для группы опций',
          },
          ...pick(
            buildCommonProps({
              options: {type: 'readonly (unknown | Record<string, unknown>)[]'},
            }),
            ['disabledField', 'options', 'textField', 'valueField']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormSelectOptionGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'first',
          description: 'Содержимое для размещения в группе опций',
        },
        {
          name: 'default',
          description:
            'Слот для опций, которые должны отображаться перед элементами, сгенерированными через options',
        },
        optionSlot,
      ],
    },
  ],
}
