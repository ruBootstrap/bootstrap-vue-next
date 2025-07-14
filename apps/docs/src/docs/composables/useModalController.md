<ComposableHeader path="useModalController/index.ts" title="useModalController" />

<div class="lead mb-5">

`useModalController` позволяет скрывать модальные окна в любом месте приложения, а также создавать модальные окна на лету.

</div>

<UsePluginAlert />

## BModalOrchestrator

Вы должны инициализировать компонент `BModalOrchestrator` ровно один раз (несколько инициализаций приведут к отображению нескольких модальных окон). Обычно его лучше всего размещать в корне приложения.

<HighlightCard>
<template #html>

```vue-html
<BModalOrchestrator />
```

</template>
</HighlightCard>

Единственные пропсы, к которым он обращается — это `teleportDisabled` и `teleportTo` для изменения места размещения модальных окон.

Кроме того, компонент содержит несколько методов, доступных через `template ref`. Эти методы соответствуют функциям из `useToastController`, описанным ниже:

- create
- hide
- hideAll
- modals

## Создание модальных окон

Показ модального окна осуществляется с помощью метода `create`

<HighlightCard>
  <BButton @click="showExample">Нажми меня</BButton>

<template #html>

```vue
<template>
  <BButton @click="showExample">Нажми меня</BButton>
</template>

<script setup lang="ts">
const {create} = useModalController()

const showExample = async () => {
  const value = await create({title: 'Привет, мир!'})

  create({
    body: `Промис вернул объект {ok: ${value.ok}, trigger: ${value.trigger}}`,
    variant: 'info',
  })
}
</script>
```

  </template>
</HighlightCard>

### Реактивность внутри `create`

Свойство props метода `create` может принимать `MaybeRef`, что позволяет делать свойства реактивными.

<HighlightCard>
  <BButton @click="showReactiveExample">Нажми меня</BButton>

<template #html>

```vue
<template>
  <BButton @click="showReactiveExample">Нажми меня</BButton>
</template>

<script setup lang="ts">
const {create} = useModalController()

const title = ref('Привет')
onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Привет' ? 'Мир' : 'Привет'
  }, 2500)
})

const showReactiveExample = () => {
  create({
    title: title,
  })
}
</script>
```

  </template>
</HighlightCard>

### Расширенное создание

Использование props подходит для большинства случаев, но иногда требуется больший контроль. Например, вы не можете добавить HTML в любое значение слота. Для этого используется свойство `component`. С его помощью можно передать компонент для рендера — импортированный SFC или inline render-функцию.

Также можно использовать слоты компонента для вывода нужного содержимого. Это делается через свойство `slots`, которое представляет собой объект, где ключ — имя слота, а значение — render-функция или компонент. Render-функция получает объект `scope` с данными слота.

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Нажми меня</BButton>

<template #html>

```vue
<template>
  <BButton @click="showMeAdvancedExample">Нажми меня</BButton>
</template>

<script setup lang="ts">
const {create} = useModalController()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})
const showMeAdvancedExample = () => {
  create({
    slots: {
      default: (scope) =>
        h('div', null, {default: () => `кастомный ${firstRef.value.body} - ${scope.visible}`}),
    },
  })

  // Пример псевдокода: можно импортировать компонент и использовать его
  // const importedComponent = () => {
  //   create({
  //     component: (await import('./TestModal.vue')).default,
  //   })
  // }
}
</script>
```

  </template>
</HighlightCard>

### Возвращаемое значение

Метод `create` возвращает промис, который резолвится после скрытия модального окна в объект `BvTriggableEvent`.
С помощью опции 'resolveOnHide' во втором аргументе метода `create` промис будет резолвиться в момент скрытия модального окна, а не после его полного исчезновения.

```js
const value = await create({title: 'Привет, мир!'}, {resolveOnHide: true})
```

Этот объект содержит следующие свойства:

- `ok: boolean`

  Нажатие кнопки `ok` вернёт `true`, `cancel` — `false`, а любое другое действие закрытия — `null` (например, клик по фону или другое пользовательское действие. Точнее, когда функция `hide` не передаёт параметр trigger со значением `ok` или `cancel`).

