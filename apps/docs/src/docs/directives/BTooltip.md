<DirectiveHeader path="BTooltip/index.ts" title="BTooltip" />

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip="'Мой заголовок'" />
<BCard v-b-tooltip="{title: 'Мой заголовок'}" />
<BCard v-b-tooltip.hover.top="'Мой заголовок'" />
<BCard v-b-tooltip.focus.right="{title: 'Мой заголовок'}" />
```

</BCard>

Как показано выше, директива BoostrapVueNext с именем `b-tooltip` должна иметь значение и, при необходимости, один или несколько модификаторов. Общий формат директивы:

```vue-html
v-{name}.{modifier1}.{modifier2}.{etc.}={value}.
```

## Модификаторы триггера

Можно определить, когда показывать tooltip, с помощью следующих модификаторов:

- click
- hover
- focus
- manual
- click

Если не указать модификаторы, tooltip по умолчанию будет активен для "hover" и "focus".

## Модификаторы позиции

Можно указать, где размещать tooltip, с помощью следующих модификаторов:

- left
- right
- bottom
- top

Если не указать модификатор, позиция будет "top".

## Значение

Текст tooltip задаётся в значении, но помните, что то, что внутри "", интерпретируется как JS, а не как строковый литерал. Поэтому если вы хотите, чтобы tooltip показывал "Мой заголовок", используйте дополнительные кавычки внутри "":

```vue-html
<BCard v-b-tooltip="'Мой заголовок'" />
```

Если вы хотите использовать реактивную переменную `userSurname`, делайте так:

```vue-html
<BCard v-b-tooltip="userSurname" />
```

В целом, значение может быть объектом, строкой, функцией или элементом.

<BCard class="bg-body-tertiary">

```ts
/**
 * Значение по умолчанию, если атрибут title не указан.
 *
 * Если передана функция, она будет вызвана с this, указывающим на элемент, к которому прикреплён popover.
 *
 * @default ''
 */
title: string | Element | JQuery | ((this: HTMLElement) => string | Element | JQuery)
```

</BCard>

Интерфейс объекта — самый гибкий, позволяет использовать такие опции:

<BCard class="bg-body-tertiary">

```ts
interface ValueObject {
  delay?: number // по умолчанию: 0
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
  title?: string
  trigger?:
    | 'click'
    | 'hover'
    | 'focus'
    | 'manual'
    | 'click hover'
    | 'click focus'
    | 'hover focus'
    | 'click hover focus'
}
```

</BCard>

## Задержка

Задержка перед показом (и скрытием) tooltip в миллисекундах. По умолчанию 0.

## Подводные камни

При использовании директивы есть два способа задать title для tooltip.

### Неправильное использование

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top title="мой заголовок" />
```

</BCard>

- В этом примере используется свойство "title" компонента BCard, что приведёт к следующей разметке:

<BCard class="bg-body-tertiary">

```vue-html
<div class="card">
  <div/> // header
    <div title="мой заголовок">
      //что-то здесь
    </div>
  </div> // footer
</div>
```

</BCard>

В этом случае title будет прикреплён к дочернему элементу, а директива — к родительскому div с классом "card".

Поэтому это не сработает, и вы увидите предупреждение в консоли разработчика.

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top="мой заголовок" />
```

</BCard>

Здесь не используется строка, потому что читается ts/js-код. Поэтому нужно использовать строковый литерал, переменную, функцию и т.д.

## Правильное использование

Всё работает, если title создаётся в корневом компоненте, например:

<BCard class="bg-body-tertiary">

```vue-html
<div v-b-tooltip.hover.top title="мой заголовок">
 //что-то
</div>
```

</BCard>

<BCard class="bg-body-tertiary">

```vue-html
<div class="card" title="мой заголовок">
    //что-то здесь
</div>
```

</BCard>

В этом случае директива определяет значение title и корректно его использует.

<BCard class="bg-body-tertiary">

```vue-html
<BCard v-b-tooltip.hover.top="'мой заголовок'" />
```

</BCard>

Используйте тип значения, если компонент не задаёт title корневому элементу. Обратите внимание, что нужно использовать ts/js-код, переменную и т.д.

<script setup lang="ts">
import {BCard, BCardBody} from 'bootstrap-vue-next'

import DirectiveHeader from './DirectiveHeader.vue'
</script>
