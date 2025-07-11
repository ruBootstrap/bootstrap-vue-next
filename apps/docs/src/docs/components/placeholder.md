# Placeholder

<PageHeader>

Заглушки — это компоненты, которые указывают на то, что что-то еще может загружаться.

</PageHeader>

## Основное использование

В ядре заглушки у вас есть компонент `BPlaceholder`:

<HighlightCard>
  <BPlaceholder />
  <BPlaceholder width="65" variant="danger" />
  <BPlaceholder cols="6" variant="info" />
  <template #html>

```vue-html
<BPlaceholder cols="7" />
<BPlaceholder width="65" />
<BPlaceholder cols="6" />
```

  </template>
</HighlightCard>

## Ширина

Вы можете настроить ширину с помощью пропсов `width` и `cols`. `cols` — это числовое значение от 1 до 12, а `width` — это процент. Ширина имеет приоритет над `cols`.

<HighlightCard>
  <BPlaceholder width="30" cols="12" />
  <BPlaceholder width="75%" variant="danger" />
  <BPlaceholder width="12" variant="warning" />
  <BPlaceholder :cols="6" variant="info" />
  <BPlaceholder cols="8" variant="info" />
  <template #html>

```vue-html
<BPlaceholder width="30" cols="12" />
<BPlaceholder width="75%" variant="danger" />
<BPlaceholder width="12" variant="warning" />
<BPlaceholder :cols="6" variant="info" />
<BPlaceholder cols="8" variant="info" />
```

  </template>
</HighlightCard>

## Анимации заглушки

Bootstrap поддерживает два типа анимаций: `wave` и `glow`.

- Примечание: при использовании `BPlaceholderCard` изображение не наследует анимацию

<HighlightCard>
  <BPlaceholderCard style="max-width: 20rem; " animation="glow" class="mb-3" />
  <BPlaceholderCard style="max-width: 20rem; " animation="wave" class="mb-3" />
  <BPlaceholder animation="glow" />
  <template #html>

```vue-html
<BPlaceholderCard style="max-width: 20rem; " animation="glow" />
<BPlaceholderCard style="max-width: 20rem; " animation="wave" />
<BPlaceholder animation="glow" />
```

  </template>
</HighlightCard>

## Размеры

Вы можете настроить размер заглушки с помощью пропса `size`. Допустимые значения: 'xs', 'sm', или 'lg'.

<HighlightCard>
  <BPlaceholder size="lg" />
  <BPlaceholder size="sm" />
  <BPlaceholder size="xs" />
  <template #html>

```vue-html
<BPlaceholder size="lg" />
<BPlaceholder size="sm" />
<BPlaceholder size="xs" />
```

  </template>
</HighlightCard>

## Вспомогательные компоненты

Компонент `BPlaceholder` имеет несколько обернутых компонентов для быстрого создания наборов компонентов, таких как `BPlaceholderCard`, `BPlaceholderTable`, и `BPlaceholderButton`.

### Обернутый заглушкой компонент

