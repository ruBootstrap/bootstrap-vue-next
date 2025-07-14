import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

const sharedScope = [
  {
    prop: 'disabled',
    type: 'Boolean',
    description: 'Будет `true`, если эта кнопка отключена (некликабельна)',
  },
  {
    prop: 'index',
    type: 'Number',
    description: 'Номер страницы (индексация с `0` до `numberOfPages - 1`)',
  },
  {
    prop: 'page',
    type: 'Number',
    description: 'Номер страницы (от `1` до `numberOfPages`)',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPagination',
      sourcePath: '/BPagination/BPagination.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent | fill',
            description:
              "Выравнивание кнопок страниц: 'start' (или 'left'), 'center', 'end' (или 'right') или 'fill'",
          },
          ellipsisClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для заполнителей многоточия',
          },
          ellipsisText: {
            type: 'string',
            default: '\u2026',
            description: 'Содержимое для заполнителя многоточия',
          },
          firstClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для кнопки перехода на первую страницу',
          },
          firstNumber: {
            type: 'boolean',
            default: false,
            description:
              'Показывать номер первой страницы вместо кнопки перехода на первую страницу',
          },
          firstText: {
            type: 'string',
            default: '\u00AB',
            description: 'Содержимое для кнопки перехода на первую страницу',
          },
          labelFirstPage: {
            type: 'string',
            default: 'Go to first page',
            description: "Значение для атрибута 'aria-label' кнопки перехода на первую страницу",
          },
          labelLastPage: {
            type: 'string',
            default: 'Go to last page',
            description: "Значение для атрибута 'aria-label' кнопки перехода на последнюю страницу",
          },
          labelNextPage: {
            type: 'string',
            default: 'Go to next page',
            description: "Значение для атрибута 'aria-label' кнопки перехода на следующую страницу",
          },
          labelPage: {
            type: 'string',
            default: 'Go to page',
            description:
              "Значение для атрибута 'aria-label' кнопки перехода на страницу. Номер страницы будет добавлен автоматически",
          },
          labelPrevPage: {
            type: 'string',
            default: 'Go to previous page',
            description:
              "Значение для атрибута 'aria-label' кнопки перехода на предыдущую страницу",
          },
          lastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для кнопки перехода на последнюю страницу',
          },
          lastNumber: {
            type: 'boolean',
            default: false,
            description:
              'Показывать номер последней страницы вместо кнопки перехода на последнюю страницу',
          },
          lastText: {
            type: 'string',
            default: '\u00BB',
            description: 'Содержимое для кнопки перехода на последнюю страницу',
          },
          limit: {
            type: 'Numberish',
            default: 5,
            description:
              'Максимальное количество отображаемых кнопок (включая многоточие, если оно показано, но не включая крайние кнопки)',
          },
          modelValue: {
            type: 'Numberish',
            default: 1,
            description: 'Текущий номер страницы, начиная с 1',
          },
          nextClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для кнопки перехода на следующую страницу',
          },
          nextText: {
            type: 'string',
            default: '\u203A',
            description: 'Содержимое для кнопки перехода на следующую страницу',
          },
          pageClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для кнопок перехода на страницу #',
          },
          perPage: {
            type: 'Numberish',
            default: 20,
            description: 'Количество строк на странице',
          },
          pills: {
            type: 'boolean',
            default: false,
            description: 'Применяет стиль pill к кнопкам пагинации',
          },
          prevClass: {
            type: 'ClassValue',
            default: undefined,
            description: "Класс(ы) для кнопки 'Переход к предыдущей странице'",
          },
          prevText: {
            type: 'string',
            default: '\u2039',
            description: 'Содержимое для кнопки перехода на предыдущую страницу',
          },
          totalRows: {
            type: 'Numberish',
            default: 0,
            description: 'Общее количество строк в наборе данных',
          },
          ...pick(
            buildCommonProps({
              ariaLabel: {
                default: 'Pagination',
              },
              size: {
                default: undefined,
              },
            }),
            ['ariaControls', 'ariaLabel', 'disabled', 'noEllipsis', 'noGotoEndButtons', 'size']
          ),
        } satisfies Record<keyof BvnComponentProps['BPagination'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении страницы пользователем',
          args: [
            {
              type: 'number',
              arg: 'page',
              description: 'Выбранный номер страницы (начиная с `1`)',
            },
          ],
        },
        {
          event: 'page-click',
          description: 'Вызывается при клике по кнопке страницы. Можно отменить',
          args: [
            {
              arg: 'BvEvent',
              type: 'BvEvent',
              description:
                'Объект `BvEvent`. Вызовите `BvEvent.preventDefault()`, чтобы отменить выбор страницы',
            },
            {
              type: 'number',
              arg: 'page',
              description: 'Номер страницы для выбора (начиная с `1`)',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'ellipsis-text',
          scope: [],
          description: "Содержимое индикатора '...'. Переопределяет prop `ellipsis-text`",
        },
        {
          name: 'first-text',
          description: 'Содержимое кнопки перехода на первую страницу',
          scope: sharedScope,
        },
        {
          name: 'last-text',
          description: 'Содержимое кнопки перехода на последнюю страницу',
          scope: sharedScope,
        },
        {
          name: 'next-text',
          description: 'Содержимое кнопки перехода на следующую страницу',
          scope: sharedScope,
        },
        {
          name: 'page',
          description: 'Содержимое кнопки номера страницы',
          scope: [
            ...sharedScope,
            {
              prop: 'active',
              type: 'Boolean',
              description: 'Является ли страница активной',
            },
            {
              prop: 'content',
              type: 'String',
              description: 'Содержимое кнопки по умолчанию',
            },
          ],
        },
        {
          name: 'prev-text',
          description: 'Содержимое кнопки перехода на предыдущую страницу',
          scope: sharedScope,
        },
      ],
    },
  ],
}
