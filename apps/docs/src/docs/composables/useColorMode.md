<ComposableHeader path="useColorMode/index.ts" title="useColorMode" />

<div class="lead mb-5">

`useColorMode` предоставляет удобный инструмент для настройки глобальной цветовой темы вашего приложения. Вы также можете использовать его для отдельных компонентов с помощью [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) или селектора. По умолчанию в Bootstrap цветовые режимы применяются ко всем дочерним элементам ветки. `useColorMode` — это просто обёртка над утилитой [vueuse](https://vueuse.org/core/useColorMode/#usecolormode).

</div>

## Демонстрация

<HighlightCard>
  <ClientOnly>
    <BCard ref="target">
      <BButton @click="changeColor">
        Текущий режим: {{ mode }}
      </BButton>
    </BCard>
  </ClientOnly>
  <template #html>

```vue
<template>
  <BCard ref="target">
    <BButton @click="changeColor"> Текущий режим: {{ mode }} </BButton>
  </BCard>
</template>

<script setup lang="ts">
import {useColorMode} from 'bootstrap-vue-next'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
```

  </template>
</HighlightCard>

<script setup lang="ts">
import ComposableHeader from './ComposableHeader.vue'
import {ref} from 'vue'
import {useColorMode, BCard, BCardBody, BButton} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