Компонент `BPlaceholderWrapper` — это компонент без рендеринга, который выбирает компонент 'загрузки', и компонент 'завершенный'. Он полезен, когда вам нужно дождаться завершения загрузки, прежде чем отображать фактическое содержимое. В зависимости от случая использования, вы можете предпочесть использовать [Suspense](https://vuejs.org/guide/built-ins/suspense.html) вместо этого.

<HighlightCard>
  <BPlaceholderWrapper :loading="loading">
    <template #loading>
      <BPlaceholderCard style="max-width: 20rem;" no-footer />
    </template>
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </BCardText>
      <BButton href="#placeholder-wrapper" variant="primary">Go somewhere</BButton>
    </BCard>
  </BPlaceholderWrapper>
  <BButton @click="startLoading">Restart</BButton>
  <template #html>

```vue
<template>
  <BPlaceholderWrapper :loading="loading">
    <template #loading>
      <BPlaceholderCard style="max-width: 20rem;" no-footer />
    </template>
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>
      <BButton href="#placeholder-wrapper" variant="primary">Go somewhere</BButton>
    </BCard>
  </BPlaceholderWrapper>
  <BButton @click="startLoading">Restart</BButton>
</template>

<script setup lang="ts">
const loading = ref(false)

watchEffect(() => {
  if (loading.value === true) {
    setTimeout(() => {
      loading.value = false
    }, 5000)
  }
})

const startLoading = () => {
  if (loading.value === true) return
  loading.value = true
}

onMounted(startLoading)
</script>
```

  </template>
</HighlightCard>

### Заглушка кнопок

Вы можете легко отрендерить заглушку, которая имеет стили кнопки, используя `BPlaceholderButton`.

<HighlightCard>
  <BPlaceholderButton cols="3" />
  <template #html>

```vue-html
<BPlaceholderButton cols="3" />
```

  </template>
</HighlightCard>

### Заглушка карточек

Заглушки имеют встроенную поддержку для рендеринга заглушки карточки с `BPlaceholderCard`.

<HighlightCard>
  <BPlaceholderCard style="max-width: 20rem" />
  <template #html>

```vue-html
<BPlaceholderCard style="max-width: 20rem" />
```

  </template>
</HighlightCard>

### Заглушка таблиц

Вы также можете отрендерить полную заглушку таблицы с `BPlaceholderTable`.

<HighlightCard>
  <BPlaceholderTable />
  <template #html>

```vue-html
<BPlaceholderTable />
```

  </template>
</HighlightCard>

### Расширенное использование вспомогательных компонентов

#### Расширенные карточки

Карточки имеют различные пропсы и слоты, чтобы сделать их более персонализированными.

Вы можете настроить изображение с помощью различных пропсов, таких как `imgBlankColor`, и `imgBottom`, или вы можете использовать `imgSrc`, чтобы разместить реальное изображение, а не пустое.

Каждая секция `BPlaceholderCard` экспортирует свои элементы слота, поэтому вы можете легко переопределить дефолты. Доступные слоты: `img`, `header`, `default`, и `footer`.

Footer также экспортирует некоторые пропсы, которые вы можете использовать для настройки поведения кнопки. Наиболее важным пропсом является `noButton`. Если он установлен в true, он преобразуется в базовое представление заглушки. В качестве альтернативы вы можете использовать пропс `noFooter`, чтобы удалить его полностью.

<HighlightCard>
  <BPlaceholderCard img-src="https://picsum.photos/1024/480/?image=1" img-bottom no-header>
    <template #footer>
      Footer
    </template>
    <template #default>
      <BPlaceholder />
      <BPlaceholder width="65" variant="danger" />
      <BPlaceholder cols="6" variant="info" />
    </template>
  </BPlaceholderCard>
  <template #html>

```vue-html
<BPlaceholderCard img-src="https://picsum.photos/1024/480/?image=1" img-bottom no-header>
  <template #footer>
    Footer
  </template>

  <template #default>
    <BPlaceholder />
    <BPlaceholder width="65" variant="danger" />
    <BPlaceholder cols="6" variant="info" />
  </template>
</BPlaceholderCard>
```

  </template>
</HighlightCard>

#### Расширенные таблицы

`BPlaceholderTable` имеет различные пропсы для настройки количества строк, столбцов, заголовка/подвала и их стилей.

Вы можете настроить количество столбцов и строк с помощью пропсов `columns` и `rows` соответственно. Вы можете использовать `showFooter`, чтобы показать подвал, или `noHeader`, чтобы скрыть заголовок. И для подвала, и для заголовка есть настройки `cellWidth`, `size`, `animation`, и `variant`, которые предшествуют типу с стилем, например: `headerCellWidth`, `headerSize`, `footerAnimation`, `footerVariant`.

В качестве альтернативы вы можете вручную настроить любой диапазон таблицы с помощью слотов. Доступные слоты: `thead`, `default`, и `tfoot`. Обратите внимание, что слоты обертывают **весь** диапазон таблицы, слот `thead` — это весь `thead`, а слот `default` — это весь `tbody`, поэтому вам, вероятно, потребуется вручную обернуть свои использования слотов в эти элементы, если вы планируете их использовать.

<HighlightCard>
  <BPlaceholderTable
    columns="3"
    rows="2"
    show-footer
    footer-variant="info"
    header-size="lg"
    footer-size="xs"
    footer-columns="1"
    header-columns="4"
  >
    <template #default>
      <tbody>
          <tr>
            <td>
              <BPlaceholder size="lg" variant="secondary" />
              <BPlaceholder size="sm" variant="secondary" />
              <BPlaceholder size="xs" variant="secondary" />
            </td>
            <td>
              <BPlaceholder variant="warning" />
              <BPlaceholder animation="wave" variant="warning" />
            </td>
            <td>
              <BPlaceholder animation="glow" variant="danger" />
            </td>
          </tr>
      </tbody>
    </template>
  </BPlaceholderTable>
  <template #html>

```vue-html
<BPlaceholderTable
  columns="3"
  rows="2"
  show-footer
  footer-variant="info"
  header-size="lg"
  footer-size="xs"
  footer-columns="1"
  header-columns="4"
>
  <template #default>
    <tbody>
      <tr>
        <td>
          <BPlaceholder size="lg" variant="secondary" />
          <BPlaceholder size="sm" variant="secondary" />
          <BPlaceholder size="xs" variant="secondary" />
        </td>
        <td>
          <BPlaceholder variant="warning" />
          <BPlaceholder animation="wave" variant="warning" />
        </td>
        <td>
          <BPlaceholder animation="glow" variant="danger" />
        </td>
      </tr>
    </tbody>
  </template>
</BPlaceholderTable>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/placeholder.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BPlaceholderButton,
  BPlaceholderTable,
  BPlaceholderWrapper,
  BPlaceholderCard,
  BCard,
  BCardBody,
  BButton,
  BPlaceholder,
  BCardText
} from 'bootstrap-vue-next'
import {ref, onMounted, watchEffect} from 'vue'

const loading = ref(false)

watchEffect(() => {
  if(loading.value === true){
    setTimeout(() => {
      loading.value = false
    }, 5000)
  }
})

const startLoading = () => {
  if(loading.value === true) return
  loading.value = true
}

onMounted(startLoading)
</script>
