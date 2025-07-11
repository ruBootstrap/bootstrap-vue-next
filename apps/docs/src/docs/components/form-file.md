# Файл формы

<PageHeader>

Элемент для выбора файлов, поддерживающий одиночный и множественный режимы

</PageHeader>

<BAlert :model-value="true" variant="danger">
Текущая реализация может измениться до версии v1.0. Реализация может быть изменена и стать ближе к реализации Bootstrap-vue на основе отзывов <BLink target="_blank" href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213" rel="noopener">проголосуйте здесь</BLink>
</BAlert>

## Одиночный режим

По умолчанию используется одиночный режим выбора файла. В этом режиме `modelValue` будет одним объектом `File`

<HighlightCard>
  <BFormFile v-model="first" label="Hello!" />
  <div class="mt-3">
    Файл: <strong>{{ first }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormFile v-model="file" label="Hello!" />
  <div class="mt-3">
    Файлы: <strong>{{ file }}</strong>
  </div>
</template>

<script setup lang="ts">
const file = ref<null | File>(null)
</script>
```

  </template>
</HighlightCard>

## Множественный режим

Чтобы включить множественный режим, просто установите пропс `multiple` в `true`. В этом режиме `modelValue` будет массивом `File[]`, даже если выбран только один файл

<HighlightCard>
  <BFormFile v-model="second" multiple />
  <div class="mt-3">
    Файлы: <strong>{{ second }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormFile v-model="files" multiple />
  <div class="mt-3">
    Файлы: <strong>{{ files }}</strong>
  </div>
</template>

<script setup lang="ts">
const files = ref<null | File[]>(null)
</script>
```

  </template>
</HighlightCard>

## Ограничение типов файлов

Вы можете ограничить типы файлов с помощью пропса `accept`. Атрибут `accept` — это csv-список допустимых типов. Это может быть `string` или `string[]`. Если передан `string[]`, он будет объединён в csv-строку

<HighlightCard>
  <BFormFile v-model="third" accept="image/*" />
  <div class="mt-3">
    Файл: <strong>{{ third }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormFile v-model="file" accept="image/*" />
  <div class="mt-3">
    Файлы: <strong>{{ file }}</strong>
  </div>
</template>

<script setup lang="ts">
const file = ref<null | File>(null)
</script>
```

  </template>
</HighlightCard>

## Поддержка drag and drop

Поддержка drag and drop использует стандартное поведение браузера. Вы можете явно отключить drag and drop с помощью пропса `noDrop`

<HighlightCard>
  <BFormFile v-model="fourth" no-drop />
  <div class="mt-3">
    Файл: <strong>{{ fourth }}</strong>
  </div>
  <template #html>

```vue
<template>
  <BFormFile v-model="file" no-drop />
  <div class="mt-3">
    Файлы: <strong>{{ file }}</strong>
  </div>
</template>

<script setup lang="ts">
const file = ref<null | File>(null)
</script>
```

  </template>
</HighlightCard>

## Размеры

Вы можете изменить размер элемента управления с помощью пропса `size`

<HighlightCard>
  <BFormFile class="mt-3" size="sm" />
  <BFormFile class="mt-3" />
  <BFormFile class="mt-3" size="lg" />

<template #html>

```vue-html
<BFormFile class="mt-3" size="sm" />
<BFormFile class="mt-3" />
<BFormFile class="mt-3" size="lg" />
```

  </template>
</HighlightCard>

## Метка

Вы можете добавить метку над инпутом с помощью пропса `label` или слота `label`

<HighlightCard>
  <BFormFile label="I am first!" />
  <BFormFile>
    <template #label>
      Я второй!
    </template>
  </BFormFile>

<template #html>

```vue-html
<BFormFile class="mt-3" label="I am first!" />
<BFormFile class="mt-3">
  <template #label>
    Я второй!
  </template>
</BFormFile>
```

  </template>
</HighlightCard>

## Режим выбора директории

Добавив пропс `directory`, пользователь может выбирать директории вместо файлов

<BAlert variant="danger" :model-value="true">
  Режим выбора директории — нестандартный атрибут в спецификации HTML. Все основные браузеры решили поддерживать его, но он может работать некорректно в браузерах, где он не реализован. Используйте с осторожностью
</BAlert>

### Пример будет добавлен

## Автофокус

Если вы установите пропс `autofocus` в true, инпут будет в фокусе при вставке компонента

<HighlightCard>
  <BFormFile class="mt-3" autofocus />

<template #html>

```vue-html
<BFormFile class="mt-3" autofocus />
```

  </template>
</HighlightCard>

## Контекстное состояние

Вы можете использовать пропс `state` для визуальной индикации состояния инпута

<HighlightCard>
  <BFormFile class="mt-3" :state="false" />
  <BFormFile class="mt-3" :state="true" />

<template #html>

```vue-html
<BFormFile class="mt-3" :state="false" />
<BFormFile class="mt-3" :state="true" />
```

  </template>
</HighlightCard>

## Изменение выбранных файлов

Для инпутов типа `file` значение строго «однонаправленное». Это значит, что вы не можете изменить значение инпута через JavaScript. Вы можете изменить значение `v-model`, и это будет работать для «внешнего вида», однако реальный элемент `input` не изменит свой [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList). Это сделано по соображениям безопасности, чтобы вредоносный скрипт не мог получить доступ к вашим документам

## Экспортируемые функции

BFormFile экспортирует функции для управления компонентом: `focus(), blur(), reset()`. Доступ к ним осуществляется через [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

1. focus: фокусирует инпут для выбора файла
2. blur: снимает фокус с инпута
3. reset: сбрасывает выбор файлов, чтобы ни один файл не был выбран

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formFile.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BFormFile, BAlert, BLink} from 'bootstrap-vue-next'
import {ref} from 'vue'

const first = ref(null)
const second = ref(null)
const third = ref(null)
const fourth = ref(null)
</script>
