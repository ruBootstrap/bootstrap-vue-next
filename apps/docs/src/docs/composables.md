# Composables — Оглавление

<div class="lead mb-5">

BootstrapVueNext предоставляет несколько пользовательских композаблов, которые интегрируются с различными компонентами.

</div>

<TableOfContentsCard v-for="composable in computedComposablesList" :key="composable.name" class="my-3" :name="composable.name" :description="composable.description" :route="composable.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/composables/${name}`).trim()

const composablesList: {name: string; description: string}[] = [
  {
    name: 'useBreadcrumb',
    description: 'Глобальная система хлебных крошек для использования с компонентом BBreadcrumb'
  },
  {
    name: 'useColorMode',
    description: 'Реактивная смена цветовой схемы: светлая/тёмная или другие режимы. Светлая и тёмная темы включены по умолчанию, но вы можете создать свои, ознакомившись с документацией Bootstrap v5 (Color Modes)'
  },
  {
    name: 'useModal',
    description: 'Удобное программное скрытие или показ модальных окон из любого места приложения',
  },
  {
    name: 'useModalController',
    description: 'Создавайте или скрывайте модальные окна из любого места приложения, либо закрывайте все модальные окна с помощью этого утилитарного композабла',
  },
  {
    name: 'useToastController',
    description: 'Организуйте систему push-уведомлений, показывая или скрывая Toast-уведомления с помощью нашей системы useToastController',
  },
    {
      name: 'useToggle',
      description: 'Удобное программное отображение, скрытие или переключение компонентов из любого места приложения',
    },
  {
    name: 'usePopoverController',
    description: 'Управляйте popover и tooltip в вашем приложении, позволяя легко отображать всплывающие элементы',
  }
]

const computedComposablesList = computed(() =>
  composablesList
    .map((el) => ({
      name: el.name,
      description: el.description,
      route: routeLocation(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)
</script>
