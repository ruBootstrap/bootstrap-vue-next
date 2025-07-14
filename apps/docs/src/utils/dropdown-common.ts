import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../types'
export {showHideProps} from './showhide-props'
import {buildCommonProps} from './build-common-props'
import {pick} from './object-utils'
import {showHideProps} from './showhide-props'

export const dropdownProps = {
  autoClose: {
    type: "boolean | 'inside' | 'outside'",
    default: true,
    description:
      'Управляет автоматическим закрытием выпадающего списка при клике. Подробнее см. выше.',
  },
  boundary: {
    type: 'Boundary | RootBoundary',
    default: 'clippingAncestors',
    description:
      'Граница ограничения dropdown: любое значение типа Boundary или RootBoundary из floating-ui. Подробнее см. выше.',
  },
  boundaryPadding: {
    type: 'Padding',
    default: undefined,
    description: 'Виртуальный отступ вокруг границы для проверки переполнения',
  },
  floatingMiddleware: {
    type: 'Middleware[]',
    default: undefined,
    description: 'Прямое управление поведением middleware floating-ui. Подробнее см. выше.',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, добавляет иконку в начале или конце текста кнопки',
  },
  isNav: {
    type: 'boolean',
    default: false,
    description: 'Указывает, что dropdown является навигационным',
  },
  menuClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS-класс(ы), добавляемые к контейнеру меню',
  },
  noCaret: {
    type: 'boolean',
    default: false,
    description: 'Скрыть индикатор-стрелку на кнопке переключения',
  },
  noFlip: {
    type: 'boolean',
    default: false,
    description: 'Запретить автоматическое переворачивание меню',
  },
  noShift: {
    type: 'boolean',
    default: false,
    description: 'Запретить автоматическое смещение меню',
  },
  noSize: {
    type: 'boolean',
    default: false,
    description: 'Запретить автоматическое изменение размера меню',
  },
  offset: {
    type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
    default: 0,
    description: 'Смещение меню на заданное количество пикселей. Подробнее см. выше.',
  },
  noWrapper: {
    type: 'boolean',
    default: false,
    description: 'Не рендерить обёрточный элемент для dropdown',
  },
  split: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, рендерит dropdown с разделённой кнопкой',
  },
  splitButtonType: {
    type: 'ButtonType',
    default: 'button',
    description: "Значение для атрибута 'type' у разделённой кнопки: 'button', 'submit', 'reset'",
  },
  splitClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS-класс(ы), добавляемые к разделённой кнопке',
  },
  splitDisabled: {
    type: 'boolean',
    default: undefined,
    description: 'Если установлено, разделённая кнопка будет неактивна',
  },
  splitHref: {
    type: 'string',
    default: undefined,
    description: 'URL-адрес для ссылки разделённой кнопки',
  },
  splitTo: {
    type: 'RouteLocationRaw',
    default: undefined,
    description:
      'Целевой маршрут для разделённой кнопки. При клике значение будет передано во внутренний router.push(), может быть строкой или объектом Location',
  },
  splitVariant: {
    type: 'ButtonVariant | null',
    default: undefined,
    description:
      "Применяет одну из цветовых тем Bootstrap к разделённой кнопке. По умолчанию берётся значение из пропа 'variant'",
  },
  strategy: {
    type: 'Strategy',
    default: 'absolute',
    description:
      'Стратегия, используемая для определения, когда скрывать dropdown. Подробнее см. выше.',
  },
  text: {
    type: 'string',
    default: undefined,
    description: 'Текст для отображения на кнопке переключения или в split-режиме',
  },
  toggleClass: {
    type: 'ClassValue',
    default: undefined,
    description: 'CSS-класс(ы), добавляемые к кнопке переключения',
  },
  toggleText: {
    type: 'string',
    default: 'Toggle dropdown',
    description:
      'ARIA-метка (визуально скрытая) для кнопки переключения в split-режиме. Может быть переопределена одноимённым слотом',
  },
  teleportDisabled: {
    type: 'boolean',
    default: false,
    description: 'Рендерить dropdown в том же месте, где он определён',
  },
  teleportTo: {
    type: 'string | RendererElement | null | undefined',
    default: undefined,
    description: 'Переопределяет стандартное место телепортации',
  },
  ...showHideProps,
  ...pick(
    buildCommonProps({
      role: {
        default: 'menu',
      },
      variant: {
        default: 'secondary',
      },
    }),
    ['ariaLabel', 'disabled', 'id', 'placement', 'role', 'size', 'variant', 'wrapperClass']
  ),
} satisfies Record<keyof BvnComponentProps['BDropdown'], PropertyReference>

export const dropdownEmits: ComponentReference['emits'] = [
  {
    event: 'hide',
    description: 'Вызывается непосредственно перед скрытием dropdown. Можно отменить',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Вызовите value.preventDefault(), чтобы отменить скрытие',
      },
    ],
  },
  {
    event: 'hidden',
    description: 'Вызывается после скрытия dropdown',
  },
  {
    event: 'hide-prevented',
    description: 'Вызывается, если попытка закрыть dropdown была предотвращена.',
  },
  {
    event: 'show',
    description: 'Вызывается непосредственно перед показом dropdown. Можно отменить',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Вызовите value.preventDefault(), чтобы отменить показ',
      },
    ],
  },
  {
    event: 'shown',
    description: 'Вызывается после показа dropdown',
  },
  {
    event: 'show-prevented',
    description: 'Вызывается, если попытка открыть dropdown была предотвращена.',
  },
  {
    event: 'split-click',
    description: 'Вызывается при клике по разделённой кнопке в split-режиме',
    args: [
      {
        arg: 'event',
        type: 'MouseEvent',
        description: 'Объект события клика (MouseEvent)',
      },
    ],
  },
  {
    event: 'toggle',
    description: 'Вызывается при клике по кнопке переключения',
  },
]

export const dropdownSlots: ComponentReference['slots'] = [
  {
    name: 'default',
    description: 'Необязательный (scoped) слот по умолчанию для содержимого меню dropdown',
    scope: [
      {
        prop: 'hide',
        type: '() => void',
        description: 'Можно использовать для закрытия dropdown',
      },
      {
        prop: 'show',
        type: '() => void',
        description: 'Можно использовать для открытия dropdown',
      },
    ],
  },
  {
    name: 'button-content',
    description:
      'Можно использовать для реализации пользовательского текста с иконками и дополнительным стилем',
  },
  {
    name: 'toggle-text',
    description:
      'ARIA-метка (визуально скрытая) для кнопки переключения в split-режиме. Переопределяет свойство toggle-text',
  },
]
