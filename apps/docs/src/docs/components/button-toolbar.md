# Панель инструментов с кнопками

Группируйте несколько групп кнопок и/или групп ввода в одну строку.

**Пример 1:** с группами кнопок

<<< DEMO ./demo/ButtonToolbarExample1.vue#template{vue-html}

**Пример 2:** с комбинацией небольшой группы кнопок и небольшой группы ввода.

<<< DEMO ./demo/ButtonToolbarExample2.vue#template{vue-html}

**Пример 3:** с группами кнопок и выпадающим меню.

<<< DEMO ./demo/ButtonToolbarExample3.vue#template{vue-html}

## Использование

Вы можете свободно комбинировать группы ввода и выпадающие меню с группами кнопок в своих панелях инструментов. Как и в приведённом выше примере, скорее всего, вам понадобятся утилитарные классы для правильного размещения элементов.

## Размеры

Если вы хотите использовать кнопки или элементы управления меньшего или большего размера, установите пропс `size` непосредственно на компоненты `BButtonGroup`, `BInputGroup` и `BDropdown`.

<<< DEMO ./demo/ButtonToolbarSizing.vue#template{vue-html}

## Растяжение по ширине

Чтобы панель инструментов занимала максимально доступную ширину, увеличьте расстояние между группами кнопок, группами ввода и выпадающими меню, установив пропс `justify`.

<<< DEMO ./demo/ButtonToolbarJustify.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/buttonToolbar.data'
</script>
