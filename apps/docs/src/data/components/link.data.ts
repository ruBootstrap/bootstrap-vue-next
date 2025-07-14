import {type ComponentReference, StyleKind} from '../../types'
import {linkProps} from '../../utils'
export default {
  load: (): ComponentReference[] => [
    {
      component: 'BLink',
      styleSpec: {kind: StyleKind.Tag, value: 'a, router-link'},
      sourcePath: '/BLink/BLink.vue',
      props: {
        '': linkProps,
      },
      emits: [
        {
          event: 'click',
          description: 'Вызывается при клике по ссылке',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Стандартное событие click',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в ссылке',
        },
      ],
    },
  ],
}
