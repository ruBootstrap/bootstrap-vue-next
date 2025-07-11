# Модальное окно

<PageHeader>

Модальные окна представляют собой упрощенные, но гибкие диалоговые окна, управляемые JavaScript и CSS. Они поддерживают множество вариантов использования от уведомлений пользователя до полностью настраиваемого контента и включают несколько полезных подкомпонентов, размеров, вариантов, доступности и т.д.

</PageHeader>

## Использование

<HighlightCard>
  <BButton @click="modal = !modal">
    Переключить модальное окно
  </BButton>
  <BModal v-model="modal" title="Привет, мир!">
    Foobar?
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="modal = !modal"> Переключить модальное окно </BButton>
  <BModal v-model="modal" title="Привет, мир!"> Foobar? </BModal>
</template>

<script setup lang="ts">
const modal = ref(false)
</script>
```

  </template>
</HighlightCard>

## Изменение состояния через корневой элемент

В настоящее время нет встроенной функциональности для переключения модального окна в глобальном состоянии. Простой обходной путь для изменения состояния модального окна — это использование глобального инструмента управления состоянием, такого как [pinia](https://pinia.vuejs.org/). Просто v-моделируя к ref, управляемому состоянием pinia, вы можете открывать и закрывать модальное окно без контекста. Это не идеальное решение и будет рассмотрено в будущем. В качестве альтернативы вы можете экспортировать `ref` из внешнего файла и v-моделировать на этот.

## Предотвращение закрытия

Можно предотвратить отображение/закрытие модальных окон. Вы можете предотвратить скрытие по следующим событиям: ok, cancel, close и hide.

<HighlightCard>
  <BButton @click="preventableModal = !preventableModal">
    Переключить модальное окно
  </BButton>
  <BModal  v-model="preventableModal" title="Привет, мир!" @hide="preventFn">
    Foobar?
    <BFormCheckbox v-model="preventModal">Предотвратить закрытие</BFormCheckbox>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="preventableModal = !preventableModal"> Переключить модальное окно </BButton>

  <BModal v-model="preventableModal" title="Привет, мир!" @hide="preventFn">
    Foobar?
    <BFormCheckbox v-model="preventModal">Предотвратить закрытие</BFormCheckbox>
  </BModal>
</template>

<script setup lang="ts">
const preventableModal = ref(false)
const preventModal = ref(true)
const preventFn = (e: Event) => {
  if (preventModal.value) e.preventDefault()
}
</script>
```

  </template>
</HighlightCard>

## Прокрутка длинного контента

Когда модальные окна становятся слишком длинными для просмотра пользователем или устройства, они прокручиваются независимо от самой страницы. Попробуйте демо ниже, чтобы увидеть, о чем мы говорим.

<HighlightCard>
  <BButton v-b-modal.modal-tall>Запустить переполняющееся модальное окно</BButton>

  <BModal id="modal-tall" title="Переполняющийся контент">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-tall>Запустить переполняющееся модальное окно</BButton>

  <BModal id="modal-tall" title="Переполняющийся контент">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

Вы также можете создать прокручиваемое модальное окно, которое позволяет прокрутку тела модального окна, установив пропс `scrollable` в `true`.

<HighlightCard>
  <BButton v-b-modal.modal-scrollable>Запустить прокручиваемое модальное окно</BButton>

  <BModal id="modal-scrollable" scrollable title="Прокручиваемый контент">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-scrollable>Запустить прокручиваемое модальное окно</BButton>

  <BModal id="modal-scrollable" scrollable title="Прокручиваемый контент">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

## Вертикально центрированное модальное окно

Вертикально центрируйте ваше модальное окно в центре экрана, установив пропс `centered` в `true`.

<HighlightCard>
  <BButton v-b-modal.modal-center>Запустить центрированное модальное окно</BButton>

  <BModal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Вертикально центрированное модальное окно!</p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton v-b-modal.modal-center>Запустить центрированное модальное окно</BButton>

  <BModal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Вертикально центрированное модальное окно!</p>
  </BModal>
