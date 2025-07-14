# Директивы

<div class="lead mb-5">

Vue3 поддерживает использование пользовательских директив. Здесь вы найдёте список директив из этого пакета.

</div>

В зависимости от способа установки директивы могут быть автоматически зарегистрированы глобально. Однако если они не импортируются автоматически, их нужно импортировать вручную. Каждая директива экспортируется с префиксом v-. Например, директива `BToggle` импортируется как `vBToggle`. При использовании composition api всё будет работать как ожидается. Если вы используете options api, необходимо вручную убрать префикс v- при регистрации. Подробнее см. в [документации vue](https://vuejs.org/guide/reusability/custom-directives.html#introduction).

<TableOfContentsCard v-for="composable in computedComposablesList" :key="composable.name" class="my-5" :name="composable.name" :description="composable.description" :route="composable.route" />

<script setup lang="ts">
import {withBase} from 'vitepress'
import {computed} from 'vue'
import TableOfContentsCard from '../components/TableOfContentsCard.vue'

const routeLocation = (name: string): string => withBase(`/docs/directives/${name}`).trim()

const composablesList: {name: string; description: string}[] = [
  {
    name: 'BColorMode',
    description: 'Директива BColorMode даёт схожий результат с утилитой useColorMode, но предоставляет более низкоуровневый доступ, чем композабл',
  },
  {
    name: 'BModal',
    description: 'Аналогично директиве BToggle, директива BModal используется для управления состоянием модального окна через директиву',
  },
  {
    name: 'BPopover',
    description: 'Добавляйте popover к любому элементу на сайте, используя стили и анимации Bootstrap v4',
  },
  {
    name: 'BToggle',
    description: 'Лёгкая директива для переключения видимости collapse и боковых панелей по ID. Автоматически управляет атрибутами доступности на элементе-триггере',
  },
  {
    name: 'BTooltip',
    description: 'Добавляйте пользовательские tooltip к любому элементу. Tooltip могут появляться при наведении, фокусе или клике по элементу',
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
