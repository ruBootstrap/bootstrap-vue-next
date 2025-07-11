# Тосты

<PageHeader>

Показывайте уведомления вашим пользователям с помощью компонентов `BToast` и `BToastOrchestrator`. Это компоненты, которые легко настраиваются для генерации сообщений-оповещений.

</PageHeader>

Тосты — это лёгкие уведомления, созданные по аналогии с push-уведомлениями, популярными в мобильных и десктопных операционных системах. Тосты предназначены для кратких, лаконичных, неинтерактивных сообщений, которые минимально отвлекают пользователя. Пожалуйста, ознакомьтесь с разделом «Советы по доступности» ниже для важной информации по использованию.

## Обзор

В этом разделе рассматривается только использование компонента напрямую. Часто тосты создаются глобально программно, например, для показа сообщения об успехе после сохранения формы. Эта функциональность описана в документации по composable [здесь](/docs/composables/useToastController).

Вариант с компонентом реализуется с помощью `v-model` следующим образом:

<HighlightCard>
  <BToast v-model="active" variant="info">
    <template #title>
      Заголовок
    </template>
      Тело
  </BToast>
  <template #html>

```vue
<template>
  <BToast v-model="active" variant="info">
    <template #title> Заголовок </template>
    Тело
  </BToast>
</template>
```

  </template>
</HighlightCard>

По умолчанию тосты рендерятся на месте. Вы можете использовать Vue `Teleport`, чтобы изменить их расположение, например, переместить в `body`.

## Позиционирование

В сочетании с `Teleport` вы можете отображать тосты поверх страницы и в определённых местах. Для этого потребуется создать обёрточный компонент вокруг тоста и указать его расположение.

<HighlightCard>
  <template
    v-for="(pos, index) in values"
    :key="index"
  >
    <BButton
      @click="values[index] = !values[index]"
    >
      {{ locations[index] }}
    </BButton>
    <Teleport to="body">
      <div
        :class="locations[index]"
        class="toast-container position-fixed p-3"
      >
        <BToast v-model="values[index]">
          <template #title>
            Заголовок
          </template>
          {{ locations[index] }}
        </BToast>
      </div>
    </Teleport>
  </template>
  <template #html>

```vue
<template>
  <template v-for="(pos, index) in values" :key="index">
    <BButton @click="values[index] = !values[index]">
      {{ locations[index] }}
    </BButton>
    <Teleport to="body">
      <div :class="locations[index]" class="toast-container position-fixed p-3">
        <BToast v-model="values[index]">
          <template #title> Заголовок </template>
          {{ locations[index] }}
        </BToast>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
const locations = [
  'top-0 start-0',
  'top-0 start-50 translate-middle-x',
  'top-0 end-0',
  'top-50 start-0 translate-middle-y',
  'top-50 start-50 translate-middle',
  'top-50 end-0 translate-middle-y',
  'bottom-0 start-0',
  'bottom-0 start-50 translate-middle-x',
  'bottom-0 end-0',
]

const values = ref(Array.from({length: locations.length}, () => false))
</script>
```

  </template>
</HighlightCard>

## Статичное размещение

Вы можете размещать тосты статично и с большим контролем, используя их напрямую. Однако это менее распространённый вариант.

<HighlightCard>
  <BToast v-model="active" variant="info">
    <template #title>
      Заголовок
    </template>
      Тело
  </BToast>
  <BButton @click="active = !active">Переключить</BButton>
  <template #html>

```vue-html
<BToast v-model="active" variant="info">
  <template #title>
    Заголовок
  </template>
    Тело
</BToast>
<BButton @click="active = !active">Переключить</BButton>
```

</template>
</HighlightCard>

## Автоматическое скрытие тостов

Чтобы создать `BToast`, который автоматически скрывается через заданное время, установите пропс `value` в количество **миллисекунд**, в течение которых тост будет видим. По умолчанию таймер обновляется с помощью `requestAnimationFrame`, что вызывает обновление примерно каждую секунду. Таймер автоматически приостанавливается при наведении мыши, но это поведение можно отключить с помощью пропса `noHoverPause`. Убедитесь, что `value` — это целое число в миллисекундах. Любое изменение `value` сбрасывает таймер.

Пропс **interval** определяет, как часто обновляется таймер. По умолчанию используется `requestAnimationFrame`, но можно задать свой интервал. Отрицательные значения для `value` или `interval` остановят таймер. Если `value` не делится нацело на `interval`, таймер продолжит до ближайшего интервала. Например, при `value` 5400 мс и интервале 1000 мс тост будет отображаться 6000 мс. Чтобы избежать этого, выберите интервал, который делится нацело на `value`, например 540 мс или 1080 мс.

