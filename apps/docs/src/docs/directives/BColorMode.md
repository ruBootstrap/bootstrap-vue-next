<DirectiveHeader path="BColorMode/index.ts" title="BColorMode" />

<div class="lead mb-5">

Директива `BColorMode` похожа на [useColorMode](../composables/useColorMode.md), но предоставляет более низкоуровневый способ для применения к отдельным компонентам. Она полезна, когда нужно задать элементу определённый цветовой режим без использования композабла.

</div>

## Демонстрация

<HighlightCard>
  <BCard v-b-color-mode="currentColor">
    <BButton @click="changeColor">
      Текущий режим: {{ currentColor }}
    </BButton>
  </BCard>
  <template #html>

```vue
<template>
  <BCard v-b-color-mode="currentColor">
    <BButton @click="changeColor"> Текущий режим: {{ currentColor }} </BButton>
  </BCard>
</template>

<script setup lang="ts">
import {vBColorMode} from 'bootstrap-vue-next'

// В отличие от композабла, здесь по умолчанию нет строгой типизации!
const currentColor = ref<'light' | 'dark'>('dark')

const changeColor = () => {
  currentColor.value = currentColor.value === 'dark' ? 'light' : 'dark'
}
</script>
```

  </template>

</HighlightCard>

<script setup lang="ts">
import {ref} from 'vue'
import {vBColorMode, BButton, BCard} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

import DirectiveHeader from './DirectiveHeader.vue'

const currentColor = ref<'light' | 'dark'>('dark')

const changeColor = () => {
  currentColor.value = currentColor.value === 'dark' ? 'light' : 'dark'
}
</script>
