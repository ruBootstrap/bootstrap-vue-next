import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNavbar',
      sourcePath: '/BNavbar/BNavbar.vue',
      props: {
        '': {
          container: {
            type: "boolean | 'fluid' | Breakpoint",
            default: 'fluid',
            description:
              "Используйте опцию container для изменения макета navbar. По умолчанию navbar — это fluid-контейнер. Используйте 'fluid' для navbar на всю ширину или брейкпоинт для адаптивного контейнера.",
          },
          fixed: {
            type: "'top' | 'bottom'",
            default: undefined,
            description:
              "Установите 'top' для закрепления navbar сверху экрана или 'bottom' для закрепления снизу",
          },
          print: {
            type: 'boolean',
            default: false,
            description:
              'По умолчанию navbar скрыт при печати. Если этот prop установлен, navbar будет отображаться при печати',
          },
          sticky: {
            type: "'top' | 'bottom'",
            default: undefined,
            description:
              'Установите true, чтобы закрепить navbar сверху экрана (или родительского контейнера с position: relative) при прокрутке',
          },
          toggleable: {
            type: 'boolean | Breakpoint',
            default: false,
            description:
              "Установите 'true' для всегда свёрнутого navbar или брейкпоинт, при котором navbar будет развёрнут: 'sm', 'md', 'lg', 'xl' или 'xxl'",
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'nav',
              },
            }),
            ['autoClose', 'tag', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbar'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в navbar',
        },
      ],
    },
    {
      component: 'BNavbarBrand',
      sourcePath: '/BNavbar/BNavbarBrand.vue',
      props: {
        '': {
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['tag']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BNavbarBrand'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...omit(linkProps, ['routerTag']),
        },
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в бренде navbar',
        },
      ],
    },
    {
      component: 'BNavbarNav',
      sourcePath: '/BNavbar/BNavbarNav.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description:
              "Выравнивание элементов навигации: 'start', 'end', 'center', 'between', 'around' или 'evenly'",
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
          small: {
            type: 'boolean',
            default: false,
            description: 'Делает навигацию меньше',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbarNav'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в navbar nav',
        },
      ],
    },
    {
      component: 'BNavbarToggle',
      sourcePath: '/BNavbar/BNavbarToggle.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: 'Toggle navigation',
            description: 'Строка для aria-label кнопки переключения',
          },
          target: {
            type: 'string | readonly string[]',
            default: undefined,
            description:
              'ID (или массив ID) компонентов collapse/sidebar, которые должны переключаться',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'ul',
              },
            }),
            ['disabled']
          ),
        } satisfies Record<keyof BvnComponentProps['BNavbarToggle'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по кнопке переключения',
          args: [
            {
              arg: 'click',
              description: 'Стандартное событие мыши',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Альтернативное содержимое для замены стандартного hamburger Bootstrap',
          scope: [
            {
              prop: 'expanded',
              type: 'boolean',
              description: '`true`, если collapse развёрнут, иначе `false`',
              notYetImplemented: true,
            },
          ],
        },
      ],
    },
  ],
}
