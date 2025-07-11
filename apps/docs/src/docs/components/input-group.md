# Группа ввода

<PageHeader>

Легко расширяйте элементы управления формой, добавляя текст, кнопки или группы кнопок с любой стороны текстовых полей.

</PageHeader>

<<< DEMO ./demo/InputGroupOverview.vue#template{vue-html}

## Использование

Вы можете добавлять аддоны с помощью пропсов, именованных слотов и/или подкомпонентов.

::: info NOTE
В Bootstrap 5 классы `.input-group-append` и `.input-group-prepend` удалены. Теперь можно просто добавлять кнопки и `.input-group-text` как прямых потомков input group.
:::

### Использование пропсов `prepend` и `append`

Значения будут автоматически обёрнуты в `BInputGroupText` для корректного отображения.

<<< DEMO ./demo/InputGroupXPend.vue#template{vue-html}

### Использование именованных слотов

<<< DEMO ./demo/InputGroupSlots.vue#template{vue-html}

### Использование `BInputGroupText`

Используйте `BInputGroupText`, чтобы добавить стилизованный текст до или после поля.

Не используйте `BInputGroupText` для группировки подкомпонентов, как это было в Bootstrap-Vue. См. [руководство по миграции](/docs/migration-guide#binputgroup).

<<< DEMO ./demo/InputGroupText.vue#template{vue-html}

## Поддерживаемые элементы управления

В качестве _основного_ поля input group поддерживаются следующие элементы:

- [`BFormInput`](/docs/components/form-input)
- [`BFormTextarea`](/docs/components/form-textarea)
- [`BFormSelect`](/docs/components/form-select)
- [`BFormFile`](/docs/components/form-file)
- [`BFormRating`](/docs/components/form-rating) <NotYetImplemented />
- [`BFormTags`](/docs/components/form-tags)
- [`BFormSpinbutton`](/docs/components/form-spinbutton)

## Чекбоксы и радиокнопки как аддоны

Размещайте чекбоксы или радиокнопки внутри аддона input group вместо текста.

::: info NOTE
В Bootstrap 5 рекомендуется добавлять `.mt-0` к `.form-check-input`, если рядом нет видимого текста. Также можно использовать `BFormRadio` и `BFormCheckbox` с утилитарными классами для корректного отображения.
:::

### Нативные чекбоксы и радиокнопки

<<< DEMO ./demo/InputGroupNativeCheckbox.vue#template{vue-html}

### Кастомные radio, checkbox и switch как аддоны

Используйте компоненты `BFormCheckbox` и `BFormRadio` как аддоны, применяя утилитарные классы Bootstrap для корректного отображения:

<<< DEMO ./demo/InputGroupCustomCheckbox.vue#template{vue-html}

В примере выше класс `.visually-hidden` на `<span>` скрывает содержимое метки для визуального восприятия (но оно остаётся доступным для экранных читалок), а класс `.me-n2` добавляет отрицательный правый отступ для компенсации «гаттера» между контролом и скрытой меткой.

## Несколько полей

<<< DEMO ./demo/InputGroupMultipleInputs.vue#template{vue-html}

## Несколько аддонов

Поддерживается несколько аддонов, их можно комбинировать с чекбоксами и радиокнопками.

<<< DEMO ./demo/InputGroupMultipleAddons.vue#template{vue-html}

## Дропдауны как аддоны

<<< DEMO ./demo/InputGroupDropdown.vue#template{vue-html}

## Размеры

Задайте высоту с помощью пропса `size`: `sm` или `lg` для маленького или большого размера соответственно. Нет необходимости задавать размер отдельным полям или кнопкам. Однако для дропдаунов размер нужно указать явно.

<<< DEMO ./demo/InputGroupSizing.vue

Для управления шириной поместите группу ввода в стандартную колонку Bootstrap.

### Размеры кастомных radio, checkbox и switch

Если используете `BFormRadio` или `BFormCheckbox` как аддоны, для корректного отображения могут понадобиться дополнительные утилитарные классы, в зависимости от выбранного размера:

<<< DEMO ./demo/InputGroupCheckboxSize.vue

В частности, при использовании размера `sm` на `BInputGroup` потребуется добавить отрицательный нижний отступ с помощью класса `.mb-n1`.

## Контекстные состояния

В Bootstrap v5 **не поддерживается** стилизация input group по состоянию (valid/invalid). Однако поля внутри группы поддерживают контекстные состояния.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/inputGroup.data'
</script>
