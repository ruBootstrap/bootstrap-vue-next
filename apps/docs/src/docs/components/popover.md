# Popover

<PageHeader>

Функция Popover, которая обеспечивает поведение, похожее на всплывающую подсказку, может быть легко применена к любому
взаимодействующему элементу через компонент `<BPopover>` или директиву [`v-b-popover`](/docs/directives/b-popover).
Popovers также могут быть созданы и программно управляются через `usePopoverController`

</PageHeader>

<<< DEMO ./demo/PopoverOverview.vue#template{vue-html}

## Обзор

Что нужно знать при использовании компонента Popover:

- Popovers зависят от сторонней библиотеки [floating-ui](https://floating-ui.com/docs) для позиционирования.
- Используйте `teleportTo` и `teleportDisabled`, чтобы контролировать, где в DOM рендерится popover. См. [документацию Vue.js](https://vuejs.org/guide/built-ins/teleport.html) для деталей. При использовании Nuxt, `teleportTo` по умолчанию равен `#teleport`, установите `teleportDisabled` для отключения этого поведения. Для не-nuxt окружений, `teleportTo` по умолчанию равен `undefined`.
- Попытка запуска popovers на скрытых элементах не будет работать.
- Popovers для элементов `disabled` должны запускаться на оберточном элементе.
- Когда попытки запускаются из гиперссылок, которые занимают несколько строк, popovers будут центрироваться. Установите пропс `inline`, чтобы улучшить позиционирование, см. [документацию Floating UI](https://floating-ui.com/docs/inline) для деталей.

## Цель

Цель - это _триггер_ элемент (или компонент), который запустит popover. Цель указывается через слот `target` или пропс, и может быть любой из следующих:

Пропс `target` может быть любым из следующих:

- Строка, идентифицирующая ID триггерного элемента (или ID корневого элемента компонента)
- Строка с querySelector. (например, '#toolbar > div:first-child')
- Ссылка (ref) на `HTMLElement` или `SVGElement` через [Шаблонную ссылку](https://vuejs.org/guide/essentials/template-refs.html)
- Ссылка (ref) на компонент, который имеет либо `HTMLElement`, либо `SVGElement` в качестве своего корневого элемента
  через [Шаблонную ссылку](https://vuejs.org/guide/essentials/template-refs.html)

:::info ПРИМЕЧАНИЕ

`HTMLElement` относится к стандартным HTML элементам, таким как `<div>`, `<button>`, и т.д., а `SVGElement`
относится к `<svg>` или поддерживаемым дочерним элементам SVG.

:::

## Позиционирование

Доступно 12 статических опций для пропса `placement`: `top`, `top-left`, `top-right`,
`bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` из
[@floating-ui/vue](https://floating-ui.com/) вместе с тремя [автоматическим позиционированием](https://floating-ui.com/docs/autoplacement)
опциями `auto`, `auto-start` и `auto-end`.

Позиционирование относительно триггерного элемента.

<<< DEMO ./demo/PopoverPositioning.vue#template{vue-html}

## Триггеры

По умолчанию, popovers показываются событиями `pointerenter` и `focus` и закрываются событиями `pointerleave` и `blur`
на элементе `target` по умолчанию. Чтобы переопределить это поведение и сделать popover показываться и скрываться
на событиях `click`, установите пропс `click` в `true`.

<<< DEMO ./demo/PopoverTriggers.vue#template{vue-html}

Чтобы более точно контролировать видимость popover, вы можете использовать [useToggle](/docs/composables/useToggle) или
[usePopoverController](/docs/composables/usePopoverController). В качестве альтернативы, вы можете установить пропс `manual`
и использовать [`v-model`](#programmatic-control-via-v-model) или
[экспортированные функции](#exposed-functions) для управления видимостью.

## Содержимое

Заголовок и содержимое popover можно установить через пропсы `title` и `body` или слоты `title`
и `default`.

<<< DEMO ./demo/PopoverContent.vue#template{vue-html}

## Пользовательские классы и варианты

К пользовательским классам можно применить заголовок popover'а `<div>` через пропс `title-class`, а тело popover'а `<div>` через пропс `body-class`:

<<< FRAGMENT ./demo/PopoverCustomClass.vue#template{vue-html}

Аналогично, используйте [Bootstrap's Color and background](https://getbootstrap.su/docs/5.3/helpers/color-background/)
утилиты для изменения варианта popover'а.

<<< DEMO ./demo/PopoverVariant.vue#template{vue-html}

`body-class` и `title-class` являются реактивными и могут изменяться, пока popover открыт.

См. [директиву popover](/docs/directives/popover) для применения пользовательских
классов к директивной версии.

Для более точного контроля используйте переменные CSS Bootstrap 5 для применения стилей напрямую.

<<< DEMO ./demo/PopoverStyles.vue#template{vue-html}

## Программное управление через v-model

Вы можете вручную управлять видимостью popover'а через v-model. Установка его в `true` покажет popover,
а установка в `false` скроет его.

<<< DEMO ./demo/PopoverModel.vue

Чтобы сделать popover показанным при первоначальном рендеринге, просто добавьте пропс `show` к `<BPopover>`:

<<< DEMO ./demo/PopoverStartOpen.vue#template{vue-html}

Popovers также могут управляться через [Экспортированные функции](#exposed-functions).

## Закрытие при скрытии

Пропс `close-on-hide` может использоваться для автоматического закрытия
popover'а, когда цель выходит за пределы видимости. Пропсы `boundary` и `boundary-padding`
могут использоваться для контроля того, что считается отсечением.

<<< DEMO ./demo/PopoverCloseOnHide.vue

## Экспортированные функции

`BPopover` экспортирует несколько функций для управления состоянием компонента.
Эти функции доступны через [шаблонную ссылку](https://vuejs.org/guide/essentials/template-refs.html#template-refs)

<<< DEMO ./demo/PopoverExposed.vue

<ComponentReference :data="data" />

<script lang="ts">
import {data} from '../../data/components/popover.data'

export default {
  setup() {
    return {data}
  }
}
</script>