- `trigger: string | null`

  Это триггер, который закрыл модальное окно. Полезно для определения, какое действие вызвало закрытие.

Промис также содержит функции для управления модальным окном:

- `show: () => void`

  Показывает модальное окно.

- `hide: (trigger?: string) => void`

  Скрывает модальное окно. Если передан trigger, он попадёт в свойство `trigger` возвращаемого объекта.

- `toggle: () => void`

  Переключает видимость модального окна.

- `set: (props: Partial<ModalOrchestratorParam>) => void`

  Устанавливает новые props для модального окна. Полезно для обновления окна после создания.

- `destroy: () => Promise<void>`

  Уничтожает модальное окно и очищает связанные ресурсы.

### Жизненный цикл

По умолчанию модальное окно уничтожается после закрытия. Если нужно сохранить его, используйте опцию 'keep' во втором аргументе метода `create`.
Модальное окно уничтожается при выходе из текущей области видимости. Также его можно уничтожить вручную, вызвав метод `destroy`.

```js
const modal = create({title: 'Привет, мир!'}, {keep: true})
modal.show()
// что-то делаем
modal.destroy()
```

Также поддерживается typescript-фича `await using` для автоматического уничтожения модального окна при выходе из области видимости.

```js
await using modal = create({title: 'Привет, мир!'})
```

## Глобальное скрытие модальных окон

Помимо создания модальных окон в глобальном контексте, вы также можете скрывать модальные окна из любого места приложения. Для этой функции не требуется наличие `BModalOrchestrator`.

<HighlightCard>
  <BButton @click="nestedModal1 = !nestedModal1">Открыть первое окно</BButton>
  <BModal v-model="nestedModal1" title="Первое окно" ok-only>
    <p class="my-2">Первое окно</p>
    <BButtonGroup>
      <BButton @click="nestedModal2 = !nestedModal2">Открыть второе окно</BButton>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal2" title="Второе окно" ok-only>
    <p class="my-2">Второе окно</p>
    <BButtonGroup>
      <BButton @click="nestedModal3 = !nestedModal3" size="sm">Открыть третье окно</BButton>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal3" title="Третье окно" ok-only>
    <p class="my-1">Третье окно</p>
    <BButtonGroup>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="nestedModal1 = !nestedModal1">Открыть первое окно</BButton>
  <BModal v-model="nestedModal1" title="Первое окно" ok-only>
    <p class="my-2">Первое окно</p>
    <BButtonGroup>
      <BButton @click="nestedModal2 = !nestedModal2">Открыть второе окно</BButton>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal2" title="Второе окно" ok-only>
    <p class="my-2">Второе окно</p>
    <BButtonGroup>
      <BButton @click="nestedModal3 = !nestedModal3" size="sm">Открыть третье окно</BButton>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
  <BModal v-model="nestedModal3" title="Третье окно" ok-only>
    <p class="my-1">Третье окно</p>
    <BButtonGroup>
      <BButton @click="hide">Скрыть последнее</BButton>
      <BButton @click="hideAll">Скрыть все</BButton>
    </BButtonGroup>
  </BModal>
</template>

<script setup lang="ts">
const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll} = useModalController()
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useModalController, BButtonGroup, useModal} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import UsePluginAlert from '../../components/UsePluginAlert.vue'
import {ref, computed, h, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)

const {hide, hideAll, create} = useModalController()
const modal = useModal()

const title = ref('Hello')

onMounted(() => {
  setInterval(() => {
    title.value = title.value === 'Hello' ? 'World' : 'Hello'
  }, 1000)
})

const showExample = async () => {
  const value = await create({ body: 'Hello World!' })

  create({ body: `Promise resolved to object with {ok: ${value.ok}, trigger: ${value.trigger}}`, variant: 'info' })
}

const showReactiveExample = () => {
  create({
      title: title,
  })
}

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMeAdvancedExample = () => {
  create({
    slots: {
      default: (scope) => h('div', null, {default: () => `custom ${firstRef.value.body} - ${scope.visible}`}),
    },
  })
}
</script>
