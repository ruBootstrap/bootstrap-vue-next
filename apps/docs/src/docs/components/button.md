# Кнопка

<PageHeader>

Используйте пользовательский компонент `BButton` из Bootstrap для действий в формах, диалогах и других местах. Включает поддержку различных контекстных вариантов, размеров, состояний и многого другого.

</PageHeader>

## Обзор

Компонент `BButton` из BootstrapVueNext генерирует элемент `<button>`, `<a>` или компонент `RouterLink` со стилями кнопки.

<<< DEMO ./demo/ButtonOverview.vue#template{vue-html}

## Тип элемента

Обычно компонент `BButton` рендерит элемент `<button>`. Однако вы также можете отрендерить элемент `<a>`, указав значение пропса `href`. Можно также сгенерировать `vue-router` `RouterLink`, если передать значение для пропса `to` (требуется `vue-router`).

<<< DEMO ./demo/ButtonElementType.vue#template{vue-html}

## Тип

Вы можете указать тип кнопки, установив пропс `type` в `'button'`, `'submit'` или `'reset'`. По умолчанию используется `'button'`.

Обратите внимание: пропс `type` не влияет на кнопку, если установлены пропсы `href` или `to`.

## Размеры

Хотите кнопки побольше или поменьше? Укажите `lg` или `sm` через пропс `size`.

<<< DEMO ./demo/ButtonSizing.vue#template{vue-html}

## Контекстные варианты

Используйте пропс `variant` для генерации различных контекстных вариантов кнопок Bootstrap.

По умолчанию `BButton` будет отображаться с вариантом `secondary`.

Пропс `variant` добавляет классы Bootstrap `.btn-<variant>` на отрендеренную кнопку. Подробнее см. на странице [Цветовые варианты](/docs/reference/color-variants).

### Варианты с заливкой

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` и `dark`.

<<< DEMO ./demo/ButtonContextualVariants.vue#template{vue-html}

### Варианты с обводкой

Нужна кнопка без яркой заливки? Используйте варианты `outline-*`, чтобы убрать все фоновые изображения и цвета у любой кнопки `BButton`:

`outline-primary`, `outline-secondary`, `outline-success`, `outline-danger`, `outline-warning`, `outline-info`, `outline-light` и `outline-dark`.

<<< DEMO ./demo/ButtonOutlineVariants.vue#template{vue-html}

### Вариант-ссылка

Вариант `link` отобразит кнопку с внешним видом ссылки, сохраняя при этом стандартные отступы и размер кнопки.

<<< DEMO ./demo/ButtonLinkVariant.vue#template{vue-html}

**Совет:** чтобы убрать подчёркивание при наведении у кнопки-варианта link, установите `underline-opacity="0"`.

## Кнопки на всю ширину (блочные)

Создавайте адаптивные стеки полноширинных («блочных») кнопок, оборачивая кнопку(и) в div и указывая классы `d-grid` и `gap-*`. Используя CSS-утилиты вместо булевого свойства на кнопке, вы получаете больший контроль над отступами, выравниванием и адаптивным поведением. Подробнее см. в [документации Bootstrap 5](https://getbootstrap.su/docs/5.3/components/buttons/#block-buttons).

<<< DEMO ./demo/ButtonBlockLevel.vue#template{vue-html}

## Стиль pill

Предпочитаете более округлые кнопки? Просто установите пропс `pill` в значение true.

<<< DEMO ./demo/ButtonPillStyle.vue#template{vue-html}

Этот пропс добавляет утилитарный класс Bootstrap v5 `.rounded-pill` на отрендеренную кнопку.

## Стиль с квадратными углами

Хотите кнопки с более квадратными углами? Просто установите пропс `squared` в значение true.

<<< DEMO ./demo/ButtonSquaredStyle.vue#template{vue-html}

Пропс `squared` добавляет утилитарный класс Bootstrap v5 `.rounded-0` на отрендеренную кнопку. Пропс `pill` имеет приоритет над пропсом `squared`.

## Отключённое состояние

Установите пропс `disabled`, чтобы отключить стандартную функциональность кнопки. `disabled` также работает с кнопками, отрендеренными как `<a>` и `RouterLink` (то есть с установленным пропсом `href` или `to`).

<<< DEMO ./demo/ButtonDisabledState.vue#template{vue-html}

## Состояние нажатия и переключение

Кнопки будут выглядеть нажатой (с более тёмным фоном, рамкой и внутренней тенью), если пропс `pressed` установлен в `true`.

Пропс `pressed` может принимать три значения:

- `true`: добавляет класс `.active` и атрибут `aria-pressed="true"`.
- `false`: убирает класс `.active` и добавляет атрибут `aria-pressed="false"`.
- `null`: (по умолчанию) ни класс `.active`, ни атрибут `aria-pressed` не устанавливаются.

Чтобы создать кнопку, которую можно переключать между активным и неактивным состоянием, используйте `v-model` (доступно в Vue 3.0+) на свойстве `pressed`, указав `v-model:pressed`.

<<< DEMO ./demo/ButtonPressedState.vue#template{vue-html}

Если вы используете стиль переключателя для интерфейса радио- или чекбоксов, лучше воспользоваться встроенной поддержкой стиля `button` в [`BFormRadioGroup`](/docs/components/form-radio) и [`BFormCheckboxGroup`](/docs/components/form-checkbox).

## Загрузка

`BButton` поддерживает несколько свойств для индикации состояния загрузки. Когда `loading` равно true, активируется состояние загрузки, иначе отображается обычная кнопка. При активной загрузке отображается `loading-text` и спиннер. Если `loading-fill` равно true, кнопка показывает только спиннер, а `loading-text` игнорируется. Вы также можете переопределить спиннер с помощью слота `loading-spinner` или полностью заменить содержимое кнопки с помощью слота `loading`.

<<< DEMO ./demo/ButtonLoading.vue#template{vue-html}

## Поддержка RouterLink

Смотрите справочную документацию по [`Router support`](/docs/reference/router-links) для различных поддерживаемых пропсов, связанных с `RouterLink`.

## Доступность

Если пропс `href` установлен в `'#'`, `BButton` отрендерит элемент ссылки (`<a>`) с атрибутом `role="button"` и соответствующими обработчиками нажатий клавиш (<kbd>Enter</kbd> и <kbd>Space</kbd>), чтобы ссылка вела себя как обычная кнопка для пользователей экранных читалок и клавиатуры. Если кнопка отключена, на элемент `<a>` будет добавлен атрибут `aria-disabled="true"`.

Если `href` установлен в любое другое значение (~~или используется пропс `to`~~), `role="button"` не будет добавлен, и обработчики событий клавиатуры не будут активированы.

<NotYetImplemented>Поведение с `role="button"` реализовано частично, но обработчики клавиатуры пока не работают</NotYetImplemented>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/button.data'
</script>
