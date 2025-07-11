# Tooltip

## Tooltip — это обёртка для Popover

Tooltip — это обёртка для Popover, предоставляющая простой способ создания тултипов в вашем приложении. Он использует ту же API, что и Popover, но с некоторыми настройками по умолчанию для тултипов.

## Использование

Чтобы использовать тултип, просто оберните ваш целевой элемент компонентом `<BTooltip>` и предоставьте необходимые пропсы.

<HighlightCard>
  <BTooltip>
    <template #target>
      <BButton>Наведи на меня</BButton>
    </template>
    Привет, мир!
  </BTooltip>

<template #html>

```vue
<template>
  <BTooltip>
    <template #target>
      <BButton>Наведи на меня</BButton>
    </template>
    Привет, мир!
  </BTooltip>
</template>
```

  </template>
</HighlightCard>

## Различия с Popover

Задержка равна нулю, hideMargin равно 0, и оно по умолчанию неинтерактивно. Вы можете переопределить эти свойства, если это необходимо.
`BTooltip` имеет пропс `interactive`, который позволяет установить тултип как интерактивный. Это означает, что тултип останется открытым, когда мышь находится над ним или фокус находится в нём, позволяя пользователям взаимодействовать с его содержимым.

<HighlightCard>
<BTooltip interactive>
  <template #target>
    <BButton>Наведи на меня</BButton>
  </template>
  <span>{{ count }}</span>
  <BButton @click="count++">+</BButton>
</BTooltip>

<template #html>

```vue
<template>
  <BTooltip interactive>
    <template #target>
      <BButton>Наведи на меня</BButton>
    </template>
    <span>{{ count }}</span>
    <BButton @click="count++">+</BButton>
  </BTooltip>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0)
</script>
```

</template>

</HighlightCard>

## Дополнительные замечания

Убедитесь, что проверяете документацию Popover для получения дополнительных сведений о параметрах настройки.

см. [Popover](/docs/components/popover)

<script setup lang="ts">
import {BButton, BTooltip} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, onMounted} from 'vue'

const count = ref(0)
</script>
