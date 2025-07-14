import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotScopeReference} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

const sharedSlots: SlotScopeReference[] = [
  {
    prop: 'hide',
    type: '() => void',
    description: "Скрывает collapse и вызывает событие 'hide'",
  },
  {
    prop: 'id',
    type: 'string',
    description: 'ID элемента collapse',
  },
  {
    prop: 'show',
    type: '() => void',
    description: "Показывает collapse и вызывает событие 'show'",
  },
  {
    prop: 'toggle',
    type: '() => void',
    description:
      "Переключает collapse и вызывает событие 'hide' или 'show' в зависимости от состояния",
  },
  {
    prop: 'visible',
    type: '() => void',
    description: 'Состояние видимости collapse. true, если collapse видим',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCollapse',
      sourcePath: '/BCollapse/BCollapse.vue',
      props: {
        '': {
          horizontal: {
            type: 'boolean',
            default: false,
          },
          isNav: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, указывает, что collapse является частью navbar, включая специальные возможности для поддержки navbar',
          },
          ...showHideProps,
          ...pick(buildCommonProps(), ['id', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BCollapse'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Используется для обновления v-model',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Будет true, если collapse видим',
            },
          ],
        },
        {
          event: 'hide',
          description: 'Вызывается при начале закрытия collapse',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'hidden',
          description: 'Вызывается после завершения закрытия collapse',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'hide-prevented',
          description: 'Вызывается, когда попытка закрыть collapse была предотвращена.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'show',
          description: 'Вызывается при начале открытия collapse',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'shown',
          description: 'Вызывается после завершения открытия collapse',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'show-prevented',
          description: 'Вызывается, когда попытка открыть collapse была предотвращена.',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
        {
          event: 'toggle',
          description: 'Вызывается при начале переключения collapse',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Объект события',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое, отображаемое и скрываемое collapse',
          scope: sharedSlots,
        },
        {
          name: 'footer',
          description:
            'Используется для создания пользовательских переключателей для вашего контента. Размещается сразу под содержимым',
          scope: sharedSlots,
        },
        {
          name: 'header',
          description:
            'Используется для создания пользовательских переключателей для вашего контента. Размещается сразу над содержимым',
          scope: sharedSlots,
        },
      ],
    },
  ],
}
