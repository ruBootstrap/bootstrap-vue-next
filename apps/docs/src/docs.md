# Введение

<div class="lead">

Начните работу с BootstrapVueNext и Bootstrap `v5`, самой популярной в мире платформой для создания адаптивных сайтов с приоритетом на мобильные устройства.

</div>

## Почему BootstrapVueNext?

BootstrapVueNext - это попытка перенести компоненты [BootstrapVue](https://bootstrap-vue.github.io/bootstrap-vue/) в Vue3, Bootstrap 5 и TypeScript. Другая цель - написать компоненты простым и читаемым способом для лучшего опыта разработчика.

## Миграция с BootstrapVue

Если вы мигрируете с BootstrapVue, обратитесь к нашему [руководству по миграции](/docs/migration-guide)

## Вклад и поддержка 🙌

Этот проект находится на **поздних стадиях альфа-версии**. Хотя большинство функций работают как ожидается, вы все еще можете столкнуться с некоторыми проблемами. Ваш вклад на этом этапе может быть особенно значимым в формировании финального продукта. Если вы заинтересованы в участии, вот как вы можете помочь:

- отправить [issue](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues)
- или лучше, [pull request](https://github.com/bootstrap-vue-next/bootstrap-vue-next/pulls)

Прочитайте наш [Руководство по участию](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md) о том, как начать помогать.

## Установка

### Установка - Vue.js

- Сначала установите пакет

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i bootstrap bootstrap-vue-next
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

<HighlightCard>

```typescript
// main.js/ts
import {createApp} from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'

// Добавьте необходимый CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap()) // Важно
app.mount('#app')
```

</HighlightCard>

Теперь вы можете начать импортировать и использовать компоненты

#### Автоматическая регистрация компонентов

Для автоматической регистрации компонентов **и** tree-shaking, мы рекомендуем [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). Прочитайте их документацию для дополнительных деталей. Это в дополнение к вышеуказанным шагам установки. Мы предоставляем резолвер

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i unplugin-vue-components -D
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

Следующий пример показывает базовую `vite.config.js/ts`. Все, что вам нужно сделать, это добавить **Components** в опцию **plugins** Vite с дополнительными импортами:

<HighlightCard>

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
})
```

</HighlightCard>

<NoteAlert>
Импорт резолвера из `bootstrap-vue-next`, а не из `unplugin-vue-components`
</NoteAlert>

##### Алиасинг

С `BootstrapVueNextResolver` у нас также есть опция для создания алиасов компонентов, например:

```ts
import {Components} from 'unplugin-vue-components'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

Components({
  resolvers: [
    BootstrapVueNextResolver({
      aliases: {
        BInput: 'BFormInput',
      },
    }),
  ],
})
```

### Установка - Nuxt.js 3

В вашем приложении Nuxt3 установите необходимые пакеты для `bootstrap-vue-next`.

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i bootstrap bootstrap-vue-next @bootstrap-vue-next/nuxt -D
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

Откройте файл `nuxt.config.js/ts` и настройте ваше приложение для использования `bootstrap-vue-next`. Компоненты будут импортироваться автоматически по мере необходимости.

<HighlightCard>

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
})
```

</HighlightCard>

Наслаждайтесь в вашем приложении без ручных импортов и с автоматическим tree-shaking.

<HighlightCard>

```vue
<template>
  <div>
    <BButton variant="primary" @click="show = !show">Нажми меня</BButton>
    <BModal v-model="show">Тест</BModal>
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
</script>
```

</HighlightCard>

Вы можете настроить опции с помощью ключа bootstrapVueNext в вашем nuxt.config.

<HighlightCard>

```ts
// nuxt.config.js/ts
export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  bootstrapVueNext: {
    composables: true, // Включит все композаблы
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Включит только useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Включит все, кроме useBreadcrumb & useColorMode
    directives: {all: true}, // Включит все директивы
    css: true, // Включит CSS модуля. Если установлено false, вы можете добавить CSS вручную в свойстве 'css' ниже
  },
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css' // Не обязательно, если `css: true`
  ],
})
```

</HighlightCard>

Это в основном для целей разрешения конфликтов имен с другими импортами. Это не должно влиять на tree-shaking

### Установка - TypeScript

Этот пакет использует опциональные peer dependencies для генерации определений типов для расширенной функциональности. Эти зависимости не устанавливаются по умолчанию, чтобы избежать ненужного раздувания в проектах, которые не требуют этих функций. Однако, если вы хотите полную поддержку типов, вам нужно вручную установить требуемые пакеты.

