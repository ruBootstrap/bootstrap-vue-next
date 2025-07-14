# Цветовые варианты и соответствие CSS-классам

<div class="lead mb-5">

<p>Цветовые варианты доступны при использовании стандартного CSS Bootstrap v5 и их соответствие CSS-классам</p>
<p>Ниже приведены варианты, доступные при использовании стандартного CSS Bootstrap v5. При использовании компонентов BootstrapVueNext варианты указываются по их имени, а не по базовому CSS-классу.</p>

</div>

## Базовые варианты

<BCard class="bg-body-tertiary">

<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-danger">.text-danger</p>
<p class="text-warning bg-dark">.text-warning</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-dark bg-white">.text-dark</p>

</BCard>

Базовые варианты преобразуются в различные контекстные классы Bootstrap v5 в зависимости от компонента (и назначения варианта), где они используются. Подробнее см. в разделах ниже.

## Варианты фона и границ

<BCard class="bg-body-tertiary">

  <div class="gap-2">
    <span class="border border-primary" />
    <span class="border border-primary-subtle" />
    <span class="border border-secondary" />
    <span class="border border-secondary-subtle" />
    <span class="border border-success" />
    <span class="border border-success-subtle" />
    <span class="border border-danger" />
    <span class="border border-danger-subtle" />
    <span class="border border-warning" />
    <span class="border border-warning-subtle" />
    <span class="border border-info" />
    <span class="border border-info-subtle" />
    <span class="border border-light" />
    <span class="border border-light-subtle" />
    <span class="border border-dark" />
    <span class="border border-dark-subtle" />
    <span class="border border-black" />
    <span class="border border-white" />
  </div>

</BCard>

Все базовые варианты плюс:

- `white`
- `transparent`

Они преобразуются в классы `bg-{variant}` для фона и `border-{variant}` для границ.

Эти варианты используются компонентами (такими как `BCard`, `BModal` и др.), которые предоставляют свойства `bg-variant`, `*-bg-variant`, `border-variant` и `*-border-variant`.

## Варианты текста

Все базовые варианты плюс:

- `muted`
- `white`
- `black`

<BCard class="bg-body-tertiary">

<p class="text-primary">.text-primary</p>
<p class="text-primary-emphasis">.text-primary-emphasis</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-secondary-emphasis">.text-secondary-emphasis</p>
<p class="text-success">.text-success</p>
<p class="text-success-emphasis">.text-success-emphasis</p>
<p class="text-danger">.text-danger</p>
<p class="text-danger-emphasis">.text-danger-emphasis</p>
<p class="text-warning bg-dark">.text-warning</p>
<p class="text-warning-emphasis">.text-warning-emphasis</p>
<p class="text-info bg-dark">.text-info</p>
<p class="text-info-emphasis">.text-info-emphasis</p>
<p class="text-light bg-dark">.text-light</p>
<p class="text-light-emphasis">.text-light-emphasis</p>
<p class="text-dark bg-white">.text-dark</p>
<p class="text-dark-emphasis">.text-dark-emphasis</p>

<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-tertiary">.text-body-tertiary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50 bg-white">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>

</BCard>

Они преобразуются в классы `text-{variant}`

Эти варианты используются компонентами (такими как `BCard`, `BModal` и др.), которые предоставляют свойства `text-variant` и `*-text-variant`.

## Взаимодействие вариантов

Свойства `bg-variant` и `text-variant` имеют приоритет над свойством `variant`. Обычно проще использовать **либо** `variant`, **либо** `bg-variant` и `text-variant`, но не их комбинацию. Более специфичные свойства фактически переопределяют часть `text` или `bg` свойства `variant`, поэтому альтернативой является использование свойства `variant` с последующим переопределением `text` или `bg` по необходимости.

<<< DEMO ./demo/VariantInteractions.vue#template{vue-html}

## Варианты для отдельных компонентов

