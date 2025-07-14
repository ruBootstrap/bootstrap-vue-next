import {type ComponentReference, StyleKind} from '../../types'
import {imageProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BImg',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BImg/BImg.vue',
      props: {
        '': imageProps,
      },
      emits: [
        {
          event: 'load',
          description: 'Вызывается после полной загрузки изображения',
          args: [
            {
              arg: 'load',
              type: 'Event',
              description: 'Стандартное событие load',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
