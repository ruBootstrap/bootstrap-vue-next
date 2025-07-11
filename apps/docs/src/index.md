# Введение

<div class="lead mb-5">

С BootstrapVueNext вы можете создавать быстрые, адаптивные и доступные для ARIA проекты в интернете, используя Vue.js и Bootstrap v5.

</div>

<BRow>
  <BCol class="text-center" cols="12" sm="6">
    <BLink class="card-link" href="https://getbootstrap.com" target="_blank" rel="noopener">
      <BCard class="p-3">
        <BootstrapIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Bootstrap v5 - это самая популярная в мире платформа для создания адаптивных сайтов с приоритетом на мобильные устройства.
        </BCardText>
      </BCard>
    </BLink>
  </BCol>
  <BCol class="text-center">
    <BLink class="card-link" href="https://vuejs.org" target="_blank" rel="noopener">
      <BCard class="p-3">
        <VueIcon aria-hidden class="icon-lg" />
        <BCardText class="mt-4">
          Vue.js (произносится как /vjuː/, как view) - это прогрессивная платформа для создания пользовательских интерфейсов.
        </BCardText>
      </BCard>
    </BLink>
  </BCol>
</BRow>

<p class="mb-2 d-flex small">Текущая версия:</p>
<a href="https://www.npmjs.com/package/bootstrap-vue-next" target="_blank" rel="noopener">
  <img src="https://flat.badgen.net/npm/v/bootstrap-vue-next" alt="Текущая версия">
</a>

## Обзор

Более чем с 35 компонентами, несколькими директивами и композаблами (и растущим количеством), BootstrapVueNext предоставляет одну из самых полных реализаций системы компонентов и сетки Bootstrap v5, доступных для Vue.js v3 / Nuxt.js 3, с обширной и автоматизированной разметкой доступности WAI-ARIA.

<div class="d-flex gap-2 mt-4">
  <BButton :to="withBase('/docs')" variant="primary">Начать</BButton>
  <BButton :href="globalData.githubUrl" target="_blank" rel="noopener" variant="outline-secondary">GitHub</BButton>
</div>

## Интеграция с Nuxt.js

Легко интегрируйте BootstrapVueNext в ваши проекты Nuxt.js, используя наш встроенный модуль Nuxt.js. Вы можете опционально указать только те компоненты, директивы и/или плагины, которые вам требуются.

<BButton variant="secondary" :to="withBase('/docs#installation-nuxt-js-3')" class="my-3">Модуль BootstrapVueNext для Nuxt.js</BButton>

## Наш OpenCollective

<OpenCollectiveMemberDisplay />

<script setup lang="ts">
import {
  BButton,
  BCol,
  BCard,
  BCardText,
  BLink,
  BBadge,
  BRow,
} from 'bootstrap-vue-next'
import {inject} from 'vue'
import {withBase} from 'vitepress'
import BootstrapIcon from '~icons/logos/bootstrap'
import VueIcon from '~icons/logos/vue'
import {appInfoKey} from '../.vitepress/theme/keys'
import OpenCollectiveMemberDisplay from './components/OpenCollectiveMemberDisplay.vue'

const globalData = inject(appInfoKey, {
  discordUrl: '',
  githubUrl: '',
  githubPackageDirectory: '',
  githubComponentsDirectory: '',
  githubComposablesDirectory: '',
  githubMainBranch: '',
  githubDirectivesDirectory: '',
  opencollectiveUrl: '',
  githubDocsDirectory: '',
})
</script>
