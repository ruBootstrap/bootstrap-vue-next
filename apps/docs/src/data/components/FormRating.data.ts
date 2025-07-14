import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormRating',
      sourcePath: '/BFormRating/BFormRating.vue',
      props: {
        '': {
          color: {
            type: 'string',
            default: undefined,
            description:
              'CSS-цвет для использования вместо variant. Принимает HEX или RGB/RGBA строку',
          },
          inline: {
            type: 'boolean',
            default: 'false',
            description: 'Если true, отображается как inline-элемент, а не блочный (100% ширины)',
          },
          modelValue: {
            type: 'number',
            default: 0,
            description: 'Текущее значение рейтинга (поддерживает двустороннее связывание v-model)',
          },
          noBorder: {
            type: 'boolean',
            default: 'false',
            description: 'Если true, убирает границу вокруг компонента рейтинга',
          },
          precision: {
            type: 'number',
            default: undefined,
            description:
              'Число знаков после запятой для отображения. По умолчанию — без ограничения точности',
          },
          readonly: {
            type: 'boolean',
            default: 'false',
            description:
              'Если true, делает рейтинг только для чтения. При этом допускаются дробные значения (будут отображаться половинки иконок)',
          },
          showClear: {
            type: 'boolean',
            default: 'false',
            description: 'Если true, отображает кнопку очистки рейтинга',
          },
          showValue: {
            type: 'boolean',
            default: 'false',
            description: 'Если true, отображает текущее значение рейтинга в контроле',
          },
          showValueMax: {
            type: 'boolean',
            default: 'false',
            description:
              'Если true и show-value=true, отображает максимальное возможное значение рейтинга',
          },
          size: {
            type: "'sm' | 'lg' | string",
            default: '1rem',
            description:
              "Размер иконки: CSS-единицы (например, '1.5rem', '24px') или пресеты 'sm' (.875rem) и 'lg' (1.25rem); по умолчанию 1rem.",
          },
          stars: {
            type: 'number',
            default: 5,
            description: 'Количество звёзд для отображения. Минимум — 3, по умолчанию — 5',
          },
          ...pick(buildCommonProps(), ['id', 'variant']),
        } satisfies Record<keyof BvnComponentProps['BFormRating'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: 'Текущее выбранное значение рейтинга',
              type: 'number',
            },
          ],
          description:
            'Вызывается при изменении выбранного значения. Ищете событие `input` или `change` — используйте `update:model-value`',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Пользовательский рендер каждой звезды',
          scope: [
            {
              prop: 'starIndex',
              type: 'number',
              description: 'Индекс отображаемой звезды (с нуля)',
            },
            {
              prop: 'isFilled',
              type: 'boolean',
              description: 'Если true, звезда закрашена (выбрана)',
            },
            {
              prop: 'isHalf',
              type: 'boolean',
              description: 'Если true, звезда наполовину закрашена (частично выбрана)',
            },
          ],
        },
      ],
    },
  ],
}
