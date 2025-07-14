import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
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
      component: 'BDropdown',
      sourcePath: '/BDropdown/BDropdown.vue',
      props: {
        '': dropdownProps,
      },
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    {
      component: 'BDropdownDivider',
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      props: {
        '': {
          dividerClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS-класс (или классы) для добавления к компоненту-разделителю',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'hr',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownDivider'], PropertyReference>,
      },
    },
    {
      component: 'BDropdownForm',
      sourcePath: '/BDropdown/BDropdownForm.vue',
      props: {
        '': {
          formClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS-класс (или классы) для добавления к компоненту-форме',
          },
          novalidate: {notYetImplemented: true},
          validated: {notYetImplemented: true},
          ...pick(buildCommonProps({}), ['wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownForm'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в форме выпадающего списка',
        },
      ],
    },
    {
      component: 'BDropdownGroup',
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      emits: [],
      props: {
        '': {
          header: {
            type: 'string',
            default: undefined,
          },
          ...pick(
            buildCommonProps({
              headerTag: {
                default: 'header',
              },
            }),
            ['ariaDescribedby', 'headerClass', 'headerTag', 'headerVariant', 'id']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое (элементы) для размещения в группе выпадающего списка',
        },
        {
          name: 'header',
          description: 'Необязательное содержимое заголовка для группы выпадающего списка',
        },
      ],
    },
    {
      component: 'BDropdownHeader',
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      emits: [],
      props: {
        '': {
          text: {
            default: undefined,
            description:
              'Содержимое для размещения в заголовке выпадающего списка. Слот по умолчанию имеет приоритет',
            type: 'string',
          },
          ...pick(buildCommonProps({}), ['headerClass', 'tag', 'variant', 'wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownHeader'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в заголовке выпадающего списка',
        },
      ],
    },
    {
      component: 'BDropdownItem',
      sourcePath: '/BDropdown/BDropdownItem.vue',
      props: {
        '': {
          ...pick(buildCommonProps({}), ['linkClass', 'wrapperAttrs']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BDropdownItem'], keyof typeof linkProps>,
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
          description: 'Вызывается при клике по элементу',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в элементе выпадающего списка',
        },
      ],
    },
    {
      component: 'BDropdownItemButton',
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      props: {
        '': {
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс (или классы) для добавления к компоненту-кнопке',
          },
          ...pick(buildCommonProps({}), [
            'active',
            'activeClass',
            'disabled',
            'variant',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BDropdownItemButton'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по элементу',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в кнопке-элементе выпадающего списка',
        },
      ],
    },
    {
      component: 'BDropdownText',
      sourcePath: '/BDropdown/BDropdownText.vue',
      emits: [],
      props: {
        '': {
          text: {
            default: undefined,
            description:
              'Содержимое для размещения в тексте выпадающего списка. Слот по умолчанию имеет приоритет',
            type: 'string',
          },
          textClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS-класс (или классы) для добавления к компоненту-тексту',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'span',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownText'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в тексте выпадающего списка',
        },
      ],
    },
  ],
}
