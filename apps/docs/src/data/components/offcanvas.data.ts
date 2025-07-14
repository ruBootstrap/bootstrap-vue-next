import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {showHideProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BOffcanvas',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.offcanvas[-*]'},
      sourcePath: '/BOffcanvas/BOffcanvas.vue',
      props: {
        '': {
          backdropFirst: {
            type: 'boolean',
            default: false,
            description:
              'Анимировать затемнение (backdrop) перед offcanvas, при закрытии — сначала анимировать offcanvas, затем затемнение',
          },
          bodyAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
          },
          bodyScrolling: {
            type: 'boolean',
            default: false,
          },
          focus: {
            type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
            default: undefined,
            description:
              'Указать, куда установить фокус после открытия offcanvas. Можно указать встроенную кнопку close, либо ref, HTMLElement, id или селектор. Если указано false, фокус не будет установлен (если не задан noTrap, фокус будет на элементе offcanvas или fallback-элементе). Если строка — будет сфокусирован элемент с этим id. Если ComponentPublicInstance — будет сфокусирован $el экземпляра.',
          },
          footerClass: {
            type: 'string',
            default: undefined,
          },
          headerClass: {
            type: 'string',
            default: undefined,
          },
          headerCloseClass: {
            type: 'ClassValue',
            default: undefined,
          },
          headerCloseLabel: {
            type: 'string',
            default: 'Close',
          },
          headerCloseVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
          },
          noBackdrop: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          noCloseOnBackdrop: {
            type: 'boolean',
            default: false,
          },
          noCloseOnEsc: {
            type: 'boolean',
            default: false,
          },
          noHeader: {
            type: 'boolean',
            default: false,
          },
          noHeaderClose: {
            type: 'boolean',
            default: false,
          },
          noTrap: {
            type: 'boolean',
            default: false,
            description: 'Отключает фокус-трап',
          },
          placement: {
            type: 'Placement',
            default: 'start',
          },
          responsive: {
            type: 'Breakpoint',
          },
          shadow: {
            type: 'Size | boolean',
            default: false,
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: 'body',
          },
          title: {
            type: 'string',
            default: undefined,
          },
          width: {
            type: 'string',
            default: undefined,
          },
          ...showHideProps,
        } satisfies Record<keyof BvnComponentProps['BOffcanvas'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'update:model-value',
              description: '',
              type: 'boolean',
            },
          ],
        },
        {
          event: 'breakpoint',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'The event',
            },
            {
              arg: 'opened',
              type: 'boolean',
              description: 'Whether or not the offcanvas is above the breakpoint and is open by it',
            },
          ],
          description: 'Вызывается при изменении состояния брейкпоинта offcanvas',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'show',
        },
        {
          event: 'show-prevented',
          description: '',
          args: [],
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'shown',
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hide',
        },
        {
          event: 'hide-prevented',
          description: '',
          args: [],
        },
        {
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
          event: 'hidden',
        },
        {
          event: 'close',
          description: '',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
        {
          event: 'esc',
          description: '',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
        },
      ],
      slots: [
        {
          description: '',
          name: 'title',
          scope: [
            {
              prop: 'visible',
              type: 'boolean',
            },
            {
              prop: 'placement',
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            {
              prop: 'hide',
              type: '(trigger?: string) => void',
            },
          ],
        },
        {
          description: '',
          name: 'default',
          scope: [
            {
              prop: 'visible',
              type: 'boolean',
            },
            {
              prop: 'placement',
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            {
              prop: 'hide',
              type: '(trigger?: string) => void',
            },
          ],
        },
        {
          name: 'backdrop',
          description: '',
          scope: [],
        },
        {
          name: 'footer',
          description: '',
          scope: [
            {
              prop: 'visible',
              type: 'boolean',
            },
            {
              prop: 'placement',
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            {
              prop: 'hide',
              type: '(trigger?: string) => void',
            },
          ],
        },
        {
          name: 'header',
          description: '',
          scope: [
            {
              prop: 'visible',
              type: 'boolean',
            },
            {
              prop: 'placement',
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            {
              prop: 'hide',
              type: '(trigger?: string) => void',
            },
          ],
        },
        {
          name: 'header-close',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
