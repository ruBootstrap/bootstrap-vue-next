<ComposableHeader path="useToggle/index.ts" title="useToggle" />

<div class="lead mb-5">

Вы можете использовать `useToggle`, чтобы получить ближайший компонент с поддержкой toggle в **дочернем компоненте** и показать, скрыть или переключить его. Также можно передать id целевого компонента, чтобы показать, скрыть или переключить конкретный компонент.

</div>

<HighlightCard>
  <template #html>

```vue
<BModal @hide="(e) => e.trigger === 'sometrigger' && doSomething()">
  <MyComponent />
</BModal>
```

<hr />
MyComponent.vue

```vue
<template>
  <BButton @click="hide('sometrigger')">Готово</BButton>
</template>

<script setup lang="ts">
const {hide} = useToggle()
</script>
```

  </template>
</HighlightCard>

Вы также можете указать id, чтобы получить конкретный компонент и показать/скрыть его. В настоящее время мы не поддерживаем использование CSS-селекторов для поиска компонента, так как компонент в ленивом режиме может не отрендериться при инициализации страницы. Если компонент не существует и вы попытаетесь вызвать любой из предоставленных методов, эти методы безопасно ничего не сделают и не вызовут ошибок.

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

const {show, hide, component} = useToggle('my-modal')
</script>
```

  </template>
</HighlightCard>

## Promise Flow

Методы `show` и `toggle` принимают булевый аргумент, чтобы управлять, когда резолвить промис: при показе (`false`) или при скрытии (`true`). При `show` промис резолвится в `true` при показе и в `'show-prevented'`, если показ был предотвращён. При `hide` промис резолвится в trigger, вызвавший событие скрытия. Промис можно await-ить для получения результата.

<HighlightCard>
  <BButton @click="testToggle">Нажми меня</BButton>
  <BModal id="toggleTest"> контент </BModal>
  <span v-if="reason !== ''" class="mx-3">Причина закрытия: {{ reason }}</span>

<template #html>

```vue
<template>
  <BButton @click="testToggle">Нажми меня</BButton>
  <BModal id="toggleTest"> контент </BModal>
</template>
<script setup lang="ts">
const toggle = useToggle('toggleTest')
async function testToggle() {
  toggle.show(true).then((e) => {
    if (e === 'ok') {
      console.log('ok pressed')
    } else {
      console.log('closed with', e)
    }
  })
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BButton, BModal, useToggle} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import {ref, onMounted} from 'vue'
import ComposableHeader from './ComposableHeader.vue'

const someConditions = ref(false)
const programmaticModal = ref(false)

onMounted(() => {
    someConditions.value = true
})

const {show, hide} = useToggle('my-modal')

const reason = ref('')
const toggle = useToggle('toggleTest')
async function testToggle() {
  reason.value = ''
  toggle
    .show(true)
    .then((e) => {
      if (e === 'ok') {
        console.log('ok pressed')
      } else {
        console.log('closed with', e)
      }
      reason.value = e
    })
}
</script>