<ClientOnly>
<BTabs v-model="codePreference">
  <BTab title="PNPM">

  <HighlightCard>

```bash
pnpm add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="BUN">

  <HighlightCard>

```bash
bun add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="YARN">

  <HighlightCard>

```bash
yarn add -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
  <BTab title="NPM">

  <HighlightCard>

```bash
npm i -D @floating-ui/vue @vueuse/core vue-router
```

  </HighlightCard>

  </BTab>
</BTabs>
</ClientOnly>

### Установка - CDN

BootstrapVueNext доступен через `jsdelivr`. Вы можете добавить пакет, используя следующее

<HighlightCard>

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/dist/bootstrap-vue-next.umd.min.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/dist/bootstrap-vue-next.min.css"
  rel="stylesheet"
/>
```

</HighlightCard>

- **ПРИМЕЧАНИЕ** Не забудьте установить версию!

<NoteAlert>
Ссылки должны загружаться после Bootstrap и Vue
</NoteAlert>

Альтернативно, ESM пакет также доступен

<HighlightCard>

```html
<script type="module">
  import bootstrapVueNext from 'https://cdn.jsdelivr.net/npm/bootstrap-vue-next@{{version}}/+esm'
</script>
```

</HighlightCard>

## Tree-shaking

Если вас беспокоит размер вашего приложения, вы должны использовать
[tree-shaking](https://vuejs.org/guide/best-practices/performance#bundle-size-and-tree-shaking).
Ниже приведены некоторые указания по оптимизации tree-shaking в контексте BootstrapVueNext.

### Tree-shake CSS

Если вы используете один из предпочтительных методов установки, JS будет tree-shaken по умолчанию. Единственное, что мы не можем сделать автоматически, это оптимизировать CSS. Методы типа PurgeCSS не идеальны из-за ограничения с динамической природой рендеринга классов и Vue (Проблемный код типа: `[btn-${props.variant}]: props.variant !== undefined`). С учетом сказанного, BootstrapVueNext не обрабатывает CSS импорты из Bootstrap, мы только добавляем некоторый дополнительный CSS сами. Поэтому использование метода типа [Lean Sass Imports](https://getbootstrap.com/docs/5.3/customize/optimize/#lean-sass-imports) из документации Bootstrap, вероятно, лучший способ достичь минимально возможного размера приложения. Хотя это не автоматически, это должно оказаться самым безопасным вариантом для минимизации вашего приложения.

### Tree-shake JS плагины

`createBootstrap` - это простая утилита, которая предоставляет все, что необходимо для работы библиотеки. Однако некоторые плагины могут не понадобиться.
Можно индивидуально импортировать каждый нужный плагин, они все имеют суффикс `Plugin` (`toastPlugin`, `breadcrumbPlugin`, и т.д.). Таким образом, можно выбирать то, что нужно
Практически плагин `createBootstrap` составляет ~20kb сжатый с `toast` и `modalController`, составляющими большинство. Используйте это, если вы действительно хотите минимально возможный размер.

<BootstrapPluginWarning />

### Экспортированные методы и tree-shaking

Для правильной типизации экспортированных методов вам нужно явно импортировать их из BootstrapVueNext. При этом
импортируйте компонент (не только тип) и используйте полный путь для улучшения tree-shaking.

<HighlightCard>

```vue
<script setup lang="ts">
import {BTab} from 'bootstrap-vue-next/components/BTabs'
</script>
```

</HighlightCard>

## Сравнение с BootstrapVue

BootstrapVue - это родительский проект, на котором основан этот проект. Мы считаем BootstrapVue лучшей реализацией Bootstrap `v4`. Мы стремимся к полному списку совместимости с BootstrapVue. Однако из-за природы переписывания некоторые функции могут отсутствовать или измениться. Если кто-то заметил отсутствующую функцию совместимости, мы просим вас отправить GitHub issue или внести вклад в [отчет о совместимости](https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity).

Если вы мигрируете с BootstrapVue, обратитесь к нашему [руководству по миграции](/docs/migration-guide)

<script lang="ts">
import {useLocalStorage} from '@vueuse/core'

const codePreference = useLocalStorage('code-group-preference', 0)

export default {
  setup() {
    return {codePreference}
  }
}
</script>
