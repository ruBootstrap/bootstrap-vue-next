# Опции

## Свойство options

`options` может быть массивом строк или объектов, либо объектом-словарём. Доступные поля:

- **`value`** Значение, которое будет установлено в `v-model` при выборе
- **`disabled`** Отключает элемент для выбора
- **`text`** Отображаемый текст

`value` может быть строкой, числом или простым объектом. Избегайте использования сложных типов в значениях.

::: info ПРИМЕЧАНИЕ
Поле `html` в объекте `options` из BootstrapVue устарело. Подробнее см. в нашем
[руководстве по миграции](/docs/migration-guide/#v-html).
:::

### Опции как массив

<<< FRAGMENT ./demo/OptionsArray.ts#snippet{ts}

Если элемент массива — строка, она будет использована и для `value`, и для `text`.

Можно смешивать строки и [объекты](#options-as-an-array-of-objects) в массиве.

Внутри BootstrapVueNext преобразует такой массив к формату [массива объектов](#options-as-an-array-of-objects):

<<< FRAGMENT ./demo/OptionsObjectArray.ts#snippet{ts}

### Опции как массив объектов

<<< FRAGMENT ./demo/OptionsObjectArrayRaw.ts#snippet{ts}

Если `value` отсутствует, то `text` будет использовано и как `value`, и как `text`.

Внутри BootstrapVueNext преобразует такой массив к формату [массива объектов](#options-as-an-array-of-objects):

<<< FRAGMENT ./demo/OptionsObjectArrayNormalized.ts#snippet{ts}

### Изменение имён полей опций

Если вы хотите изменить имена свойств (например, использовать поле `name` для отображения текста), вы можете сделать это, установив пропсы `text-field`, `value-field` и `disabled-field` в строку с нужным именем свойства:
