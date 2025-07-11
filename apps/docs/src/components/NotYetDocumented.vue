<template>
  <p>
    <span v-if="!helpOnly">
      Этот {{ type }} либо не задокументирован, либо не прошёл полный паритетный обзор. Пожалуйста,
      используйте с осторожностью и обращайтесь к коду для поиска различий в поведении. Мы работаем
      над тем, чтобы руководство по миграции и документация были актуальны относительно кода.
    </span>
    Если вы хотите помочь, пожалуйста, ознакомьтесь с разделами
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#improving-the-documentation"
    >
      улучшение документации</a
    >
    и
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#help-verify-bootstrapvue-and-bootstrap-v5-parity"
      >помощь в проверке паритета</a
    >
    в нашем
    <a
      href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/blob/main/CONTRIBUTING.md#developing"
      >руководстве по вкладу.<slot
    /></a>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  type?: string
  helpOnly?: boolean
}>()
</script>
