<template>
  <BContainer class="lead mb-5">
    <BRow>
      <BCol> <slot /> </BCol
    ></BRow>
    <BRow v-if="withPageHeader">
      <BCol>
        <ViewSourceButton :href="href"> Редактировать эту страницу на GitHub </ViewSourceButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {useEditThisPageOnGithub} from '../composables/useEditLink'
import ViewSourceButton from './ViewSourceButton.vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: Record<string, never>) => any
}>()

withDefaults(
  defineProps<{
    withPageHeader?: boolean
  }>(),
  {
    withPageHeader: true,
  }
)

const href = useEditThisPageOnGithub()
</script>
