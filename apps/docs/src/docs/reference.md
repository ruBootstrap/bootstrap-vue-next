# Справочник — Оглавление

<div class="lead mb-5">

Справочник по BootstrapVueNext и Bootstrap, а также дополнительная документация и ресурсы.

</div>

<TableOfContentsCard v-for="component in computedComponentsList" :key="component.name" class="my-3" :name="component.name" :description="component.description" :route="component.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/reference/${name.toLowerCase()}`).trim().replaceAll(/\s+/g, '-')

const componentList: {name: string; description: string}[] = [
  {
    name: 'Accessibility',
    description:
      `Краткий обзор возможностей и ограничений BootstrapVueNext для создания доступного контента`,
  },
  {
    name: 'Color Variants',
    description:
      'Цветовые варианты, доступные при использовании стандартного CSS Bootstrap v5, и их соответствие CSS-классам',
  },
  {
    name: 'Contributing',
    description:
      'Информация о том, как внести вклад в проект BootstrapVueNext',
  },
  {
    name: 'Images',
    description:
      'Информация о добавлении изображений в ваши компоненты',
  },
  {
    name: 'Router Links',
    description: 'Ряд компонентов BootstrapVueNext поддерживают рендеринг компонентов `RouterLink`, совместимых с Vue Router и Nuxt.js',
  },
  {
    name: 'Settings',
    description: 'BootstrapVue предоставляет несколько опций для настройки значений компонентов по умолчанию и других параметров',
  },
  {
    name: 'Size props and classes',
    description: 'CSS Bootstrap v5 предоставляет несколько классов для управления размерами элементов, часть из которых реализована как пропсы компонентов',
  },
  {
    name: 'Spacing classes',
    description: `CSS Bootstrap v5 включает широкий набор сокращённых адаптивных классов для управления отступами и внутренними отступами элементов`,
  },
  {
    name: 'Starter Templates',
    description:
      'Существует несколько способов создать приложение: от базового HTML до использования сборщиков и компиляторов',
  },
  {
    name: 'Theming Bootstrap',
    description:
      `Темизация осуществляется с помощью SASS-переменных, SASS-карт и пользовательского CSS. Отдельного файла темы нет; вместо этого можно включить встроенную тему для добавления градиентов, теней и других эффектов.`,
  },
  {
    name: 'Third party libraries',
    description:
      'Существует несколько сторонних библиотек, которые можно использовать для расширения функциональности и возможностей вашего проекта на BootstrapVue',
  },
  {
    name: 'Utility Classes',
    description:
      'CSS Bootstrap v5 предоставляет различные утилитарные классы для управления цветом, отступами, flex-box, выравниванием текста, float, позиционированием, адаптивным отображением/скрытием и многим другим',
  },
  {
    name: 'Form Validation',
    description:
      'BootstrapVueNext не включает валидацию форм по умолчанию; мы оставляем это на усмотрение существующих плагинов. Здесь приведены примеры плагинов валидации и способы их интеграции',
  },
]

const computedComponentsList = computed(() =>
  componentList
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
