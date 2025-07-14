import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick, showHideProps} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BToast',
      sourcePath: '/BToast/BToast.vue',
      props: {
        '': {
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          body: {
            type: 'string',
            default: undefined,
            description: 'Текстовое содержимое тела уведомления',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента тела уведомления',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Применяет один или несколько пользовательских классов к кнопке закрытия',
          },
          closeContent: {
            type: 'string',
            default: undefined,
            description: 'Текст кнопки закрытия. Слот `close` имеет приоритет',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Атрибут aria-label для кнопки закрытия',
          },
          closeVariant: {
            type: 'string | null',
            default: null,
            description: 'Цветовая тема для кнопки закрытия',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента заголовка уведомления',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description: 'HTML-тег для рендера вместо тега по умолчанию для футера',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Используется для установки атрибута `id` на рендеримом элементе и как основа для генерации дополнительных id при необходимости',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame',
            description: 'Интервал обновления таймера обратного отсчёта',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "Если 'true', уведомление будет иметь aria-live=polite и role=status. Если 'false' — aria-live будет 'assertive', а role — 'alert'",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Определяет, видно ли уведомление, либо количество миллисекунд до его скрытия',
          },
          noCloseButton: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, скрывает кнопку закрытия в заголовке уведомления',
          },
          noProgress: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, скрывает прогресс-бар в уведомлении',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: undefined,
            description:
              'Свойства для настройки прогресс-бара в уведомлении. Если не указано — прогресс не отображается',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description: 'Если установлено, уведомление остаётся видимым при паузе',
          },
          solid: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, уведомление отображается с непрозрачным фоном вместо полупрозрачного',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          title: {
            type: 'string',
            default: undefined,
            description: 'Текст заголовка уведомления',
          },
          toastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для обёртки уведомления',
          },
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BToast'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      slots: [],
      emits: [
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении видимости уведомления',
          args: [
            {
              arg: 'value',
              type: 'Boolean',
              description: 'Новое значение видимости',
            },
          ],
        },
        {
          args: [
            {
              arg: 'destroyed',
              description: '',
              type: 'string',
            },
          ],
          description: '',
          event: 'destroyed',
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
        },
        {
          event: 'close-countdown',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'number',
            },
          ],
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
        },
        {
          event: 'hide-prevented',
          args: [],
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
        },
        {
          event: 'show-prevented',
          args: [],
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
        },
      ],
    },
    {
      component: 'BToastOrchestrator',
      sourcePath: '/BToast/BToastOrchestrator.vue',
      emits: [],
      slots: [],
      props: {
        '': {
          teleportTo: {
            description: 'Переопределяет стандартное расположение телепорта',
            type: 'string | RendererElement | null | undefined',
            default: 'body',
          },
          teleportDisabled: {
            description: 'Рендерит Тостер в том месте, где он был определён',
            type: 'boolean',
            default: false,
          },
          appendToast: {},
        } satisfies Record<keyof BvnComponentProps['BToastOrchestrator'], PropertyReference>,
      },
    },
  ],
}
