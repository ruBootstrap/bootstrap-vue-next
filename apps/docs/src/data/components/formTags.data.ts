import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTag',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BFormTag/BFormTag.vue',
      props: {
        '': {
          noRemove: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, тег не будет иметь кнопку удаления',
          },
          pill: {
            type: 'boolean',
            default: false,
            description: 'Делает тег с закруглёнными краями (pill)',
          },
          removeLabel: {
            type: 'string',
            default: 'Remove tag',
            description: "Значение атрибута 'aria-label' для кнопки удаления в теге",
          },
          ...pick(
            buildCommonProps({
              title: {
                description:
                  "Значение для атрибута 'title' у тега. Также будет использоваться как содержимое тега, если не задан слот по умолчанию",
              },
              tag: {
                default: '<span>',
              },
              variant: {
                default: 'secondary',
              },
            }),
            ['disabled', 'id', 'tag', 'title', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormTag'], PropertyReference>,
      },
      emits: [
        {
          event: 'remove',
          args: [
            {
              arg: 'remove',
              type: 'string',
              description: 'Текст тега для удаления',
            },
          ],
          description: 'Вызывается при клике по кнопке удаления',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в теге. Перекрывает prop `title`',
        },
      ],
    },
    {
      component: 'BFormTags',
      styleSpec: {kind: StyleKind.BsvnClass},
      sourcePath: '/BFormTags/BFormTags.vue',
      props: {
        '': {
          addButtonText: {
            type: 'string',
            default: 'Add',
            description:
              "Текст для встроенной кнопки 'Добавить'. Слот add-button-text имеет приоритет",
          },
          addButtonVariant: {
            type: 'ButtonVariant | null',
            default: 'outline-secondary',
            description: "Применяет одну из цветовых тем Bootstrap к кнопке 'Добавить'",
          },
          addOnChange: {
            type: 'boolean',
            default: false,
            description: "Когда установлено, тег добавляется по событию 'change' у input",
          },
          duplicateTagText: {
            type: 'string',
            default: 'Duplicate tag(s)',
            description:
              'Сообщение при обнаружении дубликатов тегов. Пустая строка отключает сообщение',
          },
          feedbackAriaLive: {
            type: 'string',
            default: "'assertive'",
            description: 'Значение для aria-live у текста обратной связи',
          },
          inputAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Дополнительные атрибуты для input нового тега',
          },
          inputClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для input нового тега',
          },
          inputId: {
            type: 'string',
            default: undefined,
            description:
              'ID для input нового тега. Если не задан, будет сгенерирован автоматически',
          },
          inputType: {
            type: 'InputType',
            default: 'text',
            description:
              "Тип input: 'text', 'email', 'tel', 'url' или 'number'. По умолчанию 'text'",
          },
          invalidTagText: {
            type: 'string',
            default: 'Invalid tag(s)',
            description:
              'Сообщение об ошибке при невалидных тегах. Пустая строка отключает сообщение',
          },
          limit: {
            type: 'Numberish',
            default: undefined,
            description:
              'Максимальное количество тегов. Лимит может быть превышен при изменении данных извне',
          },
          limitTagsText: {
            type: 'string',
            default: 'Tag limit reached',
            description: 'Сообщение при достижении лимита. Пустая строка отключает сообщение',
          },
          modelValue: {
            type: 'string[]',
            default: '() => []',
          },
          noAddOnEnter: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, тег не добавляется по нажатию Enter в input',
          },
          noOuterFocus: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, отключает стилизацию фокуса корневого элемента компонента',
          },
          noTagRemove: {
            type: 'boolean',
            default: false,
            description: 'Когда установлено, теги не будут иметь кнопку удаления',
          },
          removeOnDelete: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, позволяет удалить последний тег по Delete/Backspace, если input пустой',
          },
          separator: {
            type: 'string | readonly string[]',
            default: undefined,
            description: 'Символ(ы)-разделители, при которых создаётся новый тег',
          },
          tagClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Класс(ы) для тегов',
          },
          tagPills: {
            type: 'boolean',
            default: false,
            description: 'Делает встроенные теги с закруглёнными краями (pill)',
          },
          tagRemoveLabel: {
            type: 'string',
            default: undefined,
            description: 'Значение aria-label для кнопки удаления тега',
          },
          tagRemovedLabel: {
            type: 'string',
            default: 'Tag removed',
          },
          tagValidator: {
            type: '(t: string) => boolean',
            default: '() => true',
            description:
              'Необязательная функция-валидатор тега. Принимает тег, возвращает true — тег валиден, false — не добавлять',
          },
          tagVariant: {
            type: 'ColorVariant | null',
            default: 'secondary',
            description: 'Применяет одну из цветовых тем Bootstrap к тегам',
          },
          ...pick(
            buildCommonProps({
              name: {
                description:
                  "Устанавливает значение атрибута 'name' у поля формы. При установке создаёт скрытый input для каждого тега",
              },
              placeholder: {
                default: 'Add tag...',
              },
            }),
            ['autofocus', 'disabled', 'form', 'name', 'placeholder', 'required', 'size', 'state']
          ),
        } satisfies Record<keyof BvnComponentProps['BFormTags'], PropertyReference>,
      },
      emits: [
        {
          event: 'blur',
          description: 'Вызывается при потере фокуса компонентом',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Событие blur браузера (до форматирования)',
            },
          ],
        },
        {
          event: 'focus',
          description: 'Вызывается при получении фокуса компонентом',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Событие focus браузера (до форматирования)',
            },
          ],
        },
        {
          event: 'focusin',
          description: 'Вызывается при получении фокуса внутренними элементами компонента',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Событие focusin браузера (до форматирования)',
            },
          ],
        },
        {
          event: 'focusout',
          description: 'Вызывается при потере фокуса внутренними элементами компонента',
          args: [
            {
              arg: 'event',
              type: 'FocusEvent',
              description: 'Событие focusout браузера (до форматирования)',
            },
          ],
        },
        {
          event: 'tag-state',
          description: 'Вызывается при разборе тегов из пользовательского ввода',
          args: [
            {
              arg: 'validTags',
              type: 'Array',
              description:
                'Массив новых тегов (или которые будут добавлены). Если не добавлено — пустой массив',
            },
            {
              arg: 'invalidTags',
              type: 'Array',
              description: 'Массив невалидных тегов. Если не добавлено — пустой массив',
            },
            {
              arg: 'duplicateTags',
              type: 'Array',
              description: 'Массив дубликатов тегов. Если не добавлено — пустой массив',
            },
          ],
        },
        {
          event: 'update:model-value',
          description: 'Вызывается при изменении тегов. Обновляет v-model',
          args: [
            {
              arg: 'value',
              type: 'Array',
              description: 'Массив текущих тегов',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'addButtonText',
          description:
            "Содержимое для встроенной кнопки 'Добавить'. Приоритетнее prop 'add-button-text'. Не используется при наличии default scoped slot",
        },
        {
          name: 'default',
          description: 'Слот для переопределения рендера компонента тегов',
          scope: [
            {
              prop: 'addButtonText',
              type: 'string',
              description: "Значение prop 'add-button-text'",
            },
            {
              prop: 'addButtonVariant',
              type: 'string',
              description: "Значение prop 'add-button-variant'",
            },
            {
              prop: 'addTag',
              type: '(tag?: string) => void',
              description:
                'Метод добавления нового тега. По умолчанию добавляет значение из input, можно передать значение явно',
            },
            {
              prop: 'disableAddButton',
              type: 'boolean',
              description:
                'true, если теги в input не могут быть добавлены (все невалидные и/или дубликаты)',
            },
            {
              prop: 'disabled',
              type: 'boolean',
              description: 'true, если компонент в состоянии disabled. Значение prop disabled',
            },
            {
              prop: 'duplicateTagText',
              type: 'string',
              description: "Значение prop 'duplicate-tag-text'",
            },
            {
              prop: 'duplicateTags',
              type: 'Array',
              description: 'Массив дубликатов тегов, которые не удалось добавить',
            },
            {
              prop: 'form',
              type: 'string',
              description: "Значение prop 'form'",
            },
            {
              prop: 'inputAttrs',
              type: 'Record<string, unknown>',
              description: 'Объект атрибутов для input через v-bind="inputAttrs"',
            },
            {
              prop: 'inputClass',
              type: 'ClassValue',
              description: 'Класс(ы) для input нового тега. Значение prop input-class',
            },
            {
              prop: 'inputHandlers',
              type: 'Object',
              description: 'Объект обработчиков событий для input через v-on="inputHandlers"',
            },
            {
              prop: 'inputId',
              type: 'string',
              description:
                'ID для input нового тега. По умолчанию prop input-id. Если не задан — генерируется автоматически. Также доступен через inputAttrs.id',
            },
            {
              prop: 'inputType',
              type: 'InputType',
              description:
                'Тип input: type, email, tel, url или number. По умолчанию text. Нормализованное значение prop input-type',
            },
            {
              prop: 'invalidTagText',
              type: 'string',
              description: "Значение prop 'invalid-tag-text'",
            },
            {
              prop: 'invalidTags',
              type: 'Array',
              description:
                'Массив невалидных тегов. Требует функцию-валидатор через prop tag-validator',
            },
            {
              prop: 'isDuplicate',
              type: 'boolean',
              description: 'true, если пользователь пытался добавить дубликаты',
            },
            {
              prop: 'isInvalid',
              type: 'boolean',
              description:
                'true, если в input невалидные теги. Требует функцию-валидатор через prop tag-validator',
            },
            {
              prop: 'isLimitReached',
              type: 'boolean',
              description: 'true, если достигнут лимит тегов (limit)',
            },
            {
              prop: 'limitTagsText',
              type: 'string',
              description: "Значение prop 'limit-tag-text'",
            },
            {
              prop: 'noTagRemove',
              type: 'boolean',
              description: "Значение prop 'no-tag-remove'",
            },
            {
              prop: 'placeholder',
              type: 'string',
              description: "Значение prop 'placeholder'",
            },
            {
              prop: 'remove',
              type: '() => void',
              description: 'Метод полного сброса input тегов',
              notYetImplemented: true,
            },
            {
              prop: 'removeTag',
              type: '(tag?: string) => void',
              description: 'Метод удаления тега. Принимает значение тега для удаления',
            },
            {
              prop: 'required',
              type: 'boolean',
              description: "Значение prop 'required'",
            },
            {
              prop: 'separator',
              type: 'string | readonly string[]',
              description: "Значение prop 'separator'",
            },
            {
              prop: 'size',
              type: 'Size',
              description: "Значение prop 'size'",
            },
            {
              prop: 'state',
              type: 'ValidationState',
              description:
                "Значение prop 'state' (контекстное состояние компонента: true, false или null)",
            },
            {
              prop: 'tagClass',
              type: 'ClassValue',
              description: "Класс(ы) для тегов. Значение prop 'tag-class'",
            },
            {
              prop: 'tagPills',
              type: 'boolean',
              description: 'Значение prop tag-pills',
            },
            {
              prop: 'tagRemoveLabel',
              type: 'string',
              description: 'ARIA label для кнопки удаления тега. Значение prop tag-remove-label',
            },
            {
              prop: 'tagRemovedLabel',
              type: 'string',
              description: "Значение prop 'tag-removed-label'",
            },
            {
              prop: 'tagVariant',
              type: 'ColorVariant',
              description: "Значение prop 'tag-variant'",
            },
            {
              prop: 'tagValidator',
              type: '(t: string) => boolean',
              description: "Значение prop 'tag-variant'",
            },
            {
              prop: 'tagVariant',
              type: 'ColorVariant | null',
              description: "Значение prop 'tag-variant'",
            },
          ],
        },
        {
          name: 'tag',
          description: 'Слот для переопределения рендера отдельного тега',
          scope: [
            {
              prop: 'tag',
              type: 'string',
              description: 'Значение тега',
            },
            {
              prop: 'tagClass',
              type: 'ClassValue',
              description: 'Класс(ы) для тега',
            },
            {
              prop: 'tagVariant',
              type: 'ColorVariant | null',
              description: 'Цветовая тема для тега',
            },
            {
              prop: 'tagPills',
              type: 'boolean',
              description: 'Отображать тег с закруглёнными краями',
            },
            {
              prop: 'removeTag',
              type: '(tag?: string) => void',
              description: 'Метод удаления тега. Принимает значение тега для удаления',
            },
          ],
        },
      ],
    },
  ],
}
