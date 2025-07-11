# Форма

<PageHeader>

Компонент формы BootstrapVueNext и вспомогательные компоненты, которые опционально поддерживают inline-стили и состояния валидации. Используйте их вместе с другими компонентами управления формой BootstrapVueNext для лёгкой настройки, адаптивной верстки и единого внешнего вида.

</PageHeader>

## Введение в формы и элементы управления

Обязательно указывайте подходящий `type` для всех полей (например, `email` для email-адреса или `number` для числовых данных), чтобы использовать современные элементы управления, такие как проверка email, выбор числа и др.

Ниже приведён пример стилей формы BootstrapVueNext. Далее — документация по поддерживаемым компонентам, макетам форм и др.

<<< DEMO ./demo/FormOverview.vue

## Inline-форма

В Bootstrap 5 классы для макета форм заменены на grid-систему. См. [Changelog Bootstrap 5](https://getbootstrap.su/docs/5.3/migration/#forms).

Для создания горизонтальных форм используйте класс `.row` для групп и классы `.col-_-_` для задания ширины меток и полей. Не забудьте добавить `.col-form-label` к `<label>`, чтобы они были выровнены по вертикали с полями.

Возможно, потребуется вручную настроить ширину и выравнивание отдельных полей с помощью [утилит отступов](/docs/reference/spacing-classes) (см. пример ниже). Также всегда добавляйте `<label>` к каждому полю, даже если нужно скрыть его от обычных пользователей с помощью `.visually-hidden`.

<<< DEMO ./demo/FormInline.vue#template{vue-html}

Поддерживаются и кастомные элементы управления и select.

<<< DEMO ./demo/FormInlineSelect.vue

## Плавающие метки

Обёрните `BFormInput`, `BFormTextarea` или `BFormSelect` в `BFormFloatingLable`, чтобы включить плавающие метки. Для корректной работы Bootstrap 5 требуется указать `placeholder` для каждого поля.

<<< DEMO ./demo/FormFloatingLabels.vue#template{vue-html}

Плавающие метки корректно работают для состояний disabled и readonly. Помимо текстовых полей, они поддерживаются для plaintext, textarea, input group и select. Подробнее см. в [документации Bootstrap 5](https://getbootstrap.su/docs/5.3/forms/floating-labels).

Атрибут `floating` на компоненте `BForm` применяется только к одиночным полям:

<<< DEMO ./demo/FormSingleFloat.vue#template{vue-html}

## Доступность

Убедитесь, что у всех элементов управления формой есть доступное имя, чтобы их назначение было понятно пользователям вспомогательных технологий. Самый простой способ — использовать элемент `<label>`, либо для кнопок — добавить описательный текст внутри `<button>...</button>`.

Если невозможно добавить видимый `<label>` или текст, используйте альтернативные способы:

- `<label>`, скрытый с помощью `.visually-hidden`
- Указание существующего элемента как метки через `aria-labelledby`
- Атрибут title
- Явное задание имени через aria-label

Если ничего из этого не указано, вспомогательные технологии могут использовать placeholder как имя для `<input>` и `<textarea>`. Примеры ниже показывают рекомендуемые подходы для разных случаев.

Хотя скрытый текст (`.visually-hidden`, `aria-label`, а также placeholder, который исчезает при вводе) помогает пользователям вспомогательных технологий, отсутствие видимой метки может быть неудобно для некоторых пользователей. Лучше всего использовать видимую метку — это полезно и для доступности, и для удобства.

## Связанные компоненты для форм и макета

См. также:

- [`BFormInput`](/docs/components/form-input) — текстовые и подобные поля
- [`BFormTextarea`](/docs/components/form-textarea) — многострочные поля
- [`BFormSelect`](/docs/components/form-select) — выпадающие списки
- [`BFormRadio`](/docs/components/form-radio) — радиокнопки
- [`BFormCheckbox`](/docs/components/form-checkbox) — чекбоксы
- [`BFormFile`](/docs/components/form-file) — выбор файла
- [`BFormSpinbutton`](/docs/components/form-spinbutton) — числовой спиннер
- [`BFormTags`](/docs/components/form-tags) — ввод тегов
- `BFormRating` — рейтинг в виде звёзд (<NotYetImplemented/>)
- [`BButton`](/docs/components/button) — кнопки
- [`BFormGroup`](/docs/components/form-group) — обёртка для полей с меткой, подсказкой и обратной связью
- [`BInputGroup`](/docs/components/input-group) — поля с аддонами
- [`BFormRow`](/docs/components/grid-system) — строки и колонки с уменьшенными отступами (см. [Layout и grid](/docs/components/grid-system))

## Вспомогательные компоненты для форм

Вместе с плагином Form доступны следующие компоненты:

- `BFormText` — блоки подсказок для полей
- `BFormInvalidFeedback` — текст для невалидных состояний
- `BFormValidFeedback` — текст для валидных состояний
- `BFormDatalist` — быстрое создание `<datalist>` для `BFormInput` или обычного `<input>`

### Вспомогательный компонент для текста

Покажите подсказку под полем с помощью компонента `BFormText`. Текст отображается приглушённым цветом и меньшим шрифтом.

::: info Tip
Подсказку следует явно связать с полем через атрибут `aria-describedby`, чтобы вспомогательные технологии (например, экранные читалки) озвучивали её при фокусе на поле.
:::

<<< DEMO ./demo/FormTextHelper.vue#template{vue-html}

### Вспомогательные компоненты для обратной связи

Компоненты `BFormValidFeedback` и `BFormInvalidFeedback` показывают обратную связь (в зависимости от состояния поля) как цветной текст. Они должны располагаться после поля (быть его «соседом») и отображаются на основе нативного состояния валидации браузера. Чтобы показать их принудительно, используйте пропс `force-show`, или привяжите состояние поля к пропсу `state` компонента обратной связи, или добавьте класс `was-validated` родителю (например, форме). Подробнее см. раздел [**Валидация**](#validation).

Используйте булевый пропс `tooltip`, чтобы изменить отображение с блока на статический tooltip. Обычно обратная связь появляется под полем. В этом режиме важно, чтобы родитель имел стиль `position: relative;` (или класс `position-relative`). Обратите внимание: tooltip может перекрывать другие поля, метки и т.д.

:::info NOTE
Некоторые элементы (например, [`BFormRadio`](/docs/components/form-radio#contextual-states) и [`BFormCheckbox`](/docs/components/form-checkbox#contextual-states)) имеют обёртки, которые мешают автоматическому отображению обратной связи (так как компонент обратной связи не является соседом поля). Используйте пропс `state` (привязанный к состоянию поля) или `force-show`, чтобы показать обратную связь.
:::

<<< DEMO ./demo/FormFeedbackHelper.vue

### Вспомогательный компонент Datalist

Для браузеров, поддерживающих [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), компонент `<BFormDatalist>` позволяет быстро создать `<datalist>` и дочерние `<option>` через массив в пропсе `options`.

Можно также вручную добавить `<option>` внутрь `<BFormDatalist>`. Они появятся ниже сгенерированных через `options`. Или используйте слот `first`, чтобы разместить опции выше сгенерированных.

<<< DEMO ./demo/FormDataHelper.vue

См. также:

- [`<BFormInput> datalist`](/docs/components/form-input#datalist-support) — использование datalist
- [`<BFormSelect>` пропс `options`](/docs/components/form-select#options-property) — форматы и вспомогательные пропсы для options. Обратите внимание: `<BFormDatalist>` поддерживает только плоский список опций, в отличие от `<BFormSelect>`, который поддерживает и группы.

## Валидация

Отключите нативную HTML5-валидацию, установив пропс `novalidate` в true на `BForm`.

Установите пропс `validated` на `BForm` в `true`, чтобы добавить класс `.was-validated` и включить стили валидации Bootstrap v5.

Все элементы управления формой поддерживают пропс `state`, который переводит поле в одно из трёх контекстных состояний:

- `false` (некорректное состояние) — для обязательных или блокирующих полей. Пользователь должен корректно заполнить это поле для отправки формы
- `true` (корректное состояние) — для поэтапной валидации, чтобы поощрять пользователя при заполнении формы
- `null` — не отображает состояние валидации

Подробнее см. в [документации Bootstrap v5 по валидации форм](https://getbootstrap.su/docs/5.3/forms/validation/).

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/form.data'
</script>
