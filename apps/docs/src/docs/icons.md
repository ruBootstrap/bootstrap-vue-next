# Иконки

<BAlert variant="danger" :model-value="true" class="my-5">

Компоненты иконок из BootstrapVue устарели. При переходе на BootstrapVueNext компоненты иконок не поддерживаются, так как существуют более современные решения для интеграции иконок в ваше приложение. Ознакомьтесь с рекомендациями BootstrapVueNext по использованию Bootstrap-icons! Эта документация служит только справкой, BootstrapVueNext не связан с упомянутыми библиотеками, и часть информации может быть устаревшей.

</BAlert>

## [Unplugin Icons](https://github.com/antfu/unplugin-icons)

> В этом разделе вы узнаете, как подключить [unplugin-icons](https://github.com/antfu/unplugin-icons) в ваше приложение. unplugin-icons позволяет использовать иконки из множества наборов, таких как [Bootstrap Icons](https://icon-sets.iconify.design/bi/), [Material Design Icons](https://icon-sets.iconify.design/mdi/), [Font Awesome 4](https://icon-sets.iconify.design/fa/) и многих других, с автоматическим tree-shaking!

### Установка

Для настройки unplugin-icons вы можете ознакомиться с их [документацией](https://github.com/antfu/unplugin-icons) или воспользоваться краткой инструкцией ниже.

#### Предпочтительная установка

Рекомендуемый способ использует [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components), что соответствует [рекомендованной установке](../docs#install) для нашего основного пакета.

Для начала установите необходимые пакеты:

<ClientOnly>
<BTabs v-model="codePreference" class="mb-3">
  <BTab title="PNPM">

  <BCard class="bg-body-tertiary">

```bash
pnpm add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </BCard>

  </BTab>
  <BTab title="BUN">

  <BCard class="bg-body-tertiary">

```bash
bun add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </BCard>

  </BTab>
  <BTab title="YARN">

  <BCard class="bg-body-tertiary">

```bash
yarn add unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </BCard>

  </BTab>
  <BTab title="NPM">

  <BCard class="bg-body-tertiary">

```bash
npm i unplugin-icons unplugin-vue-components @vue/compiler-sfc -D
```

  </BCard>

  </BTab>
</BTabs>
</ClientOnly>

<BCard class="bg-body-tertiary">

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolve from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolve()],
      dts: true,
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
})
```

</BCard>

С `autoInstall: true` любая иконка, используемая в вашем приложении, будет автоматически импортироваться и добавляться в зависимости! Ручной импорт не требуется!

Если вы используете TypeScript, добавьте `unplugin-icons/types/vue` в массив `compilerOptions.types`. Также убедитесь, что файл `components.d.ts` включён в массив `include`:

<BCard class="bg-body-tertiary">

```json
// tsconfig.json
{
  "include": ["components.d.ts"],
  "compilerOptions": {
    "types": ["unplugin-icons/types/vue"]
  }
}
```

</BCard>

Чтобы добавить иконку, используйте формат `i-{collection}-{icon-name}` в шаблоне, где collection — id на <https://icon-sets.iconify.design/>. Например, чтобы добавить `0-circle`, используйте компонент `IBi0Circle`, импорт не требуется. Можно использовать любую иконку из любого набора.

<BCard class="bg-body-tertiary">

```vue-html
<IBi0Circle />
<IBiActivity color="red" />
<!-- Можно использовать любой набор иконок, импорт не требуется -->
<IMdiAccountBox />
<!-- fa -->
<IFaAngellist />
```

</BCard>

См. документацию [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) для дополнительных возможностей, например, [Глобальная трансформация иконок](https://github.com/antfu/unplugin-icons#global-custom-icon-transformation) и другой информации.

#### Базовая установка

Можно сделать установку проще. Для этого вручную импортируйте только набор bootstrap-icons, отключите автоимпорт и не используйте unplugin-vue-components. Обратите внимание, что предпочтительная установка автоматически делает tree-shaking всех компонентов, но оба способа дадут одинаковый размер итогового бандла.

<ClientOnly>
<BTabs v-model="codePreference" class="mb-3">
  <BTab title="PNPM">

  <BCard class="bg-body-tertiary">

```bash
pnpm add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </BCard>

  </BTab>
  <BTab title="BUN">

  <BCard class="bg-body-tertiary">

```bash
bun add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </BCard>

  </BTab>
  <BTab title="YARN">

  <BCard class="bg-body-tertiary">

```bash
yarn add unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </BCard>

  </BTab>
  <BTab title="NPM">

  <BCard class="bg-body-tertiary">

```bash
npm i unplugin-icons @vue/compiler-sfc @iconify-json/bi -D
```

  </BCard>

  </BTab>
</BTabs>
</ClientOnly>

<BCard class="bg-body-tertiary">

```ts
// vite.config.js/ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
    }),
  ],
})
```

</BCard>

При таком способе установки нужно вручную импортировать каждую иконку:

<BCard class="bg-body-tertiary">

```vue
<template>
  <IBi0Circle />
  <IBiActivity color="red" />
  <!-- Нельзя использовать, не является зависимостью -->
  <!-- <IMdiAccountBox /> -->
  <!-- fa -->
  <!-- <IFaAngellist /> -->
</template>

<script setup lang="ts">
import IBi0Circle from '~icons/bi/0-circle'
import IBiActivity from '~icons/bi/activity'
// import IMdiAccountBox from '~icons/mdi/account-box'
// import IFaAngellist from '~icons/mdi/angellist'
</script>
```

</BCard>

<script setup lang="ts">
import {BCard, BCardBody, BTab, BTabs, BAlert} from 'bootstrap-vue-next'
import {useLocalStorage} from '@vueuse/core'

const codePreference = useLocalStorage('code-group-preference', 0)
</script>