<HighlightCard>
  <BButton
    @click="
      show?.({
        props: {
          title: 'Обратный отсчёт!',
          variant: 'info',
          pos: 'middle-center',
          value: 10000,
          progressProps: {
            variant: 'danger',
          },
          body: 'Смотрите!',
        }
      })
    "
  >
    Показать
  </BButton>

<template #html>

```vue
<template>
  <BButton
    @click="
      show?.({
        props: {
          title: 'Обратный отсчёт!',
          variant: 'info',
          pos: 'middle-center',
          value: 10000,
          progressProps: {
            variant: 'danger',
          },
          body: 'Смотрите!',
        },
      })
    "
  >
    Показать
  </BButton>
</template>
```

  </template>

</HighlightCard>

### Интеграция ProgressBar

Как видно из примера выше, есть встроенная полоса прогресса. Она появляется, если используется числовой `value` и задан `progressProps`. Это реализовано для удобства, так как модифицировать поведение `BToast` при использовании чистого метода сложно, а визуальный индикатор времени — приятное дополнение. Хотя это не стандартное поведение Bootstrap, оно включается по желанию. Работает аналогично примерам в `BAlert`.

## Интеграция с BLink

`Toast` может принимать пропсы компонента `BLink`, что изменяет его поведение.

<HighlightCard>
  <BButton @click="show?.({ props: {href: 'https://getbootstrap.su/', target: '_blank', body: 'Я — BLink'}})">
    Показать
  </BButton>

<template #html>

```vue
<template>
  <BButton
    @click="
      show?.({props: {href: 'https://getbootstrap.su/', target: '_blank', body: 'Я — BLink'}})
    "
  >
    Показать
  </BButton>
</template>

<script setup lang="ts">
const {show} = useToastController()
</script>
```

  </template>

</HighlightCard>

## Программное управление

Для программного управления тостами с помощью глобального состояния смотрите документацию по [useToastController](/docs/composables/useToastController).

## Доступность

Тосты предназначены для **кратких уведомлений** пользователя, поэтому для поддержки скринридеров и других вспомогательных технологий тосты оборачиваются в область с `aria-live`. Изменения в таких областях (например, появление/обновление тоста) автоматически озвучиваются скринридерами без необходимости перемещать фокус пользователя или иным образом его отвлекать. Кроме того, автоматически устанавливается `aria-atomic="true"`, чтобы всё содержимое тоста всегда озвучивалось как единое целое, а не только изменённая часть (это важно, если вы обновляете только часть содержимого или показываете тот же тост повторно).

Если вам нужно просто показать простое сообщение внизу или вверху окна пользователя, используйте фиксированный по позиции компонент `BAlert`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButtonGroup, BButton, BToast, useToastController} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'
import {ref, h, onMounted} from 'vue'

const {show, hide, toasts} = useToastController()

const active = ref(true)

const locations = [
  'top-0 start-0',
  'top-0 start-50 translate-middle-x',
  'top-0 end-0',
  'top-50 start-0 translate-middle-y',
  'top-50 start-50 translate-middle',
  'top-50 end-0 translate-middle-y',
  'bottom-0 start-0',
  'bottom-0 start-50 translate-middle-x',
  'bottom-0 end-0',
]

const values = ref(Array.from({length: locations.length}, () => false))

let showValue: undefined | symbol

const showMe = () => {
  if (typeof showValue === 'symbol') return
  showValue = show?.({
    props: {
      value: true, variant: 'success', pos: 'bottom-center', body: 'Showing'
    }
  })
}

const hideMe = () => {
  if (showValue === undefined) return
  hide?.(showValue)
  showValue = undefined
}

const toastShowStr = ref('foo')

onMounted(() => {
  setInterval(() => {
    toastShowStr.value = toastShowStr.value === 'foo' ? 'bar' : 'foo'
  }, 1000)
})

const showReactive = () => {
  show?.(toastShowStr, () => ({
    variant: toastShowStr.value === 'bar' ? 'danger' : 'info',
  }))
}

const toastVariant = ref('danger')

onMounted(() => {
  setInterval(() => {
    toastVariant.value = toastVariant.value === 'danger' ? 'info' : 'danger'
  }, 1000)
})

const showAdvanced = () => {
  show?.(
    h(BToast, null, {
      default: () => 'title?',
    }),
    () => ({
      variant: toastVariant.value,
    })
  )
}
</script>
