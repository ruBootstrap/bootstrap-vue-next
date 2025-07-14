<ComposableHeader path="useModal/index.ts" title="useModal" />

<div class="lead mb-5">

Вы можете использовать `useModal`, чтобы получить ближайшее модальное окно в **дочернем компоненте** и скрыть его. Также можно передать id целевого модального окна, чтобы показать или скрыть конкретное модальное окно.

</div>

<HighlightCard>
  <template #html>

```vue
<BModal>
  <MyComponent />
</BModal>

<template>
  <BButton @click="hide">Готово</BButton>
</template>

<script setup lang="ts">
const {hide} = useModal()
</script>
```

  </template>
</HighlightCard>

Вы также можете указать id, чтобы получить конкретное модальное окно и показать/скрыть его. В настоящее время мы не поддерживаем использование CSS-селекторов для поиска модального окна, так как `BModal` в ленивом режиме может не отрендериться при инициализации страницы. Если компонент модального окна не существует и вы попытаетесь вызвать любой из предоставленных методов, эти методы будут безопасно проигнорированы.

<HighlightCard>
<BButton @click="show()">Нажми меня</BButton>
<BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
  <BButton @click="hide()">Скрыть</BButton>
</BModal>
<template #html>

```vue
<template>
  <BButton @click="show()">Нажми меня</BButton>
  <BModal v-if="someConditions" v-model="programmaticModal" id="my-modal">
    <BButton @click="hide()">Скрыть</BButton>
  </BModal>
</template>

<script setup lang="ts">
const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
  someConditions.value = true
})

const {show, hide, modal} = useModal('my-modal')
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useModal} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import {ref, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
    someConditions.value = true
})

const {show, hide} = useModal('my-modal')
</script>
