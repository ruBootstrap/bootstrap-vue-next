<ComposableHeader path="usePopoverController/index.ts" title="usePopoverController" />

<div class="lead mb-5">

`usePopoverController` позволяет динамически создавать и управлять popover и tooltip.

</div>

<UsePluginAlert />

## BPopoverOrchestrator

Вы должны инициализировать компонент `BPopoverOrchestrator` ровно один раз (несколько экземпляров приведут к дублированию popover). Обычно его лучше всего размещать в корне приложения.

<HighlightCard>
<template #html>

```vue-html
<BPopoverOrchestrator />
```

</template>
</HighlightCard>

Единственные пропсы, к которым он обращается — это `teleportDisabled` и `teleportTo` для изменения места размещения popover.

Кроме того, он предоставляет несколько методов через `template ref`, которые соответствуют функциям композабла `usePopoverController`:

- `popover`
- `tooltip`
- `popovers`

## Создание popover

Popover и tooltip можно создавать с помощью методов `popover` или `tooltip`.

<HighlightCard>
  <BButton ref="popoverButton">Наведи курсор</BButton>

<template #html>

```vue
<template>
  <BButton ref="popoverButton">Наведи курсор</BButton>
</template>

<script setup lang="ts">
const {popover} = usePopoverController()
const popoverButton = useTemplateRef('popoverButton')

const pop = popover({title: 'Привет, мир!', body: 'Это popover.', target: popoverButton})
</script>
```

  </template>
</HighlightCard>

### Реактивность внутри `popover` и `tooltip`

Методы принимают реактивные свойства через `MaybeRef`, что позволяет динамически обновлять содержимое popover.

<HighlightCard>
  <BButton ref="reactiveExample">Наведи курсор</BButton>

<template #html>

```vue
<template>
  <BButton ref="reactiveExample">Кликни меня</BButton>
</template>

<script setup lang="ts">
const {tooltip} = usePopoverController()

const title = ref('Привет')
onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Привет' ? 'Мир' : 'Привет'
  }, 2500)
})
tooltip({
  title: title,
})
</script>
```

  </template>
</HighlightCard>

### Расширенное создание

Для большего контроля можно использовать свойство `component` для рендера пользовательского компонента или свойство `slots` для динамического определения содержимого слотов.

<HighlightCard>
  <BButton ref="advancedExample">Кликни меня</BButton>

<template #html>

```vue
<template>
  <BButton ref="advancedExample">Кликни меня</BButton>
</template>

<script setup lang="ts">
const {popover} = usePopoverController()

pop({
  slots: {
    default: (scope) =>
      h('div', null, {default: () => `Кастомный контент — Видимость: ${scope.visible}`}),
  },
})
</script>
```

  </template>
</HighlightCard>

### Возвращаемое значение

Методы `popover` и `tooltip` возвращают промис, который резолвится в объект `BvTriggerableEvent` при скрытии popover. Промис содержит методы для управления popover:

- `show: () => void` — Показать popover.
- `hide: (trigger?: string) => void` — Скрыть popover, опционально передав trigger.
- `toggle: () => void` — Переключить видимость popover.
- `set: (props: Partial<PopoverOrchestratorParam>) => void` — Обновить свойства popover.
- `destroy: () => Promise<void>` — Уничтожить popover и очистить ресурсы.

### Жизненный цикл

По умолчанию popover уничтожается при выходе из текущей области видимости. Можно вручную уничтожить popover с помощью метода `destroy`.

```js
const popover = popover({title: 'Привет, мир!'})
popover.show()
// что-то делаем
popover.destroy()
```

Либо используйте `await using` в TypeScript для автоматического уничтожения popover при выходе из области видимости.

```js
await using popover = popover({title: 'Привет, мир!'})
```

<script setup lang="ts">
import { BButton, BPopover, usePopoverController, BButtonGroup } from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import { ref, h, onMounted } from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const { popover, tooltip } = usePopoverController()


const title = ref('Привет')
const popoverButton = ref()
const reactiveExample = ref()
const advancedExample = ref()

onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Привет' ? 'мир' : 'Привет'
  }, 1000)
})

const pop = popover({ title: 'Привет мир!', body: 'Это popover.', target: popoverButton })
const pop2 = tooltip({ title: title, target: reactiveExample })
const pop3 = popover({
  slots: {
    default: (scope) =>
      h('div', null, { default: () => `Кастомный контент - Видимость: ${scope.visible}` }),
  },
  target: advancedExample,
  title: 'Продвинутый Popover',
  body: 'Это пример продвинутого popover.',
})

</script>
