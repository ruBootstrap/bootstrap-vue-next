import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {
  buildCommonProps,
  dropdownEmits,
  dropdownProps,
  dropdownSlots,
  omit,
  pick,
} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      sourcePath: '/BNav/BNav.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description: 'Выравнивание элементов навигации по AlignmentJustifyContent',
          },
          cardHeader: {
            type: 'boolean',
            default: false,
            description: 'Установите этот prop, если навигация размещена внутри заголовка карточки',
          },
          fill: {
            type: 'boolean',
            default: false,
            description:
              'Пропорционально заполняет всё горизонтальное пространство элементами навигации. Всё пространство занято, но ширина элементов может отличаться',
          },
          justified: {
            type: 'boolean',
            default: false,
            description:
              "Заполняет всё горизонтальное пространство элементами навигации, но в отличие от 'fill', все элементы будут одинаковой ширины",
          },
          pills: {
            type: 'boolean',
            default: false,
            description: 'Отображает элементы навигации в виде pill-кнопок',
          },
          small: {
            type: 'boolean',
            default: false,
            description: 'Делает навигацию меньше',
          },
          tabs: {
            type: 'boolean',
            default: false,
            description: 'Отображает элементы навигации в виде вкладок',
          },
          underline: {
            type: 'boolean',
            default: false,
            description: 'Добавляет подчёркивание активному элементу навигации',
          },
          vertical: {
            type: 'boolean',
            default: false,
            description: 'Располагает элементы навигации вертикально',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BNav'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в навигации',
        },
      ],
    },
    {
      component: 'BNavForm',
      styleSpec: {kind: StyleKind.Tag, value: 'li > form'},
      sourcePath: '/BNav/BNavForm.vue',
      props: {
        '': {
          formClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента form',
          },
          ...pick(buildCommonProps(), [
            'floating',
            'id',
            'novalidate',
            'role',
            'validated',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BNavForm'], PropertyReference>,
      },
      emits: [
        {
          event: 'submit',
          description: 'Вызывается при отправке формы',
          args: [
            {
              arg: 'submit',
              type: 'Event',
              description: 'Стандартное событие submit',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в форме навигации',
        },
      ],
    },
    {
      component: 'BNavItem',
      sourcePath: '/BNav/BNavItem.vue',
      props: {
        '': {
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Дополнительные атрибуты для вложенного элемента ссылки',
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для вложенного элемента ссылки',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BNavItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...omit(linkProps, ['routerTag']),
        },
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по неотключённому элементу навигации',
          args: [
            {
              arg: 'click',
              description: 'Событие click',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'after',
          description:
            'Содержимое, отображаемое после ссылки элемента навигации (например, для вложенных навигаций)',
        },
        {
          name: 'default',
          description: 'Содержимое для размещения в элементе навигации',
        },
      ],
    },
    {
      component: 'BNavItemDropdown',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.nav-item.dropdown'},
      sourcePath: '/BNav/BNavItemDropdown.vue',
      props: {
        '': dropdownProps,
      },
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    {
      component: 'BNavText',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.navbar-text'},
      sourcePath: '/BNav/BNavText.vue',
      props: {
        '': {
          text: {
            description: 'Обычный текст для отображения в навигации',
            type: 'string',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BNavText'], PropertyReference>,
      },
      slots: [
        {
          description: 'Содержимое для отображения в навигации',
          name: 'default',
        },
      ],
    },
  ],
}
