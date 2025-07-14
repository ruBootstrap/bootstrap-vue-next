<ComposableHeader path="useToastController/index.ts" title="useToastController" />

<div class="lead mb-5">

Часто возникает необходимость открыть `Toast` в глобальном контексте, без объявления компонента — например, чтобы показать ошибку после выброса исключения. `useToastController` используется для создания `Toast` по требованию. В приложении должен быть инициализирован компонент `BToastOrchestrator` (один раз). Следующая функциональность требует наличия этого компонента.

</div>

<UsePluginAlert />

## BToastOrchestrator

Вы должны инициализировать компонент `BToastOrchestrator` ровно один раз (несколько инициализаций приведут к отображению нескольких Toast). Обычно его лучше всего размещать в корне приложения.

<HighlightCard>

<template #html>

```vue-html
<BToastOrchestrator />
```

  </template>
</HighlightCard>

Единственные пропсы, к которым он обращается — это `teleportDisabled` и `teleportTo` для изменения места размещения Toast.

Кроме того, компонент содержит несколько методов, доступных через `template ref`. Эти методы соответствуют функциям из `useToastController`, описанным ниже:

- remove
- show
- toasts

## Показ Toast

Показ Toast осуществляется с помощью метода show

<HighlightCard>
  <BButton @click="create({ title: 'Привет', body: 'Мир'  })">Показать</BButton>
  <template #html>

```vue
<template>
  <BButton @click="create({title: 'Привет', body: 'Мир'})">Показать</BButton>
</template>

<script setup lang="ts">
const {create} = useToastController()
</script>
```

  </template>
</HighlightCard>

Метод `show` возвращает `promise`, который резолвится при закрытии Toast. Можно задать Toast уникальный id. Поскольку Toast могут перемещаться, возвращать индекс нецелесообразно — для метода `remove` нужен уникальный идентификатор.

### Опции show

Метод `show` принимает объект с полями `props` и `component`.

Свойство props соответствует в основном пропсам компонента `BToast`. В объекте props, помимо пропсов `BToast`, есть поле `position`, определяющее позицию Toast ([Container Position](/docs/types#containerposition)).

### Реактивность внутри show

Свойство props метода `show` может принимать `MaybeRefOrGetter`, что позволяет делать свойства реактивными.

<HighlightCard>
  <BButton @click="showReactiveExample">Показать</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Показать</BButton>
</template>

<script setup lang="ts">
const {create} = useToastController()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMe = () => {
  create(
    computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    }))
  )
}
</script>
```

  </template>
</HighlightCard>

### Расширенное использование

Использование props подходит для большинства случаев, но иногда требуется больший контроль. Например, вы можете добавить HTML в любой слот. Это может быть импортированный SFC или inline render-функция. Для реактивности используйте функцию-геттер.

<HighlightCard>
  <BButton @click="showMeAdvancedExample">Показать</BButton>
  <template #html>

```vue
<template>
  <BButton @click="showMe">Показать</BButton>
</template>

<script setup lang="ts">
import {BToast} from 'bootstrap-vue-next'

const {create} = useToastController()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showMe = () => {
  create({
    body: firstRef.value.body,
    slots: {default: () => h('div', null, {default: () => `кастом! ${firstRef.value.body}`})},
  })
  // Пример псевдокода: можно импортировать компонент и использовать его
  // const importedComponent () => {
  //   create({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // }
}
</script>
```

  </template>
</HighlightCard>

## Программное скрытие Toast

Скрыть Toast программно очень просто. `create` возвращает объект с функциями управления Toast, включая `destroy`.

<HighlightCard>
  <BButtonGroup>
    <BButton @click="showMe" variant="success">
      Показать Toast
    </BButton>
    <BButton @click="hideMe" variant="danger">
      Скрыть Toast
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup>
    <BButton @click="showMe" variant="success"> Показать Toast </BButton>
    <BButton @click="hideMe" variant="danger"> Скрыть Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {create} = useToastController()

let toast: undefined | ReturnType<typeof create>

const showMe = () => {
  if (toast !== undefined) return
  // `create` возвращает символ
  toast = create({
    title: 'Показ',
    value: true,
    variant: 'success',
    position: 'bottom-center',
  })
}

const hideMe = () => {
  if (toast === undefined) return
  toast.destroy()
}
</script>
```

  </template>

</HighlightCard>

## Использование промисов

Скрытие Toast с помощью промиса

<HighlightCard>
  <BButtonGroup>
    <BButton @click="promiseToast" variant="success">
      Показать Toast
    </BButton>
  </BButtonGroup>
  <template #html>

```vue
<template>
  <BButtonGroup>
    <BButton @click="promiseToast" variant="success"> Показать Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
const {create} = useToastController()
const promiseToast = () => {
  create(
    {
      variant: 'primary',
      position: 'middle-center',
      bodyClass: 'w-100',
      modelValue: true,
      slots: {
        default: ({hide}) => [
          h('h2', {class: 'text-center mb-3'}, 'Готовы?'),
          h('div', {class: 'd-flex justify-content-center gap-2'}, [
            h(BButton, {onClick: () => hide('ok'), size: 'lg'}, () => 'Да'),
            h(BButton, {onClick: () => hide('cancel'), size: 'lg'}, () => 'Нет'),
          ]),
        ],
      },
    },
    {resolveOnHide: true}
  ).then((r) => {
    create({title: 'вы нажали: ' + (r.ok ? 'да' : 'нет')})
  })
}
</script>
```

  </template>

</HighlightCard>

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import {BButton, useToastController, BButtonGroup, BToast} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import UsePluginAlert from '../../components/UsePluginAlert.vue'
import {ref, computed, h, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const {create, remove, toasts} = useToastController()

let toast: undefined | ReturnType<typeof create>

const showMe = () => {
  if (toast !== undefined) return
  toast = create({ title: 'Показ',  variant: 'success', position: 'bottom-center' } )
}

const hideMe = () => {
  if (toast === undefined) return
  toast.destroy()
  toast = undefined
}

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showReactiveExample = () => {
  create(
    computed(() => ({
      ...firstRef.value,
      variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
        ? 'danger'
        : 'info') as ColorVariant,
    })),
  )
}

const showMeAdvancedExample = () => {
  create({
    body: firstRef.value.body,
    position: 'bottom-center',
    slots: {default: () => h('div', null, {default: () => `кастом! ${firstRef.value.body}`})},
  })
}


const promiseToast = () => {
  create(
    {
      variant: 'primary',
      position: 'middle-center',
      bodyClass: 'w-100',
      modelValue: true,
      slots: {
        default: ({hide}) =>
          [ 
            h('h2', {class: 'text-center mb-3'}, 'Готовы?'), 
            h('div', {class: 'd-flex justify-content-center gap-2'}, [
              h(BButton, {onClick: () => hide('ok'), size: 'lg'}, () => 'Да'), 
              h(BButton, {onClick: () => hide('cancel'), size: 'lg'}, () => 'Нет')
            ])
          ],
      },
    },
    {resolveOnHide: true}
  ).then((r) => {
    create({title: 'вы нажали: ' + (r.ok ? 'да' : 'нет')})
  })
}
</script>
