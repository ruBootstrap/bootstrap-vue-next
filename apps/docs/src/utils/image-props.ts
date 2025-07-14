import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {PropertyReference} from '../types'
import {buildCommonProps} from './build-common-props'
import {pick} from './object-utils'

export const linkTo = '/docs/components/image'

export const imageProps = {
  blank: {
    type: 'boolean',
    default: false,
    description: 'Создаёт пустое/прозрачное изображение через SVG data URI',
  },
  blankColor: {
    type: 'string',
    default: 'transparent',
    description: 'Устанавливает цвет пустого изображения в указанный CSS-цвет',
  },
  block: {
    type: 'boolean',
    default: false,
    description:
      'Принудительно отображает изображение как блочный элемент вместо стандартного inline-block',
  },
  fluid: {
    type: 'boolean',
    default: false,
    description:
      'Делает изображение адаптивным. Оно будет сжиматься по мере необходимости или увеличиваться до своей исходной ширины',
  },
  fluidGrow: {
    type: 'boolean',
    default: false,
    description:
      'Похоже на свойство fluid, но позволяет изображению увеличиваться сверх исходной ширины',
  },
  height: {
    type: 'Numberish',
    default: undefined,
    description: "Значение для атрибута 'height' изображения",
  },
  lazy: {
    type: 'boolean',
    default: false,
    description:
      'Включает ленивую загрузку изображения через атрибут `loading` на внутреннем теге img.',
  },
  placement: {
    type: "Extract<Placement, 'start' | 'end'> | 'center'",
    default: undefined,
    description: 'Выравнивание изображения по началу, концу или центру. Подробнее см. выше',
  },
  sizes: {
    type: 'string | string[]',
    default: undefined,
    description:
      'Одна или несколько строк, разделённых запятыми (или массив строк), указывающих набор размеров источников. Может использоваться вместе с prop srcset',
  },
  srcset: {
    type: 'string | string[]',
    default: undefined,
    description:
      'Одна или несколько строк, разделённых запятыми (или массив строк), указывающих возможные источники изображений для использования браузером',
  },
  thumbnail: {
    type: 'boolean',
    default: false,
    description: 'Добавляет рамку-миниатюру вокруг изображения',
  },
  width: {
    type: 'Numberish',
    default: undefined,
    description: "Значение для атрибута 'width' изображения",
  },
  ...pick(
    buildCommonProps({
      tag: {
        default: 'img',
      },
    }),
    ['alt', 'rounded', 'roundedBottom', 'roundedEnd', 'roundedStart', 'roundedTop', 'src', 'tag']
  ),
} as const satisfies Record<keyof BvnComponentProps['BImg'], PropertyReference>
