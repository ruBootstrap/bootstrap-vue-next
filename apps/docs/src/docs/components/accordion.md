# Аккордеон

<PageHeader>

Создавайте вертикально сворачиваемые аккордеоны в сочетании с компонентом `BCollapse`.

</PageHeader>

## Как это работает

`BAccordionItem` использует компонент `BCollapse` для обеспечения сворачиваемости. Чтобы отобразить раскрытый аккордеон, добавьте свойство `visible` к компоненту `BAccordionItem`.

<BAlert variant="info" :model-value="true" class="my-5">

Анимация этого компонента зависит от медиа-запроса prefers-reduced-motion. Подробнее см. [раздел о снижении анимации в документации по доступности Bootstrap](https://getbootstrap.su/docs/5.3/getting-started/accessibility/#reduced-motion).

</BAlert>

## Пример

Нажмите на аккордеоны ниже, чтобы раскрыть/свернуть содержимое.

<<< DEMO ./demo/AccordionOverview.vue#template{vue-html}

### Без отступов

Добавьте свойство `flush`, чтобы убрать фон, некоторые границы и скругления, чтобы аккордеон был вровень с контейнером.

<<< DEMO ./demo/AccordionFlush.vue#template{vue-html}

### Всегда открыто

Добавьте свойство `free`, чтобы элементы аккордеона оставались открытыми при открытии других элементов.

<<< DEMO ./demo/AccordionFree.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/accordion.data'
</script>
