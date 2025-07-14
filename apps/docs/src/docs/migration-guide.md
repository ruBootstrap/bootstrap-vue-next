# Гайд по миграции

## Обзор

`BootstrapVueNext` — это полностью новая реализация [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) на базе [Vue 3](https://vuejs.org/) и [Bootstrap 5](https://getbootstrap.com/). Поэтому не стоит ожидать, что это будет прямой заменой. Где возможно, совместимость сохранена, но приоритетом является чистый опыт разработки с `Vue 3`, `Bootstrap 5` и этой библиотекой.

Начните с ознакомления с [гайдом по миграции на Vue 3](https://v3-migration.vuejs.org/), особенно с разделом [breaking changes](https://v3-migration.vuejs.org/breaking-changes/) и [гайдом по миграции на Bootstrap 5](https://getbootstrap.com/docs/5.3/migration/#v530). Хотя в некоторых случаях эта библиотека изолирует вас от изменений в базовых библиотеках, общее понимание изменений в основных зависимостях будет полезно.

Например, вы, вероятно, часто используете утилитарные классы Bootstrap для стилизации компонентов. В `Bootstrap 5` произошли [breaking changes](https://getbootstrap.com/docs/5.3/migration/#utilities-3) — все классы, связанные с `left` и `right` (или `l` и `r`), теперь заменены на `start` и `end` (или `s` и `e`). Это повлияет на такие компоненты, как `BNavBar`, и BootstrapVueNext не может это контролировать.

Аналогично, пропсы и значения `left` и `right` в API `bootstrap-vue-next` обычно заменены на `start` и `end`.

Bootstrap-vue-next будет вносить breaking changes всякий раз, когда Bootstrap помечает что-то как "устаревшее". Эти изменения могут быть решены автоматически или потребовать ручных действий от пользователей библиотеки.

### Nuxt

`bootstrap-vue-next` интегрируется с `nuxt 3`, поэтому если вы используете `nuxt`, ознакомьтесь с их [гайдом по миграции](https://nuxt.com/docs/migration/overview) и нашей справкой по [router link](/docs/reference/router-links).

### Статус

Этот гайд по миграции находится в разработке. Мы дополняем его по мере завершения документации и проверки на соответствие, стараясь отмечать каждый компонент или директиву, которые ещё не прошли полный процесс.

<NotYetDocumented :help-only="true" />

Если раздел этого гайда не помечен как "в процессе", мы всё равно заинтересованы в примерах миграции, которые показались вам сложными, или в уточнениях, если детали гайда были недостаточно понятны.

### Устаревание

Мы помечаем функции BootstrapVue как устаревшие по нескольким причинам:

- Если есть более простой или последовательный способ реализовать функциональность в BootstrapVueNext
- Если функция устарела в Bootstrap 5
- Если мы считаем, что эту функциональность проще реализовать с помощью нативных классов bootstrap
- Если мы не видим спроса на функцию, особенно если её можно реализовать позже без breaking change

Для любой устаревшей функции, особенно последнего случая, не стесняйтесь создавать [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) или отправлять pull request.

## Модификатор sync

Ряд компонентов в `bootstrap-vue` используют модификатор `.sync` для `v-bind`. Этот модификатор заменён свойствами модели (обычно называются models).

Например, чтобы сделать двустороннюю привязку к свойству `indeterminate` в `BFormCheckBox`, используйте v-bind к модели с именем `indeterminate`, а не добавляйте sync к свойству:

<<< FRAGMENT ./demo/SyncBefore.vue#template{vue-html}

становится

<<< FRAGMENT ./demo/SyncAfter.vue#template{vue-html}

Подробнее см. в [гайде по миграции на Vue 3](https://v3-migration.vuejs.org/breaking-changes/v-model.html).

## Нативные события

BootstrapVue иногда перечислял нативные события, такие как `click`, которые всплывали с базового HTML-элемента. Сейчас мы этого не делаем, чтобы список событий был согласован между документацией и кодом.

## Общие свойства

### Скругление

`BAvatar`, `BAvatarGroup`, `BCardImg`, `BImg` и `BOverlay` реализуют [`RadiusElementExtendables`](/docs/types#radiuselementextendables) для поддержки сложного поведения скругления. Пропсы `rounded`, `rounded-top`, `rounded-bottom`, `rounded-start`, и `rounded-end` принимают значения [`RadiusElement`](/docs/types#radiuselement) для задания скругления. Пропсы для отдельных сторон, такие как `rounded-top`, перекрывают общий проп `rounded` для этой стороны.

Это заменяет значения `top`, `bottom`, `left`, и `right` для пропа `rounded`.

### Показ и скрытие

Мы постарались стандартизировать имена и поведение пропсов, связанных с показом и скрытием компонентов и подкомпонентов.

Основной реактивный способ управления видимостью компонента — через `v-model`, а не через `visible`, как в `BCollapse`, `BModal`, `BToast`. Обратите внимание, что `show` и `visible` всё ещё поддерживаются для задания начальной видимости этих компонентов.

Вместо использования префикса `hide` для указания, что подкомпонент не должен рендериться, мы перешли к префиксу `no`. Например, в `BPlaceholder` `hideHeader` становится `noHeader`. Аналогично, мы используем префикс `no` вместо `skip` в таких местах, как `BCollapse`, где `skipAnimation` становится `noAnimation`.

Компоненты и свойства, на которые влияет это изменение, приведены в таблице ниже:

<ShowHideProps/>

### v-html

BootstrapVue предоставлял ряд пропсов с именами `html` и `*-html`, которые передавали произвольные данные в Vue через `v-html`. Хотя для каждого такого случая было предупреждение, использование `v-html` не рекомендуется, и мы считаем, что скрывать это за другими пропсами — плохая практика. Вместо этого мы обеспечили возможность получить ту же функциональность через слоты. Во многих случаях слоты уже были доступны и имели приоритет над пропсами `[*-]html`, а там, где не было прямой замены, мы добавили её. Мы считаем, что опыт разработчика в этих случаях не хуже, чем при использовании пропсов. Самое главное — любое использование `v-html` в вашем коде теперь будет явным. См. [документацию Vue](https://vuejs.org/guide/best-practices/security.html#html-injection) по поводу XSS-уязвимости, которую открывает использование `v-html`.

| Компонент                      | Проп                  | Слот-замена      |
| ------------------------------ | --------------------- | ---------------- |
| `BBreadcrumbItem`              | `html`                | `default`        |
| `BCard`                        | `footer-html`         | `footer`         |
| `BCard`                        | `header-html`         | `header`         |
| `BCardFooter`                  | `html`                | `default`        |
| `BCardHeader`                  | `html`                | `default`        |
| `BCarouselSlide`               | `caption-html`        | `caption`        |
| `BCarouselSlide`               | `text-html`           | `default`        |
| `BDropdown`                    | `html`                | `default`        |
| `BInputGroup`                  | `append-html`         | `append`         |
| `BInputGroup`                  | `prepend-html`        | `prepend`        |
| `BModal`                       | `cancel-title-html`   | `cancel`         |
| `BModal`                       | `ok-title`            | `ok`             |
| `BModal`                       | `title-html`          | `title`          |
| `BNavItemDropdown`             | `html`                | `default`        |
| `BPopover` [\*](#popover-html) | `html`                | `default`        |
| `BProgressBar`                 | `label-html`          | `default`        |
| `BTable`                       | `empty-filtered-html` | `empty-filtered` |
| `BTable`                       | `empty-html`          | `empty`          |
| `BTable`                       | `caption-html`        | `table-caption`  |
| `BTableSimple`                 | `caption-html`        | `table-caption`  |

<a name="popover-html">В BootstrapVue у `b-popover` не было атрибута `html`, но в альфа-версиях BootstrapVueNext он был</a>

`BFormCheckboxGroup` и `BFormRadioGroup` реализуют scoped slot `option`, который принимает параметр `Record<string, unknown>`. Вы можете добавить произвольные поля в элементы массива options, который передаёте, и они будут доступны в слоте. Пример ниже использует данные из options для создания html прямо в слоте.

<<< DEMO ./demo/CheckboxGroupMigration.vue

Или можно сделать прямой перевод `BFormRadioGroup`, передавая строку HTML его дочерним элементам. Если вы передаёте пользовательские данные, это всё равно открывает ваш код для <a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting"><abbr title="Cross Site Scripting Attacks">XSS-атак</abbr></a>, если вы не <a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">очищаете</a> пользовательскую строку, но библиотека BootstrapVueNext не добавляет дополнительный уровень абстракции к этой уязвимости.

<<< DEMO ./demo/RadioGroupMigration.vue

## Компоненты

### Grid

BootstrapVueNext не реализует возможность определения имен `breakpoint`.

См. [гайд по миграции на Bootstrap 5](https://getbootstrap.com/docs/5.3/migration/#grid-updates), в частности, значения для `order` на `<BCol>` только поддерживает 1 - 5.

### BAccordion

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

#### BAccordionItem

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

### BAlert

Как в `bootstrap-vue`, простой `BAlert` по умолчанию невидим. Однако, способы показа и скрытия алерта разные. Пропс `show` в `bootstrap-vue` устарел, используйте `model-value` вместо него.

<<< FRAGMENT ./demo/AlertBefore.vue#template{vue-html}

становится

<<< FRAGMENT ./demo/AlertAfter.vue#template{vue-html}

Для соответствия свойствам других компонентов, слоты и события, которые используют термин `dismissible` в `bootstrap-vue`, теперь используют термин `close`. Например, событие `dismissed` теперь событие `closed`, а слот `dismiss` теперь слот `close`.

### BAspect

<NotYetImplemented/>

### BAvatar

Поддержка иконок устарела. Поддержку иконок можно реализовать через слот по умолчанию, включая либо [unplug icons](/docs/icons) или встраивая `.svg`.

<<< DEMO ./demo/AvatarIcon.vue#template{vue-html}

#### Позиционирование Badge

Позиционирование Badge изменилось на использование одного свойства `badge-placement` и нашего
[`CombinedPlacement` utility](/docs/types/combined-placement) вместо отдельных свойств.

Например, используйте `badge-placement='top'` вместо `badge-top` или `badge-placement='end'` вместо
`badge-right`. Для объединенных пропсов, вместо использования `badge-top` и `badge-right`, используйте
`badge-placement='top-end'.

#### Скругление сторон

См. раздел [Скругление](#скругление).

### BBadge

Badges больше не имеют фокусных или наведенных стилей для ссылок. См. [гайд по миграции на Bootstrap](https://getbootstrap.com/docs/5.3/migration/#badges) для получения дополнительной информации.

### BBreadcrumb

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

### BButton

Пропс `block` устарел. См. наш [`BButton` документацию](/docs/components/button#block-level-buttons)
и [документацию Bootstrap](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) для
деталей.

### BButtonClose

`BButtonClose` переименован в `BCloseButton` для соответствия [Bootstrap](https://getbootstrap.com/docs/5.3/components/close-button/).

Пропсы `content` и `text-variant` устарели, так как Bootstrap 5 перешел на использование встроенного svg для иконки закрытия. См. [их гайд по миграции](https://getbootstrap.com/docs/5.3/migration/#close-button-1) для деталей.

### BButtonToolbar

[Навигация по клавиатуре](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/button-toolbar#keyboard-navigation) не реализована.

### BCalendar

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">См. issue #1860</BLink></NotYetImplemented>

### BCard

Размещение изображения достигается одним пропсом `img-placement`, который принимает значения
`top`, `bottom`, `start`, `end`, или `overlay`. Это позволяет нам устареть пропсы `imgBottom`,
`imgEnd`, `imgLeft`, `imgRight`, `imgStart`, и `imgTop` из `BCard`.

Аналогично, пропсы `top`, `bottom`, `left`, и `right` на `BCardImg` устарели в пользу
одного пропса `placement`, который принимает значения `top`, `bottom`, `start`, и `end`. Обратите внимание, что
`end` и `start` ещё не реализованы.

Пропсы `sub-title`, `sub-title-tag` и `sub-title-text-variant` переименованы в
`subtitle`, `subtitle-tag` и `subtitle-text-variant`, соответственно.

Для компонентов `BCardBody`, `BCardHeader`, `BCardFooter`, `BCardTitle`, и `BCardText` пропсы, специфичные для компонента, устарели и заменены общими пропсами. Например, `footer-bg-variant` заменен на `bg-variant`. Это верно для всех пропсов `body-*`, `header-*`, и `footer-*` на этих компонентах. Обратите внимание, что специфичные пропсы все ещё сохраняются на основном компоненте `BCard`.

Аналогично, пропсы `text-tag` и `title-tag` заменены на `tag` на компонентах `BCardText`
и `BCardTitle`.

`body-border-variant` и `body-variant` не реализованы на `BCard` и `border-variant` не
реализован на `BCardBody`.

См. раздел [v-html](#v-html) по информации об устаревании пропсов `footer-html` и `header-html` на
`BCard` и пропсов `html` на `BCardFooter` и `BCardHeader`.

### BCardImgLazy

Эта функциональность заменена ленивой загрузкой на `<BImg>`, см. [BImg notes](#bimg) для деталей.

### BCarousel

События `sliding-start` и `sliding-end` переименованы в `slide` и `slid`.
Пропс `label-indicators` переименован в `indicators-button-label`.

См. раздел [v-html](#v-html) по информации об устаревании пропсов `caption-html` и `text-html` на
`BCarouselSlide`.

### BCollapse

Пропс `accordion` устарел: В `BootstrapVue`/`Bootstrap4`, аккордеоны реализованы через `BCollapse`.
В `BootstrapVueNext`/`Bootstrap5` аккордеоны являются первоклассными гражданами, пожалуйста, используйте
[`BAccordion`](/docs/components/accordion) вместо этого.

Пропс `toggle` заменил проп `appear` с немного другим семантикой. Чтобы создать схлопывание, которое по умолчанию закрыто и переходит в открытое при монтировании, установите `visible` в false и `toggle` в true.

Слот `close` заменен на `hide` для соответствия другим пропсам и событиям на этом компоненте.

События `$root` экземпляров `bv::collapse::state` и `bv::toggle::collapse` устарели.

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

### BDropdown

BootstrapVueNext использует [floating-ui](https://floating-ui.com/) для реализации выпадающих списков. Это влияет на значения и поведение свойств, таких как `boundary`, а также свойства выравнивания и размещения. Для тонкой настройки используйте `floating-middleware` вместо `popper-opts`. См. [нашу документацию](/docs/components/dropdown) и [их](https://floating-ui.com/) для деталей.

BootstrapVueNext заменяет пропсы `drop-up`, `drop-left` и `drop-right` на один пропс `placement`.
Допустимые значения для `placement` определены в документации `float-ui` [здесь](https://floating-ui.com/docs/computeposition#placement).

Пропс `block` устарел. См. наш [`BDropdown` документацию](/docs/components/dropdown#block-level-dropdowns)
и [документацию Bootstrap](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) для
деталей.

Пропс `right` заменен на `end`, см. раздел [Обзор](#обзор) этой страницы для деталей.

Пропс `html` устарел, используйте `button-content`.

События `$root` экземпляров `bv::dropdown::hide` и `bv::dropdown::show` устарели.

Аргумент логического типа для управления возвратом фокуса к кнопке переключения в слоте по умолчанию устарел. Это менее важно в BootstrapVueNext, так как по умолчанию v5 не имеет кольца фокуса, как v4.

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

Событие `click`, которое BootstrapVueNext испускал при нажатии на левую или боковую сторону `split` выпадающего списка, заменено на `split-click`, который предоставляет нативное событие мыши. Это связано с тем, что именование события 'click' скрывало нативное событие `click`, поэтому подавление этого события для родителей, которые могли иметь неожиданные действия (например, ссылка, которая переходит на новую страницу), было сложно.

<NotYetImplemented>`toggleAttrs`</NotYetImplemented>

#### Подкомпоненты BDropdown

BootstrapVueNext широко использует наследованные атрибуты для реализации настроек в подкомпонентах выпадающего списка, где BootstrapVue использовал явные пропсы на подкомпоненты. В общем случае подкомпоненты реализованы как элемент `<li>`, который оборачивает фактический подкомпонент. В этих случаях есть пропс `wrapper-class`, который используется для применения классов к элементу `<li>`, и пропс `*-class`, который используется для применения классов к подкомпоненту, где `*-class` связан с именем подкомпонента. Например, `BDropdownDivider` имеет пропс `divider-class`, который используется для добавления классов к фактическому элементу разделителя. Кроме того, наследованные атрибуты применяются к подкомпоненту, а не к обёртке `<li>` тега, и есть явно определенный тег `wrapper-attr`, который размещает дополнительные атрибуты на тег `<li>`.

См. код для
[`BDropdownDivider`](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/packages/bootstrap-vue-next/src/components/BDropdown/BDropdownDivider.vue)
должен дать четкое представление о том, как все это взаимосвязано, а оставшаяся часть этого раздела даст конкретные инструкции по миграции из BootstrapVue.

Несколько подкомпонентов BootstrapVue имеют явный пропс `id`, который устанавливает id на внутренний компонент. В BootstrapVueNext `id` также, а также любые другие неспецифицированные пропсы, будут установлены на внутренний компонент, что имеет тот же эффект, что и в BootstrapVue.

Например:

<<< FRAGMENT ./demo/DropdownHeaderMigration.vue#template{vue-html}

дает

<<< FRAGMENT ./demo/DropdownHeaderMigration.html#template

Исключением из этого правила является `<BDropdownGroup>`, где мы явно реализуем `id`, чтобы иметь возможность сгенерировать заголовок id.

##### BDropdownForm

`inline` устарел, см. [BForm](#bform) информацию о миграции. Чтобы добавить классы к тегу `<form>` в `BdropdownForm` используйте пропс `form-class`.

Пропс `disabled` устарел, установите пропс `disabled` на отдельные компоненты, как вы делаете с `BForm`.

### BEmbed

<NotYetImplemented/>

### BForm

Bootstrap 5 отказался от формо-специфичных классов сетки для системы сетки. См. [Changelog Bootstrap 5](https://getbootstrap.com/docs/5.3/migration/#forms), поэтому мы больше не явно реализуем свойство `inline` на компоненте `BForm` и нет компонента `BFormRow`. Формы всё ещё поддерживаются через использование классов Bootstrap. См. [документацию по форме](/docs/components/form#inline-form) для получения дополнительной информации.

#### BForm Components

`Vue 3` изменил способ работы с `v-model` связывания и в процессе изменил руководство при именовании основного свойства модели и событий для основной модели. `bootstrap-vue-next` следует этому руководству, что влияет на все обёртки для формы ввода. Если вы ищете свойство `value` или события `change` и `input`, вы найдете эту функциональность в свойстве `modelValue`
и событиях `update:model-value`. Bootstrap-vue-next больше не предоставляет пользовательские события `change` и
`input`, поэтому нативные версии этих событий теперь доступны.

См. [гайд по миграции на Vue 3](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
для получения дополнительной информации.

См. раздел [v-html](#v-html) по информации об устаревании пропса `html` на
`BFormDatalist`, `BFormRadioGroup`, `BFormSelect`, и`BFormSelectOptionGroup`

### BFormCheckbox

См. [BForm Components](bform-components)

### BFormDatePicker

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">См. issue #1860</BLink></NotYetImplemented>

### BFormFile

<NotYetDocumented type="component"/>

### BFormGroup

Используйте `label-visually-hidden` вместо `label-sronly` согласно
[гайду по миграции на Bootstrap](https://getbootstrap.com/docs/5.3/migration/#helpers-2)

### BFormInput

Доступ к нативному элементу `input` реализован по-другому из-за изменений в том, как Vue 3
обрабатывает ссылки. См. [документацию BFormInput](/docs/components/form-input#exposed-input-element) для получения дополнительной информации.

<NotYetImplemented>Отключение событий мыши.</NotYetImplemented>

Свойства `trim`, `lazy`, или `number` устарели. Мы поддерживаем нативные модификаторы
[`trim`, `lazy`, и `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
Они работают так, как описано в vue.js, поэтому нет больше необходимости в свойствах.

### BFormRadio

См. [BForm Components](bform-components)

### BFormRating

`BFormRating` теперь доступен в BootstrapVueNext, сохраняя большинство функциональности BootstrapVue, под Vue 3's v-model конвенции. См. [гайд по миграции на Vue 3](https://v3-migration.vuejs.org/breaking-changes/v-model.html) для деталей нового синтаксиса `v-model`.

Следующие функции из BootstrapVue устарели:

- **Пропс `disabled`**: Взаимодействие отключения компонента рейтинга
- **Отправка формы**: Пропс `name` для генерации скрытых полей для отправки формы
- **Группы ввода**: Использование `BFormRating` внутри компонентов `BInputGroup`
- **Интернационализация**: Пропс `locale` для локализованного отображения и поддержки RTL

#### Система иконок изменений

Следующие пропсы, связанные с иконками из BootstrapVue, устарели:

- `icon-empty`: Для указания пустой иконки звезды
- `icon-half`: Для указания полузаполненной иконки звезды
- `icon-full`: Для указания заполненной иконки звезды
- `icon-clear`: Для указания иконки кнопки очистки

Вместо этого BootstrapVueNext предоставляет два подхода для настройки иконок:

1. **Встроенные встроенные SVG-иконки** (рекомендуется): Использует встроенные SVG-иконки звезды, которые работают с пропсами `variant`, `color`, и `size`
2. **Пользовательские иконки через scoped slots**: Для полной настройки, где вы сами обрабатываете все стили

**Важно:** При использовании пользовательских иконок через scoped slots, пропсы `variant`, `color`, и `size` не применяются. Вам нужно будет обрабатывать все стили в вашем пользовательском CSS.

### BFormSelect

[Опции как объект](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/form-select#options-as-an-object) устарел в BootstrapVue и никогда не реализован в BootstrapVueNext

### BFormSpinButton

См. [BForm Components](bform-components)

### BFormTags

В BootstrapVue события для некоторых других элементов управления, таких как `BFormSelect`, выравнивались с
событиями `inputHandlers` для скопленных свойств слота по умолчанию, так что они могли быть напрямую связаны. См. [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/form-tags#advanced-custom-rendering-usage) документацию для примера. Это больше не так с BootstrapVueNext.

В BootstrapVueNext предпочитается чистые API для включения такого соответствия событий, поэтому многие из расширенных
примеров в [документации BFormTags](https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/form-tags.html#custom-rendering-with-default-scoped-slot) более явны при связывании атрибутов из других элементов управления. Пожалуйста,
обратитесь к этим примерам для руководства при миграции.

### BFormTimePicker

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">См. issue #1860</BLink></NotYetImplemented>

### BImg

См. раздел [Скругление](#скругление).

Ленивая загрузка теперь достигается через встроенный атрибут `loading` вместо отдельного компонента. Таким образом,
`BImgLazy` и `BCardImgLazy` устарели.

### BImgLazy

Эта функциональность заменена ленивой загрузкой на `<BImg>`, см. [BImg](#bimg) для деталей.

### BInputGroup

Bootstrap 5 [больше не требует](https://getbootstrap.com/docs/5.3/migration/#forms-1) `input-group-append` или `input-group-prepend`
на элементы для добавления или добавления их в элемент группы ввода, они могут просто быть добавлены как прямые дети элемента группы ввода. Из-за этого изменения `<BInputGroupAppend>`, `<BInputGroupPrepend>`, и `<BInputGroupAddon>` больше не нужны и устарели. Это также имеет последствия на использование `<BInputGroupText>` - в BootstrapVue, этот компонент использовался для группировки подкомпонентов. В BootstrapVueNext, `<BInputGroupText>` должен использоваться только для применения стилей к текстовым элементам, добавленным или добавленным в группу. Использование его для группировки компонентов нарушает автоматическое добавление и добавление стилей.

См. раздел [v-html](#v-html) по информации об устаревании пропсов `append-html` и `prepend-html`.

### BInputGroupAddon

Устарел - См. [BInputGroup]

### BInputGroupAppend

Устарел - См. [BInputGroup]

### BInputGroupText

Устарел - См. [BInputGroup]

### BInputGroupPrepend

Устарел - См. [BInputGroup]

### BFormSpinbutton

Свойство `locale` в BootstrapVueNext позволяет только один локаль, в то время как BSV позволяет массив локалей. Если это ограничение влияет на ваш сценарий, пожалуйста, [создайте issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues) с объяснением ожидаемого поведения.

### BFormTextbox

Свойства `trim`, `lazy`, или `number` устарели. Мы поддерживаем нативные модификаторы
[`trim`, `lazy`, и `number`](https://vuejs.org/guide/essentials/forms.html#modifiers).
Они работают так, как описано в vue.js, поэтому нет больше необходимости в свойствах.

### BJumbotron

<NotYetImplemented/>

Обратите внимание, что Bootstrap отказался от компонента Jumbotron, но его можно воспроизвести с помощью утилитных классов. См. [гайд по миграции](https://getbootstrap.com/docs/5.3/migration/#jumbotron) для деталей.

### BLink

Bootstrap Vue использовал `Vue Router 3`, BootstrapVueNext использует [`Vue Router 4`](https://router.vuejs.org/) пожалуйста, прочитайте [гайд по миграции Vue Router](https://router.vuejs.org/guide/migration/) если вы используете функции маршрутизации `BLink`.

`BLink` больше не подавляет поведение прокрутки к началу по умолчанию при `href='#'`.

#### append

Vue router устарел пропс `append` в `<router-link>`, BootstrapVueNext следует этому и устарел пропс `append` на `BLink`. См. [гайд по миграции Vue Router](https://router.vuejs.org/guide/migration/#Removal-of-append-prop-in-router-link-) для деталей.

#### event

Vue router устарел пропс `event` в `<router-link>`, BootstrapVueNext следует этому и устарел пропс `event` на `BLink`. См. [гайд по миграции Vue Router](https://router.vuejs.org/guide/migration/#Removal-of-event-and-tag-props-in-router-link-) для деталей.

#### exact

Vue router устарел пропс `exact` в `<router-link>`, BootstrapVueNext следует этому и устарел пропсы `exact`, `exact-path`
и `exact-path-active-class` на `BLink`. См. [гайд по миграции Vue Router](https://router.vuejs.org/guide/migration/#Removal-of-the-exact-prop-in-router-link-) для деталей.

#### События $root

BootstrapVueNext больше не испускает событие `bv::link::clicked` на `$root`.

### BListGroup

См. [BLink](#blink) для изменений в поведении ссылок и маршрутизации.

### BMedia

<NotYetImplemented/>

Обратите внимание, что Bootstrap отказался от объекта Media, но его можно воспроизвести с помощью утилитных классов. См. [документацию](https://getbootstrap.com/docs/5.3/utilities/flex/#media-object) для деталей.

### BModal

<NotYetDocumented type="component"/>

См. раздел [v-html](#v-html) по информации об устаревании пропсов `cancel-title-html`, `ok-title-html`, и `title-html`.

#### Замена сообщений в модальном окне

[BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/modal#modal-message-boxes) предоставлял два метода на объекте `this.$bvModal`, которые назывались `msgBoxOk` и `msgBoxConfirm`.
В соответствии с философией Vue3 первого, BootstrapVueNext предоставляет композитабельный вызов [`useModalController`](/docs/composables/useModalController), который заполняет те же потребности (и больше).

Пожалуйста, прочитайте [документацию `useModalController`](/docs/composables/useModalController) и затем вернитесь сюда для примеров замены `msgBoxOk` и `msgBoxConfirm`.

Пример использования `useModalController.show` для замены `msgBoxOk` (Не забудьте включить `<BModalOrchestrator />` в ваш корневой компонент приложения):

<<< DEMO ./demo/ModalMessageBox.vue

Пример использования `useModalController.confirm` для замены `msgBoxConfirm` (Не забудьте включить `<BModalOrchestrator />` в ваш корневой компонент приложения):

<<< DEMO ./demo/ModalConfirm.vue

Объект `props` для `show` и `confirm` принимает все свойства, определенные на
[BModal](/docs/components/modal#component-reference), кроме `modelValue`.

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

#### Замена слоты модального окна

[BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/docs/components/modal#custom-rendering-with-slots) предоставляет разные слоты для настройки некоторых частей компонента модального окна. Эти слоты немного отличаются в [BootstrapVueNext](http://localhost:8000/bootstrap-vue-next/docs/components/modal.html#comp-reference-bmodal-slots):

| BootstrapVue       | BootstrapVueNext |
| ------------------ | ---------------- |
| default            | default          |
| modal-title        | title            |
| modal-header       | header           |
| modal-footer       | footer           |
| modal-ok           | ok               |
| modal-cancel       | cancel           |
| modal-header-close | header-close     |

### BNav

Пропс `align` теперь принимает значения из [`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, и `evenly`.

#### BNavItemDropdown

См. [`BDropdown`](#bdropdown) для деталей

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

### BNavbar

Пропс `type` устарел. Используйте директиву `v-b-color-mode` или композитабельный `useColorMode` вместо этого. См. [документацию](/components/navbar#color-scheme) для деталей.

#### BNavbarNav

Пропс `align` теперь принимает значения из [`AlignmentJustifyContent`](/docs/types/alignment): `start`, `center`, `end`, `between`, `around`, и `evenly`.

### BOffcanvas

<NotYetDocumented type="component"/>

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

### BOverlay

<NotYetDocumented type="component"/>

Пропс `blur` не работает, если определен пропс `bgColor`. Он также не будет работать, если пропс `variant` не равен `white` или `transparent`. Это преодолевает изменение браузера.

### BPagination

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

### BPaginationNav

<NotYetImplemented/>

### BPopover

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

Свойство `content` переименовано в `body` для соответствия другим компонентам.

Пропс `container` устарел. Используйте пропс `teleportTo`, чтобы указать, куда должен монтироваться popover. См. [документацию Vue Teleport](https://vuejs.org/guide/built-ins/teleport.html).

`custom-class` изменен на `body-class`, и добавлен пропс `title-class` для полноты.

`fallback-placement` устарел. Используйте различные варианты, предоставляемые [floating-ui](https://floating-ui.com/), для обработки размещения.

Возможность для пропса `target` принимать функцию устарела.

Триггеры работают по-другому, так как библиотека, которую мы используем для управления popover'ами, изменилась. См.
[нашу документацию](/docs/components/popover#triggers) и [floating-ui](https://floating-ui.com/)
для деталей.

Пропс `variant` устарел. Используйте цвета и утилитные классы Bootstrap для стилизации popover'ов. См. [Пользовательские классы и варианты popover'а](/docs/components/popover#custom-classes-and-variants)
для деталей.

Пропс `disabled` и
[Программное отключение](https://bootstrap-vue.org/docs/components/popover#programmatically-disabling-popover) устарели вместе с событиями `disabled` и `enabled`. Используйте `manual=true`, чтобы отключить автоматическое управление триггером BootstrapVueNext и если ваш код показывает popover, отключите эти механизмы. Если вы считаете, что реализация полной параллели с функциональностью BootstrapVue полезна, пожалуйста, создайте issue или предложите pull request.

`delay` теперь по умолчанию 100ms для показа и 300ms для скрытия, а не 50ms для обоих

По умолчанию для `placement` теперь `top`, а не `right`

События `$root` устарели. См. [usePopoverController](/docs/composables/usePopoverController) как альтернатива.

### BProgressBar

См. раздел [v-html](#v-html) по информации об устаревании пропса `label-html`.

### BSkeleton

Компоненты `<BSkeleton*>` заменены на более подходящие по имени `<BPlaceholder*>` компоненты.

Компонент `<BSkeletonIcon>` устарел вместе с остальной поддержкой иконок BootstrapVue. См. [документацию по иконкам](/docs/icons) для деталей. Эта функциональность может быть воспроизведена с помощью `<BPlaceholderWrapper>` с вашим выбором замены иконки в слоте `loading`.

### BTable

<NotYetDocumented type="component"/>

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

Слот `emptyfiltered` переименован в `empty-filtered` для соответствия.

Следующие устарели:

- Пропсы `filter-debounce`, `fixed`, `no-border-collapse`, `selected-variant`, и `table-footer-sorting`
- Пропс `filter` ещё не поддерживает объект RegEx, только строка.
- События `context-changed` и `refreshed`

`filter-included-fields` заменен на один пропс `filterable`. `filter-ignored-fields` устарел.

`no-sort-reset` устарел. Используйте `must-sort`. По умолчанию сортируемость может быть сброшена нажатием (3) раза [asc => desc => undefined => asc...]

`selected-variant` переименован в `selection-variant` для внутренней согласованности.

`sort-compare` и `sort-direction` устарели, используйте пропс `sortBy` (или модель) согласно [документации](/docs/components/table#sorting) вместо этого.

Аналогично, событие `sort-changed` заменено на событие `update:sortBy`

`table-variant` заменен на `variant` для соответствия.

Слот scope для слота `table-colgroup` теперь содержит только пропс `fields`, с пропсом `columns` удаленным.

BootstrapVue использовал основное v-model связывание для экспозиции доступной только для чтения версии отображаемых элементов. Это устарело. Вместо этого используйте экспонированную функцию `displayedItems`, как показано в [документации](/docs/components/table#complete-example).

Семантика события `row-selected` изменилась. Событие `row-selected` теперь испускается для каждой выбранной строки и отправляет элемент одной строки как его параметр. Существует новое соответствующее событие, называемое `row-unselected`, которое испускается для каждой строки, которая отменяется. Также есть именованная модель `selectedItems`, которая ведет себя как событие BSV `row-selected`, испускающее массив всех выбранных строк. Пример этого доступен в [документации](/docs/components/table#row-select-support)

BootstrapVue добавляет утилитные классы к `<table>`, включая `b-table-select-single`,`b-table-select-multi`, и `b-table-select-range`, эти устарели, так как функциональность должна быть легко воспроизведена разработчиком без добавления к API-интерфейсу.

<NotYetImplemented/>Атрибут `aria-multiselect` не добавляется к `<table>`
<NotYetImplemented/>Автоматическое добавление атрибутов доступности `role` и `scope` к вспомогательным компонентам

Событие `filtered` имеет один аргумент `Items[]` вместо двух аргументов с массивом и длиной. Семантика не изменилась.

<NotYetImplemented/> Доступность заголовка и строки данных

### Items Provider Functions

Чтобы использовать поставщик элементов, установите пропс `provider` в функцию поставщика и оставьте
пропс `items` неопределенным (в отличие от BootstrapVue, где пропс `items` был перегружен). См.
[документацию](/docs/components/table#using-items-provider-functions) для деталей.

Функция поставщика элементов `ctx` теперь содержит массив `sortBy` вместо полей `sortBy` и `sortDesc` -
см. [документацию по сортировке](/docs/components/table#sorting) для деталей

Пропс `api-url` таблицы и поле `apiUrl` параметра `ctx` функции поставщика элементов устарели, так как легко заменяются прямым управлением вызовом API пользователем.

Функция поставщика больше не включает необязательный параметр обратного вызова, используйте асинхронный метод вызова вместо этого.

### Field Definitions

`formatter` Только значение обратного вызова для этого поля реализовано, добавление имени метода в компонент устарело.

`sortKey` и `sortDirection` устарели, используйте модель `sortBy` таблицы согласно [документации](/docs/components/table#sorting) вместо этого.

`filterByFormatted` реализован, но не принимает форматную функцию в качестве аргумента.

### BTableLight

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

Слот scope для слота `table-colgroup` теперь содержит только пропс `fields`, с пропсом `columns` удаленным.

### BTableSimple

Используйте `table-attrs`, чтобы применить дополнительные атрибуты к элементу `<table>` в режиме отзывчивости.

См. раздел [v-html](#v-html) по информации об устаревании пропса `caption-html`.

#### BTBody

<NotYetImplemented>`tbody-transition-props` и `tbody-transition-handlers`</NotYetImplemented>

#### BTFoot

Пропс `foot-variant` заменен на `variant`, который может использоваться на других элементах таблицы.

#### BTHead

Пропс `head-variant` заменен на `variant`, который может использоваться на других элементах таблицы.

### BTabs

Пропс `align` теперь принимает значения из [`AlignmentJustifyContent`](/docs/types#alignment): `start`, `center`, `end`, `between`, `around`, и `evenly`.

Основной `v-model` теперь отражает `id` выбранного тега. Используйте `v-model:index`, чтобы синхронизироваться с
текущим индексом вкладки. См. [программное активацию и деактивацию вкладок](/docs/components/tabs#programmatically-activating-and-deactivating-tabs) для деталей.

Событие `changed` на `BTabs` устарело.

### BTime

<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">См. issue #1860</BLink></NotYetImplemented>

### BToast

<NotYetDocumented type="component"/>

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

### BTooltip

<NotYetDocumented type="component"/>

См. разделы [Показ и скрытие](#показ-и-скрытие) и [Общие свойства](#общие-свойства).

См. раздел [Показ и скрытие](#показ-и-скрытие) для общих свойств.

См. раздел [v-html](#v-html) по информации об устаревании пропса `html`.

Проп `content` переименован в `body` для согласованности с другими компонентами.

## Directives

### Hover

<NotYetImplemented/>

### Modal

<NotYetDocumented type="directive"/>

### Popover

<NotYetDocumented type="directive"/>

### ScrollSpy

<NotYetDocumented type="directive"/>

### Toggle

<NotYetDocumented type="directive"/>

### Tooltip

<NotYetDocumented type="directive"/>

### Visible

<NotYetImplemented />
