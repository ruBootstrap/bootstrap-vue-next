# Поддержка ссылок роутера

<div class="lead mb-5">

Ряд компонентов BootstrapVue поддерживают рендеринг компонентов `RouterLink`, совместимых с Vue Router и Nuxt.js. Для получения дополнительной информации смотрите официальную [документацию Vue Router](https://router.vuejs.org) и официальную [документацию Nuxt.js](https://nuxt.com/docs/api/components/nuxt-link#props).

</div>

## Общие свойства ссылок роутера

В следующих разделах мы используем компонент `BLink` для рендеринга ссылок роутера. `BLink` — строительный блок большинства интерактивных компонентов BootstrapVue. Вы также можете использовать любой другой компонент, поддерживающий генерацию ссылок, такой как `BLink`, `BButton`, `BAvatar`, `BBreadcrumbItem`, `BListGroupItem`, `BNavItem`, `BDropdownItem` и `BPaginationNav`. Обратите внимание, что не все свойства доступны во всех компонентах. Подробности смотрите в документации соответствующего компонента.

### `to`

- тип: `string | Location`
- обязательно для генерации `RouterLink`

Указывает целевой маршрут ссылки. При клике значение свойства `to` будет передано во внутренний `router.push()`, поэтому оно может быть как строкой, так и объектом-описателем маршрута.

<HighlightCard>

```vue
<!-- Буквальная строка -->
<BLink to="home">Главная</BLink>

<!-- Рендерится как -->
<a href="home">Главная</a>

<!-- JavaScript-выражение с использованием `v-bind` -->
<BLink v-bind:to="'home'">Главная</BLink>

<!-- Можно опустить `v-bind`, как и при привязке любого другого свойства -->
<BLink :to="'home'">Главная</BLink>

<!-- То же самое -->
<BLink :to="{path: 'home'}">Главная</BLink>

<!-- Именованный маршрут -->
<BLink :to="{name: 'user', params: {userId: 123}}">Пользователь</BLink>

<!-- С query, результат — `/register?plan=private` -->
<BLink :to="{path: 'register', query: {plan: 'private'}}">Регистрация</BLink>

<!-- Рендер обычной ссылки без роутера, если не указать `to`, а задать `href` -->
<BLink href="/home">Главная</BLink>
```

</HighlightCard>

### `replace`

- тип: `boolean`
- по умолчанию: `false`

Если указать свойство replace, при клике будет вызван `router.replace()` вместо `router.push()`, и переход не попадёт в историю браузера.

<HighlightCard>

```vue
<BLink :to="{path: '/abc'}" replace />
```

</HighlightCard>

### `router-tag`

- тип: `string`
- по умолчанию: 'a'

Иногда требуется, чтобы `RouterLink` рендерился как другой тег, например `<li>`. Для этого используйте свойство `router-tag`, чтобы указать нужный тег, и он всё равно будет реагировать на клики для навигации. `router-tag` преобразуется в свойство `tag` у итогового компонента `RouterLink`.

<HighlightCard>

```vue
<BLink to="/foo" router-tag="li">foo</BLink>

<!-- Рендерится как -->
<li>foo</li>
```

</HighlightCard>

<BAlert variant="info" :model-value="true" class="my-5">

Примечание: Изменять тег на что-либо, кроме `<a>`, не рекомендуется, так как это ухудшает доступность для пользователей клавиатуры и/или экранных читалок, а также негативно влияет на SEO.

</BAlert>

### `active-class`

- тип: `string`
- по умолчанию: `router-link-active` (`nuxt-link-active` при использовании Nuxt.js)

Настраивает CSS-класс, применяемый к активной ссылке. Значение по умолчанию также можно задать глобально через опцию конструктора роутера `linkActiveClass` ([документация](https://router.vuejs.org/api/#linkactiveclass)).

В компонентах, поддерживающих ссылки роутера (имеют свойство `to`), рекомендуется установить это свойство в значение `active` (или строку, содержащую 'active'), чтобы применять стили Bootstrap для активных элементов при совпадении текущего маршрута со значением `to`.

### `exact`

- тип: `boolean`
- по умолчанию: `false`

По умолчанию активный класс применяется при частичном совпадении маршрута. Например, `<BLink to="/a">` получит этот класс, если текущий путь начинается с `/a/` или равен `/a`.

Следствием этого является то, что `<BLink to="/">` будет активен на всех маршрутах! Чтобы включить режим "точного совпадения", используйте свойство `exact`:

<HighlightCard>

```vue
<!-- Эта ссылка будет активна только на `/` -->
<BLink to="/" exact />
```

</HighlightCard>

### `exact-active-class`

- тип: `string`
- по умолчанию: `router-link-exact-active` (`nuxt-link-exact-active` при использовании Nuxt.js)
- доступно с Vue Router 2.5.0+

Настраивает CSS-класс, применяемый к ссылке при точном совпадении маршрута. Значение по умолчанию также можно задать глобально через опцию конструктора роутера `linkExactActiveClass` ([документация](https://router.vuejs.org/api/#linkexactactiveclass)).

В компонентах, поддерживающих ссылки роутера (имеют свойство `to`), рекомендуется установить это свойство в значение `active` (или строку, содержащую `active`), чтобы применять стили Bootstrap для активных элементов при совпадении текущего маршрута со значением `to`.

### `exact-path`

- тип: `boolean`
- по умолчанию: `false`
- доступно с Vue Router 3.5.0+

Позволяет сравнивать только часть пути URL, игнорируя параметры `query` и `hash`.

<HighlightCard>

```vue
<!-- Эта ссылка также будет активна на `/search?page=2` или `/search#filters` -->
<RouterLink to="/search" exact-path> </RouterLink>
```

</HighlightCard>

### `exact-path-active-class`

- тип: `string`
- по умолчанию: `router-link-exact-path-active`
- доступно с Vue Router 2.5.0+

Настраивает CSS-класс, применяемый к ссылке при точном совпадении пути. Значение по умолчанию также можно задать глобально через опцию конструктора роутера `linkExactActiveClass` ([документация](https://router.vuejs.org/api/#linkexactactiveclass)).

В компонентах, поддерживающих ссылки роутера (имеют свойство `to`), рекомендуется установить это свойство в значение `active` (или строку, содержащую `active`), чтобы применять стили Bootstrap для активных элементов при совпадении текущего маршрута со значением `to`.

## Специфичные для Nuxt.js свойства ссылок роутера

<NotYetImplemented/>

Когда BootstrapVue определяет, что ваше приложение работает под управлением [Nuxt.js](https://nuxt.com), он будет рендерить подкомпонент [`NuxtLink`](https://nuxt.com/docs/api/components/nuxt-link#nuxtlink) вместо `RouterLink`. `NuxtLink` поддерживает все вышеописанные свойства, а также следующие специфичные для Nuxt.js:

### `prefetch`

- тип: `boolean`
- по умолчанию: `null`
- доступно с Nuxt.js 3+

Для повышения отзывчивости Nuxt.js-приложений, когда ссылка появляется во viewport, Nuxt.js автоматически предварительно загружает разделённую по коду страницу. Установка `prefetch` в `true` или `false` переопределяет значение по умолчанию, заданное в `router.prefetchLinks` в файле конфигурации `nuxt.config.js`.

### `no-prefetch`

- тип: `boolean`
- по умолчанию: `true`
- доступно с Nuxt.js 3+

Для повышения отзывчивости Nuxt.js-приложений, когда ссылка появляется во viewport, Nuxt.js автоматически предварительно загружает разделённую по коду страницу. Установка `no-prefetch` отключает эту функцию для конкретной ссылки.

<HighlightCard>

```vue
router: { prefetchLinks: false }
```

</HighlightCard>

<script setup lang="ts">
import HighlightCard from '../../components/HighlightCard.vue'

import NotYetImplemented from '../../components/NotYetImplemented.vue'
import {BAlert} from 'bootstrap-vue-next'
</script>