Некоторые компоненты Bootstrap v5 требуют дополнительного CSS-оформления или стилизации с помощью псевдоселекторов (например, кнопки), поэтому имеют собственные CSS-классы вариантов.

### Варианты для Alert

Все базовые варианты

Они преобразуются в классы `alert-{variant}`.

Подробнее о взаимодействии между `variant`, `bg-variant` и `text-variant` см. в разделе [Взаимодействие вариантов](#взаимодействие-варинатов).

### Варианты для Badge

Все базовые варианты

Они преобразуются в классы `badge-{variant}`.

Подробнее о взаимодействии между `variant`, `bg-variant` и `text-variant` см. в разделе [Взаимодействие вариантов](#взаимодействие-варинатов).

### Варианты для Button

Все базовые варианты плюс:

- `outline-{base variant}` — создает вариант кнопки с обводкой для базового варианта
- `link` — отображает кнопку в виде ссылки, но с сохранением отступов и полей кнопки

Они преобразуются в классы `btn-{variant}` и `btn-outline-{variant}`.

Обратите внимание: вариант `link` не имеет версии с обводкой.

Подробнее о взаимодействии между `variant`, `bg-variant` и `text-variant` см. в разделе [Взаимодействие вариантов](#взаимодействие-варинатов).

### Варианты для Table

Все базовые варианты плюс:

- `active`

Эти варианты преобразуются в классы `table-{variant}`.

Если у таблицы установлен проп `dark`, варианты преобразуются в классы `bg-{variant}`.

Обратите внимание: вариант `active` применим только к элементам `<tr>` внутри `<tbody>` и не может быть применён к отдельным ячейкам или использоваться как `table-variant`.

### Варианты для Popover

Все базовые варианты

Они преобразуются в пользовательские классы BootstrapVueNext `b-popover-{variant}`.

### Варианты для Tooltip

Все базовые варианты

Они преобразуются в пользовательские классы BootstrapVueNext `b-tooltip-{variant}`.

### Варианты для Toast

Все базовые варианты

Они преобразуются в пользовательские классы BootstrapVueNext `b-toast-{variant}`.

## Использование классов вариантов

Вы также можете использовать базовые классы напрямую на элементах (и некоторых компонентах) через стандартный HTML-атрибут `class="..."`.

## Создание пользовательских вариантов

При создании пользовательских вариантов следуйте схеме именования CSS-классов вариантов Bootstrap v5, и они станут доступны для различных компонентов, использующих эту схему (например, создайте класс `btn-purple`, и `purple` станет допустимым вариантом для `BButton`).

В качестве альтернативы вы можете создать новые цветовые темы, предоставив собственные карты цветов темы SCSS Bootstrap. Карта цветов темы по умолчанию (из `bootstrap/scss/_variables.scss`):

<HighlightCard>
  Определения базовых оттенков серого
  <template #html>

```scss
$white: #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black: #000;
```

  </template>
</HighlightCard>

<HighlightCard>
  Определения базовых цветов
  <template #html>

```scss
$blue: #0d6efd;
$indigo: #6610f2;
$purple: #6f42c1;
$pink: #d63384;
$red: #dc3545;
$orange: #fd7e14;
$yellow: #ffc107;
$green: #198754;
$teal: #20c997;
$cyan: #0dcaf0;
```

  </template>
</HighlightCard>

<HighlightCard>
  Определения цветов темы по умолчанию
  <template #html>

```scss
$primary: $blue;
$secondary: $gray-600;
$success: $green;
$info: $cyan;
$warning: $yellow;
$danger: $red;
$light: $gray-100;
$dark: $gray-900;
```

  </template>
</HighlightCard>

<script setup lang="ts">
import {BCard} from 'bootstrap-vue-next'
import HighlightCard from '../../components/HighlightCard.vue'

</script>

<style lang="scss">
.bg-body-tertiary [class^="border"] {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin: .25rem;
}
</style>
