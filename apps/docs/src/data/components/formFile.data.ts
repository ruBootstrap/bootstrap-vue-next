import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormFile',
      sourcePath: '/BForm/BFormFile.vue',
      props: {
        '': {
          accept: {
            type: 'string | string[]',
            default: '',
            description: 'Значение для атрибута `accept` у input[type=file]',
          },
          capture: {
            type: "'boolean' | 'user' | 'environment'",
            default: false,
            description:
              'Если установлено, браузер будет использовать камеру устройства (если поддерживается)',
          },
          directory: {
            type: 'boolean',
            default: false,
            description: 'Включить режим выбора директории (в поддерживаемых браузерах)',
          },
          label: {
            type: 'string',
            default: '',
            description: 'Метка для группы формы, в которой отображается input file',
          },
          labelClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Стилизация метки',
          },
          modelValue: {
            type: 'File[] | File | null',
            default: undefined,
            description:
              'Текущее значение поля. Может быть объектом File или массивом File (если выбран multiple или directory). null или пустой массив сбрасывает поле',
          },
          multiple: {
            type: 'boolean',
            default: false,
            description:
              'Если установлено, позволяет выбрать несколько файлов. v-model будет массивом',
          },
          noButton: {
            type: 'boolean | null',
            default: undefined,
            description: 'Скрыть кнопку выбора файла',
          },
          noDrop: {
            type: 'boolean',
            default: false,
            description: 'Отключить режим drag and drop',
          },
          noTraverse: {
            type: 'boolean',
            default: false,
            description: 'Возвращать файлы как плоский массив в режиме `directory`',
          },
          ...pick(
            buildCommonProps({
              plain: {
                description: 'Не добавлять дополнительное оформление или классы к input file',
              },
            }),
            [
              'ariaLabel',
              'ariaLabelledby',
              'autofocus',
              'disabled',
              'form',
              'id',
              'name',
              'plain',
              'required',
              'size',
              'state',
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BFormFile'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Обновляет значение v-model (см. документацию)',
          args: [
            {
              arg: 'value',
              type: 'File | File[] | null',
              description: 'В одиночном режиме — объект File, в режиме multiple — массив File',
            },
          ],
        },
        {
          event: 'change',
          description: 'Оригинальное событие change для input',
          args: [
            {
              arg: 'value',
              type: 'Event',
              description: 'Стандартное событие change браузера',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'label',
          description: '',
          scope: [],
        },
      ],
    },
  ],
}
