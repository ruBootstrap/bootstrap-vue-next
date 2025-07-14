<ComposableHeader path="useBreadcrumb/index.ts" title="useBreadcrumb" />

<div class="lead mb-5">

`useBreadcrumb` — это вспомогательный утилитарный композабл для компонента `BBreadcrumb`. Он предоставляет **глобально** изменяемый контекст, чтобы вы могли модифицировать хлебные крошки. Следует отметить, что компонент хлебных крошек по умолчанию автоматически использует этот глобальный контекст. `useBreadcrumb` разделяется глобально: любое изменение состояния будет видно во всём приложении. Как указано в документации к BBreadcrumb, проп items у компонента имеет приоритет над `useBreadcrumb`.

</div>

<UsePluginAlert />

## Демонстрация

<HighlightCard>
  <BBreadcrumb />
  <BFormInput class="my-3" v-model="inputValue" />
  <BButton @click="addItem" class="me-2">Добавить</BButton>
  <BButton variant="danger" @click="breadcrumb.reset">Очистить</BButton>
  <template #html>

```vue
<template>
  <BBreadcrumb />

  <BFormInput v-model="inputValue" />

  <BButton @click="addItem">Добавить</BButton>
  <BButton variant="danger" @click="breadcrumb.reset">Очистить</BButton>
</template>

<script setup lang="ts">
const breadcrumb = useBreadcrumb()

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items?.value.push(inputValue.value)
  inputValue.value = ''
}
</script>
```

  </template>
</HighlightCard>

Вы также можете передать id в компонент и композабл, чтобы создать уникальную цепочку хлебных крошек.

<HighlightCard>
  <BBreadcrumb id="foobar" />
  <BFormInput class="my-3" v-model="foobarInputValue" />
  <BButton @click="foobarAddItem" class="me-2">Добавить</BButton>
  <BButton variant="danger" @click="foobarBreadcrumb.reset">Очистить</BButton>
  <template #html>

```vue
<template>
  <BBreadcrumb id="foobar" />

  <BFormInput v-model="inputValue" />

  <BButton @click="addItem">Добавить</BButton>
  <BButton variant="danger" @click="breadcrumb.reset">Очистить</BButton>
</template>

<script setup lang="ts">
// Переданный id должен совпадать с id компонента
const breadcrumb = useBreadcrumb('foobar')

const inputValue = ref('')

const addItem = () => {
  breadcrumb.items.value.push(inputValue.value)
  inputValue.value = ''
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {ref} from 'vue'
import HighlightCard from '../../components/HighlightCard.vue'
import UsePluginAlert from '../../components/UsePluginAlert.vue'
import {BBreadcrumb, BButton, BFormInput, BFormGroup, BCard, BCardBody, useBreadcrumb} from 'bootstrap-vue-next'
import ComposableHeader from './ComposableHeader.vue'

const breadcrumb = useBreadcrumb()
const inputValue = ref('')
const addItem = () => {
    breadcrumb.items?.value.push(inputValue.value)
    inputValue.value = ''
}

const foobarBreadcrumb = useBreadcrumb('foobar')
const foobarInputValue = ref('')
const foobarAddItem = () => {
    foobarBreadcrumb.items?.value.push(foobarInputValue.value)
    foobarInputValue.value = ''
}
</script>
