import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick, showHideProps} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BAlert',
      sourcePath: '/BAlert/BAlert.vue',
      props: {
        '': {
          alertClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы), добавляемые к обёрточному элементу alert',
          },
          bgVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          body: {
            type: 'string',
            default: undefined,
            description: 'Текстовое содержимое body',
          },
          bodyClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы), добавляемые к элементу body alert',
          },
          closeClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Применяет один или несколько пользовательских классов к кнопке закрытия',
          },
          closeContent: {
            type: 'string',
            default: undefined,
            description: 'Текст кнопки закрытия. Приоритет имеет слот `close`',
          },
          closeLabel: {
            type: 'string',
            default: 'Close',
            description: 'Устанавливает атрибут aria-label на кнопке закрытия',
          },
          closeVariant: {
            type: 'string | null',
            default: null,
            description: 'Цветовая тема для кнопки закрытия',
          },
          dismissible: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, отображает кнопку закрытия',
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы), добавляемые к элементу header alert',
          },
          headerTag: {
            type: 'string',
            default: 'div',
            description:
              'HTML-тег, который будет использоваться вместо тега по умолчанию для футера',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'Используется для установки атрибута `id` на рендеримом элементе, а также как основа для генерации дополнительных id при необходимости',
          },
          interval: {
            type: 'number | requestAnimationFrame',
            default: 'requestAnimationFrame',
            description: 'Интервал в миллисекундах для обновления таймера обратного отсчёта',
          },
          isStatus: {
            type: 'boolean',
            default: false,
            description:
              "Если установлено в 'true', alert получает атрибуты aria-live=polite и role=status. Если 'false', aria-live будет 'assertive', а role — 'alert'",
          },
          modelValue: {
            type: 'boolean | number',
            default: false,
            description:
              'Управляет видимостью alert. Значение типа `boolean` напрямую управляет видимостью. Число запускает таймер обратного отсчёта',
          },
          progressProps: {
            type: "Omit<BProgressBarProps, 'label' | 'max' | 'value'>",
            default: undefined,
            description:
              'Свойства для определения прогресс-бара в alert. Если не указано, прогресс-бар не отображается',
          },
          showOnPause: {
            type: 'boolean',
            default: true,
            description:
              'Если установить это свойство в `false`, поведение отображения Alert при паузе таймера будет переопределено',
          },
          textVariant: {
            type: 'TextColorVariant | null',
            default: null,
          },
          title: {
            type: 'string',
            default: undefined,
            description: 'Текст заголовка alert',
          },
          ...omit(showHideProps, ['modelValue']),
          ...pick(buildCommonProps(), ['variant', 'noHoverPause', 'noResumeOnHoverLeave']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BAlert'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри Alert',
        },
        {
          name: 'close',
          description: 'Контент для размещения внутри кнопки закрытия',
        },
      ],
      emits: [
        {
          event: 'close',
          description: 'Вызывается при начале анимации закрытия alert',
        },
        {
          event: 'closed',
          description: 'Вызывается после завершения анимации закрытия alert',
        },
        {
          event: 'close-countdown',
          description: 'Контент для размещения внутри alert',
          args: [
            {
              arg: 'closeCountdown',
              description: 'Оставшееся время таймера',
              type: 'number',
            },
          ],
        },
        {
          event: 'update:model-value',
          description: 'Стандартное событие для обновления v-model',
          args: [
            {
              arg: 'update:model-value',
              description: 'modelValue',
              type: 'boolean | number',
            },
          ],
        },
      ],
    },
  ],
}
