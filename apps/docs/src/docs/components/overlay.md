# Оверлей

<PageHeader>

Пользовательский компонент `BOverlay` из BootstrapVueNext используется для _визуального затемнения_ определённого элемента или компонента и его содержимого. Он сигнализирует пользователю о смене состояния внутри элемента или компонента и может использоваться для создания лоадеров, предупреждений/уведомлений, диалогов и многого другого.

</PageHeader>

## Обзор

`BOverlay` можно использовать для затемнения практически любого элемента. [Примеры использования](#use-case-examples): формы, таблицы, диалоги подтверждения удаления — везде, где нужно показать, что приложение занято фоновым процессом, что компонент недоступен, или чтобы дать дополнительный контекст пользователю.

`BOverlay` может накладываться (оборачивать) на элемент или компонент (поведение по умолчанию), либо размещаться как потомок элемента с `position: relative` ([режим без обёртки](#non-wrapping-mode)).

Видимость оверлея управляется через пропс `show`. По умолчанию оверлей _не_ отображается.

<BAlert variant="danger" :model-value="true">
  Обратите внимание, что этот компонент только <em>визуально затемняет</em> своё содержимое (или страницу). Подробнее см. в разделе <a href="#accessibility" class="alert-link">Доступность</a> ниже.
</BAlert>

**Пример режима обёртки по умолчанию:**

<HighlightCard>
  <BOverlay :show="showOverlayEx1" rounded="sm">
    <BCard title="Карточка с оверлеем" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Показать оверлей
      </BButton>
    </BCard>
  </BOverlay>
  <BButton class="mt-3" @click="showOverlayEx1 = !showOverlayEx1">Переключить оверлей</BButton>
  <template #html>

```vue
<template>
  <BOverlay :show="showOverlayEx1" rounded="sm">
    <BCard title="Карточка с оверлеем" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Показать оверлей
      </BButton>
    </BCard>
  </BOverlay>
  <BButton @click="showOverlayEx1 = !showOverlayEx1">Переключить оверлей</BButton>
</template>

<script setup lang="ts">
const showOverlayEx1 = ref(false)
</script>
```

  </template>
</HighlightCard>

## Опции

Доступно множество опций для стилизации оверлея и для размещения пользовательского содержимого внутри него.

### Цвет фона оверлея

Вы можете управлять цветом фона через пропс `variant`. Значение variant преобразуется в одну из [утилитных цветовых классов фона](/docs/reference/color-variants#background-and-border-variants) Bootstrap. Прозрачность фона регулируется пропсом `opacity` (значения от `0` до `1`). Размытие фона регулируется пропсом `blur`.

<HighlightCard>
  <div class="row">
    <div class="col-lg-6" aria-controls="overlay-background">
      <label for="bg-variant">Вариант</label>
      <BFormSelect id="bg-variant" v-model="variant" :options="variants" />
      <label for="bg-opacity">Прозрачность</label>
      <div class="d-inline">
        <BFormInput
          id="bg-opacity"
          v-model.number="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          class="d-inline"
        />
      </div>
      {{ opacity.toFixed(2) }}
      <div>
        <label for="bg-blur">Размытие (не работает, если variant не 'transparent' или 'white', либо если задан bgColor)</label>
        <BFormSelect id="bg-blur" v-model="blur" :options="blurs" />
      </div>
    </div>
    <BCol lg="6">
      <BOverlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
        >
        <BCard title="Карточка с оверлеем" aria-hidden="true">
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BCardText>
          <BButton disabled variant="primary">Кнопка</BButton>
        </BCard>
      </BOverlay>
    </BCol>
  </div>
  <template #html>

```vue
<template>
  <div class="row">
    <div class="col-lg-6" aria-controls="overlay-background">
      <label for="bg-variant">Вариант</label>
      <BFormSelect id="bg-variant" v-model="variant" :options="variants" />
      <label for="bg-opacity">Прозрачность</label>
      <div class="d-inline">
        <BFormInput
          id="bg-opacity"
          v-model.number="opacity"
          type="range"
          min="0"
          max="1"
          step="0.01"
          class="d-inline"
        />
      </div>
      {{ opacity.toFixed(2) }}
      <div>
        <label for="bg-blur"
          >Размытие (не работает, если variant не 'transparent' или 'white', либо если задан
          bgColor)</label
        >
        <BFormSelect id="bg-blur" v-model="blur" :options="blurs" />
      </div>
    </div>
    <BCol lg="6">
      <BOverlay
        id="overlay-background"
        show
        :variant="variant"
        :opacity="opacity"
        :blur="blur"
        rounded="sm"
      >
        <BCard title="Карточка с оверлеем" aria-hidden="true">
          <BCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </BCardText>
          <BButton disabled variant="primary">Кнопка</BButton>
        </BCard>
      </BOverlay>
    </BCol>
  </div>
</template>

<script setup lang="ts">
const variants = [
  'transparent',
  'white',
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const
const blurs = [{text: 'None', value: ''}, '1px', '2px', '5px', '0.5em', '1rem']

const variant = ref<(typeof variants)[number]>('light')
const opacity = ref(0.85)
const blur = ref('2px')
</script>
```

  </template>
</HighlightCard>

В качестве альтернативы пропсу `variant` можно указать CSS-значение цвета через пропс `bg-color`. Если задано значение для `bg-color`, значение пропса `variant` игнорируется.

**Примечания:**

- Размытие фона недоступно в некоторых браузерах (например, IE 11).
- Для видимости размытия уровень прозрачности должен быть достаточно высоким.

### Анимация появления (fade)

По умолчанию оверлей использует анимацию появления Bootstrap при показе и скрытии. Вы можете отключить анимацию, добавив пропс `no-fade` к `BOverlay`.

<!-- @dwgray this is the same as the first example, but it uses no-fade prop -->

<HighlightCard>
  <BOverlay no-fade :show="showOverlayEx1" rounded="sm">
    <BCard title="Карточка с оверлеем" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Показать оверлей
      </BButton>
    </BCard>
  </BOverlay>
  <BButton class="mt-3" @click="showOverlayEx1 = !showOverlayEx1">Переключить оверлей</BButton>
  <template #html>

```vue
<template>
  <BOverlay no-fade :show="showOverlayEx1" rounded="sm">
    <BCard title="Карточка с оверлеем" :aria-hidden="showOverlayEx1 ? 'true' : null">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
        Показать оверлей
      </BButton>
    </BCard>
  </BOverlay>
  <BButton @click="showOverlayEx1 = !showOverlayEx1">Переключить оверлей</BButton>
</template>

<script setup lang="ts">
const showOverlayEx1 = ref(false)
</script>
```

  </template>
</HighlightCard>

### Стилизация спиннера по умолчанию

По умолчанию в оверлее отображается [`BSpinner`](/docs/components/spinner) типа `'border'`. Внешний вид спиннера можно настроить с помощью следующих пропсов:

- `spinner-type`: поддерживаются значения `'border'` (по умолчанию) и `'grow'`
- `spinner-variant`: цветовая тема спиннера. По умолчанию `null` — наследует текущий цвет шрифта
- `spinner-small`: если `true`, отображается спиннер меньшего размера

<HighlightCard>
  <BOverlay
    show
    spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
    style="max-width: 320px;"
  >
    <BCard title="Карточка со спиннером" aria-hidden="true">
      <BCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </BCardText>
      <BButton disabled variant="primary">Кнопка</BButton>
    </BCard>
  </BOverlay>
  <template #html>

```vue-html
<BOverlay
  show
  spinner-variant="primary"
  spinner-type="grow"
  spinner-small
  rounded="sm"
  style="max-width: 320px;"
>
  <BCard title="Карточка со спиннером" aria-hidden="true">
    <BCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </BCardText>
    <BButton disabled variant="primary">Кнопка</BButton>
  </BCard>
</BOverlay>
```

  </template>
</HighlightCard>

### Скругление углов оверлея

По умолчанию фон оверлея имеет прямые углы. Если оборачиваемый контент со скруглёнными углами, используйте пропс `rounded`, чтобы скруглить углы оверлея в соответствии с содержимым.

Возможные значения:

- `true` (или пустая строка `''`) — стандартное (среднее) скругление
- `false` (по умолчанию) — без скругления
- `'sm'` — малое скругление
- `'lg'` — большое скругление
- `'pill'` — скругление в виде таблетки
- `'circle'` — круглое (или овальное) скругление
- `'top'` — только верхние углы
- `'bottom'` — только нижние углы
- `'left'` — только левые углы
- `'right'` — только правые углы

<HighlightCard>
  <BButton @click="showRoundedEx = !showRoundedEx">Переключить оверлей</BButton>
  <BRow class="text-center mt-3">
    <BCol md="6">
      <p>Со скруглением</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block" rounded="circle">
        <BImg thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Image 1" />
      </BOverlay>
    </BCol>
    <BCol md="6">
      <p>Без скругления</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block">
        <BImg thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Image 1" />
      </BOverlay>
    </BCol>
  </BRow>
  <template #html>

```vue
<template>
  <BButton @click="showRoundedEx = !showRoundedEx">Переключить оверлей</BButton>
  <BRow class="text-center mt-3">
    <BCol md="6">
      <p>Со скруглением</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block" rounded="circle">
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>
    <BCol md="6">
      <p>Без скругления</p>
      <BOverlay :show="showRoundedEx" class="d-inline-block">
        <BImg
          thumbnail
          rounded="circle"
          fluid
          src="https://picsum.photos/200/200/?image=54"
          alt="Image 1"
        />
      </BOverlay>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
const showRoundedEx = ref(false)
</script>
```

  </template>
</HighlightCard>

### Пользовательское содержимое оверлея

Разместите пользовательское содержимое в оверлее (вместо спиннера по умолчанию) через опциональный слот `overlay`.

<HighlightCard>
  <BOverlay :show="showCustomEx" rounded="sm" @shown="onShown" @hidden="onHidden">
    <BCard title="Карточка с пользовательским оверлеем" :aria-hidden="showCustomEx ? 'true' : null">
      <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showCustomEx" variant="primary" @click="showCustomEx = true">
        Показать оверлей
      </BButton>
    </BCard>
    <template #overlay>
      <div class="text-center">
        <p id="cancel-label">Пожалуйста, подождите...</p>
        <BButton
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="showCustomEx = false"
        >
          Отмена
        </BButton>
      </div>
    </template>
  </BOverlay>
  <template #html>

```vue
<template>
  <BOverlay :show="showCustomEx" rounded="sm" @shown="onShown" @hidden="onHidden">
    <BCard title="Карточка с пользовательским оверлеем" :aria-hidden="showCustomEx ? 'true' : null">
      <BCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showCustomEx" variant="primary" @click="showCustomEx = true">
        Показать оверлей
      </BButton>
    </BCard>
    <template #overlay>
      <div class="text-center">
        <p id="cancel-label">Пожалуйста, подождите...</p>
        <BButton
          variant="outline-danger"
          size="sm"
          aria-describedby="cancel-label"
          @click="showCustomEx = false"
        >
          Отмена
        </BButton>
      </div>
    </template>
  </BOverlay>
</template>

<script setup lang="ts">
const showCustomEx = ref(false)

const onShown = () => {
  console.log('shown')
}
const onHidden = () => {
  console.log('hidden')
}
</script>
```

  </template>
</HighlightCard>

Доступные свойства для слота `overlay`:

| Свойство         | Описание                          |
| ---------------- | --------------------------------- |
| `spinnerVariant` | Значение пропса `spinner-variant` |
| `spinnerType`    | Значение пропса `spinner-type`    |
| `spinnerSmall`   | Значение пропса `spinner-small`   |

Если вы размещаете интерактивный контент в оверлее, для доступности рекомендуется фокусировать контейнер пользовательского содержимого или один из фокусируемых элементов внутри оверлея. Для этого можно слушать событие `'shown'` компонента `BOverlay`.

### Центрирование содержимого оверлея

По умолчанию содержимое оверлея центрируется по горизонтали и вертикали. Чтобы отключить центрирование, установите пропс `no-center` в `true`.

В примере ниже мы установили пропс `no-center` и абсолютно позиционировали пользовательский слот overlay в правом верхнем углу.

<HighlightCard>
  <BOverlay no-center show rounded="sm">
    <template #overlay>
      foo
    </template>
    <BCard title="Карточка с no-center оверлеем" aria-hidden="true">
      <BCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </BCardText>
      <BButton disabled variant="primary">Кнопка</BButton>
    </BCard>
  </BOverlay>
  <template #html>

```vue-html
<BOverlay no-center show rounded="sm">
  <template #overlay>
    foo
  </template>
  <BCard title="Карточка с no-center оверлеем" aria-hidden="true">
    <BCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </BCardText>
    <BButton disabled variant="primary">Кнопка</BButton>
  </BCard>
</BOverlay>
```

  </template>
</HighlightCard>

### Ширина

По умолчанию ширина `BOverlay` — `100%`. Если вы оборачиваете inline- или inline-block-элемент, добавьте класс `d-inline-block` (например, `<BOverlay class="d-inline-block">`).

Также можно использовать утилитные классы ширины или CSS-стили для управления шириной контейнера-обёртки оверлея.

### Режим без обёртки

По умолчанию `BOverlay` оборачивает содержимое слота по умолчанию. В некоторых случаях может понадобиться затемнить родительский контейнер. Используйте пропс `no-wrap`, чтобы отключить обёртку (и игнорировать слот по умолчанию). В этом случае у родительского элемента должно быть относительное позиционирование (`'position-relative'` или стиль `'position: relative;'`).

<HighlightCard>
  <div class="position-relative p-4 bg-info">
    <p class="text-light fw-bold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <BCard title="Карточка с оверлеем на родителе">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showNoWrapEx" variant="primary" @click="showNoWrapEx = true">
        Показать оверлей
      </BButton>
    </BCard>
    <p class="text-light fw-bold mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <BOverlay :show="showNoWrapEx" no-wrap>
    </BOverlay>
  </div>
  <BButton class="mt-3" @click="showNoWrapEx = !showNoWrapEx">Переключить оверлей</BButton>
  <template #html>

```vue
<template>
  <div class="position-relative p-4 bg-info">
    <p class="text-light fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BCard title="Карточка с оверлеем на родителе">
      <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
      <BCardText>Нажмите кнопку, чтобы показать оверлей:</BCardText>
      <BButton :disabled="showNoWrapEx" variant="primary" @click="showNoWrapEx = true">
        Показать оверлей
      </BButton>
    </BCard>
    <p class="text-light fw-bold mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <BOverlay :show="showNoWrapEx" no-wrap> </BOverlay>
  </div>
  <BButton class="mt-3" @click="showNoWrapEx = !showNoWrapEx">Переключить оверлей</BButton>
</template>

<script setup lang="ts">
const showNoWrapEx = ref(false)
</script>
```

  </template>
</HighlightCard>

Обратите внимание, что некоторые компоненты Bootstrap v5 имеют относительное позиционирование (например, карточки, колонки и т.д.). Возможно, потребуется скорректировать размещение `BOverlay` в разметке.

Например, у `BCard` есть относительное позиционирование, поэтому можно разместить `<BOverlay no-wrap>` как потомка `BCard`:

<HighlightCard>
  <BCard header="Заголовок карточки" footer="Футер карточки">
    <BImg
      thumbnail
      rounded="circle"
      src="https://picsum.photos/72/72/?image=58"
      alt="Image"
      class="d-inline"
    />
    <p class=" d-inline align-top mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <BOverlay :show="showNoWrapEx2" no-wrap />
  </BCard>
  <BButton @click="showNoWrapEx2 = !showNoWrapEx2" class="mt-3">Переключить оверлей</BButton>
  <template #html>

```vue
<template>
  <BCard header="Заголовок карточки" footer="Футер карточки">
    <BImg
      thumbnail
      rounded="circle"
      src="https://picsum.photos/72/72/?image=58"
      alt="Image"
      class="d-inline"
    />
    <p class=" d-inline align-top mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <BOverlay :show="showNoWrapEx2" no-wrap />
  </BCard>
  <BButton @click="showNoWrapEx2 = !showNoWrapEx2" class="mt-3">Переключить оверлей</BButton>
</template>

<script setup lang="ts">
const showNoWrapEx2 = ref(false)
</script>
```

  </template>
</HighlightCard>

В режиме `no-wrap` `BOverlay` не устанавливает атрибут `aria-busy` на затемнённый элемент. Также рекомендуется использовать регион `aria-live` в вашем приложении, чтобы оповещать пользователей скринридеров о том, что страница занята.

Подробнее см. в разделе [Доступность](#accessibility) ниже.

#### Абсолютное и фиксированное позиционирование для `no-wrap`

Если вы хотите затемнить всё приложение или страницу, используя пропс `no-wrap`, можно переключиться на фиксированное позиционирование по вьюпорту, установив пропс `fixed` на `BOverlay`. Обратите внимание, что это не отключает прокрутку страницы, и все интерактивные элементы на странице по-прежнему будут доступны для табуляции.

Возможно, потребуется скорректировать [z-index оверлея](#overlay-z-index), чтобы фон был поверх всех других элементов страницы. Используйте свойство `z-index`, чтобы переопределить значение по умолчанию (`10`).

Подробнее см. в разделе [Доступность](#accessibility) ниже.

### z-index оверлея

В некоторых случаях может понадобиться изменить `z-index`, используемый оверлеем (в зависимости от размещения в DOM или содержимого). Просто установите пропс `z-index` с нужным значением. По умолчанию `z-index` равен `10`.

## Доступность

Обратите внимание, что оверлей — это только визуальный эффект. **Необходимо** отключать все интерактивные элементы (кнопки, ссылки и т.д.), когда оверлей отображается, иначе затемнённые элементы всё равно будут доступны через клавиатуру (например, по Tab).

Если в затемнённом содержимом есть ссылки, рекомендуется использовать компонент [`BLink`](/docs/components/link), так как он поддерживает состояние `disabled`, а обычные ссылки (`<a href="...">`) и компоненты `RouterLink` — нет.

Также рекомендуется добавлять атрибуты `aria-hidden="true"` или `aria-busy="true"` к затемнённому содержимому, когда оверлей видим. Не добавляйте `aria-hidden="true"` к обёртке, содержащей `BOverlay` (при использовании `no-wrap`), иначе содержимое слота overlay станет недоступно для скринридеров.

Если вы размещаете интерактивный контент в слоте `overlay`, сфокусируйте его после события `'shown'`. Для возврата фокуса после скрытия оверлея используйте событие `'hidden'`.

В режиме обёртки (без пропса `no-wrap`) обёртка получает атрибут `aria-busy="true"`, чтобы скринридеры знали, что содержимое занято или загружается. В режиме `no-wrap` этот атрибут не применяется.

Если вы используете пропс `no-wrap` (и, возможно, `fixed`), чтобы затемнить всё приложение или страницу, убедитесь, что все остальные элементы страницы (кроме содержимого overlay) отключены и не попадают в последовательность табуляции.

## Примеры использования

Вот несколько примеров типовых сценариев использования `BOverlay`. Во всех случаях мы отключаем интерактивные элементы в затемнённой области, чтобы они не были доступны через клавиатуру или скринридер.

Подробнее см. в разделе [Доступность](#accessibility).

### Кнопка загрузки

Просто создайте кнопку с индикатором загрузки:

<HighlightCard>
  <BOverlay
    :show="loadingBuzy"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
    @hidden="onBuzyHidden"
  >
    <BButton
      ref="buzyButton"
      :disabled="loadingBuzy"
      variant="primary"
      @click="setBuzyClick"
    >
      Выполнить действие
    </BButton>
  </BOverlay>
  <template #html>

```vue
<template>
  <BOverlay
    :show="loadingBuzy"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
    @hidden="onBuzyHidden"
  >
    <BButton ref="buzyButton" :disabled="loadingBuzy" variant="primary" @click="setBuzyClick">
      Выполнить действие
    </BButton>
  </BOverlay>
</template>

<script setup lang="ts">
let timeout = null

const loadingBuzy = ref(false)
const buzyButton = ref<HTMLElement | null>(null)

const clearTimer = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}
const setTimer = (callback) => {
  clearTimer()
  timeout = setTimeout(() => {
    clearTimer()
    callback()
  }, 5000)
}
const setBuzyClick = () => {
  loadingBuzy.value = true
  // Simulate an async request
  setTimer(() => {
    loadingBuzy.value = false
  })
}

const onBuzyHidden = () => {
  // Return focus to the button once hidden
  //buzyButton.focus()
}
</script>
```

  </template>
</HighlightCard>

### Подтверждение формы и статус загрузки

Этот пример сложнее: он показывает использование `no-wrap` и пользовательского слота overlay для вывода диалога подтверждения, а после подтверждения — индикатор загрузки. Также показаны дополнительные элементы для доступности.

<HighlightCard>
  <BForm class="position-relative p-3" @submit.prevent="onFormSubmit">
    <div class="row">
      <label class="col-lg-2" label-for="form-name">Имя</label>
      <BFormInput id="form-name" class="col" :disabled="formbusy" />
    </div>
    <div class="row mt-2">
      <label class="col-lg-2" label-for="form-mail">Email</label>
      <BFormInput id="form-email" class="col" type="email" :disabled="formbusy" />
    </div>
    <div class="d-flex justify-content-center mt-2">
        <BButton ref="formsubmit" type="submit" :disabled="formbusy">Отправить</BButton>
    </div>
    <BOverlay :show="formbusy" no-wrap @shown="onFormOverlayShown" @hidden="onFormOverlayHidden">
      <template #overlay>
        <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
          <div class="mb-3">Обработка...</div>
          <BProgress
            min="1"
            max="20"
            :value="processingcounter"
            variant="success"
            height="3px"
            class="mx-n4 rounded-0"
          />
        </div>
        <div
          v-else
          ref="formdialog"
          tabindex="-1"
          role="dialog"
          aria-modal="false"
          aria-labelledby="form-confirm-label"
          class="text-center p-3"
        >
          <p><strong id="form-confirm-label">Вы уверены?</strong></p>
          <div class="d-flex"  style="column-gap: 5%;">
            <BButton variant="outline-danger" class="me-3" @click="onFormCancel">
              Отмена
            </BButton>
            <BButton variant="outline-success" @click="onFormOK">ОК</BButton>
          </div>
        </div>
      </template>
    </BOverlay>
  </BForm>
  <template #html>

```vue
<template>
  <BForm class="position-relative p-3" @submit.prevent="onFormSubmit">
    <div class="row">
      <label class="col-lg-2" label-for="form-name">Имя</label>
      <BFormInput id="form-name" class="col" :disabled="formbusy" />
    </div>
    <div class="row mt-2">
      <label class="col-lg-2" label-for="form-mail">Email</label>
      <BFormInput id="form-email" class="col" type="email" :disabled="formbusy" />
    </div>
    <div class="d-flex justify-content-center mt-2">
      <BButton ref="formsubmit" type="submit" :disabled="formbusy">Отправить</BButton>
    </div>
    <BOverlay :show="formbusy" no-wrap @shown="onFormOverlayShown" @hidden="onFormOverlayHidden">
      <template #overlay>
        <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
          <div class="mb-3">Обработка...</div>
          <BProgress
            min="1"
            max="20"
            :value="processingcounter"
            variant="success"
            height="3px"
            class="mx-n4 rounded-0"
          />
        </div>
        <div
          v-else
          ref="formdialog"
          tabindex="-1"
          role="dialog"
          aria-modal="false"
          aria-labelledby="form-confirm-label"
          class="text-center p-3"
        >
          <p><strong id="form-confirm-label">Вы уверены?</strong></p>
          <div class="d-flex" style="column-gap: 5%;">
            <BButton variant="outline-danger" class="me-3" @click="onFormCancel"> Отмена </BButton>
            <BButton variant="outline-success" @click="onFormOK">ОК</BButton>
          </div>
        </div>
      </template>
    </BOverlay>
  </BForm>
</template>

<script setup lang="ts">
const formbusy = ref(false)
const processing = ref(false)
const processingcounter = ref(1)
const formdialog = ref<HTMLElement | null>(null)
let processingInterval = null

const clearProcessingInterval = () => {
  if (processingInterval) {
    clearInterval(processingInterval)
    processingInterval = null
  }
}

const onBuzyHidden = () => {
  // Focus the dialog prompt
  //formdialog.focus()
}

const onFormOverlayHidden = () => {
  // In this case, we return focus to the submit button
  // You may need to alter this based on your application requirements
}

const onFormSubmit = () => {
  processing.value = false
  formbusy.value = true
}

const onFormCancel = () => {
  formbusy.value = false
}

const onFormOK = () => {
  processingcounter.value = 1
  processing.value = true
  clearProcessingInterval()
  processingInterval = setInterval(() => {
    if (processingcounter.value < 20) {
      processingcounter.value++
    } else {
      clearProcessingInterval()
      nextTick(() => {
        formbusy.value = false
        processing.value = false
      })
    }
  }, 350)
}
</script>
```

  </template>
</HighlightCard>

### Использование в `BModal`

Тело модального окна имеет `position: relative;`, поэтому при использовании `<BOverlay no-wrap ...>` внутри тела модального окна затемняется только тело. Если нужно затемнить всё модальное окно (включая заголовок и футер), установите проп `body-class` у `BModal` в `position-static` и также проп `rounded` у `BOverlay`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/overlay.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BForm, BProgress, BRow, BImg, BFormInput, BFormSelect, BOverlay, BCol, BButton, BCard, BCardBody, BCardText, BAlert} from 'bootstrap-vue-next'
import {ref, nextTick} from 'vue';

const showOverlayEx1 = ref(false)
const showRoundedEx = ref(false)

const opacity = ref(0.85)
const blur = ref('2px')
const variants = [
  'transparent',
  'white',
  'light',
  'dark',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
] as const
const variant = ref('light')
const blurs = [
  { text: 'None', value: '' },
  '1px',
  '2px',
  '5px',
  '0.5em',
  '1rem'
]

const showCustomEx = ref(false)

const onShown = () => {
  console.log('shown')
}
const onHidden = () => {
  console.log('hidden')
}

const showNoWrapEx = ref(false)
const showNoWrapEx2 = ref(false)

const loadingBuzy = ref(false)
const buzyButton = ref<HTMLElement | null>(null)
let timeout = null;

const clearTimer = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
}
const setTimer = (callback) => {
  clearTimer()
  timeout = setTimeout(() => {
    clearTimer()
    callback()
  }, 5000)
}
const setBuzyClick = () => {
  loadingBuzy.value = true
  // Simulate an async request
  setTimer(() => {
    loadingBuzy.value = false
  })
}

const onFormOverlayShown = () => {
  // Return focus to the button once hidden
  //buzyButton.focus()
}

const formbusy = ref(false)
const processing = ref(false)
const processingcounter = ref(1)
const formdialog = ref<HTMLElement | null>(null)
let processingInterval = null;

const clearProcessingInterval = () => {
  if (processingInterval) {
    clearInterval(processingInterval)
    processingInterval = null
  }
}

const onBuzyHidden = () => {
  // Focus the dialog prompt
  //formdialog.focus()
}

const onFormOverlayHidden = () => {
// In this case, we return focus to the submit button
// You may need to alter this based on your application requirements
}

const onFormSubmit = () => {
  processing.value = false
  formbusy.value = true
}

const onFormCancel = () => {
  formbusy.value = false
}

const onFormOK = () => {
  processingcounter.value = 1
  processing.value = true
  clearProcessingInterval()
  processingInterval = setInterval(() => {
    if(processingcounter.value < 20) {
      processingcounter.value++
    } else {
      clearProcessingInterval()
      nextTick(() => {
        formbusy.value = false
        processing.value = false
      })
    }
  }, 350)
}
</script>