</template>
```

  </template>
</HighlightCard>

Свободно смешивайте вертикально `centered` с `scrollable`.

## Поддержка множественных модальных окон

<HighlightCard>
  <BButton @click="nestedModal1 = !nestedModal1">Открыть первое модальное окно</BButton>
  <BModal v-model="nestedModal1" size="lg" title="Первое модальное окно" ok-only no-stacking>
    <p class="my-2">Первое модальное окно</p>
    <BButton @click="nestedModal2 = !nestedModal2">Открыть второе модальное окно</BButton>
  </BModal>
  <BModal v-model="nestedModal2" title="Второе модальное окно" ok-only>
    <p class="my-2">Второе модальное окно</p>
    <BButton @click="nestedModal3 = !nestedModal3" size="sm">Открыть третье модальное окно</BButton>
  </BModal>
  <BModal v-model="nestedModal3" size="sm" title="Третье модальное окно" ok-only>
    <p class="my-1">Третье модальное окно</p>
    <BButton @click="nestedModal4 = !nestedModal4" size="sm">Открыть четвертое модальное окно</BButton>
  </BModal>
  <BModal v-model="nestedModal4" size="sm" title="Четвертое модальное окно" ok-only>
    <p class="my-1">Четвертое модальное окно</p>
  </BModal>
  <template #html>

```vue
<template>
  <BButton @click="nestedModal1 = !nestedModal1">Открыть первое модальное окно</BButton>

  <BModal v-model="nestedModal1" size="lg" title="Первое модальное окно" ok-only no-stacking>
    <p class="my-2">Первое модальное окно</p>
    <BButton @click="nestedModal2 = !nestedModal2">Открыть второе модальное окно</BButton>
  </BModal>

  <BModal v-model="nestedModal2" title="Второе модальное окно" ok-only>
    <p class="my-2">Второе модальное окно</p>
    <BButton @click="nestedModal3 = !nestedModal3" size="sm">Открыть третье модальное окно</BButton>
  </BModal>

  <BModal v-model="nestedModal3" size="sm" title="Третье модальное окно" ok-only>
    <p class="my-1">Третье модальное окно</p>
    <BButton @click="nestedModal4 = !nestedModal4" size="sm"
      >Открыть четвертое модальное окно</BButton
    >
  </BModal>
  <BModal v-model="nestedModal4" size="sm" title="Четвертое модальное окно" ok-only>
    <p class="my-1">Четвертое модальное окно</p>
  </BModal>
</template>

<script setup lang="ts">
const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
const nestedModal4 = ref(false)
</script>
<style>
/* just a little example of the variables and classes for stack */
.modal {
  --bs-modal-zindex: 1900;
  transform: translate(
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px),
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px)
  );
  transition:
    transform 0.5s,
    opacity 0.15s linear !important;
}
.modal:not(.stack-inverse-position-0) {
  opacity: calc(1 - ((var(--b-count, 0) - var(--b-position, 0)) * 0.1));
}
.modal-backdrop:not(.stack-inverse-position-0) {
  opacity: 0 !important;
}
</style>
```

  </template>
</HighlightCard>

## Программное управление

Чтобы программно управлять вашими модальными окнами с глобальным состоянием, обратитесь к нашей документации по [useModal](/docs/composables/useModal) и [useModalController](/docs/composables/useModalController)

### Программное создание модальных окон

Чтобы программно создавать модальные окна, обратитесь к документации по [useModalController](/docs/composables/useModalController)

### Модальные окна с сообщениями

Если вы ищете замены для `$bvModal.msgBoxOk` и `$bvModal.msgBoxConfirm`, пожалуйста, ознакомьтесь с
[руководством по миграции](/docs/migration-guide#replacement-for-modal-message-boxes)

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/modal.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BModal, BButton, vBModal} from 'bootstrap-vue-next'
import {ref, nextTick} from 'vue'

const modal = ref(false)

const preventableModal = ref(false)
const preventModal = ref(true)
const preventFn = (e: Event) => {
  if (preventModal.value)
    e.preventDefault()
}

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
const nestedModal4 = ref(false)
</script>

<style>
.modal {
  --bs-modal-zindex: 1900;
  transform: translate(
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px),
    calc((var(--b-count, 0) - var(--b-position, 0)) * 20px)
  );
  transition: transform 0.5s, opacity 0.15s linear !important;
}
.modal:not(.stack-inverse-position-0) {
  opacity: calc(1 - ((var(--b-count, 0) - var(--b-position, 0)) * 0.1));
}
.modal-backdrop:not(.stack-inverse-position-0) {
  opacity: 0 !important;
}
</style>
