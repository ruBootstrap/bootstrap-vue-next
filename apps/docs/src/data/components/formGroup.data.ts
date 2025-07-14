import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormGroup',
      sourcePath: '/BFormGroup/BFormGroup.vue',
      props: {
        '': {
          contentCols: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины содержимого на экранах 'xs' и выше",
          },
          contentColsLg: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины содержимого на экранах 'lg' и выше",
          },
          contentColsMd: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины содержимого на экранах 'md' и выше",
          },
          contentColsSm: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины содержимого на экранах 'sm' и выше",
          },
          contentColsXl: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины содержимого на экранах 'xl' и выше",
          },
          description: {
            type: 'string',
            default: 'undefined',
            description: 'Текст для размещения в области подсказки группы формы',
          },
          feedbackAriaLive: {
            type: 'string',
            default: "'assertive'",
            description: 'Значение для атрибута `aria-live` у текста обратной связи',
          },
          floating: {
            type: 'boolean',
            default: 'undefined',
            description: 'Если установлено, метка будет отображаться в стиле floating',
          },
          invalidFeedback: {
            type: 'string',
            default: 'undefined',
            description: 'Текст для отображения при невалидном состоянии группы формы',
          },
          label: {
            type: 'string',
            default: 'undefined',
            description: 'Текст для размещения в метке/легенде группы формы',
          },
          labelAlign: {
            type: 'string',
            default: 'undefined',
            description:
              "Выравнивание текста 'left', 'center', 'right' для метки на экранах 'xs' и выше",
          },
          labelAlignLg: {
            type: 'string',
            default: 'undefined',
            description:
              "Выравнивание текста 'left', 'center', 'right' для метки на экранах 'lg' и выше",
          },
          labelAlignMd: {
            type: 'string',
            default: 'undefined',
            description:
              "Выравнивание текста 'left', 'center', 'right' для метки на экранах 'md' и выше",
          },
          labelAlignSm: {
            type: 'string',
            default: 'undefined',
            description:
              "Выравнивание текста 'left', 'center', 'right' для метки на экранах 'sm' и выше",
          },
          labelAlignXl: {
            type: 'string',
            default: 'undefined',
            description:
              "Выравнивание текста 'left', 'center', 'right' для метки на экранах 'xl' и выше",
          },
          labelClass: {
            type: 'string[] | Record<string, unknown> | string',
            default: 'undefined',
            description: 'CSS-класс (или классы) для добавления к элементу метки/легенды',
          },
          labelCols: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины метки на экранах 'xs' и выше",
          },
          labelColsLg: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины метки на экранах 'lg' и выше",
          },
          labelColsMd: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины метки на экранах 'md' и выше",
          },
          labelColsSm: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины метки на экранах 'sm' и выше",
          },
          labelColsXl: {
            type: 'boolean | number | string',
            default: 'undefined',
            description: "Количество колонок для ширины метки на экранах 'xl' и выше",
          },
          labelFor: {
            type: 'string',
            default: 'undefined',
            description:
              'Укажите ID единственного элемента управления в группе. Не задавайте значение, если в группе несколько элементов',
          },
          labelSize: {
            type: 'string',
            default: 'undefined',
            description:
              "Устанавливает размер текста метки: 'sm', 'md' (по умолчанию) или 'lg'. Используйте для согласования размера метки и поля формы",
          },
          labelVisuallyHidden: {
            type: 'boolean',
            default: 'false',
            description:
              'Визуально скрывает содержимое метки, но делает его доступным для скринридеров',
          },
          validFeedback: {
            type: 'string',
            default: 'undefined',
            description: 'Текст для отображения при валидном состоянии группы формы',
          },
          validated: {
            type: 'boolean',
            default: 'undefined',
            description: "Если установлено, добавляет класс Bootstrap 'was-validated' на компонент",
          },
          ...pick(
            buildCommonProps(
              buildCommonProps({
                disabled: {
                  description:
                    'Отключает элемент fieldset, что также отключает элементы управления формой (в поддерживаемых браузерах). Не влияет, если задан label-for',
                },
              })
            ),
            ['ariaInvalid', 'disabled', 'id', 'state', 'tooltip']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormGroup'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в группе формы',
          scope: [
            {
              prop: 'ariaDescribedby',
              type: 'string',
              description:
                'Значение для атрибута `aria-describedby` для input в группе. Автоматически назначается при наличии prop `label-for`',
            },
            {
              prop: 'id',
              type: 'string',
              description: 'ID группы формы. Совпадает с prop `id`, если задан',
            },
            {
              prop: 'descriptionId ',
              type: 'string',
              description: 'ID элемента описания. Будет `null`, если описание не задано',
            },
            {
              prop: 'labelId',
              type: 'string',
              description: 'ID элемента метки. Будет `null`, если описание не задано',
            },
          ],
        },
        {
          name: 'description',
          description:
            'Содержимое для размещения в области описания. Перекрывает prop `description`',
        },
        {
          name: 'invalid-feedback',
          description:
            'Содержимое для размещения в области невалидной обратной связи. Перекрывает prop `invalid-feedback`',
        },
        {
          name: 'label',
          description: 'Содержимое для размещения внутри элемента метки. Перекрывает prop `label`',
        },
        {
          name: 'valid-feedback',
          description:
            'Содержимое для размещения в области валидной обратной связи. Перекрывает prop `valid-feedback`',
        },
      ],
    },
  ],
}
