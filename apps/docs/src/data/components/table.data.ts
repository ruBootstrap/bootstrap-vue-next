import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => {
    const tableRowEventArgs = (action: string) => [
      {
        arg: 'item',
        type: 'TableItem',
        description: `Данные строки ${action}`,
      },
      {
        arg: 'index',
        type: 'number',
        description: `Индекс строки ${action}`,
      },
      {
        arg: 'event',
        description: '',
        type: 'MouseEvent|KeyboardEvent',
      },
    ]

    const rowSelectionScope = [
      {
        prop: 'rowSelected',
        type: 'boolean',
        description:
          'Будет true, если строка выбрана. Применимо только при включённом режиме выбора строк',
      },
      {
        prop: 'selectRow',
        type: '(index?: number) => void',
        description:
          'Можно вызвать для выбора текущей строки. Применимо только при включённом режиме выбора строк',
      },
    ]

    const endRowScope = [
      {
        prop: 'columns',
        type: 'number',
        description: 'Количество столбцов в таблице',
      },
      {
        prop: 'fields',
        type: 'TableField<Items>[]',
        description: 'Массив нормализованных определений столбцов (в формате массива объектов)',
      },
    ]

    const BTableSimpleProps = {
      bordered: {
        type: 'boolean',
        default: false,
        description: 'Добавляет границы ко всем ячейкам и заголовкам',
      },
      borderless: {
        type: 'boolean',
        default: false,
        description: 'Удаляет все границы из ячеек',
      },
      borderVariant: {
        type: 'ColorVariant | null',
        default: null,
        description: 'Применяет одну из цветовых тем Bootstrap к границе таблицы',
      },
      captionTop: {
        type: 'boolean',
        default: false,
        description: 'Если установлено, заголовок таблицы будет отображаться над таблицей',
      },
      dark: {
        type: 'boolean',
        default: false,
        description: 'Переводит таблицу в тёмный режим',
      },
      fixed: {
        type: 'boolean',
        default: false,
        description:
          'Делает все столбцы одинаковой ширины (таблица с фиксированной разметкой). Ускоряет рендеринг больших таблиц. Ширина столбцов может быть задана через CSS или colgroup',
      },
      hover: {
        type: 'boolean',
        default: false,
        description: 'Включает стилизацию строк при наведении',
      },
      noBorderCollapse: {
        type: 'boolean',
        default: false,
        description:
          'Отключает схлопывание границ таблицы. Полезно при использовании фиксированных заголовков или столбцов',
      },
      outlined: {
        type: 'boolean',
        default: false,
        description: 'Добавляет внешнюю границу элементу таблицы',
      },
      responsive: {
        type: 'boolean | Breakpoint',
        default: false,
        description:
          "Делает таблицу адаптивной по ширине, добавляя горизонтальную прокрутку. true — всегда адаптивная, либо укажите брейкпоинт ('sm', 'md', 'lg', 'xl') для переключения режима.",
      },
      small: {
        type: 'boolean',
        default: false,
        description: 'Отображает таблицу с уменьшенными отступами в ячейках',
      },
      stacked: {
        type: 'boolean | Breakpoint',
        default: false,
        description:
          "Включает режим стека. true — всегда в стеке, либо укажите брейкпоинт ('sm', 'md', 'lg', 'xl') для переключения.",
      },
      stickyHeader: {
        type: 'boolean | Numberish',
        default: false,
        description:
          'Фиксирует заголовок таблицы. true — высота таблицы 300px, либо укажите CSS-высоту (с единицами). Число преобразуется в px.',
      },
      striped: {
        type: 'boolean',
        default: false,
        description: 'Добавляет чередование цвета строк в tbody',
      },
      stripedColumns: {
        type: 'boolean',
        default: false,
        description: 'Добавляет чередование цвета столбцов',
      },
      tableAttrs: {
        type: 'AttrsValue',
        default: undefined,
        description: 'Атрибуты для элемента таблицы',
      },
      tableClass: {
        type: 'ClassValue',
        default: undefined,
        description: 'CSS-классы для элемента таблицы',
      },
      ...pick(buildCommonProps(buildCommonProps()), ['id', 'variant']),
    } as const satisfies Record<keyof BvnComponentProps['BTableSimple'], PropertyReference>

    const BTableLiteProps = {
      align: {
        type: 'VerticalAlign',
        default: undefined,
      },
      caption: {
        type: 'string',
        default: undefined,
        description: 'Текст для элемента caption',
      },
      detailsTdClass: {
        type: 'ClassValue',
        default: undefined,
        description: 'CSS-класс(ы) для td в строке деталей',
      },
      fieldColumnClass: {
        type: '(field: TableField) => Record<string, any>[] | string | Record<PropertyKey, any> | any[]',
        default: undefined,
      },
      fields: {
        type: 'TableFieldRaw[]',
        default: '() => []',
        description: 'Массив имён столбцов или объектов-описаний столбцов',
      },
      footClone: {
        type: 'boolean',
        default: false,
        description: 'Включает футер таблицы и по умолчанию клонирует содержимое заголовка',
      },
      footRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Применяет цветовую тему Bootstrap к tr в tfoot. Использует head-row-variant, если не задано',
      },
      footVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Применяет цветовую тему Bootstrap к футеру, использует head-variant, если задан. Может иметь приоритет над foot-row-variant',
      },
      headRowVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description: 'Применяет цветовую тему Bootstrap к tr в thead',
      },
      headVariant: {
        type: 'ColorVariant | null',
        default: undefined,
        description:
          'Применяет цветовую тему Bootstrap к заголовку. Может иметь приоритет над head-row-variant',
      },
      items: {
        type: 'readonly Items[]',
        default: '() => []',
      },
      labelStacked: {
        type: 'boolean',
        default: false,
        description:
          'Если установлено, метки будут отображаться как элементы label, а не через data-label',
      },
      modelValue: {
        type: 'any',
        default: undefined,
      },
      primaryKey: {
        type: 'string',
        default: undefined,
        description:
          'Имя столбца, содержащего уникальное значение для каждой строки. Требуется для поддержки анимации tbody и ускоряет рендеринг',
      },
      tbodyClass: {
        type: 'ClassValue',
        default: undefined,
      },
      tbodyTrAttrs: {
        type: '((item: Items | null, type: TableRowType) => AttrsValue) | AttrsValue',
        default: undefined,
      },
      tbodyTrClass: {
        type: '((item: TableItem | null, type: string) => string | any[] | null | undefined) | string | Record<PropertyKey, any> | any[]',
        default: undefined,
      },
      tfootClass: {
        type: 'ClassValue',
        default: undefined,
      },
      tfootTrClass: {
        type: 'ClassValue',
        default: undefined,
      },
      theadClass: {
        type: 'ClassValue',
        default: undefined,
      },
      theadTrClass: {
        type: 'ClassValue',
        default: undefined,
      },
    } as const satisfies Record<
      Exclude<keyof BvnComponentProps['BTableLite'], keyof BvnComponentProps['BTableSimple']>,
      PropertyReference
    >

    const tableLiteEmits = [
      {
        event: 'head-clicked',
        description:
          'Вызывается при клике по ячейке заголовка или футера. Не применяется для слота custom-foot',
        args: [
          {
            arg: 'key',
            type: 'TableField<Record<string, unknown>>.key: LiteralUnion<string, string>',
            description: 'Ключ столбца (имя поля)',
          },
          {
            arg: 'field',
            type: 'TableField',
            description: 'Объект-описание столбца',
          },
          {
            arg: 'event',
            description: 'Объект нативного события',
            type: 'MouseEvent|KeyboardEvent',
          },
          {
            arg: 'isFooter',
            description: 'true, если событие произошло по футеру',
            type: 'boolean',
          },
        ],
      },
      {
        event: 'row-clicked',
        description: 'Вызывается при клике по строке',
        args: tableRowEventArgs('при клике'),
      },
      {
        event: 'row-contextmenu',
        description: 'Вызывается при открытии контекстного меню для строки',
        args: tableRowEventArgs('при открытии контекстного меню'),
      },
      {
        event: 'row-dblclicked',
        description: 'Вызывается при двойном клике по строке',
        args: tableRowEventArgs('при двойном клике'),
      },
      {
        event: 'row-hovered',
        description: 'Вызывается при наведении на строку',
        args: tableRowEventArgs('при наведении'),
      },
      {
        event: 'row-unhovered',
        description: 'Вызывается при уходе курсора со строки',
        args: tableRowEventArgs('при уходе'),
      },
    ]

    const tableLiteSlots: ComponentReference['slots'] = [
      {
        name: 'bottom-row',
        description: 'Фиксированная нижняя строка для пользовательских B-TD. Может быть scoped',
        scope: endRowScope,
      },
      {
        name: 'cell({key})',
        description:
          'Слот по умолчанию для пользовательского рендера данных столбца. См. документацию для описания scoped данных',
        scope: [
          {
            prop: 'detailsShowing',
            type: 'boolean',
            description: 'true, если отображается slot row-details для строки',
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: 'Нормализованный объект-описание столбца (из props fields)',
          },
          {
            prop: 'index',
            type: 'number',
            description: 'Индекс строки (нумерация с нуля относительно отображаемых строк)',
          },
          {
            prop: 'item',
            type: 'readonly Items[]',
            description: 'Данные строки',
          },
          {
            prop: 'toggleDetails',
            type: '() => void',
            description: 'Можно вызвать для переключения видимости slot row-details для строки',
          },
          {
            prop: 'unformatted',
            type: 'unknown',
            description:
              'Исходное значение для этого ключа в записи item (null или undefined для виртуального столбца), до передачи в форматтер',
          },
          {
            prop: 'value',
            type: 'unknown',
            description:
              'Значение для этого ключа в записи (null или undefined для виртуального столбца), либо результат работы форматтера',
          },
          ...rowSelectionScope,
        ],
      },
      {
        name: 'custom-foot',
        description: 'Пользовательский слот футера для B-TR, B-TH, B-TD. Может быть scoped',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'Массив нормализованных определений столбцов (в формате массива объектов)',
          },
          {
            prop: 'items',
            type: 'readonly Items[]',
            description: 'Массив отображаемых строк',
          },
          {
            prop: 'columns',
            type: 'number',
            description: 'Количество столбцов в таблице',
          },
        ],
      },
      {
        name: 'foot({key})',
        description:
          'Scoped-слот для пользовательского рендера футера столбца. {key} — имя ключа столбца. См. документацию для описания scoped футера',
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Снять выделение со всех строк (если включён режим выбора)',
          },
          {
            prop: 'column',
            type: 'LiteralUnion<keyof Items>',
            description: 'Ключ столбца',
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: 'Нормализованный объект-описание столбца (из props fields)',
          },
          {
            prop: 'isFoot',
            type: 'true',
            description: 'Используется для различения футера при fallback на head()',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: 'Значение label столбца',
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Выделить все строки (если включён режим выбора)',
          },
        ],
      },
      {
        name: 'head({key})',
        description:
          'Scoped-слот для пользовательского рендера заголовка столбца. {key} — имя ключа столбца',
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Снять выделение со всех строк (если включён режим выбора)',
          },
          {
            prop: 'column',
            type: 'LiteralUnion<keyof Items>',
            description: 'Ключ столбца',
          },
          {
            prop: 'field',
            type: 'TableField<Items>',
            description: 'Нормализованный объект-описание столбца (из props fields)',
          },
          {
            prop: 'isFoot',
            type: 'boolean',
            description: 'true, если слот рендерится в футере',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: 'Значение label столбца',
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Выделить все строки (если включён режим выбора)',
          },
        ],
      },
      {
        name: 'row-details',
        description:
          'Scoped-слот для дополнительного отображения информации о записи. См. документацию по поддержке Row details',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'Массив нормализованных определений столбцов (в формате массива объектов)',
          },
          {
            prop: 'index',
            type: 'Number',
            description: 'Индекс строки (относительно отображаемых строк)',
          },
          {
            prop: 'item',
            type: 'Items',
            description: 'Данные всей строки',
          },
          {
            prop: 'toggleDetails',
            type: '() => void',
            description: 'Функция для переключения видимости slot row-details',
          },
          ...rowSelectionScope,
        ],
      },
      {
        name: 'table-caption',
        description: 'Содержимое для caption таблицы',
      },
      {
        name: 'thead-top',
        description:
          'Слот над заголовками столбцов в thead для пользовательских B-TR с B-TH/B-TD. Может быть scoped',
        scope: [
          {
            prop: 'clearSelected',
            type: '() => void',
            description: 'Снять выделение со всех строк (если включён режим выбора)',
          },
          {
            prop: 'columns',
            type: 'number',
            description: 'Количество столбцов в таблице',
          },
          {
            prop: 'label',
            type: 'string | undefined',
            description: 'Значение label столбца',
          },
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'Массив нормализованных определений столбцов (в формате массива объектов)',
          },
          {
            prop: 'selectAllRows',
            type: '() => void',
            description: 'Выделить все строки (если включён режим выбора)',
          },
        ],
      },
      {
        name: 'table-colgroup',
        description: 'Слот для пользовательского элемента <colgroup>',
        scope: [
          {
            prop: 'fields',
            type: 'TableField<Items>[]',
            description: 'Массив нормализованных определений столбцов (в формате массива объектов)',
          },
        ],
      },
      {
        name: 'top-row',
        description: 'Фиксированная верхняя строка для пользовательских B-TD. Может быть scoped',
        scope: endRowScope,
      },
    ]

    return [
      {
        component: 'BTable',
        sourcePath: '/BTable/BTable.vue',
        props: {
          '': {
            busy: {
              type: 'boolean',
              default: false,
              description:
                'Когда установлено, принудительно переводит таблицу в состояние busy. Автоматически устанавливается, когда вызывается функция поставщика элементов',
            },
            busyLoadingText: {
              type: 'string',
              default: 'Loading...',
              notYetImplemented: true,
            },
            currentPage: {
              type: 'Numberish',
              default: 1,
              description:
                'Номер текущей страницы для отображения при пагинации таблицы. Начинается с 1 и вверх',
            },
            filter: {
              type: 'string',
              default: undefined,
              description:
                'Критерии фильтрации. Внутренняя фильтрация поддерживает только строковые или критерии RegExpr (RegExp ещё не реализован)',
            },
            filterFunction: {
              type: '(item: Readonly<Items>, filter: string | undefined) => boolean',
              default: undefined,
              description:
                'Функция, вызываемая во время фильтрации элементов, получает текущий элемент, который фильтруется. См. документацию для деталей.',
            },
            filterable: {
              type: 'string[]',
              default: undefined,
              description: 'Массив полей для включения при фильтрации.',
            },
            emptyFilteredText: {
              type: 'string',
              default: 'There are no records matching your request',
              description:
                'Текст для отображения, когда после фильтрации в массиве `items` не осталось элементов',
            },
            emptyText: {
              type: 'string',
              default: 'There are no records to show',
              description: 'Текст для отображения, когда в массиве `items` не осталось элементов',
            },
            showEmpty: {
              type: 'boolean',
              default: false,
              description: 'Показывать пустой текст, когда в массиве `items` не осталось элементов',
            },
            multisort: {
              type: 'boolean',
              default: false,
            },
            mustSort: {
              type: 'boolean | string[]',
              default: false,
            },
            noLocalSorting: {
              type: 'boolean',
              default: false,
            },
            noProvider: {
              type: 'NoProviderTypes[]',
              default: undefined,
              description:
                'Альтернативный способ установки функциональности поставщика, эквивалентный использованию no-provider-filtering, no-provider-paging и no-provider-sorting',
            },
            noProviderFiltering: {
              type: 'boolean',
              default: false,
              description:
                'Когда установлено, используется внутренняя фильтрация для фильтрации данных. В противном случае ожидается, что поставщик выполняет фильтрацию',
            },
            noProviderPaging: {
              type: 'boolean',
              default: false,
              description:
                'Когда установлено, используется внутренняя пагинация для пагинации данных. В противном случае ожидается, что поставщик выполняет пагинацию',
            },
            noProviderSorting: {
              type: 'boolean',
              default: false,
              description:
                'Когда установлено, используется внутренняя сортировка для сортировки данных. В противном случае ожидается, что поставщик выполняет сортировку',
            },
            noSelectOnClick: {
              type: 'boolean',
              default: false,
              description: 'Не выбирать строку при клике',
            },
            noSortableIcon: {
              type: 'boolean',
              default: false,
            },
            perPage: {
              type: 'Numberish',
              default: Number.POSITIVE_INFINITY,
            },
            provider: {
              type: 'BTableProvider',
              default: undefined,
            },
            selectable: {
              type: 'boolean',
              default: false,
              description: 'Когда установлено, размещает строки таблицы в режиме выбора',
            },
            selectedItems: {
              type: 'TableItem[]',
            },
            selectHead: {
              type: 'boolean | string',
              default: true,
            },
            selectionVariant: {
              type: 'ColorVariant | null',
              default: 'primary',
              description:
                "Bootstrap цветовую тему для установки выбранных строк. Используйте любой из стандартных цветов Bootstrap тем, или специальную табличную строку variant 'active' (по умолчанию). Установите пустую строку, чтобы не использовать variant",
            },
            selectMode: {
              type: "'multi' | 'single' | 'range'",
              default: 'multi',
              description:
                "Режим выбора для таблицы, когда 'selectable' установлено. Возможные значения: 'single', 'multi' или 'range'",
            },
            sortBy: {
              type: 'BTableSortBy[]',
              default: undefined,
              description: 'Модель, представляющая текущее состояние сортировки',
            },
            stickySelect: {
              type: 'boolean',
              default: false,
            },
          } satisfies Record<
            Exclude<
              keyof BvnComponentProps['BTable'],
              keyof BvnComponentProps['BTableSimple'] | keyof BvnComponentProps['BTableLite']
            >,
            PropertyReference
          >,
          'BTableLite Props': BTableLiteProps,
          'BTableSimple Props': BTableSimpleProps,
        },
        emits: [
          {
            event: 'changed',
            description: 'Вызывается при изменении отображаемых элементов',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Массив элементов, отображаемых в таблице',
              },
            ],
          },
          {
            event: 'filtered',
            description: 'Вызывается при изменении количества элементов после локальной фильтрации',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Массив элементов после фильтрации (до локальной пагинации)',
              },
            ],
          },
          {
            event: 'row-selected',
            description: 'Вызывается при выборе строки или строк',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Массив элементов строк, которые выбраны',
              },
            ],
          },
          {
            event: 'row-unselected',
            description: 'Вызывается при снятии выделения с строки или строк',
            args: [
              {
                arg: 'value',
                type: 'Items[]',
                description: 'Массив элементов строк, которые сняты с выделения',
              },
            ],
          },
          {
            event: 'update:sortBy',
            description:
              'Вызывается при изменении модели `sortBy` и представляет текущее состояние сортировки',
            args: [
              {
                arg: 'value',
                type: 'BTableSortBy[] | undefined',
                description: 'Новая модель значения sortBy',
              },
            ],
          },
          {
            event: 'sorted',
            description:
              'Обновляется при нажатии на заголовок сортируемого столбца и представляет столбец, по которому кликнули, и состояние сортировки (`asc`, `desc`, или undefined)',
            args: [
              {
                arg: 'value',
                description: '',
                type: 'BTableSortBy',
              },
            ],
          },
          ...tableLiteEmits,
        ],
        slots: [
          ...tableLiteSlots,
          {
            name: 'empty',
            description:
              'Содержимое, отображаемое при отсутствии элементов в массиве items. Может быть scoped',
            scope: [
              {
                prop: 'emptyFilteredText',
                type: 'string',
                description: 'Значение свойства empty-filtered-text',
              },
              {
                prop: 'emptyText',
                type: 'string',
                description: 'Значение свойства empty-text',
              },
              {
                prop: 'fields',
                type: 'TableField<Items>[]',
                description:
                  'Массив нормализованных определений столбцов (в формате массива объектов)',
              },
              {
                prop: 'items',
                type: 'Items[] | null',
                description: 'Массив элементов',
              },
            ],
          },
          {
            name: 'empty-filtered',
            description:
              'Содержимое, отображаемое при отсутствии элементов в отфильтрованном массиве items. Может быть scoped',
            scope: [
              {
                prop: 'emptyFilteredText',
                type: 'string',
                description: 'Значение свойства empty-filtered-text',
              },
              {
                prop: 'emptyText',
                type: 'string',
                description: 'Значение свойства empty-text',
              },
              {
                prop: 'fields',
                type: 'TableField<Items>[]',
                description:
                  'Массив нормализованных определений столбцов (в формате массива объектов)',
              },
              {
                prop: 'items',
                type: 'Items[]',
                description: 'Массив элементов',
              },
            ],
          },
          {
            name: 'table-busy',
            description:
              'Необязательный слот для сообщения о загрузке, когда таблица в состоянии busy',
          },
        ],
      },
      {
        component: 'BTableLite',
        sourcePath: '/BTable/BTableLite.vue',
        props: {
          '': BTableLiteProps,
          'BTableSimple Props': BTableSimpleProps,
        },
        emits: tableLiteEmits,
        slots: tableLiteSlots,
      },
      {
        component: 'BTableSimple',
        sourcePath: '/BTable/BTableSimple.vue',
        props: {
          '': BTableSimpleProps,
        },
        slots: [
          {
            name: 'default',
            description: 'Содержимое для таблицы',
          },
        ],
      },
      {
        component: 'BTbody',
        styleSpec: {kind: StyleKind.Tag, value: 'tbody'},
        sourcePath: '/BTable/BTbody.vue',
        props: {
          '': {
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTbody'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Содержимое для tbody',
          },
        ],
      },
      {
        component: 'BTd',
        styleSpec: {kind: StyleKind.Tag, value: 'td'},
        sourcePath: '/BTable/BTd.vue',
        props: {
          '': {
            colspan: {
              type: 'Numberish',
              default: undefined,
              description: 'Количество столбцов, которые занимает эта ячейка',
            },
            rowspan: {
              type: 'Numberish',
              default: undefined,
              description: 'Количество строк, которые занимает эта ячейка',
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
              description:
                "Заголовок для ячейки при режиме стека. Применимо только к ячейкам в элементе 'tbody'",
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
              description:
                'Если это будет фиксированный столбец. Должен быть установлен на всех ячейках этого столбца. Таблица должна быть в режиме sticky-header или responsive для работы',
            },
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTd'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Содержимое для td',
          },
        ],
      },
      {
        component: 'BTfoot',
        styleSpec: {kind: StyleKind.Tag, value: 'tfoot'},
        sourcePath: '/BTable/BTfoot.vue',
        props: {
          '': {
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTfoot'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Содержимое для tfoot',
          },
        ],
      },
      {
        component: 'BTh',
        styleSpec: {kind: StyleKind.Tag, value: 'th'},
        sourcePath: '/BTable/BTh.vue',
        props: {
          '': {
            colspan: {
              type: 'Numberish',
              default: undefined,
            },
            rowspan: {
              type: 'Numberish',
              default: undefined,
            },
            stackedHeading: {
              type: 'string',
              default: undefined,
              description:
                "Заголовок для ячейки при режиме стека. Применимо только к ячейкам в элементе 'tbody'",
            },
            stickyColumn: {
              type: 'boolean',
              default: false,
              description:
                'Если это будет фиксированный столбец. Должен быть установлен на всех ячейках этого столбца. table должна быть в режиме sticky-header или responsive для работы',
            },
            scope: {
              type: 'TableThScope',
              default: undefined,
              description:
                'Область действия заголовочной ячейки. Может быть одним из: col, row, colgroup, rowgroup',
            },
            ...pick(buildCommonProps(), ['variant']),
          } satisfies Record<keyof BvnComponentProps['BTh'], PropertyReference>,
        },
        slots: [
          {
            name: 'default',
            description: 'Содержимое для th',
          },
        ],
      },
      {
        component: 'BThead',
        styleSpec: {kind: StyleKind.Tag, value: 'thead'},
        sourcePath: '/BTable/BThead.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BThead'], PropertyReference>,
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
      {
        component: 'BTr',
        styleSpec: {kind: StyleKind.Tag, value: 'tr'},
        sourcePath: '/BTable/BTr.vue',
        props: {
          '': {
            variant: {
              type: 'ColorVariant',
              default: null,
            },
          } satisfies Record<keyof BvnComponentProps['BTr'], PropertyReference>,
        },
        emits: [],
        slots: [
          {
            description: '',
            name: 'default',
            scope: [],
          },
        ],
      },
    ]
  },
}
