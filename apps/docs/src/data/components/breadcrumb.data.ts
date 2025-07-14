import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BBreadcrumb',
      sourcePath: '/BBreadcrumb/BBreadcrumb.vue',
      props: {
        '': {
          items: {
            type: 'BreadcrumbItemRaw[]',
            default: undefined,
            description:
              'Массив элементов `BreadCrumbItem` или строк для отображения. Подробнее см. выше.',
          },
          id: {
            type: 'string',
            default: undefined,
            description:
              'ID компонента хлебных крошек. При использовании с composable `useBreadcrumb` будет использовать этот id как отдельную цепочку хлебных крошек вместо глобальной.',
          },
        } satisfies Record<keyof BvnComponentProps['BBreadcrumb'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Контент (элементы хлебных крошек) для размещения внутри breadcrumb',
        },
        {
          name: 'append',
          description: 'Контент для добавления в конец breadcrumb',
        },
        {
          name: 'prepend',
          description: 'Контент для добавления в начало breadcrumb',
        },
      ],
    },
    {
      component: 'BBreadcrumbItem',
      sourcePath: '/BBreadcrumb/BBreadcrumbItem.vue',
      props: {
        '': {
          ariaCurrent: {
            type: 'string',
            default: 'location',
            description:
              "Устанавливает значение атрибута 'aria-current' (если элемент активен). Поддерживаемые значения: 'location', 'page' или 'true'",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Текст для отображения в элементе хлебных крошек',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBreadcrumbItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...linkProps,
        },
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по элементу хлебных крошек',
          args: [
            {
              type: 'MouseEvent',
              arg: 'click',
              description: 'Объект события клика мышью',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Контент для размещения внутри элемента хлебных крошек',
        },
      ],
    },
  ],
}
