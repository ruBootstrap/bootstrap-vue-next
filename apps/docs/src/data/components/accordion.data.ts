import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAccordion',
      sourcePath: '/BAccordion/BAccordion.vue',
      props: {
        '': {
          flush: {
            type: 'boolean',
            default: false,
            description:
              'Удаляет стандартный цвет фона, некоторые границы и скругления, чтобы аккордеон отображался вровень с краями родительского контейнера',
          },
          free: {
            type: 'boolean',
            default: false,
            description: 'Пункты аккордеона остаются открытыми при открытии других пунктов',
          },
          index: {
            type: 'number | number[]',
            default: undefined,
            description: 'Индекс открытого пункта аккордеона',
          },
          modelValue: {
            type: 'string | string[]',
            default: undefined,
            description: 'Id открытого пункта аккордеона',
          },
          // transProps: {
          //   type: 'TransitionProps',
          //   default: undefined,
          //   description: 'Transition properties',
          // },
          // noAnimation: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'When set, disables the animation',
          // },
          // noFade: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'Alias for `noAnimation`',
          // },
          ...pick(showHideProps, ['initialAnimation', 'lazy', 'unmountLazy']),
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'Id, который будет передан элементам аккордеона и использоваться в BCollapse для управления состоянием',
              },
            }),
            ['id']
          ),
        } satisfies Record<keyof BvnComponentProps['BAccordion'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Обновляет текущий открытый пункт аккордеона',
          args: [
            {
              arg: 'value',
              description: 'Id открытого пункта аккордеона',
              type: 'string | string[]',
            },
          ],
        },
        {
          event: 'update:index',
          description: 'Обновляет индекс открытого пункта аккордеона',
          args: [
            {
              arg: 'value',
              description: 'Индекс открытого пункта аккордеона',
              type: 'number | number[]',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри Accordion',
        },
      ],
    },
    {
      component: 'BAccordionItem',
      sourcePath: '/BAccordion/BAccordionItem.vue',
      props: {
        '': {
          bodyAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Атрибуты, применяемые к body элемента аккордеона',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс, применяемый к body элемента аккордеона',
          },
          buttonAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Атрибуты, применяемые к кнопке в заголовке',
          },
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс, применяемый к кнопке в заголовке',
          },
          collapseClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс, применяемый к collapse-элементу',
          },
          headerAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Атрибуты, применяемые к элементу заголовка',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс, применяемый к элементу заголовка',
          },
          headerTag: {
            type: 'string',
            default: 'h2',
            description: 'Тег, используемый для элемента заголовка',
          },
          horizontal: {
            type: 'boolean',
            default: undefined,
            description:
              'Анимирует изменение `width` вместо `height` и задаёт ширину для непосредственного дочернего элемента',
          },
          isNav: {
            type: 'boolean',
            default: undefined,
            description:
              'Если установлено, означает, что аккордеон является частью navbar и включает поддержку соответствующих функций',
          },
          title: {
            type: 'string',
            default: undefined,
            description:
              'Текст для размещения в заголовке AccordionItem (приоритет имеет слот title)',
          },
          // transProps: {
          //   type: 'TransitionProps',
          //   default: undefined,
          //   description: 'Transition properties',
          // },
          //   noAnimation: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'When set, disables the animation',
          // },
          // noFade: {
          //   type: 'boolean',
          //   default: false,
          //   description: 'Alias for `noAnimation`',
          // },
          ...pick(showHideProps, ['modelValue', 'lazy', 'show', 'unmountLazy', 'visible']),
          ...pick(
            buildCommonProps({
              id: {
                description:
                  'Id, который будет передан элементам аккордеона и использоваться в BCollapse для управления состоянием',
              },
            }),
            ['id', 'tag', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BAccordionItem'], PropertyReference>,
      },
      emits: [
        {
          event: 'hidden',
          description: 'Вызывается после завершения анимации закрытия AccordionItem',
        },
        {
          event: 'hide',
          description: 'Вызывается при начале анимации закрытия AccordionItem',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Событие, инициирующее закрытие',
            },
          ],
        },
        {
          event: 'hide-prevented',
          description: 'Вызывается, если попытка закрыть AccordionItem была предотвращена',
        },
        {
          event: 'show',
          description: 'Вызывается при начале анимации открытия AccordionItem',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Событие, инициирующее открытие',
            },
          ],
        },
        {
          event: 'shown',
          description: 'Вызывается после завершения анимации открытия AccordionItem',
        },
        {
          event: 'show-prevented',
          description: 'Вызывается, если попытка открыть AccordionItem была предотвращена',
        },
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении видимости AccordionItem',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'Текущее состояние видимости AccordionItem',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри AccordionItem',
        },
        {
          name: 'title',
          description: 'Контент для размещения в заголовке AccordionItem',
        },
      ],
    },
  ],
}
