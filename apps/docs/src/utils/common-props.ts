import {type PropertyReference} from '../types'

export const commonProps = () =>
  ({
    active: {
      type: 'boolean',
      default: false,
      description:
        'Если установлено в `true`, переводит компонент в активное состояние с активным стилем',
    },
    activeClass: {
      type: 'ClassValue',
      default: 'active',
      description:
        "Настраивает CSS-класс, применяемый к активному элементу. Обычно рекомендуется установить в 'active'",
    },
    alt: {
      type: 'string',
      default: 'undefined',
      description: 'Значение для атрибута `alt`',
    },
    ariaControls: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'Если этот компонент управляет другим компонентом или элементом, укажите здесь ID управляемого элемента',
    },
    ariaDescribedby: {
      type: 'string',
      default: undefined,
      description:
        'ID элемента, который содержит описание для этого компонента. Используется как значение атрибута `aria-describedby`',
    },
    ariaInvalid: {
      type: 'AriaInvalid',
      default: undefined,
      description:
        'Устанавливает значение атрибута `aria-invalid` на обёрточном элементе. Если не указано, атрибут контролируется через проп `state`',
    },
    autoClose: {
      type: "boolean | 'inside' | 'outside'",
      default: true,
      description: 'Управляет автоматическим закрытием компонента при клике. Подробнее см. выше.',
    },
    autocomplete: {
      type: 'string',
      default: 'false',
      description: "Устанавливает значение атрибута 'autocomplete' на элементе формы",
    },
    ariaLabel: {
      type: 'string',
      default: undefined,
      description: 'Устанавливает значение атрибута `aria-label` на рендеримом элементе',
    },
    ariaLive: {
      type: 'string',
      default: undefined,
      description:
        "Если элемент является областью `aria-live` (для экранных читалок), укажите 'polite' или 'assertive'",
    },
    ariaLabelledby: {
      type: 'string',
      default: undefined,
      description:
        'ID элемента, который содержит метку для этого компонента. Используется как значение атрибута `aria-labelledby`',
    },
    autofocus: {
      type: 'boolean',
      default: false,
      description:
        'Если установлено в `true`, пытается автоматически сфокусировать элемент при монтировании или повторной активации (keep-alive). Не устанавливает атрибут `autofocus` на контроле',
    },
    bgVariant: {
      type: 'ColorVariant | null',
      default: null,
      description: 'Применяет одну из цветовых тем Bootstrap к фону компонента',
    },
    bodyBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к фону body',
    },
    bodyBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к границе body',
    },
    bodyClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS-класс(ы), применяемые к body',
    },
    bodyTag: {
      type: 'string',
      default: 'div',
      description: 'HTML-тег, который будет использоваться вместо тега по умолчанию для body',
    },
    bodyTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к тексту body',
    },
    bodyVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к body',
    },
    borderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к границе',
    },
    debounce: {
      type: 'Numberish',
      default: '0',
      description:
        "Если указано число миллисекунд больше нуля, ввод пользователя будет дебаунситься. Не работает, если установлен проп 'lazy'",
    },
    debounceMaxWait: {
      type: 'Numberish',
      default: 'NaN',
      description: 'Максимальное время в миллисекундах, разрешённое для задержки перед вызовом',
    },
    disabled: {
      type: 'boolean',
      default: false,
      description:
        'Если установлено в `true`, отключает функциональность компонента и переводит его в неактивное состояние',
    },
    disabledField: {
      type: 'string',
      default: 'disabled',
      description: 'Имя поля в массиве `options`, используемое для состояния disabled',
    },
    floating: {
      type: 'boolean',
      default: false,
      description:
        'Если установлено, рендерит форму с плавающей меткой. Работает только для форм, где непосредственными потомками являются label и один из поддерживаемых контролов. Подробнее см. выше.',
    },
    footer: {
      type: 'string',
      default: undefined,
      description: 'Текст для отображения в футере',
    },
    footerBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к фону футера',
    },
    footerBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к границе футера',
    },
    footerClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS-класс(ы), применяемые к футеру',
    },
    footerTag: {
      type: 'string',
      default: 'div',
      description: 'HTML-тег, который будет использоваться вместо тега по умолчанию для футера',
    },
    footerTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к тексту футера',
    },
    footerVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к футеру',
    },
    form: {
      type: 'string',
      default: undefined,
      description:
        'ID формы, к которой относится контрол. Устанавливает атрибут `form` на контроле',
    },
    formatter: {
      type: '(val: string, evt: Event) => string',
      default: 'undefined',
      description: 'Ссылка на функцию для форматирования ввода',
    },
    header: {
      type: 'string',
      default: undefined,
      description: 'Текст для отображения в заголовке',
    },
    headerBgVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к фону заголовка',
    },
    headerBorderVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к границе заголовка',
    },
    headerClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS-класс(ы), применяемые к заголовку',
    },
    headerTag: {
      type: 'string',
      default: 'div',
      description: 'HTML-тег, который будет использоваться вместо тега по умолчанию для заголовка',
    },
    headerTextVariant: {
      type: 'TextColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к тексту заголовка',
    },
    headerVariant: {
      type: 'ColorVariant | null',
      default: undefined,
      description: 'Применяет одну из цветовых тем Bootstrap к заголовку',
    },
    id: {
      type: 'string',
      default: undefined,
      description:
        'Используется для установки атрибута `id` на рендеримом элементе, а также как основа для генерации дополнительных id при необходимости',
    },
    lazyFormatter: {
      type: 'boolean',
      default: 'false',
      description:
        'Если установлено, форматирование ввода происходит при потере фокуса, а не при каждом нажатии клавиши (если задан formatter)',
    },
    linkClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'Класс(ы), применяемые к внутреннему элементу ссылки',
    },
    list: {
      type: 'string',
      default: 'undefined',
      description: 'ID связанного элемента datalist или компонента',
    },
    name: {
      type: 'string',
      default: undefined,
      description: 'Устанавливает значение атрибута `name` на контроле формы',
    },
    noBackdrop: {
      type: 'boolean',
      default: false,
      description: 'Отключает отображение подложки (backdrop)',
    },
    noEllipsis: {
      type: 'boolean',
      default: false,
      description: 'Не показывать кнопки с многоточием',
    },
    noGotoEndButtons: {
      type: 'boolean',
      default: false,
      description: 'Скрывает кнопки перехода к первой и последней странице',
    },
    noHeader: {
      type: 'boolean',
      default: false,
      description: 'Отключает отображение заголовка',
    },
    noHeaderClose: {
      type: 'boolean',
      default: false,
      description: 'Отключает отображение кнопки закрытия в заголовке',
    },
    noHoverPause: {
      type: 'boolean',
      default: false,
      description: 'Если true, отключает приостановку таймера при наведении',
    },
    noResumeOnHoverLeave: {
      type: 'boolean',
      default: false,
      description:
        'Если true, таймер не возобновляется при уходе мыши с элемента. Необходимо возобновить вручную',
    },
    novalidate: {
      type: 'boolean',
      default: false,
      description: 'Отключает встроенную HTML5-валидацию браузера для контролов в форме',
    },
    options: {
      type: 'readonly CheckboxOptionRaw[]',
      default: '() => []',
      description: 'Массив элементов для отображения в компоненте',
    },
    plain: {
      type: 'boolean',
      default: false,
      description: 'Отображать контрол формы в простом режиме, без пользовательских стилей',
    },
    placeholder: {
      type: 'string',
      default: "''",
      description: 'Устанавливает значение атрибута `placeholder` на контроле формы',
    },
    plaintext: {
      type: 'boolean',
      default: 'false',
      description:
        'Устанавливает контрол формы только для чтения и отображает его как обычный текст (без границ)',
    },
    required: {
      type: 'boolean',
      default: undefined,
      description: 'Добавляет атрибут `required` к контролу формы',
    },
    readonly: {
      type: 'boolean',
      default: 'false',
      description: 'Устанавливает атрибут `readonly` на контроле формы',
    },
    role: {
      type: 'string',
      default: undefined,
      description: 'Устанавливает ARIA-атрибут `role` в определённое значение',
    },
    rounded: {
      type: 'boolean | RadiusElement',
      default: 'false',
      description:
        'Определяет тип скругления для компонента или его потомков. Проп `square` имеет приоритет. Подробнее см. в документации',
    },
    roundedBottom: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description: 'Определяет тип скругления для нижних углов компонента или его потомков',
    },
    roundedEnd: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description: 'Определяет тип скругления для углов с конца компонента или его потомков',
    },
    roundedStart: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description: 'Определяет тип скругления для углов с начала компонента или его потомков',
    },
    roundedTop: {
      type: 'boolean | RadiusElement',
      default: undefined,
      description: 'Определяет тип скругления для верхних углов компонента или его потомков',
    },
    size: {
      type: 'Size',
      default: 'md',
      description:
        "Устанавливает размер внешнего вида компонента: 'sm', 'md' (по умолчанию) или 'lg'",
    },
    src: {
      type: 'string',
      default: undefined,
      description: 'URL для атрибута `src`',
    },
    state: {
      type: 'ValidationState',
      default: undefined,
      description:
        'Управляет отображением состояния валидации компонента. `true` — валиден, `false` — невалиден, `null` — без состояния',
    },
    subtitle: {
      type: 'string',
      default: undefined,
      description: 'Текст для отображения в подзаголовке',
    },
    subtitleTag: {
      type: 'string',
      default: 'h6',
      description:
        'HTML-тег, который будет использоваться вместо тега по умолчанию для подзаголовка',
    },
    subtitleTextVariant: {
      type: 'TextColorVariant | null',
      default: 'body-secondary',
      description: 'Применяет одну из цветовых тем Bootstrap к тексту подзаголовка',
    },
    tag: {
      type: 'string',
      default: 'div',
      description: 'HTML-тег, который будет использоваться вместо тега по умолчанию',
    },
    textField: {
      type: 'string',
      default: 'text',
      description: 'Имя поля в массиве `options`, используемое для текстовой метки',
    },
    textVariant: {
      type: 'TextColorVariant | null',
      default: null,
      description: 'Применяет одну из цветовых тем Bootstrap к тексту',
    },
    title: {
      type: 'string',
      default: undefined,
      description: 'Текст для отображения в заголовке',
    },
    titleClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS-класс(ы), применяемые к заголовку',
    },
    titleTag: {
      type: 'string',
      default: 'h4',
      description: 'HTML-тег, который будет использоваться вместо тега по умолчанию для заголовка',
    },
    tooltip: {
      type: 'boolean',
      default: false,
      description: 'Отображает текст обратной связи в виде простого tooltip',
    },
    validated: {
      type: 'boolean',
      default: false,
      description:
        "Если установлено, добавляет класс Bootstrap 'was-validated' на форму, активируя состояния валидации браузера",
    },
    valueField: {
      type: 'string',
      default: 'value',
      description: 'Имя поля в массиве `options`, используемое для значения',
    },
    variant: {
      type: 'ColorVariant | null',
      default: null,
      description:
        'Применяет одну из цветовых тем Bootstrap к компоненту. Если реализованы `bg-variant` и `text-variant`, они имеют приоритет',
    },
    wrapperAttrs: {
      type: 'Readonly<AttrsValue>',
      default: undefined,
      description: 'Атрибуты, применяемые к обёрточному элементу',
    },
    wrapperClass: {
      type: 'ClassValue',
      default: undefined,
      description: 'CSS-класс(ы), добавляемые к обёрточному элементу',
    },
    placement: {
      type: 'Placement',
      default: 'bottom-start',
      description: 'Положение плавающего элемента',
    },
  }) satisfies Record<string, PropertyReference>
