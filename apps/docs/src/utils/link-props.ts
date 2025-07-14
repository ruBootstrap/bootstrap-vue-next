import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {PropertyReference} from '../types'

export const linkTo = '/docs/components/link'

export const linkProps = {
  active: {
    type: 'boolean',
    default: undefined,
    description:
      'Если установлено в `true`, переводит компонент в активное состояние с активным стилем',
  },
  activeClass: {
    type: 'string',
    default: 'router-link-active',
    description: 'Настраивает CSS-класс, применяемый к активной ссылке.',
  },
  disabled: {
    type: 'boolean',
    default: false,
    description:
      'Если установлено в `true`, отключает функциональность ссылки. Подробнее см. выше и ограничения',
  },
  exactActiveClass: {
    type: 'string',
    default: 'router-link-exact-active',
    description: 'Настраивает CSS-класс, применяемый к ссылке при точном совпадении маршрута.',
  },
  href: {
    type: 'string',
    default: undefined,
    description: 'URL-адрес для обычных ссылок <a>',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'Если установлено в `true`, добавляет иконку в начале или конце текста ссылки',
  },
  noPrefetch: {
    type: 'boolean',
    default: false,
    description:
      'Для повышения отзывчивости Nuxt.js-приложений, когда ссылка появляется во viewport, Nuxt.js автоматически предварительно загружает разделённую по коду страницу. Установка `no-prefetch` отключает эту функцию для конкретной ссылки',
    notYetImplemented: true,
  },
  opacity: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
    description: 'Изменяет альфа-прозрачность цвета ссылки (`rgba()`)',
  },
  opacityHover: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
    description: 'Изменяет альфа-прозрачность цвета ссылки (`rgba()`) при наведении',
  },
  prefetch: {
    type: 'boolean',
    default: undefined,
    description:
      'Для повышения отзывчивости Nuxt.js-приложений, когда ссылка появляется во viewport, Nuxt.js автоматически предварительно загружает разделённую по коду страницу. Установка `prefetch` в `true` или `false` переопределяет значение по умолчанию из `router.prefetchLinks`',
  },
  prefetchedClass: {
    type: 'string',
    default: undefined,
    description: 'Ещё не реализовано: класс для ссылок, которые были предварительно загружены.',
  },
  prefetchOn: {
    type: 'Partial<{visibility: boolean, interaction: boolean}>',
    default: undefined,
    description:
      "Позволяет настраивать, когда выполнять prefetch ссылок. Возможные опции: 'interaction' и 'visibility' (по умолчанию)",
  },
  noRel: {},
  rel: {
    type: 'string',
    default: undefined,
    description: "Устанавливает атрибут 'rel' на рендеримом элементе ссылки",
  },
  replace: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, при клике будет вызван router.replace() вместо router.push()',
  },
  routerComponentName: {
    type: 'string',
    default: 'router-link',
    description:
      'BootstrapVue автоматически определяет между `<router-link>` и `<nuxt-link>`. Установите это свойство, чтобы явно указать имя компонента роутера.',
  },
  routerTag: {
    type: 'string',
    default: 'a',
    description: 'Устанавливает тип тега для ссылки',
  },
  stretched: {
    type: 'boolean',
    default: false,
    description:
      'Если установлено в `true`, делает весь `containing block` ссылки кликабельным с помощью псевдоэлемента `::after`',
  },
  target: {
    type: 'LinkTarget',
    default: undefined,
    description: "Устанавливает атрибут 'target' на рендеримом элементе ссылки",
  },
  to: {
    type: 'RouteLocationRaw',
    default: undefined,
    description:
      'Указывает целевой маршрут для ссылки. При клике значение будет передано во внутренний `router.push()`',
  },
  underlineOffset: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: undefined,
    description: 'Изменяет расстояние подчеркивания от нижнего края текста ссылки',
  },
  underlineOffsetHover: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: undefined,
    description: 'Изменяет расстояние подчеркивания от нижнего края текста ссылки при наведении',
  },
  underlineOpacity: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
    description: 'Устанавливает прозрачность подчеркивания ссылки',
  },
  underlineOpacityHover: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: undefined,
    description: 'Устанавливает прозрачность подчеркивания ссылки при наведении',
  },
  underlineVariant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Устанавливает цветовую тему для подчеркивания ссылки независимо от цвета текста',
  },
  variant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Устанавливает цветовую тему для ссылки',
  },
  // TODO: remove the hard-coded NYI props below when they are implemented
} as const satisfies Record<
  keyof BvnComponentProps['BLink'] | 'noPrefetch' | 'prefetch' | 'prefetchedClass',
  PropertyReference
>
