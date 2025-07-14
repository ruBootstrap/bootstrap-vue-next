import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference, SlotScopeReference} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

const sharedSlots: SlotScopeReference[] = [
  {
    prop: 'cancel',
    type: 'Function',
    description:
      "Закрывает модальное окно и вызывает события 'cancel' и 'hide', с bvModalEvent.trigger = 'cancel'",
  },
  {
    prop: 'close',
    type: 'Function',
    description:
      "Закрывает модальное окно и вызывает события close и hide, с bvModalEvent.trigger = 'headerclose'",
  },
  {
    prop: 'hide',
    type: 'Function',
    description:
      "Принимает аргумент 'trigger'. Закрывает модальное окно и вызывает событие 'hide', с bvModalEvent.trigger = trigger (trigger необязателен)",
  },
  {
    prop: 'ok',
    type: 'Function',
    description:
      "Закрывает модальное окно и вызывает события 'ok' и 'hide', с bvModalEvent.trigger = 'ok'",
  },
  {
    prop: 'visible',
    type: 'boolean',
    description:
      'Состояние видимости модального окна. true — если модальное окно видно, false — если скрыто',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BModal',
      sourcePath: '/BModal/BModal.vue',
      props: {
        '': {
          focus: {
            type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
            default: undefined,
            description:
              "Указать, куда установить фокус после открытия модального окна. Можно указать встроенные кнопки: 'ok', 'cancel' или 'close', либо ref, HTMLElement, id или селектор. Если указано 'false', фокус не будет установлен (если не задан noTrap, фокус будет на модальном элементе или fallback-элементе). Если строка — будет сфокусирован элемент с этим id. Если ComponentPublicInstance — будет сфокусирован $el экземпляра.",
          },
          backdropFirst: {
            type: 'boolean',
            default: false,
            description:
              'Анимировать затемнение (backdrop) перед модальным окном, при закрытии — сначала анимировать модальное окно, затем затемнение',
          },
          body: {
            type: 'string',
            default: undefined,
          },
          bodyAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
          },
          bodyBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к фону body',
          },
          bodyClass: {
            type: 'ClassValue',
            default: null,
            description: 'CSS-класс(ы) для .modal-body',
          },
          bodyScrolling: {
            type: 'boolean',
            default: false,
            description: 'Включает/отключает прокрутку body при открытом модальном окне',
          },
          bodyTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к тексту body',
          },
          bodyVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Применяет одну из цветовых тем Bootstrap к body (приоритетнее bodyBgVariant и bodyTextVariant)',
          },
          busy: {
            type: 'boolean',
            default: false,
            description: 'Переводит встроенные кнопки OK и Cancel в футере в состояние disabled',
          },
          buttonSize: {
            type: 'Size',
            default: 'md',
          },
          cancelClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для кнопки .modal-cancel',
          },
          cancelDisabled: {
            type: 'boolean',
            default: false,
            description: 'Переводит встроенную кнопку Cancel в футере в состояние disabled',
          },
          cancelTitle: {
            type: 'string',
            default: 'Cancel',
            description: 'Текст для кнопки Cancel в футере',
          },
          cancelVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description: 'Вариант оформления для кнопки Cancel в футере',
          },
          centered: {
            type: 'boolean',
            default: false,
            description: 'Вертикально центрирует модальное окно во viewport',
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для .modal-content',
          },
          dialogClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для .modal-dialog',
          },
          footerBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к фону футера',
          },
          footerBorderVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к границе футера',
          },
          footerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для .modal-footer',
          },
          footerTextVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к тексту футера',
          },
          footerVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Применяет одну из цветовых тем Bootstrap к футеру (приоритетнее footerBgVariant и footerTextVariant)',
          },
          fullscreen: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              "Булево значение включает/отключает полноэкранный режим. Breakpoint задаёт брейкпоинт, ниже которого включается полноэкранный режим: 'sm', 'md', 'lg', 'xl', 'xxl'",
          },
          headerBgVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к фону заголовка',
          },
          headerBorderVariant: {
            type: 'ColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к границе заголовка',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для .modal-header',
          },
          headerCloseClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для кнопки закрытия в заголовке',
          },
          headerCloseLabel: {
            type: 'string',
            default: 'Close',
            description: 'Метка доступности для кнопки закрытия в заголовке',
          },
          headerCloseVariant: {
            type: 'ButtonVariant | null',
            default: 'secondary',
            description:
              'Применяет вариант оформления к кнопке закрытия в заголовке при использовании слота header-close',
          },
          headerTextVariant: {
            type: 'TextColorVariant | null',
            default: null,
            description: 'Применяет одну из цветовых тем Bootstrap к тексту заголовка',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: null,
            description:
              'Применяет одну из цветовых тем Bootstrap к заголовку (приоритетнее headerBgVariant и headerTextVariant)',
          },
          noFooter: {
            type: 'boolean',
            default: false,
            description: 'Отключает рендеринг футера модального окна',
          },
          modalClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для .modal',
          },
          noCloseOnBackdrop: {
            type: 'boolean',
            default: false,
            description: 'Отключает закрытие модального окна при клике по затемнению (backdrop)',
          },
          noCloseOnEsc: {
            type: 'boolean',
            default: false,
            description: 'Отключает возможность закрытия модального окна по клавише ESC',
          },
          noStacking: {
            type: 'boolean',
            default: false,
          },
          noTrap: {
            type: 'boolean',
            default: false,
            description: 'Отключает фокус-трап',
          },
          okClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для кнопки .modal-ok',
          },
          okDisabled: {
            type: 'boolean',
            default: false,
            description: 'Переводит встроенную кнопку OK в футере в состояние disabled',
          },
          okOnly: {
            type: 'boolean',
            default: false,
            description: 'Отключает рендеринг кнопки Cancel в футере',
          },
          okTitle: {
            type: 'string',
            default: 'OK',
            description: 'Текст для кнопки OK в футере',
          },
          okVariant: {
            type: 'ButtonVariant | null',
            default: 'primary',
            description: 'Вариант оформления кнопки OK в футере',
          },
          scrollable: {
            type: 'boolean',
            default: false,
            description: 'Включает прокрутку содержимого модального окна',
          },
          size: {
            type: "Size | 'xl'",
            default: 'md',
            description:
              "Устанавливает ширину модального окна: 'sm', 'md' (по умолчанию), 'lg' или 'xl'",
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
            description: 'Рендерит модальное окно в том месте, где оно определено',
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: 'body',
            description: 'Переопределяет стандартное место для teleport',
          },
          title: {
            type: 'string',
            default: undefined,
            description: 'Текст для заголовка модального окна',
          },
          titleClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для заголовка',
          },
          titleVisuallyHidden: {
            type: 'boolean',
            default: false,
            description: 'Оборачивает заголовок в .visually-hidden',
          },
          titleTag: {
            type: 'string',
            default: 'h5',
            description: 'HTML-тег для заголовка вместо значения по умолчанию',
          },
          ...showHideProps,
          ...pick(buildCommonProps(), ['id', 'noBackdrop', 'noHeader', 'noHeaderClose']),
        } satisfies Record<keyof BvnComponentProps['BModal'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Вызывается при изменении видимости модального окна',
              type: 'boolean',
            },
          ],
          description: 'Вызывается при изменении видимости модального окна',
        },
        {
          event: 'show',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Всегда вызывается перед показом модального окна. Можно отменить',
        },
        {
          event: 'shown',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Всегда вызывается сразу после показа модального окна. Можно отменить',
        },
        {
          event: 'hide',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description:
            'Всегда вызывается перед скрытием модального окна. Можно отменить (если окно не было принудительно скрыто)',
        },
        {
          event: 'hidden',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Всегда вызывается после скрытия модального окна',
        },
        {
          event: 'hide-prevented',
          args: [],
          description:
            'Вызывается, когда попытка закрыть модальное окно была предотвращена. Это происходит, если вызвать preventDefault() на событии, пользователь нажал Escape и no-close-onbackdrop=true, либо кликнул по затемнению и no-close-onbackdrop=true.',
        },
        {
          event: 'show-prevented',
          args: [],
          description:
            'Вызывается, когда попытка открыть модальное окно была предотвращена. Это происходит, если вызвать preventDefault() на событии',
        },
        {
          event: 'ok',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Вызывается при клике по кнопке OK в футере. Можно отменить',
        },
        {
          event: 'cancel',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Вызывается при клике по кнопке Cancel в футере. Можно отменить',
        },
        {
          event: 'close',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Вызывается при клике по кнопке закрытия в заголовке. Можно отменить',
        },
        {
          event: 'backdrop',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Вызывается при клике по затемнению (backdrop). Можно отменить',
        },
        {
          event: 'esc',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: 'Вызывается при нажатии клавиши ESC. Можно отменить',
        },
      ],
      slots: [
        {
          name: 'backdrop',
          description: 'Содержимое затемнения (backdrop) модального окна',
          scope: [],
        },
        {
          name: 'cancel',
          description: 'Содержимое кнопки CANCEL модального окна. Может быть scoped',
          scope: sharedSlots,
        },
        {
          name: 'default',
          description: 'Содержимое тела модального окна. Может быть scoped',
          scope: sharedSlots,
        },
        {
          name: 'footer',
          description:
            'Содержимое футера модального окна. Также убирает стандартные кнопки OK и Cancel. Может быть scoped',
          scope: sharedSlots,
        },
        {
          name: 'header',
          description:
            'Содержимое всего контейнера заголовка модального окна. Также убирает кнопку закрытия (X) справа вверху. Может быть scoped',
          scope: sharedSlots,
        },
        {
          name: 'header-close',
          description:
            'Содержимое кнопки закрытия в заголовке модального окна. Если используется слот header, этот слот не отображается',
          scope: [],
        },
        {
          name: 'ok',
          description: 'Содержимое кнопки OK модального окна. Может быть scoped',
          scope: sharedSlots,
        },
        {
          name: 'title',
          description:
            'Заголовок модального окна. Если используется слот header, этот слот не отображается. Может быть scoped',
          scope: sharedSlots,
        },
      ],
    },
  ],
}
