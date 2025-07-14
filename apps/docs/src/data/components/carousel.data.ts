import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCarousel',
      sourcePath: '/BCarousel/BCarousel.vue',
      props: {
        '': {
          background: {
            type: 'string',
            default: undefined,
            description: 'Установить CSS-цвет фона карусели',
          },
          controls: {
            type: 'boolean',
            default: false,
            description: 'Включить элементы управления "предыдущий" и "следующий"',
          },
          controlsNextText: {
            type: 'string',
            default: 'Next',
            description: 'Текст для кнопки "Следующий"',
          },
          controlsPrevText: {
            type: 'string',
            default: 'Previous',
            description: 'Текст для кнопки "Предыдущий"',
          },
          fade: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, анимация смены слайда будет плавным затемнением вместо скольжения',
          },
          imgHeight: {
            type: 'string',
            default: undefined,
            description: "Атрибут 'height' по умолчанию для всех дочерних b-tab",
          },
          imgWidth: {
            type: 'string',
            default: undefined,
            description: "Атрибут 'width' по умолчанию для всех дочерних b-tab",
          },
          indicators: {
            type: 'boolean',
            default: false,
            description: 'Включить индикаторы для перехода к определённым слайдам',
          },
          indicatorsButtonLabel: {
            type: 'string',
            default: 'Slide',
            description: 'aria-label для кнопок-индикаторов',
          },
          interval: {
            type: 'number',
            default: 5000,
            description: 'Задержка (в миллисекундах) между слайдами',
          },
          keyboard: {
            type: 'boolean',
            default: true,
            description: 'Включить навигацию с помощью стрелок на клавиатуре',
          },
          labelIndicators: {
            type: 'string',
            default: 'Select a slide to display',
            description: 'aria-label для индикаторов',
          },
          modelValue: {
            type: 'number',
            default: 0,
            description: 'Индекс текущего активного слайда',
          },
          noAnimation: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, анимация будет отключена',
          },
          noHoverPause: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, показ слайдов не будет приостанавливаться при наведении',
          },
          noTouch: {
            type: 'boolean',
            default: false,
            description: 'Отключить управление слайдами с помощью свайпов',
          },
          noWrap: {
            type: 'boolean',
            default: false,
            description: 'Не перезапускать показ слайдов при достижении конца',
          },
          ride: {
            type: "boolean | 'carousel'",
            default: false,
            description:
              '"carousel" — автоматическая анимация, true — анимация при первом взаимодействии, false — без анимации',
          },
          rideReverse: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, карусель будет анимироваться в обратном направлении',
          },
          touchThreshold: {
            type: 'Numberish',
            default: 50,
            description: 'Минимальная дистанция свайпа для предотвращения паузы показа слайдов',
          },
          ...pick(buildCommonProps({}), ['id']),
        } satisfies Record<keyof BvnComponentProps['BCarousel'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Стандартное событие для обновления v-model',
          args: [
            {
              arg: 'update:model-value',
              description: 'modelValue',
              type: 'number',
            },
          ],
        },
        {
          event: 'slide',
          description: 'Вызывается сразу при начале анимации перехода слайда.',
          args: [
            {
              arg: 'value',
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          ],
        },
        {
          event: 'slid',
          description: 'Вызывается после завершения анимации перехода слайда.',
          args: [
            {
              arg: 'value',
              type: 'BvCarouselEvent',
              description: 'Indicates the slide `direction`, `from`, and `to` indices',
            },
          ],
        },
        {
          event: 'prev-click',
          description: 'Вызывается при клике по кнопке "Предыдущий"',
          args: [
            {
              arg: 'click',
              description: 'Native click event',
              type: 'MouseEvent',
            },
          ],
        },
        {
          event: 'next-click',
          description: 'Вызывается при клике по кнопке "Следующий"',
          args: [
            {
              arg: 'click',
              description: 'Native click event',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое (слайды) для размещения в карусели',
        },
      ],
    },
    {
      component: 'BCarouselSlide',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.carousel-item'},
      sourcePath: '/BCarousel/BCarouselSlide.vue',
      emits: [],
      props: {
        '': {
          background: {
            type: 'string',
            default: undefined,
            description: 'CSS-цвет для фона слайда',
          },
          caption: {
            type: 'string',
            default: undefined,
            description: 'Текст для размещения в подписи',
          },
          captionTag: {
            type: 'string',
            default: 'h3',
            description: 'HTML-тег для обёртки подписи вместо значения по умолчанию',
          },
          contentTag: {
            type: 'string',
            default: 'div',
            description: 'HTML-тег для обёртки содержимого вместо значения по умолчанию',
          },
          contentVisibleUp: {
            type: 'string',
            default: undefined,
            description:
              'Брейкпоинт, начиная с которого будет отображаться текстовое содержимое. По умолчанию — всегда отображается',
          },
          imgAlt: {
            type: 'string',
            default: undefined,
            description: "Значение атрибута 'alt' для изображения",
          },
          imgBlank: {
            type: 'boolean',
            default: false,
            description: 'Если установлено, будет отображаться пустое изображение вместо img-src',
          },
          imgBlankColor: {
            type: 'string',
            default: 'transparent',
            description: 'CSS-цвет для заливки пустого изображения',
          },
          imgHeight: {
            type: 'Numberish',
            default: undefined,
            description: "Атрибут 'height' по умолчанию для всех дочерних b-tab",
          },
          imgSrc: {
            type: 'string',
            default: undefined,
            description: 'URL изображения',
          },
          imgSrcset: {
            type: 'string | string[]',
            default: undefined,
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
            description: "Атрибут 'width' по умолчанию для всех дочерних b-tab",
          },
          interval: {
            type: 'number',
            default: undefined,
            description: 'Задержка (в миллисекундах) перед показом слайда',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст для размещения в текстовой области слайда',
          },
          textTag: {
            type: 'string',
            default: 'p',
            description: 'HTML-тег для обёртки текста вместо значения по умолчанию',
          },
          ...pick(buildCommonProps({}), ['id']),
        } satisfies Record<keyof BvnComponentProps['BCarouselSlide'], PropertyReference>,
      },
      slots: [
        {
          name: 'caption',
          description: 'Содержимое для размещения в подписи',
        },
        {
          name: 'default',
          description: 'Содержимое для размещения в слайде карусели',
        },
        {
          name: 'img',
          description: 'Слот для элемента <img> или компонента изображения',
        },
        {
          name: 'text',
          description: 'Содержимое для размещения в текстовой области слайда',
        },
      ],
    },
  ],
}
