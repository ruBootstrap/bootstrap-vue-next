# Ссылка

<PageHeader>

Используйте пользовательский компонент b-link из BootstrapVue для генерации стандартной ссылки `<a>` или `RouterLink`. `BLink` поддерживает состояние `disabled` и распространение события `click`.

</PageHeader>

## Ссылки без Router

По умолчанию ссылки без опций будут вести на # (текущую локацию).

<<< DEMO ./demo/LinkSimple.vue#template{vue-html}

## Ссылки с Router и внешние ссылки

Если указать значение в пропсе `href`, будет отрендерен стандартный элемент ссылки (`<a>`). Чтобы сгенерировать `<router-link>`, укажите маршрут через пропс `to`.

Router-ссылки поддерживают различные дополнительные пропсы. Подробнее см. в разделе [Поддержка Router](/docs/reference/router-links).

Если ваше приложение работает на [Nuxt.js](https://nuxtjs.org), вместо `<router-link>` будет использоваться компонент [`<nuxt-link>`](https://nuxtjs.org/api/components-nuxt-link). `<nuxt-link>` поддерживает все те же возможности, что и `<router-link>` (так как является его обёрткой), и даже больше.

<<< DEMO ./demo/LinkExternal.vue#template{vue-html}

## Стилизация ссылок

Внешние ссылки можно задать через пропс `href`.

<<< DEMO ./demo/LinkStyles.vue#template{vue-html}

## Прозрачность ссылки

Изменяйте альфа-прозрачность цвета ссылки через значение `rgba()`. Обратите внимание, что изменение прозрачности цвета может привести к [недостаточному контрасту](https://getbootstrap.su/docs/5.3/getting-started/accessibility/#color-contrast).

<<< DEMO ./demo/LinkOpacity.vue

Вы также можете изменить уровень прозрачности при наведении.

<<< DEMO ./demo/LinkOpacityHover.vue

## Подчёркивание ссылки

### Цвет подчёркивания

Изменяйте цвет подчёркивания независимо от цвета текста ссылки.

<<< DEMO ./demo/LinkUnderlineColors.vue

### Отступ подчёркивания

Изменяйте расстояние подчёркивания от текста. Отступ задаётся в `em` и автоматически масштабируется вместе с текущим `font-size` элемента.

<<< DEMO ./demo/LinkUnderlineOffsets.vue

### Прозрачность подчёркивания

Изменяйте прозрачность подчёркивания.

<<< DEMO ./demo/LinkUnderlineOpacity.vue

### Варианты при наведении

Аналогично тому, как для `opacity` есть соответствующий пропс `opacity-hover`, для `underline-offset` и `underline-opacity` есть пропсы `underline-offset-hover` и `underline-opacity-hover`. Комбинируйте их для создания уникальных стилей ссылок.

<<< DEMO ./demo/LinkHoverVariants.vue#template{vue-html}

## Цветные ссылки

Вы можете использовать пропс `variant` для окрашивания ссылок. Некоторые стили ссылок используют довольно светлый цвет текста, поэтому их следует применять только на тёмном фоне для достаточного контраста.

<<< DEMO ./demo/LinkColors.vue

## Отключённое состояние ссылки

Отключите функциональность ссылки, установив пропс `disabled` в true.

<<< DEMO ./demo/LinkDisabled.vue#template{vue-html}

Отключение ссылки добавит класс Bootstrap v5 `.disabled` к ссылке, а также остановит распространение событий, предотвратит действие по умолчанию и уберёт ссылку из последовательности табуляции (`tabindex="-1"`).

::: info NOTE
CSS Bootstrap v5 в данный момент не стилизует отключённые ссылки иначе, чем обычные. Вы можете использовать следующий пользовательский CSS для стилизации отключённых ссылок (например, чтобы предотвратить изменение стиля при наведении).
:::

<<< FRAGMENT ./demo/LinkDisabled.css

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/link.data'
</script>
